import { NextResponse } from "next/server";
import { getCeipalJobId } from "@/lib/jobs";
import { submitApplication } from "@/lib/ceipal";

// Needs the Node runtime (Buffer / Ceipal SDK usage), never statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXT = ["pdf", "doc", "docx", "rtf", "txt"];

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return bad("Invalid form submission.");
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const slug = String(form.get("slug") ?? "").trim();
  const resume = form.get("resume");

  if (!name || !email || !phone || !slug) {
    return bad("Please fill in your name, email, phone, and role.");
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return bad("Please enter a valid email address.");
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return bad("Please attach your resume.");
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return bad("Resume must be under 5 MB.");
  }
  const ext = resume.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXT.includes(ext)) {
    return bad("Resume must be a PDF, DOC, DOCX, RTF, or TXT file.");
  }

  const jobId = await getCeipalJobId(slug);
  if (!jobId) {
    return bad("This role is no longer available.", 404);
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || firstName;

  try {
    const data = await resume.arrayBuffer();
    const result = await submitApplication({
      jobId,
      firstName,
      lastName,
      email,
      phone,
      resume: {
        data,
        filename: resume.name,
        type: resume.type || "application/octet-stream",
      },
    });

    if (!result.ok) {
      // Log the raw Ceipal reason; show applicants a friendly fallback that
      // points them at the Ceipal apply link (which always works).
      console.error("[api/apply] Ceipal rejected:", result.status, result.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We couldn't submit your quick application right now. Please use “Apply on Ceipal” to complete your application for this role.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: true, message: result.message, submissionId: result.submissionId },
      { status: 200 },
    );
  } catch (err) {
    console.error("[api/apply] submit failed:", err);
    return bad("Something went wrong submitting your application. Please try again.", 500);
  }
}

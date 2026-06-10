"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PEOPLE = {
  contingent: { src: "/people/talent-sat1.png", alt: "Contingent talent", pos: "center 18%" },
  alumni: { src: "/people/talent-sat3.png", alt: "Alumni talent", pos: "center 22%" },
  contract: { src: "/people/talent-sat2.png", alt: "Contract talent", pos: "center 20%" },
  external: { src: "/people/talent-sat3.png", alt: "External talent", pos: "center 22%" },
  workforce: { src: "/people/talent-center.png", alt: "Senior IT professional", pos: "center 28%" },
};

export function HeroOrbit() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const wrap = wrapRef.current;
    if (!stage || !wrap) return;

    const fit = () => {
      const maxHByVh = window.innerHeight * 0.82;
      const sW = Math.min(1, wrap.clientWidth / 740);
      const sH = Math.min(1, maxHByVh / 630);
      const s = Math.min(sW, sH);
      stage.style.transform = `scale(${s})`;
      stage.style.transformOrigin = "top center";
      stage.style.marginLeft = `${(wrap.clientWidth - 740 * s) / 2}px`;
      wrap.style.height = `${630 * s}px`;
    };
    window.addEventListener("resize", fit);
    fit();

    const raf = requestAnimationFrame(() => stage.classList.add("is-loaded"));

    const groups: Record<string, HTMLElement[]> = {};
    stage.querySelectorAll<HTMLElement>("[data-pair]").forEach((el) => {
      const k = el.getAttribute("data-pair") as string;
      (groups[k] = groups[k] || []).push(el);
      el.style.cursor = "pointer";
    });
    const setActive = (k: string, on: boolean) =>
      (groups[k] || []).forEach((m) => m.classList.toggle("is-active", on));
    const clearAll = () =>
      Object.keys(groups).forEach((k) => setActive(k, false));

    const cleanups: Array<() => void> = [];
    Object.keys(groups).forEach((k) => {
      groups[k].forEach((el) => {
        const onEnter = () => setActive(k, true);
        const onLeave = () => setActive(k, false);
        const onClick = () => {
          const wasOn = el.classList.contains("is-active");
          clearAll();
          setActive(k, !wasOn);
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        el.addEventListener("click", onClick);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          el.removeEventListener("click", onClick);
        });
      });
    });

    const onStageClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-pair]")) clearAll();
    };
    stage.addEventListener("click", onStageClick);

    return () => {
      window.removeEventListener("resize", fit);
      cancelAnimationFrame(raf);
      stage.removeEventListener("click", onStageClick);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div ref={wrapRef} className="orbit-wrap">
      <style>{`
        :root, .orbit-wrap {
          --navy:    #0D1B2A;
          --navy-2:  #16293f;
          --cyan:    #00C2FF;
          --white:   #F4F7FA;
          --steel:   #5A6478;
          --red:     #D94F3D;
          --green:   #3DDC84;
          --orange:  #FF6B2B;
        }

        .orbit-wrap{ position:relative; width:100%; max-width:740px; margin:0 auto; }
        .orbit-stage{ position:relative; width:740px; height:630px; transform-origin:top left; }

        .anim{
          opacity:0; transform:scale(.82);
          transition:opacity .7s ease, transform .7s cubic-bezier(.2,.8,.25,1);
          transition-delay:var(--d, 0s);
        }
        .is-loaded .anim{ opacity:1; transform:scale(1); }

        .rings{ position:absolute; inset:-60px; pointer-events:none; z-index:0; }
        .rings svg{ width:100%; height:100%; overflow:visible;
          transform-origin:center; animation:orbit-spin 140s linear infinite; }
        .rings ellipse{ fill:none; }

        .disc{
          position:absolute; left:145px; top:65px; width:500px; height:500px;
          border-radius:50%;
          background:radial-gradient(circle at 36% 30%, var(--navy-2), var(--navy) 72%);
          border:1px solid rgba(90,100,120,.40);
          box-shadow:0 34px 90px rgba(0,0,0,.45), inset 0 0 70px rgba(0,194,255,.05);
          z-index:1;
        }
        .disc__label{
          position:absolute; left:38px; top:39%; transform:translateY(-50%);
          width:220px; color:var(--white);
          font-size:25px; font-weight:800; line-height:1.15; letter-spacing:-.4px;
          font-family: var(--font-display), system-ui, sans-serif;
        }

        .bubble{
          position:absolute; border-radius:50%; overflow:visible;
          cursor:pointer; z-index:6;
          transition:transform .3s cubic-bezier(.2,.8,.25,1), box-shadow .3s ease;
        }
        .bubble__img{
          position:absolute; inset:0; border-radius:50%; overflow:hidden;
          border:3px solid var(--navy);
          box-shadow:0 8px 24px rgba(0,0,0,.35);
        }
        .bubble__img img{ width:100%; height:100%; object-fit:cover; display:block; }
        .bubble::after{
          content:""; position:absolute; inset:-5px; border-radius:50%;
          border:2px solid var(--cyan); opacity:0; transform:scale(.96);
          transition:opacity .3s ease, transform .3s ease;
        }
        .bubble:hover, .bubble.is-active{ transform:scale(1.2); z-index:40; }
        .bubble:hover .bubble__img, .bubble.is-active .bubble__img{
          box-shadow:0 18px 44px rgba(0,194,255,.55);
          border-color: var(--cyan);
        }
        .bubble:hover::after, .bubble.is-active::after{ opacity:1; transform:scale(1.04); }
        .bubble.is-active::after{ box-shadow:0 0 28px rgba(0,194,255,.6); }

        .pill{
          position:absolute; display:inline-flex; align-items:center;
          padding:9px 18px; border-radius:999px;
          background:rgba(13,27,42,.82); -webkit-backdrop-filter:blur(4px); backdrop-filter:blur(4px);
          border:1.5px solid var(--green);
          color:var(--white); font-size:13.5px; font-weight:700; white-space:nowrap;
          box-shadow:0 6px 18px rgba(0,0,0,.30);
          z-index:20;
          transition:transform .3s ease, border-color .3s ease, background .3s ease, box-shadow .3s ease;
        }
        .pill:hover, .pill.is-active{
          transform:translateY(-3px) scale(1.04);
          border-color:var(--cyan);
          background:rgba(0,194,255,.14);
          box-shadow:0 10px 26px rgba(0,194,255,.28);
        }
        .pill--solid{ background:var(--green); border-color:var(--green); color:#06281a; }
        .pill--solid:hover, .pill--solid.is-active{
          background:var(--green); border-color:#fff; color:#06281a;
          transform:translateY(-3px) scale(1.04);
          box-shadow:0 12px 30px rgba(61,220,132,.45);
        }

        .main{
          position:absolute; left:398px; top:236px; width:258px; height:258px;
          border-radius:50%; background:var(--white);
          box-shadow:0 26px 64px rgba(0,0,0,.42);
          z-index:25;
        }
        .main__circle{ position:absolute; inset:7px; border-radius:50%; overflow:hidden; background:var(--white); }
        .main__circle img{ width:100%; height:100%; object-fit:cover; object-position:center 10%; }

        .spark{ position:absolute; z-index:30; animation:orbit-twinkle 3.2s ease-in-out infinite; transform-origin:center; }
        .spark svg{ width:100%; height:100%; display:block; }
        .spark--red   { left:540px; top:150px; width:30px; height:30px; animation-delay:0s;   }
        .spark--green { left:512px; top:184px; width:22px; height:22px; animation-delay:.5s;  }
        .spark--orange{ left:548px; top:208px; width:24px; height:24px; animation-delay:1s;   }

        @keyframes orbit-spin{ to{ transform:rotate(360deg); } }
        @keyframes orbit-twinkle{
          0%,100%{ opacity:.35; transform:scale(.8) rotate(0deg); }
          50%    { opacity:1;   transform:scale(1)  rotate(15deg); }
        }

        @media (prefers-reduced-motion:reduce){
          .rings svg, .spark{ animation:none !important; }
          .anim{ transition:opacity .4s ease; transform:none; }
        }
      `}</style>

      <div className="orbit-stage" ref={stageRef}>
        <div className="rings">
          <svg viewBox="0 0 860 750" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <ellipse cx="455" cy="375" rx="320" ry="320" stroke="var(--cyan)" strokeWidth="1.2" opacity=".12" />
            <ellipse cx="430" cy="395" rx="262" ry="262" stroke="var(--steel)" strokeWidth="1.4" opacity=".34" />
            <ellipse cx="470" cy="360" rx="205" ry="205" stroke="var(--steel)" strokeWidth="1.2" opacity=".20" />
          </svg>
        </div>

        <div className="disc anim" style={{ ["--d" as string]: "0s" } as React.CSSProperties}>
          <div className="disc__label">Your extended workforce</div>
        </div>

        <div className="bubble anim" data-pair="contingent" style={{ ["--d" as string]: ".15s", left: "366px", top: "6px", width: "80px", height: "80px" } as React.CSSProperties}>
          <div className="bubble__img">
            <Image src={PEOPLE.contingent.src} alt={PEOPLE.contingent.alt} fill sizes="80px" style={{ objectFit: "cover", objectPosition: PEOPLE.contingent.pos }} />
          </div>
        </div>

        <div className="bubble anim" data-pair="alumni" style={{ ["--d" as string]: ".25s", left: "212px", top: "114px", width: "90px", height: "90px" } as React.CSSProperties}>
          <div className="bubble__img">
            <Image src={PEOPLE.alumni.src} alt={PEOPLE.alumni.alt} fill sizes="90px" style={{ objectFit: "cover", objectPosition: PEOPLE.alumni.pos }} />
          </div>
        </div>

        <div className="bubble anim" data-pair="contract" style={{ ["--d" as string]: ".35s", left: "236px", top: "296px", width: "74px", height: "74px" } as React.CSSProperties}>
          <div className="bubble__img">
            <Image src={PEOPLE.contract.src} alt={PEOPLE.contract.alt} fill sizes="74px" style={{ objectFit: "cover", objectPosition: PEOPLE.contract.pos }} />
          </div>
        </div>

        <div className="bubble anim" data-pair="external" style={{ ["--d" as string]: ".45s", left: "366px", top: "530px", width: "74px", height: "74px" } as React.CSSProperties}>
          <div className="bubble__img">
            <Image src={PEOPLE.external.src} alt={PEOPLE.external.alt} fill sizes="74px" style={{ objectFit: "cover", objectPosition: PEOPLE.external.pos }} />
          </div>
        </div>

        <div className="pill anim" data-pair="contingent" style={{ ["--d" as string]: ".20s", left: "206px", top: "62px" } as React.CSSProperties}>Contingent Talent</div>
        <div className="pill anim" data-pair="alumni" style={{ ["--d" as string]: ".30s", left: "344px", top: "122px" } as React.CSSProperties}>Alumni Talent</div>
        <div className="pill anim" data-pair="contract" style={{ ["--d" as string]: ".40s", left: "196px", top: "388px" } as React.CSSProperties}>Contract Talent</div>
        <div className="pill anim" data-pair="external" style={{ ["--d" as string]: ".50s", left: "208px", top: "520px" } as React.CSSProperties}>External Talent</div>
        <div className="pill pill--solid anim" data-pair="workforce" style={{ ["--d" as string]: ".60s", left: "486px", top: "512px" } as React.CSSProperties}>Your Workforce</div>

        <div className="main anim" data-pair="workforce" style={{ ["--d" as string]: ".30s" } as React.CSSProperties}>
          <div className="main__circle">
            <Image src={PEOPLE.workforce.src} alt={PEOPLE.workforce.alt} fill sizes="258px" priority style={{ objectFit: "cover", objectPosition: PEOPLE.workforce.pos }} />
          </div>
        </div>

        <div className="spark spark--red" aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z" fill="var(--red)" /></svg>
        </div>
        <div className="spark spark--green" aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z" fill="var(--green)" /></svg>
        </div>
        <div className="spark spark--orange" aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z" fill="var(--orange)" /></svg>
        </div>
      </div>
    </div>
  );
}

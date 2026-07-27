// Small inline SVG country flags — reliable across platforms (emoji flags render
// as letters on Windows). Used to label the Canada / US office groups.

export function FlagCA({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      role="img"
      aria-label="Canada"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" rx="2" fill="#fff" />
      <path d="M2 0h3v14H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z" fill="#D52B1E" />
      <path d="M15 0h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3V0Z" fill="#D52B1E" />
      {/* stylised maple leaf */}
      <path
        fill="#D52B1E"
        d="M10 3.2l.86 1.7 1.16-.3-.5 1.62 1.63-.16-1 1.34 1.94.55-2.02.86 1.02.5-2.36.4.28 1.15-1.6-.5v1.55h-.85V11.4l-1.6.5.28-1.15-2.36-.4 1.02-.5-2.02-.86 1.94-.55-1-1.34 1.63.16-.5-1.62 1.16.3z"
      />
    </svg>
  );
}

export function FlagUS({ className = "" }: { className?: string }) {
  const stripes = [0, 2.15, 4.31, 6.46, 8.62, 10.77, 12.92];
  const starX = [1.6, 3.6, 5.6, 7.4];
  const starY = [1.2, 3, 4.8, 6.4];
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      role="img"
      aria-label="United States"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="usFlagClip">
          <rect width="20" height="14" rx="2" />
        </clipPath>
      </defs>
      <g clipPath="url(#usFlagClip)">
        <rect width="20" height="14" fill="#fff" />
        {stripes.map((y) => (
          <rect key={y} y={y} width="20" height="1.077" fill="#B22234" />
        ))}
        <rect width="9" height="7.54" fill="#3C3B6E" />
        {starX.map((x) =>
          starY.map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.42" fill="#fff" />
          )),
        )}
      </g>
    </svg>
  );
}

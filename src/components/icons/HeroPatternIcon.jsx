export default function HeroPatternIcon({ className = "" }) {
  return (
    <svg
      className={className}
      style={{
        filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
      }}
      viewBox="0 0 2808 1200"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100%" height="100%" fill="none" />
    </svg>
  );
}

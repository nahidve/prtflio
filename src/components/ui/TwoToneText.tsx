export function TwoToneText({
  bold,
  muted,
  theme = "light",
  className = "",
}: {
  bold: string;
  muted: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  const boldColor = theme === "dark" ? "text-white" : "text-ink";
  const mutedColor = theme === "dark" ? "text-muted-on-dark" : "text-muted";

  return (
    <p className={`text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.15] tracking-tight ${className}`}>
      <span className={`font-medium ${boldColor}`}>{bold} </span>
      <span className={`font-medium ${mutedColor}`}>{muted}</span>
    </p>
  );
}

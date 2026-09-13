export function Pill({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-white text-ink"
      : "bg-ink text-white";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-tight ${toneClasses}`}
    >
      {children}
    </span>
  );
}

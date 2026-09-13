export function Eyebrow({
  children,
  theme = "light",
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
}) {
  const borderColor = theme === "dark" ? "border-white/30" : "border-ink/25";
  const textColor = theme === "dark" ? "text-white" : "text-ink";

  return (
    <div className={`flex items-center gap-2 text-[13px] font-medium ${textColor}`}>
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border ${borderColor}`}
      >
        <PlusIcon className="h-2 w-2" />
      </span>
      {children}
    </div>
  );
}

export function PlusIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 1V11M1 6H11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  theme?: "light" | "dark";
  className?: string;
  id?: string;
  rounded?: boolean;
};

export function Section({
  children,
  theme = "light",
  className = "",
  id,
  rounded = false,
}: SectionProps) {
  const themeClasses =
    theme === "dark"
      ? "bg-ink text-white"
      : "bg-paper text-ink";

  return (
    <section
      id={id}
      className={`relative w-full py-24 md:py-32 ${themeClasses} ${
        rounded ? "rounded-[28px]" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

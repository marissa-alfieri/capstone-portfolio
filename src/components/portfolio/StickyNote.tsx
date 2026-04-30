type Tone = "butter" | "rose" | "sage" | "sky" | "lavender" | "coral";

const bg: Record<Tone, string> = {
  butter:   "bg-butter-soft",
  rose:     "bg-rose-soft",
  sage:     "bg-sage-soft",
  sky:      "bg-sky-soft",
  lavender: "bg-lavender-soft",
  coral:    "bg-coral-soft",
};

export function StickyNote({
  children,
  tone = "butter",
  rotate = "rotate-1n",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      className={`sticky-note ${bg[tone]} ${rotate} font-hand text-2xl leading-snug text-ink ${className}`}
    >
      {children}
    </div>
  );
}

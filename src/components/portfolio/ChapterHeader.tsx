type AccentTone = "rose" | "sage" | "sky" | "butter" | "lavender" | "coral";

const toneClasses: Record<AccentTone, { bg: string; ribbon: string; text: string }> = {
  rose:     { bg: "bg-rose-soft",     ribbon: "bg-rose",     text: "text-paper" },
  sage:     { bg: "bg-sage-soft",     ribbon: "bg-sage",     text: "text-ink"   },
  sky:      { bg: "bg-sky-soft",      ribbon: "bg-sky",      text: "text-ink"   },
  butter:   { bg: "bg-butter-soft",   ribbon: "bg-butter",   text: "text-ink"   },
  lavender: { bg: "bg-lavender-soft", ribbon: "bg-lavender", text: "text-ink"   },
  coral:    { bg: "bg-coral-soft",    ribbon: "bg-coral",    text: "text-paper" },
};

export function ChapterHeader({
  number,
  title,
  intro,
  tone,
}: {
  number: string;
  title: string;
  intro: string;
  tone: AccentTone;
}) {
  const t = toneClasses[tone];
  return (
    <section className={`relative overflow-hidden ${t.bg}`}>
      {/* Washi tape decorations */}
      <span className="tape left-8 top-0 -translate-y-1/2 rotate-[-8deg]" />
      <span className="tape right-12 top-0 -translate-y-1/2 rotate-[12deg]" />

      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <div className={`inline-flex items-center gap-2 rounded-full ${t.ribbon} ${t.text} px-4 py-1 font-hand text-lg shadow-sm`}>
          <span>✦</span>
          <span>Chapter {number}</span>
        </div>
        <h1 className="mt-5 font-serif-display text-5xl leading-[1.05] text-ink md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-hand text-2xl text-ink-soft md:text-3xl">
          {intro}
        </p>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/wheelock")({
  head: () => ({
    meta: [
      { title: "BU Wheelock — The Capstone Journal" },
      {
        name: "description",
        content:
          "About BU Wheelock, my program, and the Guide Star principles that shaped my time here.",
      },
    ],
  }),
  component: WheelockPage,
});

const guideStars: { title: string; blurb: string; tone: "rose" | "sage" | "sky" | "butter" | "lavender" | "coral" }[] = [
  {
    title: "Equity & Justice",
    blurb:
      "I learned to ask whose voices a system is built around — and whose it leaves out — before designing anything for kids.",
    tone: "rose",
  },
  {
    title: "Evidence-Informed Practice",
    blurb:
      "Wheelock pushed me to pair lived experience with research, so my care is both warm and rigorous.",
    tone: "sky",
  },
  {
    title: "Whole-Child, Whole-Context",
    blurb:
      "Family, school, neighborhood, policy — the program kept widening the frame so I never reduced a child to a single moment.",
    tone: "sage",
  },
  {
    title: "Reflective Practitioner",
    blurb:
      "Reflection wasn't a journal entry; it was a habit. I leave knowing how to interrogate my own assumptions in real time.",
    tone: "lavender",
  },
];

function WheelockPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="02"
        title="BU Wheelock."
        intro="The program that gave me a frame, a vocabulary, and a north star."
        tone="sky"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        {/* The program */}
        <div className="reveal">
          <p className="font-hand text-2xl text-rose">the program</p>
          <h2 className="mt-1 font-serif-display text-3xl text-ink">
            Education & Human Development at BU Wheelock
          </h2>
          <div className="mt-4 space-y-4 text-lg text-ink">
            <p>
              BU Wheelock College of Education & Human Development is built on a
              simple, stubborn idea: that learning, wellbeing, and equity are
              inseparable. My major in Education & Human Development with a
              specialization in Child & Adolescent Mental Health let me follow
              that idea across <span className="underline-wavy">classrooms,
              clinics, and community settings</span>.
            </p>
            <p>
              The program weaves developmental science, mental-health theory,
              fieldwork, and research methods into a single thread — and asks,
              over and over, <em>how does this serve the child?</em>
            </p>
          </div>
        </div>

        {/* Guide Star */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-butter text-ink shadow-sm">
              <Star size={18} />
            </span>
            <p className="font-hand text-2xl text-rose">the guide star</p>
          </div>
          <h2 className="mt-2 font-serif-display text-3xl text-ink">
            What Wheelock taught me to orient by
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Wheelock's Guide Star is the program's commitment to equity,
            evidence, and the whole child. Here's how each part of it has
            actually changed how I work.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {guideStars.map((g, i) => (
              <article
                key={g.title}
                className="reveal rounded-xl border border-border bg-card p-6 shadow-sm"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h3 className="font-serif-display text-xl text-ink">{g.title}</h3>
                <StickyNote tone={g.tone} rotate={i % 2 === 0 ? "rotate-1n" : "rotate-2n"} className="mt-4 !text-xl">
                  {g.blurb}
                </StickyNote>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/about" className="text-ink-soft underline-wavy">← About</Link>
          <Link
            to="/before"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: Before <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

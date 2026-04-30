import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { Polaroid } from "@/components/portfolio/Polaroid";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/before")({
  head: () => ({
    meta: [
      { title: "Before — The Capstone Journal" },
      { name: "description", content: "Who I was before university, and what drew me to child and adolescent mental health." },
    ],
  }),
  component: BeforePage,
});

function BeforePage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="03"
        title="Before."
        intro="Who I was coming in — and the questions I was already carrying."
        tone="butter"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <div className="reveal space-y-5 text-lg leading-relaxed text-ink">
          <p>
            <span className="font-hand text-3xl text-rose">I came to college</span> with a quiet,
            stubborn interest in what makes kids feel safe. I didn't have the
            vocabulary for it yet — words like <em>attachment</em>, <em>co-regulation</em>,{" "}
            <em>protective factors</em> — but I had the questions.
          </p>
          <p>
            High school had given me a few formative front-row seats: tutoring
            younger students, a summer at a camp for kids with anxiety, a family
            member whose mental health became something we talked about openly
            for the first time. Those moments stuck.
          </p>
          <p>
            So I arrived hoping to study <span className="underline-wavy">how children grow</span>{" "}
            — and what the adults around them can do (and not do) to help.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-start justify-center gap-6">
          <Polaroid caption="senior year" rotate="-rotate-3" seed={0} />
          <Polaroid caption="summer camp" rotate="rotate-2" seed={3} />
          <Polaroid caption="hometown" rotate="-rotate-1" seed={1} />
        </div>

        <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
          <StickyNote tone="rose" rotate="-rotate-2">
            "I want to work with kids who are too often handed a label before they're handed a hand."
          </StickyNote>
          <StickyNote tone="sage" rotate="rotate-1">
            Goals on day one: become the adult I would have wanted in the room when I was 11.
          </StickyNote>
        </div>

        <div className="reveal mt-16 rounded-xl border border-border bg-card p-6">
          <h3 className="font-serif-display text-2xl text-ink">Early influences</h3>
          <ul className="mt-4 space-y-3 text-ink">
            <li>📚 Reading <em>The Body Keeps the Score</em> the summer before freshman year.</li>
            <li>🎒 A high-school psychology teacher who treated curiosity as a virtue.</li>
            <li>🌿 Volunteering with a youth mentorship program for two years.</li>
            <li>🎧 A long love of podcasts on developmental psych.</li>
          </ul>
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/wheelock" className="text-ink-soft underline-wavy">← BU Wheelock</Link>
          <Link
            to="/coursework"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: Coursework <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

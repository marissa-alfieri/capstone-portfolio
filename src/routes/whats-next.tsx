import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/whats-next")({
  head: () => ({
    meta: [
      { title: "What's Next — The Capstone Journal" },
      { name: "description", content: "How four years of UG have prepared me for the next chapter." },
    ],
  }),
  component: WhatsNextPage,
});

const skills = [
  { label: "Developmentally-attuned listening", level: 4 },
  { label: "Trauma-informed framing", level: 4 },
  { label: "Mixed-methods research design", level: 3 },
  { label: "Group facilitation", level: 4 },
  { label: "Data analysis (R, basic stats)", level: 3 },
  { label: "Crisis support & de-escalation", level: 4 },
];

const values = [
  "Kids are not problems to solve. They are people to know.",
  "Care is a discipline, not a feeling.",
  "The system around the child matters as much as the child.",
  "Slow questions beat fast answers.",
];

function WhatsNextPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="07"
        title="What's Next."
        intro="Where four years are pointing me — and why I trust the direction."
        tone="lavender"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="reveal max-w-2xl text-lg text-ink">
          I'm leaving undergrad with three things I didn't have when I arrived:
          a vocabulary for the work, a community of people who do it well, and a
          much clearer sense of <span className="underline-wavy">who I want to serve</span>.
        </div>

        {/* Skills */}
        <div className="reveal mt-14">
          <p className="font-hand text-2xl text-rose">muscles I've been building</p>
          <h2 className="mt-1 font-serif-display text-3xl text-ink">Skills</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-ink">{s.label}</span>
                  <span className="flex gap-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-6 rounded-full ${i < s.level ? "bg-lavender" : "bg-muted"}`}
                      />
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="reveal mt-16">
          <p className="font-hand text-2xl text-rose">things I now believe</p>
          <h2 className="mt-1 font-serif-display text-3xl text-ink">Values, clarified</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <StickyNote
                key={v}
                tone={(["lavender", "rose", "sage", "sky"] as const)[i % 4]}
                rotate={i % 2 === 0 ? "rotate-1n" : "rotate-2n"}
              >
                {v}
              </StickyNote>
            ))}
          </div>
        </div>

        {/* The horizon */}
        <div className="reveal mt-16 rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="font-hand text-2xl text-rose">the horizon</p>
          <h2 className="mt-1 font-serif-display text-3xl text-ink">Where I'm headed</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-serif-display text-lg text-ink">Short term</h3>
              <p className="mt-1 text-ink-soft">A year working in a school-based mental health setting to deepen my practice.</p>
            </div>
            <div>
              <h3 className="font-serif-display text-lg text-ink">Mid term</h3>
              <p className="mt-1 text-ink-soft">Graduate study in clinical mental health counseling or school psychology.</p>
            </div>
            <div>
              <h3 className="font-serif-display text-lg text-ink">Long term</h3>
              <p className="mt-1 text-ink-soft">Direct clinical work with children & adolescents, especially in under-resourced communities.</p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/research" className="text-ink-soft underline-wavy">← Research</Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Back to the hub <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

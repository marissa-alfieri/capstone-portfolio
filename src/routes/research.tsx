import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { ArtifactCard } from "@/components/portfolio/ArtifactCard";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — The Capstone Journal" },
      { name: "description", content: "Research projects, posters, and papers from my time in the major." },
    ],
  }),
  component: ResearchPage,
});

const projects = [
  {
    title: "Peer Support & Anxiety in Middle Schoolers",
    role: "Undergraduate research assistant",
    lab: "Child Wellbeing Lab · Years 3–4",
    abstract:
      "We examined whether structured peer-support programs in 6th–8th grade buffer self-reported anxiety symptoms across a school year. I helped design the survey instrument, ran focus groups, and co-authored the poster.",
    learned:
      "How long real research takes. How much care goes into a single survey item. How exciting a clean dataset can feel.",
    artifacts: [
      { title: "Conference Poster", meta: "PDF · poster", blurb: "Presented at the regional EHD undergrad symposium." },
      { title: "Methods Memo", meta: "PDF · 4 pages", blurb: "Internal memo on focus-group protocol." },
    ],
  },
  {
    title: "Capstone: Trauma-Informed Practice in Elementary Classrooms",
    role: "Independent research (capstone)",
    lab: "Faculty advisor: Dr. — · Year 4",
    abstract:
      "A literature synthesis paired with semi-structured interviews of three classroom teachers about how they translate 'trauma-informed' from professional development into daily practice.",
    learned:
      "Teachers don't need more frameworks; they need more time and lighter caseloads. My next questions live there.",
    artifacts: [
      { title: "Capstone Paper", meta: "PDF · 28 pages", blurb: "Final manuscript submitted spring 2026." },
      { title: "Interview Protocol", meta: "PDF · 3 pages", blurb: "Semi-structured guide used with teachers." },
    ],
  },
];

function ResearchPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="06"
        title="Research."
        intro="Questions I followed, and what they taught me about asking better ones."
        tone="sky"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="reveal mb-10 max-w-2xl text-lg text-ink">
          Research, for me, became the place where my caring got disciplined.
          Below are the two projects that mattered most.
        </div>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="tape left-10 top-0 -translate-y-1/2 rotate-[-6deg]" />
              <p className="text-xs uppercase tracking-widest text-ink-soft">
                {p.lab}
              </p>
              <h2 className="mt-1 font-serif-display text-3xl text-ink">{p.title}</h2>
              <p className="mt-1 font-hand text-2xl text-rose">{p.role}</p>

              <div className="mt-5 grid gap-6 md:grid-cols-[1fr_240px]">
                <div className="space-y-4 text-ink">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-ink-soft">Abstract</h3>
                    <p className="mt-1">{p.abstract}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-ink-soft">What I learned</h3>
                    <p className="mt-1">{p.learned}</p>
                  </div>
                </div>
                <StickyNote tone={i === 0 ? "sky" : "lavender"} rotate="rotate-2n">
                  field note →
                  <span className="mt-2 block text-xl">
                    {i === 0
                      ? "Sit in the messy middle of a study; it's where the real questions live."
                      : "The best interviews are mostly silence."}
                  </span>
                </StickyNote>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {p.artifacts.map((a) => (
                  <ArtifactCard key={a.title} title={a.title} meta={a.meta} blurb={a.blurb} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/clubs" className="text-ink-soft underline-wavy">← Beyond the Classroom</Link>
          <Link
            to="/whats-next"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: What's Next <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

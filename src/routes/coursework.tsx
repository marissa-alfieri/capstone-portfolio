import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { ArtifactCard } from "@/components/portfolio/ArtifactCard";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/coursework")({
  head: () => ({
    meta: [
      { title: "Coursework — The Capstone Journal" },
      { name: "description", content: "Courses that shaped my thinking across child development, mental health, and research methods." },
    ],
  }),
  component: CourseworkPage,
});

const themes: {
  title: string;
  blurb: string;
  tone: "sage" | "rose" | "sky" | "butter" | "lavender";
  courses: { code: string; title: string; reflection: string; artifact?: { title: string; meta: string; blurb: string } }[];
}[] = [
  {
    title: "Child & Adolescent Development",
    blurb: "The bedrock — how minds, bodies, and relationships grow up together.",
    tone: "sage",
    courses: [
      {
        code: "HD 101",
        title: "Foundations of Human Development",
        reflection:
          "First class where I realized 'development' isn't a checklist — it's the whole web of relationships a kid grows inside of.",
        artifact: { title: "Reflection Paper: The Ecology of a Child", meta: "PDF · 6 pages", blurb: "On Bronfenbrenner and my own elementary school." },
      },
      {
        code: "HD 220",
        title: "Adolescent Development",
        reflection:
          "Reframed adolescence for me from 'difficult' to 'doing exactly what brains are supposed to do at this age.'",
      },
    ],
  },
  {
    title: "Mental Health Foundations",
    blurb: "Frameworks for understanding distress, resilience, and care.",
    tone: "rose",
    courses: [
      {
        code: "PSY 240",
        title: "Abnormal Psychology",
        reflection:
          "Taught me to hold diagnostic categories with both rigor and humility — they're tools, not identities.",
        artifact: { title: "Case Conceptualization", meta: "PDF · 8 pages", blurb: "A trauma-informed write-up of a fictional case." },
      },
      {
        code: "EHD 310",
        title: "Children, Trauma & Schools",
        reflection:
          "Probably the single class that most clarified what I want to do after graduation.",
      },
    ],
  },
  {
    title: "Research Methods",
    blurb: "Learning to ask careful questions and to listen for honest answers.",
    tone: "sky",
    courses: [
      {
        code: "EHD 250",
        title: "Methods in Human Development Research",
        reflection:
          "The first time I designed a study from scratch. Humbling. Clarifying. Fun.",
        artifact: { title: "Mini-study: Peer Support in 5th Graders", meta: "PDF · 12 pages", blurb: "A small mixed-methods pilot." },
      },
      {
        code: "STAT 201",
        title: "Statistics for the Behavioral Sciences",
        reflection:
          "Stats stopped being intimidating and started being a way to take ideas seriously.",
      },
    ],
  },
];

const toneSoft = {
  sage: "bg-sage-soft", rose: "bg-rose-soft", sky: "bg-sky-soft",
  butter: "bg-butter-soft", lavender: "bg-lavender-soft",
} as const;

function CourseworkPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="04"
        title="Coursework."
        intro="The classes that rearranged how I think about kids, growth, and care."
        tone="sage"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="reveal mb-12 max-w-3xl text-lg text-ink">
          Looking back, my coursework clustered into three big regions. Each one
          gave me a different muscle: <span className="font-hand text-2xl text-rose">developmental
          imagination</span>, <span className="font-hand text-2xl text-sky">research discipline</span>, and{" "}
          <span className="font-hand text-2xl text-coral">clinical humility</span>.
        </div>

        <div className="space-y-16">
          {themes.map((theme, ti) => (
            <div key={theme.title} className="reveal" style={{ transitionDelay: `${ti * 80}ms` }}>
              <div className="mb-6 flex items-baseline gap-3">
                <span className={`inline-block rounded-full ${toneSoft[theme.tone]} px-3 py-1 font-hand text-lg text-ink`}>
                  Theme 0{ti + 1}
                </span>
                <h2 className="font-serif-display text-2xl text-ink md:text-3xl">
                  {theme.title}
                </h2>
              </div>
              <p className="mb-6 max-w-2xl text-ink-soft">{theme.blurb}</p>

              <div className="grid gap-6 md:grid-cols-2">
                {theme.courses.map((c) => (
                  <article
                    key={c.code}
                    className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-widest text-ink-soft">
                      {c.code}
                    </p>
                    <h3 className="mt-1 font-serif-display text-xl text-ink">
                      {c.title}
                    </h3>
                    <StickyNote tone={theme.tone} rotate="rotate-1n" className="mt-4 !text-xl">
                      {c.reflection}
                    </StickyNote>
                    {c.artifact && (
                      <div className="mt-4">
                        <ArtifactCard
                          title={c.artifact.title}
                          meta={c.artifact.meta}
                          blurb={c.artifact.blurb}
                        />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/before" className="text-ink-soft underline-wavy">← Before</Link>
          <Link
            to="/clubs"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: Beyond the Classroom <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

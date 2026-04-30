import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { Polaroid } from "@/components/portfolio/Polaroid";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Beyond the Classroom — The Capstone Journal" },
      { name: "description", content: "Clubs, leadership, and community work that shaped me as much as any class did." },
    ],
  }),
  component: ClubsPage,
});

const involvements: { title: string; role: string; years: string; story: string; tone: "rose" | "sage" | "sky" | "butter" | "lavender" }[] = [
  {
    title: "Mental Health Allies (peer support org)",
    role: "Co-chair, programming",
    years: "Years 2–4",
    story:
      "We ran weekly drop-in nights and a 'tough conversations' workshop series. I learned that consistency matters more than charisma.",
    tone: "rose",
  },
  {
    title: "Boys & Girls Club Tutoring",
    role: "Volunteer tutor",
    years: "Years 1–3",
    story:
      "Two afternoons a week with the same group of 4th graders. They taught me how to listen for the question behind the question.",
    tone: "sage",
  },
  {
    title: "EHD Student Council",
    role: "Curriculum rep",
    years: "Year 3",
    story:
      "Helped advocate for a trauma-informed strand in the major. The administrative slowness was a lesson in itself.",
    tone: "sky",
  },
  {
    title: "Crisis Text Line",
    role: "Trained crisis counselor",
    years: "Year 4",
    story:
      "200+ hours on the platform. The hardest and most clarifying work I've done so far.",
    tone: "lavender",
  },
];

function ClubsPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="05"
        title="Beyond the Classroom."
        intro="The clubs, mentors, and side-quests that taught me how to show up."
        tone="rose"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        {/* Photo wall */}
        <div className="reveal">
          <div className="mb-6 flex items-baseline gap-3">
            <p className="font-hand text-2xl text-rose">the photo wall</p>
            <span className="text-xs uppercase tracking-widest text-ink-soft">tap a polaroid →</span>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-6">
            <Polaroid caption="club retreat" rotate="-rotate-3" seed={0} />
            <Polaroid caption="tutoring" rotate="rotate-2" seed={1} />
            <Polaroid caption="MHA event" rotate="-rotate-1" seed={2} />
            <Polaroid caption="conference" rotate="rotate-3" seed={3} />
            <Polaroid caption="late night" rotate="-rotate-2" seed={4} />
            <Polaroid caption="grad week" rotate="rotate-1" seed={5} />
          </div>
        </div>

        {/* Involvements */}
        <div className="mt-16 space-y-6">
          {involvements.map((it, i) => (
            <article
              key={it.title}
              className="reveal grid gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-[1fr_280px] md:gap-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-soft">
                  {it.years}
                </p>
                <h3 className="mt-1 font-serif-display text-2xl text-ink">{it.title}</h3>
                <p className="mt-1 font-hand text-xl text-ink-soft">{it.role}</p>
                <p className="mt-3 text-ink">{it.story}</p>
              </div>
              <StickyNote tone={it.tone} rotate={i % 2 === 0 ? "rotate-2n" : "rotate-1n"}>
                what it taught me →
                <span className="mt-2 block text-xl">{
                  ["patience", "presence", "advocacy", "stillness"][i % 4]
                }</span>
              </StickyNote>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/coursework" className="text-ink-soft underline-wavy">← Coursework</Link>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: Research <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

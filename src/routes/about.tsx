import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ChapterHeader } from "@/components/portfolio/ChapterHeader";
import { StickyNote } from "@/components/portfolio/StickyNote";
import { Mail, Linkedin, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Capstone Journal" },
      { name: "description", content: "About me and how to get in touch." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <ChapterHeader
        number="01"
        title="About."
        intro="A short bio, a hello, and the easiest ways to find me."
        tone="coral"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="reveal grid gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          {/* Headshot card */}
          <div className="mx-auto md:mx-0">
            <div className="polaroid -rotate-3" style={{ width: 240 }}>
              <div
                className="flex h-56 w-full items-center justify-center bg-coral-soft font-hand text-5xl text-ink/40"
              >
                ✿
              </div>
              <p className="mt-2 text-center font-hand text-2xl text-ink">that's me</p>
            </div>
          </div>

          <div>
            <p className="font-hand text-2xl text-rose">hello —</p>
            <h2 className="mt-1 font-serif-display text-3xl text-ink">I'm [Your Name].</h2>
            <p className="mt-4 text-lg text-ink">
              I'm a soon-to-be graduate of the undergraduate program in
              Education & Human Development with a specialization in Child &
              Adolescent Mental Health. This portfolio is my attempt to put the
              last four years on a single, walkable page.
            </p>
            <p className="mt-3 text-lg text-ink">
              When I'm not in class or at the lab, you'll find me running with
              friends, baking aggressively, or rereading something by Mary
              Karr. Thanks for stopping by.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:opacity-90"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink transition hover:bg-butter-soft"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink transition hover:bg-butter-soft"
              >
                <FileText size={16} /> Résumé (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          <StickyNote tone="rose" rotate="-rotate-2">
            best way to reach me: email. I usually reply within a day.
          </StickyNote>
          <StickyNote tone="sage" rotate="rotate-1">
            open to: research assistantships, clinical roles, mentorship.
          </StickyNote>
          <StickyNote tone="sky" rotate="-rotate-1">
            currently reading: <em>Burnout</em> by the Nagoski sisters.
          </StickyNote>
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link to="/" className="text-ink-soft underline-wavy">← back to the hub</Link>
          <Link
            to="/wheelock"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Next: BU Wheelock <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

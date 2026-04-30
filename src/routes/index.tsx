import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Polaroid } from "@/components/portfolio/Polaroid";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Capstone Journal — A UG Portfolio" },
      {
        name: "description",
        content:
          "A scrapbook portfolio of four years in Education & Human Development with a specialization in Child & Adolescent Mental Health.",
      },
    ],
  }),
  component: Hub,
});

type Tone = "rose" | "sage" | "sky" | "butter" | "lavender" | "coral";

const milestones: {
  to: "/about" | "/wheelock" | "/before" | "/coursework" | "/clubs" | "/research" | "/whats-next";
  label: string;
  caption: string;
  tone: Tone;
  rotate: string;
}[] = [
  { to: "/about",      label: "About",       caption: "hello",      tone: "coral",    rotate: "-rotate-3" },
  { to: "/wheelock",   label: "BU Wheelock", caption: "wheelock",   tone: "sky",      rotate: "rotate-2"  },
  { to: "/before",     label: "Before",      caption: "before",     tone: "butter",   rotate: "-rotate-2" },
  { to: "/coursework", label: "Coursework",  caption: "coursework", tone: "sage",     rotate: "rotate-1"  },
  { to: "/clubs",      label: "Beyond",      caption: "clubs",      tone: "rose",     rotate: "-rotate-1" },
  { to: "/research",   label: "Research",    caption: "research",   tone: "sky",      rotate: "rotate-2"  },
  { to: "/whats-next", label: "What's Next", caption: "next",       tone: "lavender", rotate: "-rotate-3" },
];

const chapters: {
  to: "/about" | "/wheelock" | "/before" | "/coursework" | "/clubs" | "/research" | "/whats-next";
  number: string;
  title: string;
  blurb: string;
  tone: Tone;
}[] = [
  { to: "/about",      number: "01", title: "About",            blurb: "A bit about me and how to say hi.",                 tone: "coral"    },
  { to: "/wheelock",   number: "02", title: "BU Wheelock",      blurb: "The program and the Guide Star I learned to follow.", tone: "sky"    },
  { to: "/before",     number: "03", title: "Before",           blurb: "What led me here, and who I was before.",           tone: "butter"   },
  { to: "/coursework", number: "04", title: "Coursework",       blurb: "The classes that shaped my time here.",             tone: "sage"     },
  { to: "/clubs",      number: "05", title: "Beyond the Class", blurb: "Clubs, leadership, and work experiences.",          tone: "rose"     },
  { to: "/research",   number: "06", title: "Research",         blurb: "Learning through research.",                        tone: "sky"      },
  { to: "/whats-next", number: "07", title: "What's Next",      blurb: "Where four years are pointing me.",                 tone: "lavender" },
];

const toneRibbon: Record<Tone, string> = {
  rose: "bg-rose", sage: "bg-sage", sky: "bg-sky",
  butter: "bg-butter", lavender: "bg-lavender", coral: "bg-coral",
};
const toneSoft: Record<Tone, string> = {
  rose: "bg-rose-soft", sage: "bg-sage-soft", sky: "bg-sky-soft",
  butter: "bg-butter-soft", lavender: "bg-lavender-soft", coral: "bg-coral-soft",
};

function Hub() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          {/* tape decorations */}
          <span className="tape left-12 top-6 -rotate-12" />
          <span className="tape right-20 top-2 rotate-6" />

          <div className="relative">
            <p className="font-hand text-3xl text-rose">a capstone journal —</p>
            <h1 className="mt-2 font-serif-display text-6xl leading-[1.02] text-ink md:text-8xl">
              <span className="circle-accent">Four years,</span>
              <br />
              <span className="italic">one becoming.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
              An electronic portfolio documenting the insights, knowledge and
              skills I gathered while completing my undergraduate major in{" "}
              <span className="underline-wavy">Education & Human Development</span>{" "}
              with a specialization in Child & Adolescent Mental Health.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:opacity-90"
              >
                Start the story <ArrowRight size={16} />
              </Link>
              <a
                href="#chapters"
                className="text-sm font-medium text-ink-soft underline-wavy"
              >
                or browse chapters
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE RIBBON */}
      <section className="relative bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif-display text-3xl text-ink md:text-4xl">
              The timeline
            </h2>
            <p className="hidden font-hand text-2xl text-ink-soft md:block">
              tap a polaroid →
            </p>
          </div>

          <div className="relative">
            {/* dotted line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[88px] hidden border-t-2 border-dashed border-ink/20 md:block"
            />

            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-4">
              {milestones.map((m, i) => (
                <Link
                  key={m.to}
                  to={m.to}
                  className="reveal group flex flex-col items-center"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative">
                    <Polaroid
                      caption={m.caption}
                      rotate={m.rotate}
                      seed={i}
                      size={160}
                    />
                  </div>
                  <span
                    className={`-mt-1 inline-block rounded-full px-3 py-1 font-hand text-lg shadow-sm ${toneRibbon[m.tone]} ${m.tone === "rose" || m.tone === "coral" ? "text-paper" : "text-ink"}`}
                  >
                    {m.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS / TOC */}
      <section id="chapters" className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-hand text-2xl text-rose">table of contents</p>
              <h2 className="mt-1 font-serif-display text-3xl text-ink md:text-4xl">
                Where would you like to wander?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c, i) => (
              <Link
                key={c.to}
                to={c.to}
                className="reveal group relative block"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <article
                  className={`relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md`}
                >
                  <span className="tape left-6 top-0 -translate-y-1/2 rotate-[-6deg]" />
                  <div className={`mb-4 inline-flex h-10 items-center rounded-full px-3 font-hand text-lg ${toneSoft[c.tone]} text-ink`}>
                    Chapter {c.number}
                  </div>
                  <h3 className="font-serif-display text-2xl text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{c.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink underline-wavy">
                    open chapter <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

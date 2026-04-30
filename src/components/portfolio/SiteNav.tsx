import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Hub" },
  { to: "/about", label: "About" },
  { to: "/wheelock", label: "BU Wheelock" },
  { to: "/before", label: "Before" },
  { to: "/coursework", label: "Coursework" },
  { to: "/clubs", label: "Beyond Class" },
  { to: "/research", label: "Research" },
  { to: "/whats-next", label: "What's Next" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-paper font-hand text-xl shadow-sm transition-transform group-hover:rotate-6">
            ✦
          </span>
          <span className="font-serif-display text-lg font-semibold text-ink">
            The Capstone Journal
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-butter-soft" />
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-paper px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm ${
                    active ? "bg-butter-soft text-ink" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

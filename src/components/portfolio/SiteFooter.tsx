import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-ink-soft md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose text-paper font-hand text-base">
            ✦
          </span>
          <span className="font-serif-display text-base text-ink">
            Your Name · Capstone 2026
          </span>
        </div>

        <p className="text-center font-hand text-base text-ink-soft">
          Education & Human Development · Child & Adolescent Mental Health
        </p>

        <Link to="/" className="underline-wavy text-ink-soft hover:text-ink">
          back to the hub
        </Link>
      </div>
    </footer>
  );
}

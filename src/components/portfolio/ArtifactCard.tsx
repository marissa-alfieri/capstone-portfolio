import { FileText, Download } from "lucide-react";

export function ArtifactCard({
  title,
  meta,
  blurb,
  href = "#",
}: {
  title: string;
  meta: string;
  blurb: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group relative block rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-butter-soft text-ink">
          <FileText size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-widest text-ink-soft">{meta}</p>
          <h4 className="mt-1 font-serif-display text-lg font-semibold text-ink">
            {title}
          </h4>
          <p className="mt-1 text-sm text-ink-soft">{blurb}</p>
        </div>
        <Download
          size={18}
          className="mt-1 flex-none text-ink-soft transition-transform group-hover:translate-y-0.5"
        />
      </div>
    </a>
  );
}

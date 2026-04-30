import { useState } from "react";

const tints = [
  "oklch(0.88 0.05 20)",
  "oklch(0.88 0.04 145)",
  "oklch(0.88 0.04 230)",
  "oklch(0.9 0.06 90)",
  "oklch(0.86 0.04 300)",
  "oklch(0.87 0.06 40)",
];

export function Polaroid({
  caption,
  rotate = "rotate-1n",
  src,
  seed = 0,
  size = 180,
}: {
  caption: string;
  rotate?: string;
  src?: string;
  seed?: number;
  size?: number;
}) {
  const [open, setOpen] = useState(false);
  const tint = tints[seed % tints.length];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`polaroid ${rotate} block`}
        style={{ width: size }}
      >
        {src ? (
          <img
            src={src}
            alt={caption}
            className="block h-32 w-full object-cover"
            style={{ height: size * 0.78 }}
          />
        ) : (
          <div
            className="flex items-center justify-center font-hand text-3xl text-ink/40"
            style={{ height: size * 0.78, backgroundColor: tint }}
          >
            ✿
          </div>
        )}
        <p className="mt-2 text-center font-hand text-xl text-ink">
          {caption}
        </p>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="polaroid"
            style={{ width: "min(90vw, 480px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {src ? (
              <img src={src} alt={caption} className="block w-full object-cover" />
            ) : (
              <div
                className="flex h-80 w-full items-center justify-center font-hand text-6xl text-ink/40"
                style={{ backgroundColor: tint }}
              >
                ✿
              </div>
            )}
            <p className="mt-3 text-center font-hand text-2xl text-ink">{caption}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 block w-full text-center text-xs uppercase tracking-widest text-ink-soft"
            >
              tap anywhere to close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

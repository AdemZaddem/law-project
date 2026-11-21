import Link from "next/link";
import { ArrowRight, Building2, Rocket, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PILLARS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  ShieldCheck,
};

const ACCENT: Record<string, string> = {
  creation: "text-pillar-creation",
  startup: "text-pillar-startup",
  ip: "text-pillar-ip",
};

const BORDER_HOVER: Record<string, string> = {
  creation: "hover:border-pillar-creation/40",
  startup: "hover:border-pillar-startup/40",
  ip: "hover:border-pillar-ip/40",
};

/** Trois cartes d'orientation vers les piliers du guide. */
export function PillarsSection() {
  return (
    <section aria-labelledby="piliers-titre" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Les trois domaines du guide
          </p>
          <h2 id="piliers-titre" className="text-2xl sm:text-[1.75rem]">
            Par où commencer&nbsp;?
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon: LucideIcon | undefined = ICONS[pillar.icon];
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className={cn(
                  "group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors focus-visible:outline-2 focus-visible:outline-primary/40",
                  BORDER_HOVER[pillar.id],
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex size-9 items-center justify-center rounded-md bg-background",
                    ACCENT[pillar.id],
                  )}
                >
                  {Icon && <Icon className="size-5" />}
                </span>
                <span className="text-base font-semibold leading-snug">
                  {pillar.label}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary">
                  Découvrir
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

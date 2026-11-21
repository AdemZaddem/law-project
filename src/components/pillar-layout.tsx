import Link from "next/link";
import { cn } from "@/lib/utils";
import { PILLAR_NAV } from "@/lib/navigation";
import type { PillarId } from "@/lib/types";

interface PillarLayoutProps {
  pillar: PillarId;
  children: React.ReactNode;
}

/** Liseré d'identité du pilier. */
const ACCENT_BAR: Record<PillarId, string> = {
  creation: "bg-pillar-creation",
  startup: "bg-pillar-startup",
  ip: "bg-pillar-ip",
};

/**
 * Gabarit commun des trois piliers :
 * sous-navigation horizontale scrollable, soulignée du liseré du pilier.
 */
export function PillarLayout({ pillar, children }: PillarLayoutProps) {
  const entries = PILLAR_NAV[pillar] ?? [];

  return (
    <div className="w-full">
      <nav
        aria-label="Sections du pilier"
        className="border-b border-border bg-secondary"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {entries.map((entry, index) => (
              <li key={entry.href} className="shrink-0">
                <Link
                  href={entry.href}
                  className={cn(
                    "inline-block whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors",
                    index === 0
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:bg-card hover:text-foreground",
                  )}
                >
                  {entry.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          aria-hidden
          className={cn("h-0.5 w-full", ACCENT_BAR[pillar])}
        />
      </nav>
      {children}
    </div>
  );
}

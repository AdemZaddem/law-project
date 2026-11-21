import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PillarLinkItem {
  href: string;
  title: string;
  description: string;
}

interface PillarLinksProps {
  items: readonly PillarLinkItem[];
  /** Variante visuelle selon le pilier. */
  accent?: "creation" | "startup" | "ip";
}

const ACCENT: Record<NonNullable<PillarLinksProps["accent"]>, string> = {
  creation: "hover:border-pillar-creation/40",
  startup: "hover:border-pillar-startup/40",
  ip: "hover:border-pillar-ip/40",
};

/**
 * Grille de liens d'entrée d'un pilier : un lien, une promesse.
 * Utilisée pour les hubs de section.
 */
export function PillarLinks({ items, accent = "creation" }: PillarLinksProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "group flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors focus-visible:outline-2 focus-visible:outline-primary/40",
              ACCENT[accent],
            )}
          >
            <span className="text-base font-semibold leading-snug">
              {item.title}
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </span>
            <span
              aria-hidden
              className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary"
            >
              Consulter
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

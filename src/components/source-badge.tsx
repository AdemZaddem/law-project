import { ExternalLink } from "lucide-react";
import type { OfficialSource } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SourceBadgeProps {
  /** Liste des sources officielles du contenu. */
  sources: OfficialSource[];
  /** Date de dernière vérification, format français (ex. « 20 novembre 2026 »). */
  lastVerifiedAt?: string;
  className?: string;
}

/**
 * Indique d'où vient une information et quand elle a été vérifiée.
 * Systématique sur les contenus juridiques ou administratifs.
 */
export function SourceBadge({
  sources,
  lastVerifiedAt,
  className,
}: SourceBadgeProps) {
  if (sources.length === 0 && !lastVerifiedAt) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
        className,
      )}
    >
      <span className="font-medium uppercase tracking-wide">Sources</span>
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-border underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
            >
              {source.label}
              <ExternalLink aria-hidden className="size-3" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </li>
        ))}
      </ul>
      {lastVerifiedAt && (
        <span className="text-muted-foreground">
          · Vérifié le {lastVerifiedAt}
        </span>
      )}
    </div>
  );
}

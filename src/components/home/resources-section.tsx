import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { OfficialSource } from "@/lib/types";

/**
 * Sites officiels référencés.
 * Aucun logo institutionnel n'est reproduit : uniquement des liens textuels.
 */
const OFFICIAL_SOURCES: readonly OfficialSource[] = [
  { label: "Registre National des Entreprises", url: "https://home.registre-entreprises.tn/" },
  { label: "APII — Guichet unique", url: "https://www.tunisieindustrie.nat.tn/" },
  { label: "Ministère des Finances — Fiscalité", url: "https://www.finances.gov.tn/" },
  { label: "CNSS", url: "https://www.cnss.tn/" },
  { label: "Startup Tunisia", url: "https://startup.gov.tn/fr" },
  { label: "INNORPI", url: "https://www.innorpi.tn/" },
];

/** Section « Ressources officielles » : liens sortants explicites. */
export function ResourcesSection() {
  return (
    <section
      aria-labelledby="ressources-titre"
      className="border-b border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Aller à la source"
          title="Ressources officielles"
          description="Les démarches réelles se font toujours sur les sites des autorités compétentes. Voici les portails de référence."
        />

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICIAL_SOURCES.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary/40"
              >
                <span className="text-sm font-medium">{source.label}</span>
                <ExternalLink
                  aria-hidden
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
                <span className="sr-only">site officiel, nouvel onglet</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm">
          <Link
            href="/ressources/sources"
            className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Consulter la liste complète des sources et leurs dates de vérification
          </Link>
        </p>
      </div>
    </section>
  );
}

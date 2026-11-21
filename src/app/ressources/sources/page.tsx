import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";
import { VerificationStatus } from "@/components/verification-status";
import { OFFICIAL_SOURCES, SOURCES_VERIFIED_AT } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Sources officielles",
  description:
    "La liste des sites officiels utilisés pour vérifier les informations du guide, avec leur statut de vérification et d'accès.",
};

const ACCESS_LABEL = {
  accessible: "Consulté",
  partial: "Consulté partiellement",
  unavailable: "Non accessible lors de la vérification",
} as const;

const CATEGORY_LABEL = {
  "legal-text": "Texte officiel",
  administration: "Administration",
  portal: "Portail officiel",
  support: "Source secondaire",
} as const;

export default function SourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Sources officielles"
        intro="La crédibilité du guide repose sur ses sources. Voici celles qui ont été auditées, avec leur statut de vérification et leur statut d'accès réel."
        status="verified"
        lastVerifiedAt={SOURCES_VERIFIED_AT}
      />

      <div className="mt-8 space-y-6">
        <Notice variant="info" title="Comment lire ce registre">
          Le <strong>statut de vérification</strong> indique le niveau atteint
          pour les informations puisées dans la source : « Vérifié » (source
          primaire consultée), « À confirmer » (non confirmée de façon
          indépendante), « Périmé » (validité incertaine) ou « Source
          inaccessible ». Le <strong>statut d&apos;accès</strong> indique si le
          site a effectivement répondu lors de la dernière vérification. Une
          source injoignable reste listée&nbsp;: elle n&apos;est jamais retirée
          du registre.
        </Notice>

        <section aria-labelledby="sources-titre">
          <SectionHeading title="Sites officiels référencés" />
          <ul className="mt-6 space-y-3">
            {OFFICIAL_SOURCES.map((source) => (
              <li
                key={source.url}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-base font-semibold">{source.authority}</p>
                    <p className="text-sm text-muted-foreground">
                      {source.domain}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <VerificationStatus status={source.status} />
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {ACCESS_LABEL[source.accessStatus]}
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5">
                    {CATEGORY_LABEL[source.category]}
                  </span>
                  <span>Vérifié le {source.lastVerifiedAt}</span>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {source.url.replace(/^https?:\/\//, "")}
                  <ExternalLink aria-hidden className="size-3.5" />
                  <span className="sr-only">site officiel, nouvel onglet</span>
                </a>

                {source.notes && (
                  <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                    {source.notes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm">
          <Link
            href="/ressources/references"
            className="inline-flex items-center gap-1.5 font-medium text-primary"
          >
            Voir les références juridiques
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </p>
      </div>
    </div>
  );
}

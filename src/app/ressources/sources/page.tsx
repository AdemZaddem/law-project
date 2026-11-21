import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";
import { OFFICIAL_SOURCES, SOURCES_VERIFIED_AT } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Sources officielles",
  description:
    "La liste des sites officiels utilisés pour vérifier les informations du guide, avec leur statut d'accès.",
};

const ACCESS_LABEL = {
  accessible: "Consulté",
  partial: "Consulté partiellement",
  inaccessible: "Non accessible au moment de la vérification",
} as const;

export default function SourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Sources officielles"
        intro="La crédibilité du guide repose sur ses sources. Voici celles qui ont été consultées, avec leur statut d'accès réel."
        status="verified"
        lastVerifiedAt={SOURCES_VERIFIED_AT}
      />

      <div className="mt-8 space-y-6">
        <Notice variant="info" title="Comment lire ce registre">
          « Consulté » signifie que la page a été effectivement ouverte et
          vérifiée à la date indiquée. Un accès « partiel » ou « non
          accessible » signifie que l&apos;information a été relevée autrement
          et doit être revérifiée avant publication.
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
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {ACCESS_LABEL[source.accessStatus]}
                  </span>
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

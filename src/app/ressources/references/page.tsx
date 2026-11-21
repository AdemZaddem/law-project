import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { LegalReference } from "@/components/legal-reference";
import { VerificationStatus } from "@/components/verification-status";
import { Notice } from "@/components/notice";
import { LEGAL_REFERENCES, SOURCES_VERIFIED_AT } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Références juridiques",
  description:
    "Les textes de référence identifiés par le guide, avec leur statut de vérification.",
};

const AREA_LABELS = {
  creation: "Création d'entreprise",
  startup: "Startup Act",
  ip: "Propriété industrielle",
} as const;

export default function LegalReferencesPage() {
  const areas = Object.keys(AREA_LABELS) as (keyof typeof AREA_LABELS)[];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Références juridiques"
        intro="Chaque affirmation du guide doit pouvoir remonter à un texte. Voici ceux qui ont été identifiés et leur statut de vérification."
        lastVerifiedAt={SOURCES_VERIFIED_AT}
      />

      <div className="mt-8 space-y-10">
        <Notice variant="info" title="Deux statuts, deux niveaux de confiance">
          « Vérifié » signifie que le texte a été consulté. « À confirmer »
          signifie que la référence a été repérée mais que le texte n&apos;a pas
          encore été lu intégralement&nbsp;: aucune affirmation détaillée ne
          s&apos;appuiera dessus en l&apos;état.
        </Notice>

        {areas.map((area) => {
          const entries = LEGAL_REFERENCES.filter((ref) => ref.area === area);
          if (entries.length === 0) return null;

          return (
            <section key={area} aria-labelledby={`ref-${area}`}>
              <SectionHeading title={AREA_LABELS[area]} />
              <ul className="mt-5 space-y-3">
                {entries.map((ref) => (
                  <li
                    key={ref.title}
                    className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="min-w-0 flex-1 space-y-2">
                      <LegalReference
                        title={ref.title}
                        detail={ref.detail}
                        url={ref.url}
                        className="border-0 bg-transparent p-0"
                      />
                      {ref.note && (
                        <p className="text-xs text-muted-foreground">
                          {ref.note}
                        </p>
                      )}
                    </div>
                    <VerificationStatus
                      status={ref.status}
                      className="shrink-0"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

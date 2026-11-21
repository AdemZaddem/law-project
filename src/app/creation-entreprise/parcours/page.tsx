import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Guide de création étape par étape",
  description:
    "Le déroulé des démarches de création d'entreprise en Tunisie, étape par étape, avec l'autorité compétente.",
};

/** Étapes du parcours : structure du guide, détails à rédiger. */
const STEPS = [
  {
    slug: "dossier",
    title: "Dénomination et constitution du dossier",
    description:
      "Réserver la dénomination, réunir les statuts et les pièces justificatives.",
  },
  {
    slug: "guichet-apii",
    title: "Dépôt au Guichet Unique de l'APII",
    description:
      "Déposer le dossier de constitution et suivre son traitement.",
  },
  {
    slug: "rne",
    title: "Immatriculation au RNE",
    description:
      "Obtenir l'immatriculation et l'identifiant unique de l'entreprise.",
  },
  {
    slug: "identifiant-fiscal",
    title: "Identifiant fiscal",
    description:
      "Effectuer la déclaration d'existence auprès de l'administration fiscale.",
  },
  {
    slug: "affiliation-sociale",
    title: "Affiliation sociale",
    description:
      "Affilier l'employeur et les salariés auprès de l'organisme compétent.",
  },
  {
    slug: "apres-immatriculation",
    title: "Après l'immatriculation",
    description:
      "Formalités complémentaires, déclarations et suivi des obligations.",
  },
] as const;

export default function CreationJourneyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Création d'entreprise"
        title="Le parcours de création, étape par étape"
        intro="Six étapes présentées dans l'ordre. Chaque étape aura sa page : l'autorité compétente, les pièces, les délais et les sources."
        status="pending"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem]">
        <div>
          <SectionHeading title="Les six étapes" />
          <ol className="mt-6 space-y-3">
            {STEPS.map((step, index) => (
              <li key={step.slug}>
                <Link
                  href={`/creation-entreprise/parcours/${step.slug}`}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary/40"
                >
                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium"
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold leading-snug">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Notice variant="warning" title="Structure en cours de rédaction">
              L&apos;ordre des étapes est établi. Le détail de chacune —
              pièces, délais, redevances — sera publié uniquement après
              vérification auprès des autorités compétentes.
            </Notice>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Ressource
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Les pièces à réunir sont rassemblées dans une checklist
              dédiée, filtrable par forme juridique.
            </p>
            <Link
              href="/creation-entreprise/documents"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Voir les documents
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PillarLinks } from "@/components/pillar-links";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Création d'entreprise en Tunisie",
  description:
    "Choisir une forme juridique, suivre la procédure étape par étape, préparer les documents et connaître ses obligations.",
};

const ENTRIES = [
  {
    href: "/creation-entreprise/formes-juridiques",
    title: "Comprendre les formes juridiques",
    description:
      "Entreprise individuelle, SUARL, SARL, SA et formes de personnes : définitions et critères de choix.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/comparer",
    title: "Comparer les formes juridiques",
    description:
      "Un tableau pour mettre les formes côte à côte selon les critères qui comptent.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/choisir",
    title: "Choisir une forme juridique",
    description:
      "Un assistant indicatif, en quelques questions, pour identifier les formes adaptées à votre projet.",
  },
  {
    href: "/creation-entreprise/parcours",
    title: "Guide de création étape par étape",
    description:
      "Le déroulé des démarches administratives, avec l'autorité compétente à chaque étape.",
  },
  {
    href: "/creation-entreprise/documents",
    title: "Documents nécessaires",
    description:
      "Les pièces à préparer, selon la forme choisie et l'étape atteinte.",
  },
  {
    href: "/creation-entreprise/autorites",
    title: "Autorités administratives",
    description:
      "Qui fait quoi : RNE, APII, impôts, CNSS et autres organismes compétents.",
  },
  {
    href: "/creation-entreprise/obligations/fiscales",
    title: "Obligations fiscales",
    description:
      "Les déclarations et obligations qui pèsent sur l'entreprise après sa création.",
  },
  {
    href: "/creation-entreprise/obligations/sociales",
    title: "Obligations sociales",
    description:
      "L'affiliation et les déclarations liées au personnel salarié.",
  },
] as const;

/** Étapes du parcours, à détailer lors de la rédaction des guides. */
const STEPS = [
  "Dénomination et constitution du dossier",
  "Dépôt au Guichet Unique de l'APII",
  "Immatriculation au RNE",
  "Identifiant fiscal",
  "Affiliation sociale",
  "Après l'immatriculation",
];

export default function CreationHubPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Création d'entreprise"
        title="Créer une entreprise en Tunisie"
        intro="Un pilier complet pour comprendre les formes juridiques, réaliser les démarches auprès des bonnes autorités et connaître vos obligations."
        status="pending"
      />

      <section aria-labelledby="entrees-titre" className="mt-10">
        <SectionHeading
          title="Explorer le pilier"
          description="Huit portes d'entrée, de la réflexion initiale jusqu'aux obligations post-création."
        />
        <div className="mt-6">
          <PillarLinks items={ENTRIES} accent="creation" />
        </div>
      </section>

      <section aria-labelledby="etapes-titre" className="mt-12">
        <SectionHeading
          title="Le parcours en six étapes"
          description="Le déroulé général du guide. Chaque étape fera l'objet d'une page dédiée."
        />
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
            >
              <span
                aria-hidden
                className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium"
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium leading-snug">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10 max-w-3xl">
        <Notice variant="warning" title="Contenu en cours de rédaction">
          Ce pilier est en cours de construction. Les étapes sont listées à titre
          de structure&nbsp;; les détails, pièces et délais seront publiés
          uniquement après vérification sur les sources officielles.
        </Notice>
      </div>
    </div>
  );
}

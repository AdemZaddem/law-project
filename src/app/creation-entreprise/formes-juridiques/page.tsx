import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PillarLinks } from "@/components/pillar-links";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Les formes juridiques en Tunisie",
  description:
    "Comprendre, comparer et choisir entre entreprise individuelle, SUARL, SARL, SA et autres formes de sociétés.",
};

const FORMS = [
  {
    href: "/creation-entreprise/formes-juridiques/ei",
    title: "Entreprise individuelle",
    description:
      "Une activité exercée par une seule personne, sans société constituée.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/suarl",
    title: "SUARL",
    description: "Société unipersonnelle à responsabilité limitée.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/sarl",
    title: "SARL",
    description: "Société à responsabilité limitée, à plusieurs associés.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/sa",
    title: "SA",
    description: "Société anonyme, en actions.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/snc-scs",
    title: "SNC et SCS",
    description: "Sociétés de personnes, en responsabilité solidaire ou en commandite.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/gie",
    title: "GIE",
    description: "Groupement d'intérêt économique.",
  },
] as const;

const TOOLS = [
  {
    href: "/creation-entreprise/formes-juridiques/comparer",
    title: "Comparer les formes",
    description: "Mettre les formes côte à côte selon les critères qui comptent.",
  },
  {
    href: "/creation-entreprise/formes-juridiques/choisir",
    title: "Choisir une forme",
    description: "Un assistant indicatif en quelques questions.",
  },
] as const;

export default function LegalFormsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Création d'entreprise"
        title="Comprendre les formes juridiques"
        intro="Le choix de la forme conditionne le nombre d'associés, les formalités de constitution et la responsabilité de chacun."
        status="pending"
      />

      <section aria-labelledby="formes-titre" className="mt-10">
        <SectionHeading
          title="Les formes du guide"
          description="Quatre formes détaillées progressivement, trois formes présentées de façon plus courte."
        />
        <div className="mt-6">
          <PillarLinks items={FORMS} accent="creation" />
        </div>
      </section>

      <section aria-labelledby="outils-titre" className="mt-12">
        <SectionHeading title="Deux outils pour décider" />
        <div className="mt-6">
          <PillarLinks items={TOOLS} accent="creation" />
        </div>
      </section>

      <div className="mt-10 max-w-3xl space-y-4">
        <Notice variant="warning" title="Montants de capital masqués">
          Les montants de capital minimum ne sont pas encore confirmés sur le
          texte officiel du Code des sociétés&nbsp;: ils sont volontairement
          masqués jusqu&apos;à vérification, plutôt qu&apos;affichés à tort.
        </Notice>
        <Notice variant="disclaimer">
          Ces pages décriront des formes juridiques à titre informatif. Elles ne
          constituent pas un conseil juridique.
        </Notice>
      </div>
    </div>
  );
}

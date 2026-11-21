import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";

/** Formes couvertes par le guide. */
const FORMS = {
  ei: {
    title: "Entreprise individuelle",
    intro:
      "L'activité exercée par une seule personne en son nom propre : la forme la plus directe, sans société constituée.",
    detail: true,
  },
  suarl: {
    title: "SUARL",
    intro:
      "La société unipersonnelle à responsabilité limitée : une société à un seul associé, avec responsabilité limitée aux apports.",
    detail: true,
  },
  sarl: {
    title: "SARL",
    intro:
      "La société à responsabilité limitée : la forme la plus répandue pour les projets à plusieurs associés.",
    detail: true,
  },
  sa: {
    title: "SA",
    intro:
      "La société anonyme : une société par actions, destinée aux projets de plus grande ampleur ou à l'entrée d'actionnaires.",
    detail: true,
  },
  "snc-scs": {
    title: "SNC et SCS",
    intro:
      "Deux sociétés de personnes : la société en nom collectif et la société en commandite simple.",
    detail: false,
  },
  gie: {
    title: "GIE",
    intro:
      "Le groupement d'intérêt économique : une structure de coopération entre entreprises, sans activité commerciale propre.",
    detail: false,
  },
} as const;

type FormKey = keyof typeof FORMS;

/** Liste fermée : toute forme inconnue renvoie une 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(FORMS).map((forme) => ({ forme }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ forme: string }>;
}): Promise<Metadata> {
  const { forme } = await params;
  const form = FORMS[forme as FormKey];
  if (!form) return { title: "Forme juridique" };
  return {
    title: `${form.title} — forme juridique`,
    description: form.intro,
  };
}

export default async function LegalFormPage({
  params,
}: {
  params: Promise<{ forme: string }>;
}) {
  const { forme } = await params;
  const form = FORMS[forme as FormKey];

  if (!form) {
    notFound();
  }

  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title={form.title}
      intro={form.intro}
      outline={
        form.detail
          ? [
              "Définition et logique de la forme",
              "Nombre de fondateurs et d'associés",
              "Responsabilité (montants de capital masqués jusqu'à confirmation)",
              "Gestion et organes de direction",
              "Avantages et inconvénients",
              "Formalités de création et renvoi vers les étapes du parcours",
              "Références juridiques et sources officielles",
            ]
          : [
              "Présentation brève de la forme",
              "Points de vigilance principaux",
              "Renvoi vers les formes détaillées et le parcours de création",
            ]
      }
      next={{
        primary: {
          href: "/creation-entreprise/parcours",
          label: "Voir les étapes de création",
        },
        secondary: {
          href: "/creation-entreprise/formes-juridiques/comparer",
          label: "Comparer avec d'autres formes",
        },
      }}
    />
  );
}

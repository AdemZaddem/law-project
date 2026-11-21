import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";

const STEPS = {
  dossier: {
    title: "Dénomination et constitution du dossier",
    intro:
      "Première étape : réserver la dénomination, rédiger les statuts et réunir les pièces justificatives.",
  },
  "guichet-apii": {
    title: "Dépôt au Guichet Unique de l'APII",
    intro:
      "Déposer le dossier de constitution auprès du Guichet Unique et suivre son traitement.",
  },
  rne: {
    title: "Immatriculation au RNE",
    intro:
      "Obtenir l'immatriculation au Registre national des entreprises et l'identifiant unique.",
  },
  "identifiant-fiscal": {
    title: "Identifiant fiscal",
    intro:
      "Déclarer l'existence de l'entreprise auprès de l'administration fiscale et obtenir l'identifiant fiscal.",
  },
  "affiliation-sociale": {
    title: "Affiliation sociale",
    intro:
      "Affilier l'employeur et déclarer le personnel auprès de l'organisme de sécurité sociale.",
  },
  "apres-immatriculation": {
    title: "Après l'immatriculation",
    intro:
      "Formalités complémentaires, premières déclarations et entrée dans la vie normale de l'entreprise.",
  },
} as const;

type StepKey = keyof typeof STEPS;

/** Liste fermée : toute étape inconnue renvoie une 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STEPS).map((etape) => ({ etape }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ etape: string }>;
}): Promise<Metadata> {
  const { etape } = await params;
  const step = STEPS[etape as StepKey];
  if (!step) return { title: "Étape de création" };
  return { title: step.title, description: step.intro };
}

export default async function CreationStepPage({
  params,
}: {
  params: Promise<{ etape: string }>;
}) {
  const { etape } = await params;
  const step = STEPS[etape as StepKey];

  if (!step) {
    notFound();
  }

  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title={step.title}
      intro={step.intro}
      outline={[
        "Objectif de l'étape",
        "Autorité compétente",
        "Pièces à fournir (checklist)",
        "Délais et redevances, après vérification officielle",
        "Cas particuliers selon la forme juridique et l'activité",
        "Références juridiques et sources",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/parcours",
          label: "Retour au parcours complet",
        },
        secondary: {
          href: "/creation-entreprise/autorites",
          label: "Voir les autorités compétentes",
        },
      }}
    />
  );
}

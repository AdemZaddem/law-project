import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Documents nécessaires à la création",
  description:
    "Les pièces justificatives à préparer pour créer une entreprise en Tunisie, selon la forme choisie et l'étape.",
};

export default function DocumentsPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Documents nécessaires"
      intro="Une checklist filtrable par forme juridique et par étape, à cocher au fur et à mesure et à imprimer avant le dépôt du dossier."
      outline={[
        "Filtres : forme juridique et étape de la procédure",
        "Pièces d'identité, justificatifs de siège, statuts",
        "Mention de la source de chaque exigence",
        "Conservation locale des cases cochées, sans compte ni serveur",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/parcours",
          label: "Voir le parcours étape par étape",
        },
        secondary: {
          href: "/creation-entreprise/formes-juridiques",
          label: "Choisir une forme juridique",
        },
      }}
    />
  );
}

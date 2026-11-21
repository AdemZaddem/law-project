import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Choisir une forme juridique",
  description:
    "Assistant indicatif pour identifier les formes juridiques adaptées à votre projet, en quelques questions.",
};

export default function ChooseLegalFormPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Choisir une forme juridique"
      intro="Un assistant indicatif, en quelques questions, qui propose les formes les plus adaptées à votre situation et explique pourquoi."
      outline={[
        "Nombre de fondateurs",
        "Besoin de protection du patrimoine personnel",
        "Activité réglementée éventuelle",
        "Perspectives de levée de fonds ou d'entrée d'investisseurs",
        "Résultat : une forme recommandée, une alternative, et les limites de la recommandation",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/formes-juridiques/comparer",
          label: "Voir le comparatif",
        },
        secondary: {
          href: "/creation-entreprise/formes-juridiques",
          label: "Retour aux formes juridiques",
        },
      }}
    />
  );
}

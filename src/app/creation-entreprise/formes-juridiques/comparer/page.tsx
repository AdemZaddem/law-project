import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Comparer les formes juridiques",
  description:
    "Tableau comparatif des formes juridiques tunisiennes : associés, responsabilité, gestion et formalités.",
};

export default function CompareLegalFormsPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Comparer les formes juridiques"
      intro="Un tableau pour mettre l'entreprise individuelle, la SUARL, la SARL et la SA côte à côte selon les critères qui comptent pour votre projet."
      outline={[
        "Nombre de fondateurs et de associés",
        "Responsabilité des associés et de l'exploitant",
        "Organes de gestion",
        "Formalités de constitution",
        "Indicateurs non encore vérifiés, affichés avec la mention « À confirmer »",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/formes-juridiques/choisir",
          label: "Passer à l'assistant de choix",
        },
        secondary: {
          href: "/creation-entreprise/formes-juridiques",
          label: "Retour aux formes juridiques",
        },
      }}
    />
  );
}

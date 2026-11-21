import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Procédure de candidature au Startup Label",
  description:
    "Les étapes de la candidature en ligne au Startup Label : préparation, soumission, examen et décision.",
};

export default function LabelProcedurePage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Procédure de candidature"
      intro="Un parcours en ligne, en plusieurs étapes, avec deux variantes selon que la société existe déjà ou non."
      outline={[
        "Préparation du dossier et création du compte",
        "Soumission pendant les sessions ouvertes",
        "Examen du dossier et critères vérifiés en premier",
        "Décision et suites à donner",
        "Délais réglementaires, avec leur source officielle",
        "Lien vers le portail officiel de candidature",
      ]}
      next={{
        primary: {
          href: "/startup-act/label/criteres",
          label: "Vérifier les critères",
        },
        secondary: {
          href: "/startup-act/obligations",
          label: "Les obligations du label",
        },
      }}
    />
  );
}

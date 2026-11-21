import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Le Startup Label",
  description:
    "Ce qu'est le Startup Label, à qui il s'adresse et ce qu'il change pour une société en Tunisie.",
};

export default function StartupLabelPage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Comprendre le Startup Label"
      intro="Le label est la condition d'accès aux avantages du Startup Act : sans label valide, aucune incitation du régime n'est ouverte."
      outline={[
        "Le label comme condition d'accès au régime",
        "La distinction société / label",
        "La durée de validité du label",
        "Le lien avec le Pré-label pour les projets non encore constitués",
        "Références : loi et décret d'application",
      ]}
      next={{
        primary: {
          href: "/startup-act/label/criteres",
          label: "Voir les critères d'éligibilité",
        },
        secondary: {
          href: "/startup-act",
          label: "Retour au Startup Act",
        },
      }}
    />
  );
}

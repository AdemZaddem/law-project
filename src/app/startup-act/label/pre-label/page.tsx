import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Le Pré-label Startup",
  description:
    "Le parcours de pré-label pour les projets qui n'ont pas encore constitué leur société.",
};

export default function PreLabelPage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Le Pré-label"
      intro="Le pré-label s'adresse aux porteurs de projet qui n'ont pas encore créé leur société : il ouvre un délai pour la constituer."
      outline={[
        "À qui s'adresse le pré-label",
        "Le déroulé de la candidature avant constitution",
        "Le délai dont dispose le porteur pour créer la société",
        "Ce que le pré-label ne remplace pas (immatriculation, label)",
      ]}
      next={{
        primary: {
          href: "/startup-act/label/procedure",
          label: "Voir la procédure de candidature",
        },
        secondary: {
          href: "/creation-entreprise",
          label: "Créer la société",
        },
      }}
    />
  );
}

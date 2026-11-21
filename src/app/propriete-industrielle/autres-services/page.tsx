import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Autres services INNORPI",
  description:
    "Normalisation, certification, recherche d'antériorité et publications de l'INNORPI.",
};

export default function OtherIpServicesPage() {
  return (
    <PlaceholderPage
      pillar="Propriété industrielle"
      title="Autres services"
      intro="Au-delà des titres de propriété, l'INNORPI assure la normalisation, la certification et la publication officielle."
      outline={[
        "La normalisation et les normes tunisiennes",
        "La certification des produits et des systèmes",
        "La recherche d'antériorité",
        "L'officiel de la propriété industrielle",
        "L'Académie de la propriété industrielle",
      ]}
      next={{
        primary: {
          href: "/propriete-industrielle",
          label: "Retour aux services INNORPI",
        },
        secondary: {
          href: "/ressources/sources",
          label: "Voir les sources officielles",
        },
      }}
    />
  );
}

import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Dessins et modèles industriels — INNORPI",
  description:
    "Protéger l'apparence d'un produit par un dessin ou modèle industriel en Tunisie.",
};

export default function DesignsPage() {
  return (
    <PlaceholderPage
      pillar="Propriété industrielle"
      title="Dessins et modèles industriels"
      intro="La protection de l'apparence d'un produit — lignes, couleurs, formes — par un dépôt auprès de l'INNORPI."
      outline={[
        "Ce que couvre un dessin ou modèle industriel",
        "Les pièces du dépôt (déclaration et reproduction)",
        "Les durées de protection et leur renouvellement",
        "Les tarifs, affichés avec leur statut de vérification",
      ]}
      next={{
        primary: {
          href: "/propriete-industrielle",
          label: "Retour aux services INNORPI",
        },
        secondary: {
          href: "/propriete-industrielle/marques",
          label: "Voir les marques",
        },
      }}
    />
  );
}

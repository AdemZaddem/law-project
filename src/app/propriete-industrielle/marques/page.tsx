import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Enregistrement d'une marque — INNORPI",
  description:
    "La procédure d'enregistrement d'une marque de fabrique, de commerce ou de services en Tunisie.",
};

export default function TrademarkPage() {
  return (
    <PlaceholderPage
      pillar="Propriété industrielle"
      title="Enregistrement d'une marque"
      intro="Les pièces à fournir, les étapes du dépôt et le suivi de l'enregistrement auprès de l'INNORPI."
      outline={[
        "Ce que protège l'enregistrement d'une marque",
        "Les pièces du dossier de dépôt",
        "La procédure et le suivi du dossier",
        "Le renouvellement et les formalités de maintenance",
        "Les tarifs, affichés avec leur source et leur statut de vérification",
      ]}
      next={{
        primary: {
          href: "/propriete-industrielle",
          label: "Retour aux services INNORPI",
        },
        secondary: {
          href: "/propriete-industrielle/brevets",
          label: "Voir le dépôt de brevet",
        },
      }}
    >
      <Notice variant="warning" title="Tarifs à revérifier">
        Les tarifs relevés sur le site de l&apos;INNORPI doivent être
        confirmés auprès de l&apos;institut avant toute démarche. Ils seront
        publiés avec la mention « À confirmer » tant que cette vérification
        n&apos;est pas faite.
      </Notice>
    </PlaceholderPage>
  );
}

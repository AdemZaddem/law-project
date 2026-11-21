import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Obligations sociales",
  description:
    "Affiliation de l'employeur et déclarations de sécurité sociale en Tunisie.",
};

export default function SocialObligationsPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Obligations sociales"
      intro="Dès l'embauche du premier salarié, des obligations d'affiliation et de déclaration s'ouvrent auprès de l'organisme de sécurité sociale."
      outline={[
        "L'affiliation de l'employeur",
        "L'affiliation des salariés",
        "Les déclarations de salaires et leur périodicité",
        "Pièces à fournir et bureau compétent",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/obligations/fiscales",
          label: "Voir les obligations fiscales",
        },
        secondary: {
          href: "/creation-entreprise/autorites",
          label: "Voir les autorités compétentes",
        },
      }}
    >
      <Notice variant="warning" title="Informations à confirmer">
        Les délais, taux et pièces exigées seront publiés après vérification
        directe auprès de l&apos;organisme de sécurité sociale.
      </Notice>
    </PlaceholderPage>
  );
}

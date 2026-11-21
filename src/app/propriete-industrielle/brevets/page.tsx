import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Dépôt d'un brevet d'invention — INNORPI",
  description:
    "Les conditions de brevetabilité, le dossier de demande de brevet et son examen en Tunisie.",
};

export default function PatentPage() {
  return (
    <PlaceholderPage
      pillar="Propriété industrielle"
      title="Dépôt d'un brevet d'invention"
      intro="Un résumé procédural fondé sur la loi n° 2000-84 du 24 août 2000 relative aux brevets d'invention."
      outline={[
        "Les conditions de brevetabilité (nouveauté, activité inventive, application industrielle)",
        "Qui peut déposer, et la règle du mandataire pour les non-résidents",
        "Les pièces du dossier de demande",
        "L'examen, la publication et la délivrance",
        "La durée de protection et les annuités",
        "Les redevances : fixées par décret, et non par la loi elle-même",
      ]}
      next={{
        primary: {
          href: "/propriete-industrielle",
          label: "Retour aux services INNORPI",
        },
        secondary: {
          href: "/ressources/references",
          label: "Références juridiques",
        },
      }}
    >
      <Notice variant="info" title="Portée de ce guide">
        Ce guide s&apos;appuie sur le texte de la loi n° 2000-84. Ce texte ne
        fixe pas lui-même les montants des redevances&nbsp;: ceux-ci relèvent
        de textes d&apos;application ultérieurs, à vérifier avant toute
        démarche.
      </Notice>
    </PlaceholderPage>
  );
}

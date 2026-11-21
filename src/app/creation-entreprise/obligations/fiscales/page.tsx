import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Obligations fiscales",
  description:
    "Les obligations fiscales d'une entreprise en Tunisie après son immatriculation.",
};

export default function TaxObligationsPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Obligations fiscales"
      intro="Après l'immatriculation, l'entreprise entre dans son régime déclaratif : déclaration d'existence, déclarations périodiques et obligations annuelles."
      outline={[
        "La déclaration d'existence et l'identifiant fiscal",
        "Les déclarations récurrentes, à confirmer auprès de l'administration fiscale",
        "Les obligations annuelles",
        "Références : code de l'impôt sur le revenu et textes associés",
      ]}
      next={{
        primary: {
          href: "/creation-entreprise/obligations/sociales",
          label: "Voir les obligations sociales",
        },
        secondary: {
          href: "/creation-entreprise/parcours/apres-immatriculation",
          label: "Étape après immatriculation",
        },
      }}
    >
      <Notice variant="warning" title="Informations à confirmer">
        Les taux, échéances et modalités pratiques ne sont pas encore
        vérifiés&nbsp;: ils seront affichés avec la mention « À confirmer »
        jusqu&apos;à confirmation sur une source officielle.
      </Notice>
    </PlaceholderPage>
  );
}

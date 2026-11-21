import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Critères d'éligibilité au Startup Label",
  description:
    "Les cinq critères à remplir pour prétendre au Startup Label en Tunisie.",
};

const CRITERIA = [
  "Âge de la société",
  "Taille : effectif et seuils financiers",
  "Indépendance du capital",
  "Innovation du modèle économique",
  "Scalabilité du projet et maturité du produit",
];

export default function LabelCriteriaPage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Critères d'éligibilité"
      intro="Cinq critères, présentés un par un avec leur seuil exact, leur source officielle et leur date de vérification."
      outline={CRITERIA}
      next={{
        primary: {
          href: "/startup-act/label/procedure",
          label: "Voir la procédure de candidature",
        },
        secondary: {
          href: "/startup-act/label/pre-label",
          label: "Comprendre le Pré-label",
        },
      }}
    >
      <div className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Un assistant d&apos;éligibilité indicatif sera proposé sur cette
          page. Il s&apos;exécutera <strong>entièrement dans votre
          navigateur</strong>&nbsp;: aucune réponse n&apos;est enregistrée ni
          transmise.
        </p>
      </div>
    </PlaceholderPage>
  );
}

import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Avantages du Startup Label",
  description:
    "Les avantages ouverts par le Startup Label pour la société, les fondateurs et les investisseurs.",
};

export default function StartupBenefitsPage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Avantages"
      intro="Le label ouvre des avantages pour la société, pour les fondateurs et pour les investisseurs — chacun avec ses conditions propres."
      outline={[
        "Avantages pour la société labellisée",
        "Avantages pour les entrepreneurs et fondateurs",
        "Avantages pour les investisseurs",
        "Conditions de chaque avantage et déclencheurs précis",
        "Distinction entre avantage ouvert par le label et mesures générales",
      ]}
      next={{
        primary: {
          href: "/startup-act/obligations",
          label: "Voir les obligations du label",
        },
        secondary: {
          href: "/startup-act/label/procedure",
          label: "Comment obtenir le label",
        },
      }}
    />
  );
}

import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Obligations et retrait du Startup Label",
  description:
    "Les obligations d'une startup labellisée et la procédure de retrait du label.",
};

export default function StartupObligationsPage() {
  return (
    <PlaceholderPage
      pillar="Startup Act"
      title="Obligations et retrait du label"
      intro="Le label ouvre des avantages, mais il impose aussi un suivi : objectifs, comptabilité, notification des changements, sous peine de retrait."
      outline={[
        "Les obligations pendant la validité du label",
        "Les échéances de comptabilité et de notification",
        "Les contrôles et les étapes de la procédure de retrait",
        "Les effets de la perte du label sur les avantages",
      ]}
      next={{
        primary: {
          href: "/startup-act/avantages",
          label: "Revoir les avantages",
        },
        secondary: {
          href: "/startup-act/label/criteres",
          label: "Revoir les critères",
        },
      }}
    />
  );
}

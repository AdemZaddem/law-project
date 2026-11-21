import type { Metadata } from "next";
import { PillarLayout } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Création d'entreprise en Tunisie",
  description:
    "Formes juridiques, procédure administrative, documents, autorités et obligations : le parcours de création d'entreprise en Tunisie.",
};

export default function CreationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PillarLayout pillar="creation">{children}</PillarLayout>;
}

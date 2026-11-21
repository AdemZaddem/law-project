import type { Metadata } from "next";
import { PillarLayout } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Propriété industrielle et INNORPI",
  description:
    "Marques, brevets d'invention, dessins et modèles industriels : les services de l'INNORPI expliqués pas à pas.",
};

export default function IpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PillarLayout pillar="ip">{children}</PillarLayout>;
}

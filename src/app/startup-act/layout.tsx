import type { Metadata } from "next";
import { PillarLayout } from "@/components/pillar-layout";

export const metadata: Metadata = {
  title: "Startup Act et Startup Label",
  description:
    "Comprendre le Startup Act tunisien, les critères du Startup Label, la procédure de candidature, les avantages et les obligations.",
};

export default function StartupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PillarLayout pillar="startup">{children}</PillarLayout>;
}

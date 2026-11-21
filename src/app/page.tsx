import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { PillarsSection } from "@/components/home/pillars-section";
import { JourneySection } from "@/components/home/journey-section";
import { StartupSection } from "@/components/home/startup-section";
import { IpSection } from "@/components/home/ip-section";
import { ResourcesSection } from "@/components/home/resources-section";
import { FaqSection } from "@/components/home/faq-section";

export const metadata: Metadata = {
  title: "Créer une entreprise en Tunisie — guide indépendant",
  description:
    "Guide indépendant en français : formes juridiques, démarches de création, Startup Act et propriété industrielle en Tunisie.",
};

/** Page d'accueil du guide. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <JourneySection />
      <StartupSection />
      <IpSection />
      <ResourcesSection />
      <FaqSection />
    </>
  );
}

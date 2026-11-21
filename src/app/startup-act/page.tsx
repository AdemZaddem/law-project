import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PillarLinks } from "@/components/pillar-links";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Startup Act et Startup Label",
  description:
    "Comprendre le Startup Act, les critères du Startup Label, la procédure de candidature, les avantages et les obligations.",
};

const ENTRIES = [
  {
    href: "/startup-act",
    title: "Comprendre le Startup Act",
    description:
      "Le cadre légal du dispositif et la logique de labellisation qui structure les avantages.",
  },
  {
    href: "/startup-act/label",
    title: "Comprendre le Startup Label",
    description:
      "Ce que le label représente, à qui il s'adresse et ce qu'il change pour une société.",
  },
  {
    href: "/startup-act/label/criteres",
    title: "Critères d'éligibilité",
    description: "Les cinq critères à remplir pour prétendre au label.",
  },
  {
    href: "/startup-act/label/pre-label",
    title: "Le Pré-label",
    description:
      "Le parcours dédié aux projets qui n'ont pas encore constitué leur société.",
  },
  {
    href: "/startup-act/label/procedure",
    title: "Procédure de candidature",
    description:
      "Le déroulé de la candidature en ligne, les étapes et les points de contrôle.",
  },
  {
    href: "/startup-act/avantages",
    title: "Avantages",
    description:
      "Ce que le label ouvre pour la société, les fondateurs et les investisseurs.",
  },
  {
    href: "/startup-act/obligations",
    title: "Obligations et retrait",
    description:
      "Les engagements à respecter pendant la validité du label et les risques de retrait.",
  },
] as const;

export default function StartupHubPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Startup Act"
        title="Startup Act et Startup Label"
        intro="Comprendre le cadre du Startup Act, vérifier si votre projet remplit les critères du label et suivre la procédure de candidature."
        status="pending"
      />

      <section aria-labelledby="entrees-titre" className="mt-10">
        <SectionHeading
          title="Explorer le pilier"
          description="Du cadre légal jusqu'aux obligations qui surviennent après l'obtention du label."
        />
        <div className="mt-6">
          <PillarLinks items={ENTRIES} accent="startup" />
        </div>
      </section>

      <div className="mt-10 max-w-3xl">
        <Notice variant="warning" title="Contenu en cours de rédaction">
          Les critères, délais et avantages seront publiés après vérification
          sur les textes officiels et le portail des startups, avec indication
          des références et de la date de vérification.
        </Notice>
      </div>
    </div>
  );
}

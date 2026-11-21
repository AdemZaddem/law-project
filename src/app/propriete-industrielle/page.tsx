import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PillarLinks } from "@/components/pillar-links";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Propriété industrielle et INNORPI",
  description:
    "Marques, brevets d'invention, dessins et modèles industriels : les démarches INNORPI expliquées simplement.",
};

const ENTRIES = [
  {
    href: "/propriete-industrielle",
    title: "Les services de l'INNORPI",
    description:
      "Présentation de l'institut et de ses missions : marques, brevets, dessins, normalisation et certification.",
  },
  {
    href: "/propriete-industrielle/marques",
    title: "Enregistrement d'une marque",
    description:
      "Les pièces, la procédure et les étapes pour déposer une marque en Tunisie.",
  },
  {
    href: "/propriete-industrielle/brevets",
    title: "Dépôt d'un brevet",
    description:
      "Les conditions de brevetabilité, le dossier de demande et son examen.",
  },
  {
    href: "/propriete-industrielle/dessins-modeles",
    title: "Dessins et modèles industriels",
    description:
      "Protéger l'apparence d'un produit et les pièces à fournir.",
  },
  {
    href: "/propriete-industrielle/autres-services",
    title: "Autres services",
    description:
      "Normalisation, certification, recherche d'antériorité et publications officielles.",
  },
] as const;

export default function IpHubPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Propriété industrielle"
        title="Protéger ses droits auprès de l'INNORPI"
        intro="Marques, brevets d'invention et dessins et modèles : les démarches de propriété industrielle expliquées pas à pas."
        status="pending"
      />

      <section aria-labelledby="entrees-titre" className="mt-10">
        <SectionHeading
          title="Explorer le pilier"
          description="Un guide par type de protection, avec les pièces, la procédure et les textes de référence."
        />
        <div className="mt-6">
          <PillarLinks items={ENTRIES} accent="ip" />
        </div>
      </section>

      <div className="mt-10 max-w-3xl">
        <Notice variant="warning" title="Contenu en cours de rédaction">
          Les tarifs et procédures seront publiés après vérification directe
          auprès de l&apos;INNORPI. Les éléments non encore confirmés seront
          explicitement marqués « À confirmer ».
        </Notice>
      </div>
    </div>
  );
}

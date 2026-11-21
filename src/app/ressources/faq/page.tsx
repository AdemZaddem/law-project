import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Les questions les plus courantes sur la création d'entreprise, le Startup Act et la propriété industrielle en Tunisie.",
};

interface FaqGroup {
  title: string;
  items: readonly { question: string; answer: string }[];
}

const GROUPS: readonly FaqGroup[] = [
  {
    title: "Création d'entreprise",
    items: [
      {
        question: "Par quelle étape commencer pour créer une entreprise ?",
        answer:
          "Par le choix de la forme juridique : elle détermine le nombre d'associés, les formalités de constitution et la responsabilité de chacun.",
      },
      {
        question: "Quelle est la différence entre une SUARL et une SARL ?",
        answer:
          "La SUARL compte un seul associé, la SARL en compte plusieurs. Le guide détaillera les deux formes côte à côte, avec leurs points de vigilance.",
      },
      {
        question: "Une seule institution gère-t-elle toute la création ?",
        answer:
          "Non. Les démarches sont réparties entre plusieurs autorités : le dépôt du dossier, l'immatriculation, l'identifiant fiscal et les affiliations relèvent d'organismes différents.",
      },
      {
        question: "Ce site est-il un site officiel ?",
        answer:
          "Non. C'est un guide indépendant, fondé sur des sources officielles, sans aucune affiliation gouvernementale. Les démarches réelles se font sur les sites des autorités compétentes.",
      },
    ],
  },
  {
    title: "Startup Act",
    items: [
      {
        question: "Quelle différence entre pré-label et label ?",
        answer:
          "Le pré-label s'adresse à un projet qui n'a pas encore de société et lui laisse un délai pour la constituer ; le label est attribué à la société constituée qui respecte les critères.",
      },
      {
        question: "Peut-on créer une société sans label ?",
        answer:
          "Oui. La création donne l'existence juridique à la société ; le label ouvre l'accès aux avantages du Startup Act. Ce sont deux démarches indépendantes.",
      },
      {
        question: "Le label est-il définitif ?",
        answer:
          "Non. Il a une durée limitée et peut être retiré en cas de manquement aux obligations prévues par le cadre légal.",
      },
    ],
  },
  {
    title: "Propriété industrielle",
    items: [
      {
        question: "Faut-il un mandataire pour déposer un brevet ?",
        answer:
          "Un déposant domicilié hors de Tunisie doit constituer un mandataire établi en Tunisie, conformément à la loi n° 2000-84.",
      },
      {
        question: "Combien de temps dure la protection d'un brevet ?",
        answer:
          "La loi n° 2000-84 fixe une durée de vingt ans à compter de la date de dépôt, sous réserve du paiement des annuités.",
      },
      {
        question: "Où trouver les tarifs actuels de dépôt ?",
        answer:
          "Sur le site de l'INNORPI. Les tarifs relevés par le guide sont marqués « À confirmer » tant qu'ils n'ont pas été revérifiés directement auprès de l'institut.",
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Questions fréquentes"
        intro="Des réponses courtes aux questions les plus fréquentes, avec des renvois vers les guides détaillés."
        status="pending"
      />

      <div className="mt-10 space-y-10">
        {GROUPS.map((group) => (
          <section key={group.title} aria-labelledby={`faq-${group.title}`}>
            <SectionHeading as="h2" title={group.title} />
            <div className="mt-5">
              <FaqAccordion items={group.items} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

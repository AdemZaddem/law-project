import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Glossaire",
  description:
    "Les sigles et termes utilisés dans la création d'entreprise, le Startup Act et la propriété industrielle en Tunisie.",
};

interface GlossaryTerm {
  term: string;
  definition: string;
}

const TERMS: readonly GlossaryTerm[] = [
  { term: "APII", definition: "Agence de Promotion de l'Industrie et de l'Innovation." },
  { term: "BCT", definition: "Banque Centrale de Tunisie." },
  { term: "CNSS", definition: "Caisse Nationale de Sécurité Sociale." },
  { term: "DGI", definition: "Direction Générale des Impôts." },
  { term: "GIE", definition: "Groupement d'intérêt économique." },
  { term: "INNORPI", definition: "Institut National de la Normalisation et de la Propriété Industrielle." },
  { term: "Label Startup", definition: "Label de mérite ouvrant l'accès aux avantages du Startup Act, accordé à une société qui remplit les critères prévus." },
  { term: "POC", definition: "Proof of Concept — preuve de concept : démonstration qu'un projet fonctionne." },
  { term: "Pré-label", definition: "Décision destinée à un projet qui n'a pas encore constitué sa société, lui ouvrant un délai pour la créer." },
  { term: "RNE", definition: "Registre National des Entreprises." },
  { term: "SARL", definition: "Société à responsabilité limitée." },
  { term: "SA", definition: "Société anonyme." },
  { term: "SUARL", definition: "Société Unipersonnelle à Responsabilité Limitée." },
  { term: "TND", definition: "Dinar tunisien, monnaie de la Tunisie." },
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Glossaire"
        intro="Les sigles et termes que vous rencontrerez dans les guides, expliqués en une phrase."
        status="pending"
      />

      <div className="mt-8 max-w-3xl">
        <Notice variant="info">
          Ce glossaire décrit des termes à titre informatif. Pour les définitions
          juridiques opposables, seul le texte officiel fait foi.
        </Notice>

        <dl className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
          {TERMS.map((item) => (
            <div key={item.term} className="grid gap-1 p-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="font-mono text-[0.8125rem] font-medium text-primary">
                {item.term}
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

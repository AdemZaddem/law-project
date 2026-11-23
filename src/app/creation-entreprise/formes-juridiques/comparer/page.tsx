import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { LegalFormsComparisonTable } from "@/components/legal-forms-comparison-table";
import { LegalReference } from "@/components/legal-reference";
import { Notice } from "@/components/notice";
import { RequirementTag } from "@/components/requirement-tag";
import { VerificationStatus } from "@/components/verification-status";
import { ExternalOfficialLink } from "@/components/external-official-link";
import { LEGAL_REFERENCES } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Comparer les formes juridiques",
  description:
    "Tableau comparatif des sept formes juridiques tunisiennes : nombre de fondateurs, responsabilité, capital, direction, personnalité morale et situations adaptées.",
};

/** Sources officielles principales du comparateur. */
const PAGE_SOURCES = [
  {
    label: "Code des sociétés (CMF)",
    url: "https://www.cmf.tn/sites/default/files/pdfs/reglementation/textes-reference/code_societes_fr.pdf",
  },
  {
    label: "RNE — formalités",
    url: "https://home.registre-entreprises.tn/formalites/",
  },
  {
    label: "Code IRPP/IS 2026 (DGI)",
    url: "https://jibaya.tn/wp-content/uploads/2026/03/Code_IRPP_IS_2026_fr.pdf",
  },
] as const;

/** Titres des références du registre affichées en fin de page. */
const REFERENCE_TITLES = [
  "Loi n° 2000-93 du 3 novembre 2000",
  "Loi n° 89-114 du 30 décembre 1989",
  "Loi n° 2024-48 du 9 décembre 2024",
  "Loi n° 2025-17 du 12 décembre 2025",
  "Loi n° 2018-52 du 29 octobre 2018",
] as const;

/** Points restant à confirmer avant publication de tout détail complémentaire. */
const TO_CONFIRM = [
  "Le taux des distributions de SARL, SUARL et SA (art. 29 du code de l'impôt).",
  "La première année d'application du forfaitaire optionnel de l'art. 44 ter (ajouté par la loi de finances pour 2026).",
  "La portée actuelle du minimum d'IS à 10 % (condition historique « sociétés au taux de 25 % »).",
  "Les délais réels de traitement des dossiers du RNE (seuls les délais de dépôt sont vérifiés) et la base légale des redevances.",
  "Les obligations sociales du gérant et l'affiliation à la CNSS.",
  "La TVA et ses seuils (à contrôler sur le code de la TVA lors d'une étape dédiée).",
  "Le régime comptable propre du GIE.",
  "Le traitement des associés personnes morales en SNC et en SCS.",
  "Les règles détaillées d'appel public à l'épargne de la SA (Code du marché financier).",
  "La fréquence pratique de la SCS.",
  "Les coûts totaux de création (montants non vérifiés, donc masqués) et les pièces détaillées des check-listes C 004 et C 005.",
] as const;

export default function CompareLegalFormsPage() {
  const references = LEGAL_REFERENCES.filter((ref) =>
    REFERENCE_TITLES.includes(ref.title as (typeof REFERENCE_TITLES)[number]),
  );

  return (
    <div className="mx-auto w-full max-w-[85rem] px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Création d'entreprise"
        title="Comparer les formes juridiques"
        intro="Sept formes, sept logiques : nombre de fondateurs, responsabilité, capital, direction et personnalité morale mis côte à côte, à partir des textes officiels vérifiés les 21 et 22 novembre 2026."
        status="verified"
        lastVerifiedAt="22 novembre 2026"
        sources={[...PAGE_SOURCES]}
      />

      {/* --- Lecture du tableau --- */}
      <section aria-labelledby="lire-titre" className="mt-10 max-w-3xl">
        <SectionHeading
          title="Comment lire ce tableau"
          description="Un outil de comparaison, pas un article : les lignes vont à l'essentiel."
        />
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Chaque colonne est une forme juridique — le nom de la colonne
            renvoie à son guide détaillé. Chaque ligne est un critère de
            comparaison, résumé au plus court.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-lg border border-border bg-card p-4">
            <span className="flex items-center gap-2 text-xs">
              <RequirementTag kind="obligation" />
              une règle issue d&apos;un texte officiel
            </span>
            <span className="flex items-center gap-2 text-xs">
              <RequirementTag kind="recommendation" />
              une appréciation pratique du guide
            </span>
            <span className="flex items-center gap-2 text-xs">
              <VerificationStatus status="to-confirm" />
              une information non établie par une source primaire
            </span>
          </div>
          <p>
            Les redevances et délais administratifs sont datés, et les
            mentions « À confirmer » ne sont jamais présentées comme établies.
          </p>
        </div>
      </section>

      {/* --- Tableau --- */}
      <section aria-labelledby="tableau-titre" className="mt-12">
        <SectionHeading
          title="Tableau comparatif"
          description="Les sept formes en colonnes, treize critères en lignes."
        />
        <div className="mt-6">
          <LegalFormsComparisonTable />
        </div>
      </section>

      {/* --- Responsabilité et capital --- */}
      <section aria-labelledby="differences-titre" className="mt-14">
        <SectionHeading
          title="Deux différences décisives : responsabilité et capital"
          description="Les deux points qui changent le plus la portée d'un choix."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article
            aria-labelledby="resp-titre"
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 id="resp-titre" className="text-lg">
                La responsabilité de chacun
              </h3>
              <RequirementTag kind="obligation" />
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Entreprise individuelle :
                </strong>{" "}
                responsabilité personnelle et illimitée sur le patrimoine de
                l&apos;exploitant, sans séparation entre patrimoine
                professionnel et personnel (guide officiel OTE/IOM).
              </li>
              <li>
                <strong className="text-foreground">SUARL, SARL, SA :</strong>{" "}
                les associés ne supportent les pertes qu&apos;à
                concurrence de leurs apports (art. 90 et 160 du Code des
                sociétés) ; le capital est le gage exclusif des créanciers
                sociaux (art. 5).
              </li>
              <li>
                <strong className="text-foreground">SNC :</strong>{" "}
                responsabilité personnelle et solidaire sur les biens propres
                (art. 54 et 55) ; un créancier ne peut poursuivre un associé
                qu&apos;après mise en demeure de 15 jours, et son action se
                prescrit 3 ans après l&apos;échéance de la créance.
              </li>
              <li>
                <strong className="text-foreground">SCS :</strong> double
                régime — les commandités répondent solidairement et
                indéfiniment, les commanditaires jusqu&apos;à concurrence de
                leurs apports (art. 67) ; un commanditaire qui
                s&apos;immisce dans la gestion devient responsable
                solidairement et indéfiniment (art. 71), hors actes de
                contrôle et de consultation autorisés.
              </li>
              <li>
                <strong className="text-foreground">GIE :</strong> les membres
                répondent solidairement et indéfiniment, sauf convention
                contraire avec le tiers ; le créancier doit d&apos;abord mettre
                en demeure le groupement, et la responsabilité d&apos;un membre
                sortant dure 3 ans après la publication de son retrait (art.
                446).
              </li>
            </ul>
          </article>

          <article
            aria-labelledby="capital-titre"
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 id="capital-titre" className="text-lg">
                Le capital minimum
              </h3>
              <RequirementTag kind="obligation" />
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Seule la SA</strong>{" "}
                connaît un capital minimum légal : 5 000 DT, ou 50 000 DT si
                elle fait appel public à l&apos;épargne, avec des actions
                d&apos;au moins 1 DT (art. 161).
              </li>
              <li>
                <strong className="text-foreground">SARL et SUARL :</strong>{" "}
                aucun montant minimum n&apos;est fixé par le Code ; le capital
                est fixé par les statuts (art. 92) et les parts doivent
                être totalement libérées à la constitution (art. 97).
              </li>
              <li>
                <strong className="text-foreground">SNC et SCS :</strong> aucun
                montant minimum dans les textes qui les régissent (art. 54 à 66
                et 67 à 76).
              </li>
              <li>
                <strong className="text-foreground">GIE :</strong> peut être
                constitué sans capital social (art. 441).
              </li>
              <li>
                <strong className="text-foreground">
                  Entreprise individuelle :
                </strong>{" "}
                pas de capital social.
              </li>
              <li className="rounded-md border border-border bg-background p-3 text-xs">
                Aucun autre montant de capital n&apos;est publié sur cette
                page : les montants non vérifiés restent masqués, pas
                seulement marqués.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* --- Quelle forme choisir --- */}
      <section aria-labelledby="choisir-titre" className="mt-14 max-w-3xl">
        <SectionHeading
          title="Quelle forme choisir ?"
          description="Le comparatif compare des règles ; il ne tranche pas votre choix."
        />
        <div className="mt-5 space-y-4">
          <div className="flex items-start gap-3">
            <RequirementTag kind="recommendation" className="mt-0.5" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Aucune forme n&apos;est « meilleure » en soi : la plus adaptée
              dépend de votre activité, du nombre et de la nature de vos
              associés, du niveau de risque que vous acceptez et de vos besoins
              de gestion. Ce tableau expose des règles de droit vérifiées ; il
              ne constitue pas une recommandation de forme.
            </p>
          </div>
          <Link
            href="/creation-entreprise/formes-juridiques/choisir"
            className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-pillar-creation/40 focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span>
              <span className="block text-base font-semibold">
                Choisir une forme juridique
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                L&apos;assistant indicatif en quelques questions, pour
                croiser votre situation avec les critères du comparatif.
              </span>
            </span>
            <ArrowRight
              aria-hidden
              className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* --- Références --- */}
      <section aria-labelledby="references-titre" className="mt-14">
        <SectionHeading
          title="Références officielles"
          description="Les textes qui fondent le tableau, avec leur statut de vérification."
        />
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {references.map((ref) => (
            <li
              key={ref.title}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <LegalReference
                  title={ref.title}
                  detail={ref.detail}
                  publication={ref.publication}
                  url={ref.url}
                  documentRef={ref.documentRef}
                  className="min-w-0 flex-1 border-0 bg-transparent p-0"
                />
                <VerificationStatus status={ref.status} className="shrink-0" />
              </div>
              {ref.note && (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {ref.note}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                Vérifié le {ref.lastVerifiedAt}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-5 max-w-3xl space-y-2 text-sm text-muted-foreground">
          <p>Formalités, redevances et délais de dépôt :</p>
          <ExternalOfficialLink
            href="https://home.registre-entreprises.tn/formalites/"
            authority="RNE"
          >
            Page « Formalités » du Registre national des entreprises
          </ExternalOfficialLink>
        </div>
      </section>

      {/* --- À confirmer --- */}
      <section aria-labelledby="confirmer-titre" className="mt-14 max-w-3xl">
        <SectionHeading
          title="Ce qui reste à confirmer"
          description="Aucun de ces points n'est affirmé sur cette page."
        />
        <div className="mt-5">
          <Notice variant="warning" title="Informations non établies">
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {TO_CONFIRM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Notice>
        </div>
      </section>

      {/* --- Disclaimer --- */}
      <div className="mt-12 max-w-3xl">
        <Notice variant="disclaimer" title="Guide indépendant">
          Guide Entreprise Tunisie — guide indépendant, fondé sur des sources
          officielles, sans affiliation gouvernementale. Ce comparatif est un
          outil de compréhension : il ne constitue pas un conseil juridique et
          ne se substitue ni aux guides détaillés de chaque forme, ni à
          l&apos;avis d&apos;un professionnel. Les taux, redevances et
          seuils affichés sont datés : vérifiez-les auprès des autorités
          compétentes avant toute décision.
        </Notice>
      </div>
    </div>
  );
}

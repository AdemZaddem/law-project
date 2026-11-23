import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { RequirementTag } from "@/components/requirement-tag";
import { VerificationStatus } from "@/components/verification-status";
import type { RequirementKind } from "@/lib/types";

/** Une forme juridique en colonne du tableau, avec son guide. */
interface ComparisonForm {
  /** Identifiant court (en-tête de colonne). */
  name: string;
  /** Développé sous le sigle. */
  expansion: string;
  /** Lien vers le guide détaillé de la forme. */
  guideHref: string;
}

/** Les sept formes étudiées, dans l'ordre du guide. */
const FORMS: readonly ComparisonForm[] = [
  {
    name: "EI",
    expansion: "Entreprise individuelle",
    guideHref: "/creation-entreprise/formes-juridiques/ei",
  },
  {
    name: "SUARL",
    expansion: "Société unipersonnelle à responsabilité limitée",
    guideHref: "/creation-entreprise/formes-juridiques/suarl",
  },
  {
    name: "SARL",
    expansion: "Société à responsabilité limitée",
    guideHref: "/creation-entreprise/formes-juridiques/sarl",
  },
  {
    name: "SA",
    expansion: "Société anonyme",
    guideHref: "/creation-entreprise/formes-juridiques/sa",
  },
  {
    name: "SNC",
    expansion: "Société en nom collectif",
    guideHref: "/creation-entreprise/formes-juridiques/snc-scs",
  },
  {
    name: "SCS",
    expansion: "Société en commandite simple",
    guideHref: "/creation-entreprise/formes-juridiques/snc-scs",
  },
  {
    name: "GIE",
    expansion: "Groupement d'intérêt économique",
    guideHref: "/creation-entreprise/formes-juridiques/gie",
  },
];

/** Une cellule du tableau. */
interface ComparisonCell {
  /** Texte concis de la cellule. */
  text: string;
  /**
   * Présente la cellule comme non établie par une source primaire :
   * badge « À confirmer » avant le texte.
   */
  status?: "to-confirm";
}

/** Une ligne de critère. */
interface ComparisonRow {
  /** Libellé du critère (première colonne). */
  label: string;
  /**
   * `obligation` : règle issue d'un texte (valeur par défaut, non affichée).
   * `recommendation` : appréciation pratique, affichée par une étiquette.
   */
  kind?: RequirementKind;
  cells: readonly [ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell];
}

/** Cellule « À confirmer » : badge + explication. */
function toConfirm(text: string): ComparisonCell {
  return { text, status: "to-confirm" };
}

const ROWS: readonly ComparisonRow[] = [
  {
    label: "Texte de référence",
    cells: [
      { text: "Pas de statut au CSC ; loi n° 2018-52 (RNE)" },
      { text: "CSC art. 148 à 159" },
      { text: "CSC art. 90 à 147" },
      { text: "CSC art. 160 et suivants" },
      { text: "CSC art. 54 à 66" },
      { text: "CSC art. 67 à 76" },
      { text: "CSC art. 439 à 457" },
    ],
  },
  {
    label: "Nature",
    cells: [
      {
        text: "Activité d'une personne physique en nom propre ; pas une société, pas de statuts",
      },
      {
        text: "Variété unipersonnelle de la SARL : un seul associé (art. 148 et 149)",
      },
      { text: "Société de 2 à 50 associés à responsabilité limitée (art. 90)" },
      { text: "Société par actions de 7 actionnaires au moins (art. 160)" },
      {
        text: "Société de personnes ; chaque associé a la qualité de commerçant (art. 54 et 55)",
      },
      {
        text: "Deux groupes : commandités (seuls gérants) et commanditaires (bailleurs de fonds) (art. 67)",
      },
      {
        text: "Coopération entre membres, pour une durée déterminée, sans but proprement lucratif (art. 439 et 442)",
      },
    ],
  },
  {
    label: "Fondateurs / associés",
    cells: [
      { text: "1 personne physique, aucun associé" },
      {
        text: "1 seul associé, personne physique ou morale ; une seule SUARL par personne physique (art. 149)",
      },
      { text: "2 à 50 associés, personnes physiques ou morales (art. 90 et 93)" },
      { text: "7 actionnaires au moins, aucun maximum dans le Code (art. 160)" },
      { text: "2 associés au moins (art. 54)" },
      {
        text: "2 groupes : au moins 1 commandité et 1 commanditaire (art. 67)",
      },
      { text: "2 personnes au moins, physiques ou morales (art. 439)" },
    ],
  },
  {
    label: "Responsabilité",
    cells: [
      {
        text: "Personnelle et illimitée sur le patrimoine de l'exploitant (guide officiel OTE)",
      },
      { text: "Limitée aux apports (art. 90)" },
      { text: "Limitée aux apports (art. 90)" },
      { text: "Limitée aux apports (art. 160)" },
      {
        text: "Personnelle et solidaire sur les biens propres (art. 54 et 55) ; poursuite après mise en demeure de 15 jours",
      },
      {
        text: "Commandités : solidaire et indéfini ; commanditaires : jusqu'à leurs apports, sauf immixion dans la gestion (art. 67 et 71)",
      },
      {
        text: "Membres solidairement et indéfiniment, sauf convention contraire avec le tiers (art. 446)",
      },
    ],
  },
  {
    label: "Capital minimum légal",
    cells: [
      { text: "Aucun : pas de capital social" },
      {
        text: "Aucun, fixé par les statuts (art. 92) ; parts totalement libérées à la constitution",
      },
      {
        text: "Aucun, fixé par les statuts (art. 92) ; parts totalement libérées à la constitution",
      },
      {
        text: "5 000 DT ; 50 000 DT si appel public à l'épargne ; action d'au moins 1 DT (art. 161)",
      },
      { text: "Aucun dans les art. 54 à 66" },
      { text: "Aucun dans les art. 67 à 76" },
      { text: "Aucun : le capital peut être nul (art. 441)" },
    ],
  },
  {
    label: "Direction et représentation",
    cells: [
      { text: "L'exploitant gère lui-même l'activité" },
      {
        text: "L'associé unique ; délégation possible à un seul mandataire, registre spécial (art. 154)",
      },
      {
        text: "1 ou plusieurs gérants personnes physiques, associés ou tiers ; mandat de 3 ans à défaut de clause (art. 112) ; le gérant représente la société",
      },
      {
        text: "Conseil d'administration (3 à 12 membres, dont 2 indépendants) ou directoire + conseil de surveillance (art. 188 et suivants)",
      },
      {
        text: "Droit de gestion de tous les associés sauf clause contraire ; gérants désignés (art. 57 et 58)",
      },
      {
        text: "Seuls les commandités gèrent (art. 67) ; les commanditaires ne peuvent s'immiscer (art. 71)",
      },
      {
        text: "Administrateur(s) + contrôleur de gestion obligatoire (art. 451 à 453)",
      },
    ],
  },
  {
    label: "Personnalité morale",
    cells: [
      { text: "Non" },
      { text: "Oui, dès l'immatriculation (art. 4)" },
      { text: "Oui, dès l'immatriculation (art. 4)" },
      { text: "Oui, dès l'immatriculation (art. 4 et 176)" },
      { text: "Oui, dès l'immatriculation (art. 4)" },
      { text: "Oui, dès l'immatriculation (art. 4)" },
      { text: "Oui, dès l'immatriculation (art. 443)" },
    ],
  },
  {
    label: "Immatriculation RNE",
    cells: [
      { text: "C 001, C 002 ou C 003 — 20 DT * — dépôt : 30 jours * (C 001)" },
      {
        text: "C 012 — 50 DT * — dépôt : 30 jours * (signature des statuts)",
      },
      {
        text: "C 012 — 50 DT * — dépôt : 30 jours * (signature des statuts)",
      },
      {
        text: "C 004 — 50 DT * — dépôt : 30 jours * (déclaration de souscription et de versement)",
      },
      { text: "C 012 — 50 DT * — dépôt : 30 jours * (signature des statuts)" },
      { text: "C 012 — 50 DT * — dépôt : 30 jours * (signature des statuts)" },
      {
        text: "C 005 — 50 DT * — dépôt : 30 jours * (signature du contrat)",
      },
    ],
  },
  {
    label: "Fiscalité (au 22 novembre 2026)",
    cells: [
      {
        text: "IRPP sur les bénéfices industriels et commerciaux ; régime forfaitaire selon conditions (art. 44 bis)",
      },
      { text: "IS, taux de droit commun 20 % (bénéfices depuis le 01/01/2024)" },
      { text: "IS, taux de droit commun 20 % (bénéfices depuis le 01/01/2024)" },
      { text: "IS, taux de droit commun 20 % (bénéfices depuis le 01/01/2024)" },
      {
        text: "Transparence : associés imposés à l'IRPP (art. 4) ; traitement des associés personnes morales non établi",
        status: "to-confirm",
      },
      {
        text: "Transparence : associés imposés à l'IRPP (art. 4) ; traitement des associés personnes morales non établi",
        status: "to-confirm",
      },
      {
        text: "Transparence : membres imposés à l'IRPP (art. 4) ; membres personnes morales soumis à l'IS (art. 45 I 5)",
      },
    ],
  },
  {
    label: "Commissaire aux comptes",
    cells: [
      { text: "Selon le régime : comptabilité conforme exigée au régime réel" },
      { text: "Selon les seuils de l'art. 13 (dispense possible)" },
      { text: "Selon les seuils de l'art. 13 (dispense possible)" },
      { text: "Toujours obligatoire (art. 13, alinéa 2)" },
      { text: "Selon les seuils de l'art. 13 (dispense possible)" },
      { text: "Selon les seuils de l'art. 13 (dispense possible)" },
      toConfirm("Régime propre du GIE non extrait"),
    ],
  },
  {
    label: "Complexité (appréciation indicative)",
    kind: "recommendation",
    cells: [
      { text: "Faible" },
      { text: "Moyenne" },
      { text: "Moyenne" },
      { text: "Élevée" },
      { text: "Faible à moyenne" },
      { text: "Moyenne (règles d'immixion)" },
      { text: "Moyenne (assemblée et contrôleur)" },
    ],
  },
  {
    label: "Situations adaptées",
    kind: "recommendation",
    cells: [
      { text: "Activité solo simple, sans besoin de personnalité morale ni d'associés" },
      { text: "Un exploitant seul voulant séparer son patrimoine" },
      { text: "2 à 50 associés, PME, associés proches" },
      { text: "Gros projet, investisseurs, appel public à l'épargne" },
      {
        text: "Professionnels se connaissant bien et acceptant la responsabilité illimitée",
      },
      { text: "Gestionnaires engagés et bailleurs de fonds" },
      {
        text: "Coopération entre entreprises ou professionnels sans but lucratif",
      },
    ],
  },
  {
    label: "Points restant « À confirmer »",
    cells: [
      {
        text: "Coûts totaux de création ; obligations sociales (CNSS) ; 1re année du forfaitaire optionnel (LF 2026)",
      },
      { text: "Taux des distributions (art. 29)" },
      { text: "Taux des distributions ; délais réels de traitement du RNE" },
      {
        text: "Règles détaillées d'appel public à l'épargne ; portée actuelle du minimum d'IS à 10 %",
      },
      {
        text: "Traitement des associés personnes morales ; fréquence pratique",
      },
      {
        text: "Traitement des associés personnes morales ; fréquence pratique",
      },
      { text: "Obligations comptables propres" },
    ],
  },
];

/** Cellule d'un corps de ligne. */
function ComparisonCellContent({ cell }: { cell: ComparisonCell }) {
  return (
    <span className="flex flex-col items-start gap-1.5">
      {cell.status === "to-confirm" && (
        <VerificationStatus status="to-confirm" />
      )}
      <span>{cell.text}</span>
    </span>
  );
}

/**
 * Tableau comparatif des sept formes juridiques :
 * sept colonnes (une par forme, liées à leur guide), critères en lignes,
 * première colonne collante et défilement horizontal sur les petits écrans.
 */
export function LegalFormsComparisonTable() {
  return (
    <div>
      <p
        id="comparaison-aide-mobile"
        className="mb-3 flex items-center gap-2 text-xs text-muted-foreground 2xl:hidden"
      >
        <MoveHorizontal aria-hidden className="size-4 shrink-0" />
        Le tableau défile horizontalement : faites-le glisser pour voir les
        sept formes.
      </p>

      <div
        id="tableau-comparateur"
        role="region"
        aria-labelledby="comparaison-aide-mobile"
        tabIndex={0}
        className="overflow-x-auto rounded-lg border border-border bg-card focus-visible:outline-2 focus-visible:outline-primary"
      >
        <table className="w-full min-w-[80rem] border-collapse text-left align-top">
          <caption className="sr-only">
            Tableau comparatif des sept formes juridiques tunisiennes :
            entreprise individuelle, SUARL, SARL, SA, SNC, SCS et GIE, selon
            treize critères de droit et d&apos;appréciation pratique. Chaque
            nom de colonne renvoie au guide détaillé de la forme.
          </caption>
          <thead>
            <tr className="border-b border-border bg-secondary">
              <th
                scope="col"
                className="sticky left-0 z-20 w-40 min-w-40 border-r border-border bg-secondary px-3 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                Critère
              </th>
              {FORMS.map((form) => (
                <th
                  key={form.name}
                  scope="col"
                  className="min-w-40 px-3 py-3 align-top"
                >
                  <Link
                    href={form.guideHref}
                    className="group flex flex-col gap-0.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    <span>{form.name}</span>
                    <span className="text-xs font-normal leading-snug text-muted-foreground">
                      {form.expansion}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary"
                    >
                      Guide
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr
                key={row.label}
                className="border-b border-border last:border-b-0"
              >
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-r border-border bg-card px-3 py-3 align-top text-sm font-medium text-foreground"
                >
                  <span className="flex flex-col items-start gap-1.5">
                    <span>{row.label}</span>
                    {row.kind && <RequirementTag kind={row.kind} />}
                  </span>
                </th>
                {row.cells.map((cell, index) => (
                  <td
                    key={`${row.label}-${FORMS[index].name}`}
                    className="border-r border-border px-3 py-3 align-top text-xs leading-relaxed text-muted-foreground last:border-r-0"
                  >
                    <ComparisonCellContent cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
        <li>
          <span aria-hidden className="text-primary">
            *
          </span>{" "}
          Redevances et délais tels qu&apos;indiqués par le RNE au 21 novembre
          2026 : il s&apos;agit de délais de <strong>dépôt</strong>, pas de
          délais de traitement des dossiers. Les redevances sont publiées
          administrativement par le RNE et ne constituent pas un tarif
          législatif permanent.
        </li>
        <li>
          Fiscalité et taux au 22 novembre 2026 (Code IRPP/IS 2026 et loi de
          finances pour 2025) : vérifiez la loi de finances en vigueur. Pour
          2026, les sociétés soumises à l&apos;IS à 20 % acquittent en plus une
          contribution sociale de solidarité de 3 points (minimum 400 DT) —
          mesure annuelle exceptionnelle, à re-vérifier chaque année.
        </li>
        <li>
          Code des sociétés : édition IORT du 7 février 2024, dernière édition
          trouvée au 21 novembre 2026 ; aucune loi modificative trouvée depuis,
          sans que l&apos;absence de preuve ne vaille preuve d&apos;absence.
        </li>
      </ul>
    </div>
  );
}

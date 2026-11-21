import type { OfficialSource } from "@/lib/types";

/** Date de vérification des sources ci-dessous. */
export const SOURCES_VERIFIED_AT = "20 novembre 2026";

export interface SourceEntry extends OfficialSource {
  /** Autorité responsable. */
  authority: string;
  /** Domaine traité par l'autorité. */
  domain: string;
  /** Statut d'accès constaté lors de la vérification. */
  accessStatus: "accessible" | "partial" | "inaccessible";
}

/**
 * Registre des sites officielles consultés lors de la recherche.
 * Le statut d'accès rend compte de la vérification réelle effectuée.
 */
export const OFFICIAL_SOURCES: readonly SourceEntry[] = [
  {
    label: "Registre National des Entreprises",
    authority: "RNE",
    url: "https://home.registre-entreprises.tn/",
    domain: "Immatriculation, formalités, extraits du registre",
    accessStatus: "accessible",
  },
  {
    label: "APII — Agence de Promotion de l'Industrie et de l'Innovation",
    authority: "APII",
    url: "https://www.tunisieindustrie.nat.tn/",
    domain: "Guichet Unique de création des entreprises",
    accessStatus: "partial",
  },
  {
    label: "Ministère des Finances",
    authority: "Ministère des Finances / DGI",
    url: "https://www.finances.gov.tn/",
    domain: "Identifiant fiscal, obligations déclaratives",
    accessStatus: "accessible",
  },
  {
    label: "CNSS — Caisse Nationale de Sécurité Sociale",
    authority: "CNSS",
    url: "https://www.cnss.tn/",
    domain: "Affiliation des employeurs et des salariés",
    accessStatus: "inaccessible",
  },
  {
    label: "Startup Tunisia",
    authority: "Portail des startups",
    url: "https://startup.gov.tn/fr",
    domain: "Startup Act, Label, candidature en ligne",
    accessStatus: "accessible",
  },
  {
    label: "INNORPI",
    authority: "INNORPI",
    url: "https://www.innorpi.tn/",
    domain: "Marques, brevets, dessins et modèles, normalisation",
    accessStatus: "inaccessible",
  },
] as const;

export interface LegalReferenceEntry {
  title: string;
  detail?: string;
  url?: string;
  /** Domaine du texte. */
  area: "creation" | "startup" | "ip";
  status: "verified" | "to-confirm";
  note?: string;
}

/**
 * Textes identifiés lors de la recherche.
 * Le statut reflète le niveau réel de vérification atteint :
 * « verified » = texte consulté ; « to-confirm » = référence identifiée
 * sans lecture intégrale du texte.
 */
export const LEGAL_REFERENCES: readonly LegalReferenceEntry[] = [
  {
    title: "Loi n° 2000-93 du 3 novembre 2000",
    detail: "Portant promulgation du code des sociétés commerciales",
    url: "https://www.cmf.tn/sites/default/files/pdfs/reglementation/textes-reference/code_societes_fr.pdf",
    area: "creation",
    status: "to-confirm",
    note: "Référence identifiée ; montants et seuils à confirmer sur le texte.",
  },
  {
    title: "Loi n° 2018-52 du 29 octobre 2018",
    detail: "Relative au Registre national des entreprises",
    area: "creation",
    status: "to-confirm",
    note: "Référence identifiée lors de la recherche, lecture à confirmer.",
  },
  {
    title: "Article 56 du code de l'impôt sur le revenu des personnes physiques et de l'impôt sur les sociétés",
    detail: "Déclaration d'existence et identifiant fiscal",
    url: "https://www.finances.gov.tn/fr/octroi-dun-identifiant-fiscal",
    area: "creation",
    status: "verified",
  },
  {
    title: "Loi n° 2018-20 du 17 avril 2018",
    detail: "Relative aux startups",
    url: "https://startup.gov.tn/sites/default/files/2022-01/Loi2018_20.pdf",
    area: "startup",
    status: "verified",
  },
  {
    title: "Décret n° 2018-840 du 11 octobre 2018",
    detail:
      "Conditions, procédures et délais d'octroi et de retrait du label startup",
    url: "https://startup.gov.tn/",
    area: "startup",
    status: "verified",
  },
  {
    title: "Circulaires de la Banque Centrale de Tunisie n° 2019-01 et n° 2019-02",
    detail: "Comptes startup en devises et carte technologique internationale",
    url: "https://startup.gov.tn/",
    area: "startup",
    status: "verified",
  },
  {
    title: "Loi n° 2000-84 du 24 août 2000",
    detail: "Relative aux brevets d'invention — JORT n° 68 du 25 août 2000",
    area: "ip",
    status: "verified",
    note: "Texte consulté intégralement (document PDF fourni).",
  },
  {
    title: "Décret n° 2001-836 du 10 avril 2001",
    detail: "Fixant le montant des redevances afférentes à la propriété industrielle",
    area: "ip",
    status: "to-confirm",
    note: "Identifié lors de la recherche ; contenu et versions à confirmer.",
  },
] as const;

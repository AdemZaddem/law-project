import type { OfficialSource, SourceCategory, SourceStatus } from "@/lib/types";

/**
 * Date de dernière vérification globale du registre.
 * Chaque entrée porte aussi sa propre date (`lastVerifiedAt`).
 */
export const SOURCES_VERIFIED_AT = "21 novembre 2026";

export interface SourceEntry extends OfficialSource {
  /** Autorité responsable. */
  authority: string;
  /** Domaine traité par l'autorité. */
  domain: string;
  /** Catégorie de la source (texte officiel, administration, portail, support). */
  category: SourceCategory;
  /** Niveau de vérification des informations puisées dans cette source. */
  status: SourceStatus;
  /** Statut d'accès constaté lors de la vérification. */
  accessStatus: "accessible" | "partial" | "unavailable";
  /** Date de dernière vérification, format français. */
  lastVerifiedAt: string;
  /** Limites, réserves et précisions sur l'usage de la source. */
  notes?: string;
}

/**
 * Registre des sites officiels consultés lors de l'audit de vérification.
 * Les statuts rendent compte de la vérification réelle effectuée :
 * une source injoignable est conservée et marquée `unavailable`,
 * jamais retirée du registre.
 */
export const OFFICIAL_SOURCES: readonly SourceEntry[] = [
  {
    label: "Registre National des Entreprises",
    authority: "RNE",
    url: "https://home.registre-entreprises.tn/",
    domain: "Immatriculation, formalités, extraits du registre",
    category: "administration",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Site institutionnel consulté (accueil, rubrique formalités, services en ligne). Aucune donnée de procédure n'en est encore extraite : les pages du parcours resteront « À confirmer » jusqu'à cette extraction.",
  },
  {
    label: "APII — Agence de Promotion de l'Industrie et de l'Innovation",
    authority: "APII",
    url: "https://www.tunisieindustrie.nat.tn/",
    domain: "Guichet Unique de création des entreprises",
    category: "administration",
    status: "to-confirm",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Portail joignable lors de la vérification, mais ancien (encodage partiel dégradé). Aucune exigence de procédure n'en est extraite ; le Guichet Unique devra être revérifié avant toute publication.",
  },
  {
    label: "Ministère des Finances — Direction générale des impôts",
    authority: "Ministère des Finances / DGI",
    url: "https://www.finances.gov.tn/",
    domain: "Identifiant fiscal, obligations déclaratives",
    category: "administration",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Page « Octroi d'un identifiant fiscal » consultée : elle cite l'article 56 du code de l'impôt et le décret n° 2008-201 du 29 janvier 2008. Source de la référence fiscale actuellement publiée.",
  },
  {
    label: "CNSS — Caisse Nationale de Sécurité Sociale",
    authority: "CNSS",
    url: "https://www.cnss.tn/",
    domain: "Affiliation des employeurs et des salariés",
    category: "administration",
    status: "unavailable",
    accessStatus: "unavailable",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Site inaccessible lors de la dernière vérification (connexion HTTPS non aboutie). La source est conservée dans le registre ; aucune information de procédure n'en est extraite et tout affichage restera « À confirmer ».",
  },
  {
    label: "Startup Tunisia — portail officiel du Startup Act",
    authority: "Portail des startups",
    url: "https://startup.gov.tn/fr",
    domain: "Startup Act, Label, candidature en ligne",
    category: "portal",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Portail consulté. Il publie le texte de la loi n° 2018-20 (PDF officiel) et les annonces d'ouverture des sessions de candidature Label / Pré-label.",
  },
  {
    label: "INNORPI",
    authority: "INNORPI",
    url: "https://www.innorpi.tn/",
    domain: "Marques, brevets, dessins et modèles, normalisation",
    category: "administration",
    status: "to-confirm",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Site de nouveau accessible lors de cette vérification (il était injoignable lors de la recherche initiale). Les tarifs et procédures n'en ont pas encore été relevés : ils resteront marqués « À confirmer ».",
  },
  {
    label: "Banque Centrale de Tunisie",
    authority: "BCT",
    url: "https://www.bct.gov.tn/",
    domain: "Réglementation des changes, circulaires applicables aux startups",
    category: "administration",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Site consulté ; les circulaires aux intermédiaires agréés n° 2019-01 et n° 2019-02 ont été téléchargées et lues sur le site de la BCT (PDF officiels).",
  },
  {
    label: "Imprimerie Officielle de la République Tunisienne (IORT)",
    authority: "Imprimerie Officielle",
    url: "https://www.iort.tn/",
    domain: "Publication des codes et des textes du Journal Officiel",
    category: "legal-text",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Édition officielle du code des sociétés commerciales (mise à jour au 10 février 2022) consultée dans son intégralité via le site du CMF qui l'héberge.",
  },
  {
    label: "Conseil du Marché Financier (hébergeur de l'édition officielle)",
    authority: "CMF",
    url: "https://www.cmf.tn/",
    domain: "Hébergement de l'édition Imprimerie Officielle du code des sociétés",
    category: "support",
    status: "verified",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Source d'hébergement : le PDF consulté est l'édition officielle de l'Imprimerie Officielle, repérable à la mention « Imprimerie Officielle de la République Tunisienne » en pied de page.",
  },
  {
    label: "jort.tn — archive numérique du Journal Officiel",
    authority: "Archive indépendante (non affiliée à l'Imprimerie Officielle)",
    url: "http://jort.tn/",
    domain: "Archives du JORT : numéros, textes et références de publication",
    category: "support",
    status: "to-confirm",
    accessStatus: "accessible",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    notes:
      "Source secondaire déclarée comme telle par son éditeur. Elle fournit des références de publication (numéro et page du JORT) qui doivent être confirmées sur le PDF officiel. Elle n'est jamais utilisée comme substitut d'un texte officiel.",
  },
] as const;

/** Une référence juridique du guide. */
export interface LegalReferenceEntry {
  /** Intitulé exact du texte (n° et date). */
  title: string;
  /** Objet du texte. */
  detail?: string;
  /** Référence de publication, le cas échéant (ex. « JORT n° 89 du 7 novembre 2000, p. 2744 »). */
  publication?: string;
  /** URL officielle du texte, lorsqu'une source officielle l'héberge. */
  url?: string;
  /** Référence documentaire lorsque le texte est consulté hors ligne. */
  documentRef?: string;
  /** Domaine du texte. */
  area: "creation" | "startup" | "ip";
  /** Niveau de vérification atteint pour ce texte. */
  status: SourceStatus;
  /** Date de dernière vérification, format français. */
  lastVerifiedAt: string;
  /** Réserves, limites et précisions de vérification. */
  note?: string;
  /** Modifications connues et questions de validité restant ouvertes. */
  amendments?: string;
}

/**
 * Textes identifiés et audités.
 *
 * `verified` = texte consulté dans une source primaire officielle ;
 * `to-confirm` = référence repérée sans consultation du texte officiel ;
 * `outdated` = texte dont les effets ne sont plus assurés en l'état.
 * Aucune URL, référence de publication ou montant n'est inventé :
 * une information non relevée reste absente du registre.
 */
export const LEGAL_REFERENCES: readonly LegalReferenceEntry[] = [
  {
    title: "Loi n° 2000-93 du 3 novembre 2000",
    detail: "Portant promulgation du code des sociétés commerciales",
    publication: "JORT n° 89 du 7 novembre 2000, p. 2744",
    url: "https://www.cmf.tn/sites/default/files/pdfs/reglementation/textes-reference/code_societes_fr.pdf",
    area: "creation",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Texte consulté dans l'édition officielle de l'Imprimerie Officielle (mise à jour du 10 février 2022). Les montants et seuils chiffrés restent masqués jusqu'à vérification sur le texte en vigueur.",
    amendments:
      "L'édition consultée est révisée au 10 février 2022 : les modifications postérieures du code doivent être recherchées avant publication de tout détail chiffré.",
  },
  {
    title: "Loi n° 2018-52 du 29 octobre 2018",
    detail: "Relative au Registre national des entreprises",
    publication: "JORT n° 89 du 6 novembre 2018, p. 4644",
    area: "creation",
    status: "to-confirm",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Titre, numéro et date confirmés sur plusieurs bases de texte ; la référence de publication provient d'une archive indépendante du JORT, le PDF officiel n'ayant pas été consulté.",
    amendments:
      "Signalée modifiée par la loi n° 2020-30 du 30 juin 2020 (source secondaire) : à confirmer sur le texte officiel.",
  },
  {
    title:
      "Article 56 du code de l'impôt sur le revenu des personnes physiques et de l'impôt sur les sociétés",
    detail: "Déclaration d'existence et obtention de l'identifiant fiscal",
    url: "https://www.finances.gov.tn/fr/octroi-dun-identifiant-fiscal",
    area: "creation",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Référence citée par la page officielle du ministère des Finances, qui mentionne également le décret n° 2008-201 du 29 janvier 2008.",
  },
  {
    title: "Décret n° 2008-201 du 29 janvier 2008",
    detail: "Fixant le champ et les conditions d'intervention de la Direction des grandes entreprises",
    url: "https://www.finances.gov.tn/fr/octroi-dun-identifiant-fiscal",
    area: "creation",
    status: "to-confirm",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Référence citée par la page officielle du ministère des Finances ; le texte du décret n'a pas été consulté.",
  },
  {
    title: "Loi n° 2018-20 du 17 avril 2018",
    detail: "Relative aux startups",
    url: "https://startup.gov.tn/sites/default/files/2022-01/Loi2018_20.pdf",
    area: "startup",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Texte original (arabe) téléchargé depuis le portail officiel Startup Tunisia et lu ; l'intitulé français est confirmé par l'édition officielle de l'Imprimerie Officielle.",
  },
  {
    title: "Décret gouvernemental n° 2018-840 du 11 octobre 2018",
    detail:
      "Fixant les conditions, les procédures et les délais d'octroi et de retrait du label startup, ainsi que l'organisation, les prérogatives et le fonctionnement du comité de labélisation",
    url: "https://www.cmf.tn/sites/default/files/pdfs/reglementation/textes-reference/code_societes_fr.pdf",
    area: "startup",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Texte intégral consulté dans l'édition officielle de l'Imprimerie Officielle ; l'objet du décret est aussi confirmé par sa citation dans la circulaire BCT n° 2019-02.",
  },
  {
    title: "Circulaire aux intermédiaires agréés n° 2019-01 du 30 janvier 2019",
    detail: "Comptes startup en devises (Banque Centrale de Tunisie)",
    publication: "JORT n° 11 du 5 février 2019, p. 324",
    url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2019_01_fr.pdf",
    area: "startup",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "PDF officiel de la BCT téléchargé et lu. La référence de publication JORT provient d'une archive indépendante et devra être confirmée sur le PDF officiel.",
  },
  {
    title: "Circulaire aux intermédiaires agréés n° 2019-02 du 30 janvier 2019",
    detail:
      "Transferts au titre des opérations courantes — carte technologique internationale",
    publication: "JORT n° 11 du 5 février 2019, p. 327",
    url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2019_02_fr.pdf",
    area: "startup",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "PDF officiel de la BCT téléchargé et lu ; l'objet et le contenu ont été confirmés. La référence de publication JORT provient d'une archive indépendante.",
    amendments:
      "Remplace l'article 14 de la circulaire n° 2016-09 du 30 décembre 2016.",
  },
  {
    title: "Loi n° 2000-84 du 24 août 2000",
    detail: "Relative aux brevets d'invention",
    publication: "JORT n° 68 du 25 août 2000",
    documentRef: "Document PDF fourni au projet : « loi relative aux brevets.pdf »",
    area: "ip",
    status: "verified",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Texte consulté intégralement (document source du projet). Ce texte ne fixe pas lui-même les montants des redevances.",
  },
  {
    title: "Décret n° 2001-836 du 10 avril 2001",
    detail: "Fixant le montant des redevances afférentes aux brevets d'invention",
    publication: "JORT n° 31 du 17 avril 2001, p. 891",
    url: "http://www.innorpi.tn/sites/default/files/inline-files/telechargement105%20%283%29.pdf",
    area: "ip",
    status: "outdated",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Référence confirmée, mais les montants du tableau annexé de 2001 ne doivent pas être publiés en l'état : toute somme devra être revérifiée auprès de l'INNORPI avant affichage.",
    amendments:
      "Modifié et complété par le décret gouvernemental n° 2017-850 du 31 juillet 2017 (JORT n° 63 du 8 août 2017, p. 2557).",
  },
  {
    title: "Décret gouvernemental n° 2017-850 du 31 juillet 2017",
    detail:
      "Modifiant et complétant le décret n° 2001-836 du 10 avril 2001, fixant le montant des redevances afférentes aux brevets d'invention",
    publication: "JORT n° 63 du 8 août 2017, p. 2557",
    area: "ip",
    status: "to-confirm",
    lastVerifiedAt: SOURCES_VERIFIED_AT,
    note: "Texte consulté sur une archive indépendante du JORT ; à confirmer sur le PDF officiel avant publication de tout détail ou montant.",
  },
] as const;

/**
 * Types partagés du guide.
 *
 * Ces types décrivent la structure éditoriale du site : piliers, pages,
 * statuts de vérification et provenance des sources.
 * Aucune donnée juridique n'est fabriquée ici : les contenus réels seront
 * ajoutés à l'étape de rédaction des guides.
 */

/** Les trois piliers principaux du guide. */
export type PillarId = "creation" | "startup" | "ip";

/** Statut d'un contenu ou d'une information. */
export type VerificationStatus =
  | "verified" // Information confirmée sur une source officielle
  | "to-confirm" // Information issue d'une recherche non finalisée
  | "pending"; // Contenu à rédiger

/**
 * Statut de vérification d'une source officielle ou d'une référence juridique.
 *
 * - `verified` : information confirmée sur une source primaire accessible ;
 * - `to-confirm` : source ou information non confirmée de façon indépendante ;
 * - `outdated` : information dont la validité n'est plus assurée (texte
 *   modifié, tarif périmé…) ;
 * - `unavailable` : source officielle injoignable au moment de la vérification.
 */
export type SourceStatus =
  | "verified"
  | "to-confirm"
  | "outdated"
  | "unavailable";

/** Catégorie d'une source officielle. */
export type SourceCategory =
  | "legal-text" // publications officielles : JORT, codes, Imprimerie Officielle
  | "administration" // administrations et organismes publics
  | "portal" // portails officiels thématiques
  | "support"; // source secondaire, jamais substitut d'un texte officiel

/** Nature d'une exigence affichée. */
export type RequirementKind = "obligation" | "recommendation";

/** Un site source officiellement référencé. */
export interface OfficialSource {
  /** Nom affiché de l'autorité ou du site. */
  label: string;
  /** URL absolue du site officiel. */
  url: string;
}

/** Une entrée de navigation. */
export interface NavItem {
  href: string;
  label: string;
  description?: string;
}

/** Un pilier : section majeure du site. */
export interface Pillar {
  id: PillarId;
  href: string;
  label: string;
  /** Libellé court pour le header. */
  shortLabel: string;
  description: string;
  /** Icône Lucide nommée (résolue dans les composants). */
  icon: string;
}

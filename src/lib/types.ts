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

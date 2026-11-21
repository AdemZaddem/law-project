import type { NavItem, Pillar } from "@/lib/types";

/**
 * Identité provisoire du projet.
 * Aucune affiliation gouvernementale : le guide est indépendant.
 */
export const PROJECT = {
  name: "Guide Entreprise Tunisie",
  tagline: "Guide indépendant, fondé sur des sources officielles.",
  description:
    "Guide indépendant en français pour comprendre la création d'entreprise en Tunisie, le Startup Act et la propriété industrielle.",
} as const;

/** Les trois piliers du site. */
export const PILLARS: readonly Pillar[] = [
  {
    id: "creation",
    href: "/creation-entreprise",
    label: "Création d'entreprise en Tunisie",
    shortLabel: "Création d'entreprise",
    description:
      "Formes juridiques, procédure administrative, documents et obligations fiscales et sociales.",
    icon: "Building2",
  },
  {
    id: "startup",
    href: "/startup-act",
    label: "Startup Act et Startup Label",
    shortLabel: "Startup Act",
    description:
      "Cadre légal, critères d'éligibilité, procédure de candidature, avantages et obligations.",
    icon: "Rocket",
  },
  {
    id: "ip",
    href: "/propriete-industrielle",
    label: "Propriété industrielle et INNORPI",
    shortLabel: "Propriété industrielle",
    description:
      "Marques, brevets d'invention, dessins et modèles industriels et services de l'INNORPI.",
    icon: "ShieldCheck",
  },
] as const;

/** Navigation principale du header. */
export const MAIN_NAV: readonly NavItem[] = PILLARS.map((p) => ({
  href: p.href,
  label: p.shortLabel,
}));

/** Entrées du menu de chaque pilier (structure approuvée). */
export const PILLAR_NAV: Record<string, readonly NavItem[]> = {
  creation: [
    { href: "/creation-entreprise", label: "Vue d'ensemble" },
    {
      href: "/creation-entreprise/formes-juridiques",
      label: "Les formes juridiques",
    },
    {
      href: "/creation-entreprise/formes-juridiques/comparer",
      label: "Comparer les formes",
    },
    {
      href: "/creation-entreprise/formes-juridiques/choisir",
      label: "Choisir une forme",
    },
    {
      href: "/creation-entreprise/parcours",
      label: "Guide étape par étape",
    },
    { href: "/creation-entreprise/documents", label: "Documents nécessaires" },
    { href: "/creation-entreprise/autorites", label: "Autorités administratives" },
    {
      href: "/creation-entreprise/obligations/fiscales",
      label: "Obligations fiscales",
    },
    {
      href: "/creation-entreprise/obligations/sociales",
      label: "Obligations sociales",
    },
  ],
  startup: [
    { href: "/startup-act", label: "Comprendre le Startup Act" },
    { href: "/startup-act/label", label: "Le Startup Label" },
    { href: "/startup-act/label/criteres", label: "Critères d'éligibilité" },
    { href: "/startup-act/label/pre-label", label: "Le Pré-label" },
    { href: "/startup-act/label/procedure", label: "Procédure de candidature" },
    { href: "/startup-act/avantages", label: "Avantages" },
    {
      href: "/startup-act/obligations",
      label: "Obligations et retrait",
    },
  ],
  ip: [
    { href: "/propriete-industrielle", label: "Services INNORPI" },
    { href: "/propriete-industrielle/marques", label: "Enregistrement d'une marque" },
    { href: "/propriete-industrielle/brevets", label: "Dépôt d'un brevet" },
    {
      href: "/propriete-industrielle/dessins-modeles",
      label: "Dessins et modèles",
    },
    {
      href: "/propriete-industrielle/autres-services",
      label: "Autres services",
    },
  ],
};

/** Pages de ressources. */
export const RESOURCES_NAV: readonly NavItem[] = [
  { href: "/ressources/sources", label: "Sources officielles" },
  { href: "/ressources/references", label: "Références juridiques" },
  { href: "/ressources/faq", label: "Questions fréquentes" },
  { href: "/ressources/glossaire", label: "Glossaire" },
  { href: "/ressources/mentions-legales", label: "Mentions légales" },
];

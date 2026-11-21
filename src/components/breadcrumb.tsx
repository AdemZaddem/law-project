"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { PILLARS, RESOURCES_NAV } from "@/lib/navigation";

/** Dictionnaire de libellés pour les segments de route connus. */
const SEGMENT_LABELS: Record<string, string> = {
  "creation-entreprise": "Création d'entreprise",
  "startup-act": "Startup Act",
  "propriete-industrielle": "Propriété industrielle",
  ressources: "Ressources",
  "formes-juridiques": "Formes juridiques",
  comparer: "Comparer",
  choisir: "Choisir une forme",
  parcours: "Guide étape par étape",
  documents: "Documents",
  autorites: "Autorités",
  obligations: "Obligations",
  fiscales: "Fiscales",
  sociales: "Sociales",
  label: "Startup Label",
  criteres: "Critères d'éligibilité",
  "pre-label": "Pré-label",
  procedure: "Procédure de candidature",
  avantages: "Avantages",
  marques: "Marques",
  brevets: "Brevets",
  "dessins-modeles": "Dessins et modèles",
  "autres-services": "Autres services",
  sources: "Sources officielles",
  references: "Références juridiques",
  faq: "Questions fréquentes",
  glossaire: "Glossaire",
  "mentions-legales": "Mentions légales",
  suarl: "SUARL",
  sarl: "SARL",
  sa: "SA",
  ei: "Entreprise individuelle",
  "snc-scs": "SNC et SCS",
  gie: "GIE",
  etapes: "Étapes",
};

/** Libellé propre à un segment de route. */
function labelForSegment(segment: string): string {
  const known = SEGMENT_LABELS[segment];
  if (known) return known;

  // Libellés issus des données de navigation (pages de ressources).
  const resource = RESOURCES_NAV.find((item) => item.href.endsWith(segment));
  if (resource) return resource.label;

  const pillar = PILLARS.find((p) => p.href.endsWith(segment));
  if (pillar) return pillar.shortLabel;

  // Fallback : première lettre majuscule.
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

/**
 * Fil d'Ariane généré depuis l'URL courante.
 * Masqué sur la page d'accueil.
 */
export function Breadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const items = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: labelForSegment(segment),
    isLast: index === segments.length - 1,
  }));

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn(
        "text-sm text-muted-foreground",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home aria-hidden className="size-3.5" />
            <span>Accueil</span>
          </Link>
        </li>
        {items.map((item) => (
          <Fragment key={item.href}>
            <li aria-hidden className="flex items-center">
              <ChevronRight className="size-3.5" />
            </li>
            <li>
              {item.isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

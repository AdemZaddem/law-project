import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { NextSteps } from "@/components/next-steps";
import { Notice } from "@/components/notice";
import type { OfficialSource, VerificationStatus } from "@/lib/types";

interface PlaceholderPageProps {
  /** Nom du pilier de la page. */
  pillar: string;
  title: string;
  /** Chapô : description du contenu à venir. */
  intro: string;
  /** Statut du contenu. */
  status?: VerificationStatus;
  lastVerifiedAt?: string;
  sources?: OfficialSource[];
  /** Repères attendus sur la page (liste éditoriale, pas un contenu juridique). */
  outline?: string[];
  next: {
    primary: { href: string; label: string };
    secondary?: { href: string; label: string };
  };
  children?: ReactNode;
}

/**
 * Gabarit des pages secondaires de la première version :
 * fil d'Ariane, en-tête, description du contenu à venir et retour au pilier.
 * Ne contient aucune information juridique.
 */
export function PlaceholderPage({
  pillar,
  title,
  intro,
  status = "pending",
  lastVerifiedAt,
  sources,
  outline,
  next,
  children,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar={pillar}
        title={title}
        intro={intro}
        status={status}
        lastVerifiedAt={lastVerifiedAt}
        sources={sources}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-6">
          {children}

          <section aria-labelledby="contenu-a-venir" className="space-y-4">
            <h2 id="contenu-a-venir" className="text-xl">
              Contenu à venir
            </h2>
            {outline && outline.length > 0 ? (
              <ul className="space-y-2 text-sm text-muted-foreground">
                {outline.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-border" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Le contenu détaillé de cette page sera rédigé à partir des
                sources officielles, avec indication des références juridiques
                et de la date de vérification.
              </p>
            )}
          </section>

          <NextSteps
            primary={next.primary}
            secondary={next.secondary}
            note="Contenu en cours de rédaction — aucune information juridique n'est encore publiée sur cette page."
          />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <Notice variant="disclaimer" title="Statut de cette page">
            Cette page est un gabarit. Les informations juridiques y seront
            publiées après vérification sur les sources officielles.
          </Notice>
        </aside>
      </div>
    </div>
  );
}

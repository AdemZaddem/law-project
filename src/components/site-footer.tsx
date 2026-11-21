import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { PILLARS, PROJECT, RESOURCES_NAV } from "@/lib/navigation";

/** Date de dernière vérification globale du contenu du guide. */
const LAST_VERIFIED = "20 novembre 2026";

/**
 * Pied de page : trois piliers, ressources, avertissement légal
 * et date de vérification du contenu.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold">{PROJECT.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Guide indépendant en français sur la création d&apos;entreprise,
              le Startup Act et la propriété industrielle en Tunisie.
            </p>
          </div>

          {PILLARS.map((pillar) => (
            <nav key={pillar.id} aria-label={pillar.label}>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {pillar.shortLabel}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {(pillar.id === "creation"
                  ? [
                      { href: "/creation-entreprise/formes-juridiques", label: "Formes juridiques" },
                      { href: "/creation-entreprise/parcours", label: "Étape par étape" },
                      { href: "/creation-entreprise/obligations/fiscales", label: "Obligations" },
                    ]
                  : pillar.id === "startup"
                    ? [
                        { href: "/startup-act/label/criteres", label: "Critères du Label" },
                        { href: "/startup-act/label/procedure", label: "Procédure" },
                        { href: "/startup-act/avantages", label: "Avantages" },
                      ]
                    : [
                        { href: "/propriete-industrielle/marques", label: "Marques" },
                        { href: "/propriete-industrielle/brevets", label: "Brevets" },
                        { href: "/propriete-industrielle/dessins-modeles", label: "Dessins et modèles" },
                      ]
                ).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={pillar.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Tout le pilier
                  </Link>
                </li>
              </ul>
            </nav>
          ))}

          <nav aria-label="Ressources">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Ressources
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {RESOURCES_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Avertissement légal */}
        <div className="mt-10 rounded-md border border-border bg-card p-4">
          <div className="flex gap-3">
            <AlertTriangle
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-to-confirm"
            />
            <div className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Avertissement</p>
              <p>
                Ce site est un <strong>guide indépendant, fondé sur des sources
                officielles</strong>. Il n&apos;est ni un site gouvernemental, ni
                un service officiel, et ne constitue pas un conseil juridique,
                fiscal ou comptable.
              </p>
              <p>
                Les tarifs, délais et exigences administratifs peuvent évoluer.
                Vérifiez toujours l&apos;information auprès de l&apos;autorité
                compétente avant toute démarche. Les éléments marqués
                « À confirmer » ne sont pas encore établis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Dernière vérification globale du contenu : {LAST_VERIFIED}
          </p>
          <p>
            Identité du projet provisoire — aucune affiliation gouvernementale.
          </p>
        </div>
      </div>
    </footer>
  );
}

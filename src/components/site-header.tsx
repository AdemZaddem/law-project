"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Building2,
  Menu,
  Rocket,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV, PILLARS, PILLAR_NAV, PROJECT, RESOURCES_NAV } from "@/lib/navigation";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  ShieldCheck,
};

/** Identité visuelle provisoire du pilier. */
const PILLAR_ACCENT: Record<string, string> = {
  creation: "text-pillar-creation",
  startup: "text-pillar-startup",
  ip: "text-pillar-ip",
};

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Recherche : interface de remplacement pour le MVP (pas d'index réel). */
function SearchPlaceholder() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Rechercher dans le guide"
        className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary/40"
      >
        <Search aria-hidden className="size-4.5" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Recherche"
          className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/30 px-4 pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-lg border border-border bg-card p-4 shadow-sm"
            onClick={(event) => event.stopPropagation()}
          >
            <label htmlFor="site-search" className="sr-only">
              Rechercher dans le guide
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Rechercher (ex. : SARL, label, marque…)"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              autoComplete="off"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              La recherche sera activée prochainement.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 text-xs font-medium text-primary"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState(pathname);

  // Ferme le menu mobile à chaque navigation (ajustement d'état pendant le rendu).
  if (currentPathname !== pathname) {
    setCurrentPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Identité provisoire */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-primary/40"
        >
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground"
          >
            G
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight">
              {PROJECT.name}
            </span>
            <span className="hidden truncate text-[0.6875rem] leading-tight text-muted-foreground sm:block">
              Guide indépendant, fondé sur des sources officielles
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(pathname, item.href)
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/ressources/faq"
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(pathname, "/ressources")
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                Ressources
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SearchPlaceholder />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors lg:hidden focus-visible:outline-2 focus-visible:outline-primary/40"
          >
            {menuOpen ? (
              <X aria-hidden className="size-4.5" />
            ) : (
              <Menu aria-hidden className="size-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            {PILLARS.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.icon];
              const entries = PILLAR_NAV[pillar.id] ?? [];
              return (
                <section key={pillar.id} className="border-b border-border py-3 last:border-b-0">
                  <Link
                    href={pillar.href}
                    className={cn(
                      "flex items-center gap-2.5 text-sm font-semibold",
                      PILLAR_ACCENT[pillar.id],
                    )}
                  >
                    <Icon aria-hidden className="size-4" />
                    {pillar.shortLabel}
                  </Link>
                  <ul className="mt-2 space-y-1 pl-7">
                    {entries.slice(1).map((entry) => (
                      <li key={entry.href}>
                        <Link
                          href={entry.href}
                          className={cn(
                            "block rounded px-2 py-1.5 text-sm",
                            isActive(pathname, entry.href)
                              ? "bg-accent text-primary"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {entry.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
            <section className="py-3">
              <p className="text-sm font-semibold">Ressources</p>
              <ul className="mt-2 space-y-1 pl-7">
                {RESOURCES_NAV.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </nav>
      )}
    </header>
  );
}

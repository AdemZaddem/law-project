import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/lib/navigation";

/** Page 404 en français, avec reorientation vers les trois piliers. */
export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-wider text-primary">
        Page introuvable
      </p>
      <h1 className="mt-3 text-3xl sm:text-4xl">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-4 text-muted-foreground">
        L&apos;adresse demandée est peut-être erronée, ou le contenu a été
        déplacé. Voici par où reprendre&nbsp;:
      </p>

      <ul className="mt-8 space-y-3">
        {PILLARS.map((pillar) => (
          <li key={pillar.id}>
            <Link
              href={pillar.href}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span>
                <span className="block font-semibold">{pillar.shortLabel}</span>
                <span className="block text-sm text-muted-foreground">
                  {pillar.description}
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm">
        <Link
          href="/"
          className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Retour à l&apos;accueil
        </Link>
      </p>
    </div>
  );
}

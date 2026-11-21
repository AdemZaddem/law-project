import Link from "next/link";
import { ArrowRight, Rocket, Stamp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";

/** Section d'ouverture vers le Startup Act et le Startup Label. */
export function StartupSection() {
  return (
    <section aria-labelledby="startup-titre" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Startup Act"
            title="Un projet innovant ? Le Startup Label"
            description="Le Startup Label est la porte d'entrée du Startup Act tunisien : sans label, aucun avantage du régime n'est ouvert."
          />

          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex gap-3">
              <Rocket
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-pillar-startup"
              />
              <span>
                <span className="font-medium">Cinq critères d&apos;éligibilité</span>{" "}
                — âge, taille, indépendance du capital, innovation et
                scalabilité.
              </span>
            </li>
            <li className="flex gap-3">
              <Rocket
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-pillar-startup"
              />
              <span>
                <span className="font-medium">Une procédure en ligne</span> —
                candidature via le portail officiel des startups, avec un
                parcours distinct selon que la société existe déjà ou non
                (pré-label).
              </span>
            </li>
            <li className="flex gap-3">
              <Rocket
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-pillar-startup"
              />
              <span>
                <span className="font-medium">Des avantages et des obligations</span>{" "}
                — le label ouvre des avantages, mais impose aussi un suivi
                pendant toute sa validité.
              </span>
            </li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="/startup-act">
                Comprendre le Startup Act
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/startup-act/label/criteres">Voir les critères</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-9 items-center justify-center rounded-md bg-secondary text-pillar-startup"
            >
              <Stamp className="size-5" />
            </span>
            <h3 className="text-base font-semibold">
              Déjà une société en Tunisie&nbsp;?
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            La création d&apos;une société et l&apos;obtention du Label sont deux
            démarches indépendantes. On peut créer une société sans label, et le
            pré-label est précisément destiné à ceux qui n&apos;ont pas encore
            constitué leur société.
          </p>
          <Notice variant="info">
            L&apos;assistant d&apos;éligibilité du label s&apos;exécutera
            localement dans votre navigateur, sans collecte de données.
          </Notice>
        </div>
      </div>
    </section>
  );
}

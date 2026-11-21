import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Notice } from "@/components/notice";

/**
 * Section héros : promesse du guide et deux orientations principales.
 */
export function HeroSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Guide indépendant, fondé sur des sources officielles
          </p>

          <h1 className="text-4xl sm:text-5xl">
            Vous souhaitez créer une entreprise en Tunisie&nbsp;?
          </h1>

          <p className="prose-measure text-lg leading-relaxed text-muted-foreground">
            Ce guide vous accompagne à chaque étape&nbsp;: comprendre les
            formes juridiques, réaliser les démarches administratives, connaître
            vos obligations, obtenir le Startup Label ou protéger vos créations
            auprès de l&apos;INNORPI.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="/creation-entreprise">
                Commencer mon parcours
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/startup-act">
                <Rocket aria-hidden className="size-4" />
                Explorer le Startup Act
              </Link>
            </Button>
          </div>

          {/* Frise de parcours illustrée */}
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-4 text-sm text-muted-foreground">
            {["Choisir", "Constituer", "Immatriculer", "Déclarer"].map(
              (step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="flex size-6 items-center justify-center rounded-full border border-border bg-card text-xs font-medium text-foreground"
                    >
                      {index + 1}
                    </span>
                    {step}
                  </span>
                  {index < 3 && (
                    <span aria-hidden className="h-px w-6 bg-border" />
                  )}
                </li>
              ),
            )}
          </ol>
        </div>

        <div className="mt-10 max-w-3xl">
          <Notice variant="disclaimer">
            Plateforme informative indépendante. Elle n&apos;est ni un service
            officiel, ni un conseil juridique. Chaque contenu indique ses
            sources et sa date de vérification.
          </Notice>
        </div>
      </div>
    </section>
  );
}

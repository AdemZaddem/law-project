import Link from "next/link";
import { ArrowRight, ClipboardList, FileText, Landmark, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

/** Les quatre temps du parcours de création d'entreprise. */
const STEPS: JourneyStep[] = [
  {
    icon: Scale,
    title: "Choisir une forme juridique",
    description:
      "Comparer l'entreprise individuelle, la SUARL, la SARL et la SA selon vos besoins.",
    href: "/creation-entreprise/formes-juridiques",
  },
  {
    icon: ClipboardList,
    title: "Préparer les documents",
    description:
      "Réunir les pièces justificatives correspondant à votre forme et à votre activité.",
    href: "/creation-entreprise/documents",
  },
  {
    icon: Landmark,
    title: "Réaliser les démarches",
    description:
      "Suivre les étapes administratives auprès des autorités compétentes.",
    href: "/creation-entreprise/parcours",
  },
  {
    icon: FileText,
    title: "Connaître vos obligations",
    description:
      "Comprendre les obligations fiscales et sociales après l'immatriculation.",
    href: "/creation-entreprise/obligations/fiscales",
  },
];

/** Section « Le parcours de création en 4 temps ». */
export function JourneySection() {
  return (
    <section
      aria-labelledby="parcours-titre"
      className="border-b border-border bg-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Création d'entreprise"
          title="Le parcours de création, étape par étape"
          description="Quatre grands moments, des pages dédiées pour chacun, et les autorités compétentes clairement identifiées."
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.href}>
              <Link
                href={step.href}
                className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="flex size-9 items-center justify-center rounded-md bg-accent text-primary"
                  >
                    <step.icon className="size-5" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Étape {index + 1}
                  </span>
                </div>
                <span className="text-base font-semibold leading-snug">
                  {step.title}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </span>
                <span
                  aria-hidden
                  className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary"
                >
                  Consulter
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm">
          <Link
            href="/creation-entreprise"
            className="inline-flex items-center gap-1.5 font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Voir le pilier création en entier
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}

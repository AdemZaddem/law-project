"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Questions fréquentes (extrait de l'accueil).
 * Réponses courtes, sans affirmation juridique non vérifiée.
 */
const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Par quelle étape commencer pour créer une entreprise ?",
    answer:
      "Par le choix de la forme juridique : elle détermine le nombre d'associés, les formalités et le régime applicable. Le guide propose un comparateur et un assistant indicatif.",
  },
  {
    question: "Quelle différence entre pré-label et label ?",
    answer:
      "Le pré-label s'adresse à un projet qui n'a pas encore de société et lui laisse un délai pour la constituer ; le label est attribué à la société constituée qui respecte les critères.",
  },
  {
    question: "Faut-il un mandataire pour déposer un brevet ?",
    answer:
      "Un déposant domicilié hors de Tunisie doit constituer un mandataire établi en Tunisie. Le détail figure dans le guide du dépôt de brevet.",
  },
  {
    question: "Ce site est-il un site officiel ?",
    answer:
      "Non. C'est un guide indépendant, fondé sur des sources officielles, sans aucune affiliation gouvernementale, qui ne remplace pas l'avis d'un professionnel.",
  },
] as const;

/** Bloc FAQ réduit de la page d'accueil. */
export function FaqSection() {
  return (
    <section aria-labelledby="faq-titre" className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Avant de vous lancer"
          description="Les questions les plus courantes, avec des réponses courtes et des liens vers les guides détaillés."
        />

        <div className="mt-8 max-w-3xl rounded-lg border border-border bg-card px-5">
          <Accordion type="multiple" className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-6 text-sm">
          <Link
            href="/ressources/faq"
            className="inline-flex items-center gap-1.5 font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Voir toutes les questions
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}

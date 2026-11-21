"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

/** Accordéon de questions fréquentes, réutilisable sur toutes les pages FAQ. */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="rounded-lg border border-border bg-card px-5">
      <Accordion type="multiple" className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

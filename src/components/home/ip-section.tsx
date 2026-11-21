import Link from "next/link";
import { ArrowRight, FileSignature, Lightbulb, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";

const SERVICES = [
  {
    icon: FileSignature,
    title: "Marques",
    description: "Enregistrer une marque de fabrique, de commerce ou de services.",
    href: "/propriete-industrielle/marques",
  },
  {
    icon: Lightbulb,
    title: "Brevets",
    description: "Déposer une demande de brevet d'invention en Tunisie.",
    href: "/propriete-industrielle/brevets",
  },
  {
    icon: ShieldCheck,
    title: "Dessins et modèles",
    description: "Protéger l'apparence d'un produit par un dessin ou modèle industriel.",
    href: "/propriete-industrielle/dessins-modeles",
  },
] as const;

/** Section d'ouverture vers la propriété industrielle et l'INNORPI. */
export function IpSection() {
  return (
    <section aria-labelledby="pi-titre" className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Propriété industrielle"
          title="Protéger vos créations auprès de l'INNORPI"
          description="L'Institut national de la normalisation et de la propriété industrielle délivre les brevets et enregistre les marques, dessins et modèles."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col gap-2.5 rounded-lg border border-border bg-card p-5 transition-colors hover:border-pillar-ip/40 focus-visible:outline-2 focus-visible:outline-primary/40"
            >
              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-md bg-accent text-pillar-ip"
              >
                <service.icon className="size-5" />
              </span>
              <span className="text-base font-semibold">{service.title}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </span>
              <span
                aria-hidden
                className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-pillar-ip"
              >
                Consulter
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 max-w-3xl">
          <Notice variant="warning" title="Tarifs à vérifier">
            Les tarifs de dépôt affichés dans les guides proviennent du site de
            l&apos;INNORPI et restent à confirmer directement auprès de
            l&apos;institut avant toute démarche.
          </Notice>
        </div>
      </div>
    </section>
  );
}

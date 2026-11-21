import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Autorités administratives",
  description:
    "Qui fait quoi lors de la création d'une entreprise en Tunisie : APII, RNE, administration fiscale, sécurité sociale.",
};

const AUTHORITIES = [
  "Registre national des entreprises (RNE)",
  "Agence de promotion de l'industrie et de l'innovation (APII) — Guichet Unique",
  "Administration fiscale — identifiant fiscal et déclarations",
  "Organisme de sécurité sociale — affiliations et déclarations",
  "Services des douanes, pour les activités d'import-export",
];

export default function AuthoritiesPage() {
  return (
    <PlaceholderPage
      pillar="Création d'entreprise"
      title="Autorités administratives"
      intro="Aucune institution ne « fait tout » : chaque démarche relève d'une autorité précise. Voici les fiches de chacune."
      outline={AUTHORITIES}
      next={{
        primary: {
          href: "/creation-entreprise/parcours",
          label: "Voir le parcours étape par étape",
        },
        secondary: {
          href: "/ressources/sources",
          label: "Consulter les sources officielles",
        },
      }}
    >
      <div className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Chaque fiche indiquera le rôle exact de l&apos;autorité, ce
          qu&apos;elle ne traite <strong>pas</strong>, son site officiel et les
          étapes du parcours auxquelles elle est rattachée.
        </p>
      </div>
    </PlaceholderPage>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Notice } from "@/components/notice";
import { PROJECT } from "@/lib/navigation";
import { SOURCES_VERIFIED_AT } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Nature du guide, avertissement légal, propriété du contenu et dates de vérification.",
};

export default function LegalNoticePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumb className="mb-6" />
      <PageHeader
        pillar="Ressources"
        title="Mentions légales"
        intro="Ce que ce site est, ce qu'il n'est pas, et sur quelle base il publie ses contenus."
        lastVerifiedAt={SOURCES_VERIFIED_AT}
      />

      <div className="mt-8 max-w-3xl space-y-10">
        <section aria-labelledby="nature" className="space-y-4">
          <SectionHeading title="Nature du service" as="h2" />
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">{PROJECT.name}</strong> est un
              guide d&apos;information indépendant, en français, consacré à la
              création d&apos;entreprise, au Startup Act et à la propriété
              industrielle en Tunisie.
            </p>
            <p>
              Il s&apos;agit d&apos;un <strong>guide indépendant, fondé sur des
              sources officielles</strong>. Ce site n&apos;est ni un site
              gouvernemental, ni un service public, ni un portail officiel, et
              n&apos;a <strong>aucune affiliation avec une administration
              tunisienne</strong>. L&apos;identité du projet est provisoire.
            </p>
          </div>
        </section>

        <section aria-labelledby="avertissement" className="space-y-4">
          <SectionHeading title="Avertissement" as="h2" />
          <Notice variant="disclaimer">
            Les informations publiées ont une valeur purement informative. Elles
            ne constituent ni un conseil juridique, ni un conseil fiscal, ni un
            conseil comptable, et ne se substituent pas à l&apos;accompagnement
            d&apos;un professionnel qualifié. Toute démarche réelle doit être
            effectuée auprès de l&apos;autorité compétente.
          </Notice>
          <Notice variant="warning" title="Fiabilité des informations">
            Les tarifs, délais et exigences administratifs évoluent. Chaque
            contenu porte une date de vérification&nbsp;; les éléments non
            encore établis sont marqués « À confirmer » et ne doivent pas être
            considérés comme confirmés.
          </Notice>
        </section>

        <section aria-labelledby="contenu" className="space-y-4">
          <SectionHeading title="Contenu et sources" as="h2" />
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Les contenus s&apos;appuient sur les textes officiels et les
              sites des autorités compétentes, dont la liste est publiée dans la
              rubrique <strong className="text-foreground">Sources
              officielles</strong>. La date de dernière vérification globale du
              guide est indiquée en bas de page.
            </p>
            <p>
              La reproduction des intitulés de textes officiels est faite à des
              fins d&apos;identification. Aucun logo institutionnel n&apos;est
              reproduit.
            </p>
          </div>
        </section>

        <section aria-labelledby="donnees" className="space-y-4">
          <SectionHeading title="Données personnelles" as="h2" />
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Ce guide ne crée aucun compte utilisateur et ne collecte aucune
              donnée personnelle. Les outils interactifs (checklists,
              assistants indicatifs) s&apos;exécutent localement dans votre
              navigateur et ne transmettent aucune réponse.
            </p>
            <p>
              Les liens extérieurs renvoient vers les sites des autorités
              compétentes, soumis à leurs propres politiques de confidentialité.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

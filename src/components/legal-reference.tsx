import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalReferenceProps {
  /** Intitulé exact du texte (ex. « Loi n° 2018-20 du 17 avril 2018 »). */
  title: string;
  /** Précision optionnelle (article, décret associé…). */
  detail?: string;
  /** Référence de publication, le cas échéant (ex. « JORT n° 89 du 7 novembre 2000 »). */
  publication?: string;
  /** URL du texte officiel, le cas échéant. */
  url?: string;
  /** Référence documentaire hors ligne, à défaut d'URL officielle. */
  documentRef?: string;
  className?: string;
}

/**
 * Cite un texte juridique sans le paraphraser.
 * N'affiche que la référence fournie : aucune citation inventée.
 */
export function LegalReference({
  title,
  detail,
  publication,
  url,
  documentRef,
  className,
}: LegalReferenceProps) {
  const content = (
    <>
      <FileText aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
      <span className="min-w-0">
        <span className="block font-mono text-[0.8125rem] leading-relaxed text-foreground">
          {title}
        </span>
        {detail && (
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {detail}
          </span>
        )}
        {publication && (
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {publication}
          </span>
        )}
        {!url && documentRef && (
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {documentRef}
          </span>
        )}
      </span>
    </>
  );

  return (
    <div
      className={cn(
        "flex gap-2.5 rounded-md border border-border bg-card p-3",
        className,
      )}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 gap-2.5 transition-colors hover:text-primary"
        >
          {content}
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      ) : (
        content
      )}
    </div>
  );
}

import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalReferenceProps {
  /** Intitulé exact du texte (ex. « Loi n° 2018-20 du 17 avril 2018 »). */
  title: string;
  /** Précision optionnelle (article, décret associé…). */
  detail?: string;
  /** URL du texte officiel, le cas échéant. */
  url?: string;
  className?: string;
}

/**
 * Cite un texte juridique sans le paraphraser.
 * N'affiche que la référence fournie : aucune citation inventée.
 */
export function LegalReference({
  title,
  detail,
  url,
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

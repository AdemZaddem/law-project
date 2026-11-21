import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { VerificationStatus } from "@/components/verification-status";
import { SourceBadge } from "@/components/source-badge";
import type { OfficialSource, VerificationStatus as Status } from "@/lib/types";

interface PageHeaderProps {
  /** Nom du pilier auquel appartient la page. */
  pillar?: string;
  title: string;
  /** Chapô de page : une ou deux phrases. */
  intro?: ReactNode;
  /** Statut de vérification du contenu à venir. */
  status?: Status;
  lastVerifiedAt?: string;
  sources?: OfficialSource[];
  className?: string;
}

/**
 * En-tête unifié de toutes les pages internes :
 * pilier, H1, chapô, statut et sources.
 */
export function PageHeader({
  pillar,
  title,
  intro,
  status,
  lastVerifiedAt,
  sources,
  className,
}: PageHeaderProps) {
  const hasMeta =
    Boolean(status) || Boolean(lastVerifiedAt) || (sources?.length ?? 0) > 0;

  return (
    <header className={cn("space-y-4 border-b border-border pb-8", className)}>
      <div className="space-y-3">
        {pillar && (
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {pillar}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          {status && <VerificationStatus status={status} />}
        </div>
        {intro && (
          <p className="prose-measure text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
      {hasMeta && (
        <div className="space-y-2">
          {sources && sources.length > 0 && (
            <SourceBadge
              sources={sources}
              lastVerifiedAt={lastVerifiedAt}
            />
          )}
          {!sources?.length && lastVerifiedAt && (
            <p className="text-xs text-muted-foreground">
              Dernière vérification : {lastVerifiedAt}
            </p>
          )}
        </div>
      )}
    </header>
  );
}

import type { SourceStatus, VerificationStatus as Status } from "@/lib/types";
import { BadgeCheck, CircleHelp, Clock3, TriangleAlert, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

type AnyStatus = Status | SourceStatus;

const STATUS_CONFIG: Record<
  AnyStatus,
  { label: string; className: string; Icon: typeof BadgeCheck }
> = {
  verified: {
    label: "Vérifié",
    className:
      "bg-confirmed-background text-confirmed border-confirmed/25",
    Icon: BadgeCheck,
  },
  "to-confirm": {
    label: "À confirmer",
    className:
      "bg-to-confirm-background text-to-confirm border-to-confirm/30",
    Icon: CircleHelp,
  },
  outdated: {
    label: "Périmé",
    className: "bg-destructive/10 text-destructive border-destructive/25",
    Icon: TriangleAlert,
  },
  unavailable: {
    label: "Source inaccessible",
    className: "bg-destructive/10 text-destructive border-destructive/25",
    Icon: WifiOff,
  },
  pending: {
    label: "À rédiger",
    className: "bg-secondary text-muted-foreground border-border",
    Icon: Clock3,
  },
};

interface VerificationStatusProps {
  status: AnyStatus;
  /** Permet de masquer le libellé et ne conserver que l'icône. */
  compact?: boolean;
  className?: string;
}

/**
 * Étiquette de statut d'un contenu ou d'une source :
 * « Vérifié » (vert), « À confirmer » (ambre), « Périmé » et
 * « Source inaccessible » (rouge), « À rédiger » (neutre).
 */
export function VerificationStatus({
  status,
  compact = false,
  className,
}: VerificationStatusProps) {
  const { label, className: statusClassName, Icon } = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusClassName,
        className,
      )}
      title={compact ? label : undefined}
    >
      <Icon aria-hidden className="size-3.5" />
      {!compact && <span>{label}</span>}
      <span className="sr-only">{label}</span>
    </span>
  );
}

import { CheckCircle2, Lightbulb } from "lucide-react";
import type { RequirementKind } from "@/lib/types";
import { cn } from "@/lib/utils";

const KIND_CONFIG: Record<
  RequirementKind,
  { label: string; className: string; Icon: typeof CheckCircle2 }
> = {
  obligation: {
    label: "Obligation légale",
    className: "bg-danger-background text-danger border-danger/25",
    Icon: CheckCircle2,
  },
  recommendation: {
    label: "Recommandation",
    className: "bg-info-background text-info border-info/25",
    Icon: Lightbulb,
  },
};

interface RequirementTagProps {
  kind: RequirementKind;
  className?: string;
}

/**
 * Distingue explicitement ce qui est obligatoire en droit de ce qui relève
 * d'une recommandation.
 */
export function RequirementTag({ kind, className }: RequirementTagProps) {
  const { label, className: kindClassName, Icon } = KIND_CONFIG[kind];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs font-medium",
        kindClassName,
        className,
      )}
    >
      <Icon aria-hidden className="size-3.5" />
      {label}
    </span>
  );
}

import type { ReactNode } from "react";
import { AlertTriangle, CircleAlert, Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export type NoticeVariant = "info" | "warning" | "danger" | "disclaimer";

const NOTICE_CONFIG: Record<
  NoticeVariant,
  { className: string; Icon: typeof Info }
> = {
  info: {
    className: "bg-info-background border-info/25 text-foreground",
    Icon: Info,
  },
  warning: {
    className: "bg-to-confirm-background border-to-confirm/30 text-foreground",
    Icon: AlertTriangle,
  },
  danger: {
    className: "bg-danger-background border-danger/25 text-foreground",
    Icon: CircleAlert,
  },
  disclaimer: {
    className: "bg-secondary border-border text-muted-foreground",
    Icon: ShieldAlert,
  },
};

interface NoticeProps {
  variant?: NoticeVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Bandeau d'information contextuel :
 * info (méthodologie), warning (à confirmer), danger (obligation stricte),
 * disclaimer (avertissement légal).
 */
export function Notice({
  variant = "info",
  title,
  children,
  className,
}: NoticeProps) {
  const { className: variantClassName, Icon } = NOTICE_CONFIG[variant];

  return (
    <aside
      role="note"
      className={cn(
        "flex gap-3 rounded-md border p-4 text-sm leading-relaxed",
        variantClassName,
        className,
      )}
    >
      <Icon aria-hidden className="mt-0.5 size-4 shrink-0" />
      <div className="space-y-1">
        {title && <p className="font-semibold">{title}</p>}
        <div className="[&_a]:underline [&_a]:underline-offset-2">{children}</div>
      </div>
    </aside>
  );
}

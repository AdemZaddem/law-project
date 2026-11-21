import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NextStepsProps {
  /** Lien de sortie principal de la page. */
  primary: { href: string; label: string };
  /** Lien secondaire optionnel. */
  secondary?: { href: string; label: string };
  /** Note optionnelle sous les liens. */
  note?: string;
  className?: string;
}

/**
 * Bloc « Étapes suivantes » posé en bas des pages de guide.
 * Un lien principal, au plus un secondaire : jamais d'empilement.
 */
export function NextSteps({
  primary,
  secondary,
  note,
  className,
}: NextStepsProps) {
  return (
    <section
      aria-label="Étapes suivantes"
      className={cn(
        "rounded-lg border border-border bg-card p-6",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-primary">
        Étapes suivantes
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Link
          href={primary.href}
          className="group inline-flex items-center gap-2 font-medium text-primary"
        >
          {primary.label}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        {secondary && (
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            {secondary.label}
          </Link>
        )}
      </div>
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </section>
  );
}

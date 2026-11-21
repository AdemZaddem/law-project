import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Titre de section (H2). */
  title: string;
  /** Chapô optionnel sous le titre. */
  description?: string;
  /** Surchiffre optionnel (eyebrow) au-dessus du titre. */
  eyebrow?: string;
  /** Niveau de titre HTML. */
  as?: "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

/**
 * Titre de section standardisé : rythme vertical constant sur tout le site.
 */
export function SectionHeading({
  title,
  description,
  eyebrow,
  as: Heading = "h2",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <Heading className="text-2xl sm:text-[1.75rem]">{title}</Heading>
          {description && (
            <p className="prose-measure text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

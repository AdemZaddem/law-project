import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalOfficialLinkProps {
  href: string;
  /** Nom de l'autorité ou du site officiel. */
  authority: string;
  /** Libellé visible du lien. */
  children: ReactNode;
  className?: string;
}

/**
 * Lien sortant vers un site officiel : toujours explicite sur la destination,
 * ouvert dans un nouvel onglet, jamais présenté comme un lien interne.
 */
export function ExternalOfficialLink({
  href,
  authority,
  children,
  className,
}: ExternalOfficialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary",
        className,
      )}
    >
      <span>{children}</span>
      <span className="text-xs font-normal text-muted-foreground">
        ({authority})
      </span>
      <ExternalLink
        aria-hidden
        className="size-3.5 transition-transform group-hover:translate-y-px"
      />
      <span className="sr-only">— site officiel, nouvel onglet</span>
    </a>
  );
}

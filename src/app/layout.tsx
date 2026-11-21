import type { Metadata } from "next";
import { Inter, Source_Serif_4, Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PROJECT } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-editorial",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PROJECT.name} — Créer une entreprise en Tunisie`,
    template: `%s — ${PROJECT.name}`,
  },
  description: PROJECT.description,
  applicationName: PROJECT.name,
  // Aucune prétention à un caractère officiel.
  keywords: [
    "création entreprise Tunisie",
    "forme juridique Tunisie",
    "Startup Act Tunisie",
    "Startup Label",
    "INNORPI",
    "marque",
    "brevet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", inter.variable, sourceSerif.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-4 focus:py-2 focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

# Guide Entreprise Tunisie (nom provisoire)

Guide indépendant, fondé sur des sources officielles — plateforme web en français
pour comprendre la création d'entreprise en Tunisie, le Startup Act et la
propriété industrielle (INNORPI).

> Ce projet n'est ni un site gouvernemental, ni un service officiel, et ne
> constitue pas un conseil juridique.

## Stack technique

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Lucide React (icônes)

Aucune base de données, aucune authentification, aucun backend : site de
contenu statique.

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement
npm run build      # build de production
npm run start      # servir le build de production
npm run lint       # ESLint
npx tsc --noEmit   # vérification TypeScript
```

## Structure

```
src/
├── app/                  # routes (App Router), layouts par pilier
│   ├── creation-entreprise/
│   ├── startup-act/
│   ├── propriete-industrielle/
│   └── ressources/
├── components/           # composants réutilisables (SourceBadge, Notice…)
│   ├── home/             # sections de la page d'accueil
│   └── ui/               # composants shadcn/ui
└── lib/                  # types, navigation, registre des sources
docs/
└── content-verification.md   # politique de vérification des contenus juridiques
```

## Règles de contenu

- Tout contenu juridique affiche sa **source** et sa **date de vérification**.
- Les informations non établies sont marquées **« À confirmer »**.
- Les montants de capital non vérifiés sont **masqués**.
- Aucune affiliation gouvernementale n'est suggérée.
- La vérification suit la politique décrite dans
  [`docs/content-verification.md`](docs/content-verification.md) : sources
  primaires uniquement, quatre statuts (`verified`, `to-confirm`, `outdated`,
  `unavailable`), et aucune affirmation sans source traçable.

## Document de référence

`loi relative aux brevets.pdf` — loi n° 2000-84 du 24 août 2000 relative aux
brevets d'invention. Document source à préserver (ne pas modifier ni supprimer),
utilisé pour la section brevets.

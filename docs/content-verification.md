# Politique de vérification des contenus juridiques

> Guide Entreprise Tunisie (nom provisoire) — guide indépendant, fondé sur des
> sources officielles. Ce document définit **la règle de vérification** appliquée
> à tout contenu publié sur la plateforme. Il ne constitue pas un conseil
> juridique et ne publie aucune règle substantielle.

**Principe fondamental : toute affirmation factuelle de nature juridique ou
administrative publiée sur la plateforme doit être traçable jusqu'à une source
identifiée.** Une affirmation non traçable n'est pas publiée, ou est publiée
avec la mention « À confirmer ».

Date de dernière révision de la politique : **21 novembre 2026**.

---

## 1. Qu'est-ce qu'une source juridique faisant foi

### 1.1 Sources primaires (faisant foi)

Seules les sources suivantes peuvent fonder une affirmation publiée sans
mention particulière :

| Type | Exemples |
| --- | --- |
| Journal Officiel de la République Tunisienne (JORT) | numéros et pages du JORT, PDF officiels |
| Éditions de l'Imprimerie Officielle | codes révisés, recueils de textes |
| Textes publiés par l'autorité émettrice | site de la BCT (circulaires), page du ministère des Finances (DGI), portail Startup Tunisia (lois et décrets du Startup Act) |
| Registres et organismes officiels | RNE, APII, CNSS, INNORPI |
| Portails officiels thématiques | startup.gov.tn, finances.gov.tn, bct.gov.tn, registre-entreprises.tn |

### 1.2 Sources secondaires (sources d'appoint uniquement)

Bases de données juridiques privées, archives indépendantes du JORT (par
exemple `jort.tn`), sites d'ordres professionnels, cabinets, presse, articles de
blog. Elles servent à **repérer** un texte et à **préparer** une vérification.

> Règle absolue : une source secondaire ne remplace jamais un texte officiel.
> Une référence repérée uniquement sur une source secondaire porte le statut
> `to-confirm` et ne peut fonder aucun détail publié.

### 1.3 Le registre

Les sources et les textes sont inventoriés dans `src/lib/sources.ts` :

- `OFFICIAL_SOURCES` : sites officiels, avec autorité, catégorie, URL, statut de
  vérification, statut d'accès, date de vérification et notes/limites ;
- `LEGAL_REFERENCES` : textes de référence, avec intitulé exact, objet,
  référence de publication (JORT), URL ou référence documentaire, statut, date de
  vérification, réserves et modifications connues.

Une source injoignable **reste au registre** avec le statut `unavailable` : elle
n'est jamais supprimée pour faire disparaître un problème d'accès.

---

## 2. Les quatre statuts de vérification

| Statut | Signification | Usage |
| --- | --- | --- |
| `verified` — Vérifié | L'information exacte a été confirmée sur une source primaire officielle accessible. | Seul statut autorisant la publication d'un détail comme établi. |
| `to-confirm` — À confirmer | La source ou son information n'a pas pu être confirmée de façon indépendante. | Affichage avec la mention « À confirmer », aucun détail chiffré publié. |
| `outdated` — Périmé | L'information n'est plus courante ou sa validité est incertaine (texte modifié, tarif antérieur à une modification). | Affichage avec la mention de la modification ; aucun montant publié en l'état. |
| `unavailable` — Source inaccessible | La source officielle n'a pas pu être jointe lors de la vérification. | Source conservée, contenu bloqué en « À confirmer ». |

---

## 3. Comment vérifier une affirmation juridique

Procédure obligatoire, étape par étape :

1. **Isoler l'affirmation.** Une seule idée par affirmation (un délai, un montant,
   une condition, une autorité compétente).
2. **Identifier le texte applicable.** Loi, décret, circulaire ou page
   administrative qui la régit.
3. **Remonter à la source primaire.** JORT / Imprimerie Officielle / site de
   l'autorité émettrice. Télécharger le document et le lire (pas seulement le
   titre d'une page de résultats).
4. **Contrôler l'intitulé exact** : type de texte, numéro, date, objet.
5. **Contrôler la publication** : numéro et page du JORT, ou éditeur du PDF.
6. **Contrôler la validité** : rechercher si le texte a été modifié, complété ou
   abrogé (voir section 5).
7. **Enregistrer** la référence dans `src/lib/sources.ts` avec son statut, sa
   date de vérification, sa publication et ses réserves.
8. **Si une étape échoue** : statut `to-confirm` ou `unavailable`, et la
   publication reste bloquée.

**Interdictions :** ne jamais inventer d'URL, de numéro d'article, de numéro de
texte, de date, de montant, de délai ou d'exigence. Une information non relevée
reste simplement absente du registre.

---

## 4. Gérer des sources en conflit

1. **Hiérarchie.** JORT et éditions de l'Imprimerie Officielle priment sur tout
   autre texte ; le texte de l'autorité émettrice prime sur les interprétations.
2. **Antériorité.** Le texte le plus récent et le plus spécifique l'emporte sur
   l'ancien et le général.
3. **Écart constaté entre deux sources :**
   - si la source primaire est claire, elle s'applique et l'écart est consigné
     dans le champ `notes` de la référence ;
   - si les sources primaires divergent ou si la seule source primaire est
     injoignable, la référence passe en `to-confirm` et **aucun détail n'est
     publié** ;
   - jamais de « choix » silencieux entre deux versions.
4. **Conflit avec une source secondaire :** la source secondaire est écartée du
   rôle de référence ; elle peut être conservée comme piste, mentionnée dans
   `notes`.
5. Toute résolution de conflit est datée et consignée dans le registre.

---

## 5. Enregistrer les modifications et les dates de validité

- Le champ `amendments` d'une référence juridique décrit **les modifications
  connues** : texte modifiant ou complétant, avec son numéro, sa date et sa
  publication.
- Le champ `validityNote` / `note` précise **ce qui reste à établir** (par
  exemple : « modifications postérieures à rechercher »).
- Un texte modifié dont les effets ne sont plus assurés en l'état porte le
  statut `outdated` (cas du décret n° 2001-836, modifié par le décret
  gouvernemental n° 2017-850).
- Chaque entrée porte `lastVerifiedAt` : la date (format français) à laquelle
  **cette entrée précise** a été revérifiée.
- `SOURCES_VERIFIED_AT` donne la date de dernière révision globale du registre.
- La date de vérification d'une page s'affiche dans l'en-tête de la page
  (`PageHeader`), jamais inventée : à défaut de vérification, la page affiche le
  statut « À rédiger » ou « À confirmer ».

---

## 6. Comment citer les textes et les pages

### 6.1 Formes de citation

- **Loi** : « Loi n° 2018-20 du 17 avril 2018 » + objet (« Relative aux
  startups »).
- **Décret** : « Décret n° 2001-836 du 10 avril 2001 » ou « Décret
  gouvernemental n° 2018-840 du 11 octobre 2018 » + objet exact.
- **Circulaire** : « Circulaire aux intermédiaires agréés n° 2019-01 du
  30 janvier 2019 » + objet (« Comptes startup en devises ») + émetteur (BCT).
- **Article de code** : « Article 56 du code de l'impôt sur le revenu des
  personnes physiques et de l'impôt sur les sociétés ».
- **Page administrative** : intitulé de la page + organisme + URL officielle.

### 6.2 Référence de publication

Lorsqu'elle est connue : `JORT n° <numéro> du <date>, p. <page>`. Elle est
renseignée uniquement si relevée ; à défaut, le champ reste vide (jamais
estimé).

### 6.3 Support de citation

- URL officielle (`url`) lorsque la source primaire l'héberge ;
- sinon référence documentaire (`documentRef`), par exemple le document PDF
  fourni au projet ;
- la citation est rendue par le composant `LegalReference`, qui n'affiche que
  la référence fournie.

---

## 7. Quand afficher « À confirmer »

La mention « À confirmer » (statut `to-confirm`) s'affiche dans les cas
suivants :

- référence repérée sans consultation du texte officiel ;
- source officielle inaccessible ou partiellement accessible ;
- tarif, délai, montant ou seuil non relevé sur une source primaire ;
- modification possible d'un texte non encore confirmée ;
- toute information issue d'une source secondaire seule.

Règles complémentaires :

- les **montants de capital non vérifiés restent masqués**, pas seulement
  marqués ;
- une page sans vérification affiche le statut « À rédiger » (`pending`) plutôt
  qu'une fausse date ;
- la mention « À confirmer » n'est jamais remplacée par une valeur probable ou
  une moyenne de sources.

---

## 8. Fréquence de revue des informations dynamiques

Les informations administratives changent plus vite que les textes de loi.

| Type d'information | Revue minimale |
| --- | --- |
| Tarifs, redevances, montants | à chaque publication d'un texte les modifiant, et au moins **tous les 6 mois** |
| Délais de traitement, sessions de candidature (Label / Pré-label) | **tous les 3 mois** |
| Listes de pièces, formulaires, adresses de dépôt | **tous les 6 mois** |
| Accessibilité des sources officielles (RNE, APII, CNSS, INNORPI, BCT…) | à chaque révision globale, **au moins tous les 6 mois** |
| Textes de loi et décrets d'application | à chaque session parlementaire, **au moins tous les 12 mois** |

Toute revue met à jour `lastVerifiedAt` de l'entrée concernée et, le cas
échéant, `SOURCES_VERIFIED_AT`. Une information non revérifiée à échéance perd
son statut `verified` et repasse en `to-confirm`.

---

## 9. Exigence légale ou simple recommandation

- **Exigence légale** : imposée par un texte (loi, décret, circulaire) en vigueur.
  Affichée avec le composant `RequirementTag` de type `obligation` et **toujours**
  accompagnée de sa référence juridique.
- **Recommandation pratique** : conseil d'usage, bonne pratique, stratégie
  d'accompagnement. Affichée avec `RequirementTag` de type `recommendation`,
  formulée comme un conseil, **jamais** avec un « il faut » ni un ton
  réglementaire.
- Une recommandation ne cite un texte que pour situer le contexte, pas pour
  créer une obligation.
- Aucune des deux ne doit laisser croire qu'elle émane d'une administration :
  le guide est indépendant et ne détient aucun mandat officiel.

---

## 10. Traçabilité : contrôle avant publication

Checklist obligatoire pour chaque page de guide :

1. [ ] Chaque affirmation factuelle a une entrée dans `OFFICIAL_SOURCES` ou
       `LEGAL_REFERENCES`.
2. [ ] Chaque référence a un intitulé exact, un statut, une date de vérification
       et, le cas échéant, une publication.
3. [ ] Seul un statut `verified` est présenté comme établi ; tout autre statut
       affiche « À confirmer », « Périmé » ou « Source inaccessible ».
4. [ ] Aucun montant, délai, URL ou article n'a été produit de mémoire.
5. [ ] Les sources inaccessibles sont conservées au registre.
6. [ ] Aucun logo institutionnel n'est reproduit et rien ne suggère une
       affiliation gouvernementale.
7. [ ] La date de vérification affichée correspond à une vérification réelle.

---

## 11. Documents associés

- `src/lib/sources.ts` — registre des sources et des références juridiques ;
- `src/lib/types.ts` — types `SourceStatus`, `SourceCategory`,
  `VerificationStatus` ;
- `src/app/ressources/sources/page.tsx` — page publique du registre des sources ;
- `src/app/ressources/references/page.tsx` — page publique des références ;
- `loi relative aux brevets.pdf` — document source à préserver (loi n° 2000-84
  du 24 août 2000), jamais modifié ni supprimé.

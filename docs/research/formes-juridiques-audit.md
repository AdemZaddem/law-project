# Audit de `formes-juridiques.md` — Phase 4, étape 2

**Date des contrôles : 21 et 22 novembre 2026**
**Document audité : `docs/research/formes-juridiques.md` (étape 1, 492 lignes)**
**Statut : document de recherche interne — aucun contenu publié, aucune modification de `src/`.**

> Conformément à `docs/content-verification.md` : seules les sources primaires établissent les faits ; les sources secondaires ne servent que de corroboration (« À confirmer ») ; aucun montant, taux, délai ou numéro d'article n'est inventé ; les conflits sont signalés et non tranchés silencieusement.

---

## 1. Résumé exécutif

L'étape 2 a audité **toute affirmation fiscale, administrative et législative** du document d'étape 1 contre les textes primaires les plus récents trouvés, puis a corrigé le document en documentant chaque correction.

**Résultats principaux :**

1. **Code des sociétés (CSC)** : aucune modification législative trouvée entre l'édition IORT du **07/02/2024** (dernière édition trouvée) et le **21/11/2026**. Recherches JORT 2024-2026, iort.tn, cmf.tn, diwan.tn, tunis-stockexchange, chaexpert : seules de vieilles lois (2000-93, 2005-65, 2009-16, 2019-47) et le décret-loi 2025-3 du 03/10/2025 (sociétés communautaires — hors périmètre des 7 formes). L'absence de preuve n'est pas preuve d'absence : contrôle périodique maintenu (§5.2 n° 7 du document audité).
2. **Code IRPP/IS 2026 (jibaya.tn)** : édition **courante jusqu'à la LF 2026** (loi n° 2025-17 du 12/12/2025, 6 références « 2025-17 » dans le texte, 20 références « 2024-48 »). L'édition a-tla 2025 est identique mais antérieure au tirage LF 2026 (0 référence).
3. **Barème IRPP** : taux 0/15/25/30/33/36/38/40 % **établis par la loi de finances 2025 elle-même** (loi n° 2024-48 du 09/12/2024, JORT n° 149 du 10/12/2024, art. 36) et **applicables aux revenus réalisés à partir du 01/01/2025** (art. 36-2 de la même loi + Note commune N°3/2025 de la DGI) — le document d'étape 1 omettait l'année d'application (correction C8).
4. **Mystère « article 12 » résolu** : les compilations de l'Imprimerie Officielle contiennent **deux « article 12 »** — (a) les art. 12 et 12 bis de la **loi de promulgation n° 89-114** (partie « PREMIÈRE PARTIE » de la compilation) : IS minimum de **20 %** (et non 25 %) pour les personnes morales exonérées, réduit à 10 % pour les sociétés au taux historique de 25 % ; IRPP minimum de **45 %** pour les personnes physiques exonérées ; (b) l'**art. 12 du code** (partie « code ») = charges déductibles. Le PDF jibaya 2026 ne contient que la partie « code » → l'affirmation « IS minimum 25 % … reproduit par le Code IRPP/IS 2026 » du document d'étape 1 était **fausse sur le taux, sur la condition et sur la source** (correction C6).
5. **CSS 2026 établie par une source primaire** : Note commune N°01/2026 de la DGI (jibaya.tn, arabe, 7 p.) — mesures exceptionnelles prolongées par l'art. 87 de la LF 2026 : +3 points pour les sociétés à 10/15/20 % (minimums 400/200 DT), +4 points pour 35/40 % (minimum 500 DT), forfait 400 DT pour les sociétés totalement exonérées, réduction de 0,5 point pour les personnes physiques en 2026 (correction C9 — le document marquait « À confirmer »).
6. **Régime forfaitaire des EI** : 5 corrections factuelles (C1-C5) — mention « optionnel » erronée pour l'art. 44 bis (régime **obligatoire** pour les EI éligibles ; l'option est l'art. 44 ter §1), note de bas de page mal attribuée, exception de 6 ans hors zones communales omise, exclusions d'activités (décrets 2014-2939 / 2022-802) omises, majoration de 50 % pour dépôt tardif omise, et le forfaitaire **optionnel** 4 000/5 000 DT est **nouveau** (ajouté par l'art. 91 de la LF 2026 du 12/12/2025) — première année d'application non précisée par le texte → « À confirmer ».
7. **Transparence fiscale** : l'art. 4 du code IRPP/IS ne vise que les membres **personnes physiques ou sociétés de personnes** ; l'art. 45 I 5 soumet expressément à l'IS les **membres personnes morales** des GIE et les coparticipants de sociétés en participation. Les affirmations absolues des lignes 279/318/357 nécessitent cette nuance (correction C7).
8. **RNE et APII** : toutes les redevances et les délais de dépôt du document (C001-C005, C012, M001.06, M004.09, M004.37) **re-vérifiés** sur les pages officielles du RNE ; check-liste APII EI (maj 31/08/2026) re-vérifiée (1 % + 5 DT, 7,5 DT + 10 DT). Distinction **délai statutaire** (CSC art. 14 : « un mois ») / **délai administratif RNE** (« 30 jours », déclencheurs spécifiques) documentée (§4.2) ; les redevances sont une **publication administrative du RNE** (base légale tarifaire non établie) → à présenter datées, non comme tarif permanent (§4.3).

**Bilan** : 10 corrections appliquées au document d'étape 1 (C1-C10, §6), 0 affirmation restée sans aucune source primaire, 12 familles d'informations classées « À confirmer » (§8.2). Aucune modification de `src/`, aucun commit, le PDF `loi relative aux brevets.pdf` est inchangé (md5 `022b8f0196158ba35243db7072e1db6e` vérifié).

---

## 2. Contrôle des modifications législatives

### 2.1 Code des sociétés commerciales (loi n° 2000-93)

| Élément contrôlé | Résultat |
| --- | --- |
| Éditions disponibles au 21/11/2026 | IORT « mise à jour le **07/02/2024** » (dernière trouvée, référencée par diwan.tn) ; édition « 10/02/2022 » encore hébergée par cmf.tn, tunis-stockexchange et chaexpert ; **édition 2025/2026 introuvable** (iort.tn, cmf.tn, diwan.tn) → « Indisponible » (§5.2 n° 8 du document audité) |
| Modifications entre 07/02/2024 et 21/11/2026 | **Aucune loi modificative trouvée** (recherches JORT 2024-2026, iort.tn, diwan.tn, mots-clés « code des sociétés » + « modification »). Dernières lois modificatives retrouvées : 2000-93, 2005-65, 2009-16, 2019-47 |
| Décret-loi n° 2025-3 du 03/10/2025 | Concerne les **sociétés communautaires** uniquement — hors périmètre des 7 formes étudiées |
| Confrontation 2022 ↔ 2024 | Identité article par article des articles cités (étape 1) — **mais la mise à jour ne prétend pas que le Code est à jour au 21/11/2026** : le texte retenu est « l'édition IORT du 07/02/2024, dernière édition trouvée », avec contrôle périodique (§5.2 n° 7) |
| Décret n° 2006-1546 (seuils art. 13) | **Re-vérifié dans l'édition 07/02/2024** : art. 1-2 → 100 000 / 300 000 DT et 10 commissaires (dispense al. 2) ; 1 500 000 / 2 000 000 DT et 30 (al. 3) — identique à l'édition 2022 |

### 2.2 Code IRPP/IS (loi n° 89-114)

| Élément contrôlé | Résultat |
| --- | --- |
| Édition jibaya.tn 2026 (`Code_IRPP_IS_2026_fr.pdf`, 125 p., 03/2026) | Contient les références aux LF **2024-48** (20 occurrences) et **2025-17** (6 occurrences, dont l'art. 91 créant le forfaitaire optionnel dans l'art. 44 ter) → **courant jusqu'à la LF 2026 (12/12/2025)** |
| Édition a-tla 2025 (124 p.) | Texte identique pour les articles examinés mais **avant le tirage LF 2026** (0 référence « 2025-17 ») |
| Compilation Imprimerie Officielle 2024 (alliance-tunisie, 428 p., « Edition revue et corrigée le 24 janvier 2024 ») | Contient les **3 parties** : loi de promulgation (arts. 1 à 12 bis de la loi 89-114) + code + textes d'application — **seule source localement disponible** qui reproduit l'art. 12 / 12 bis de la loi de promulgation |
| LF 2025 (loi n° 2024-48 du 09/12/2024) | PDF primaire JORT n° 149 du 10/12/2024 téléchargé depuis jibaya.tn — art. 36 (barème + application au 01/01/2025) et art. 37 (IS 20 %) extraits et vérifiés |
| LF 2026 (loi n° 2025-17 du 12/12/2025, JORT n° 148) | Texte incorporé au Code IRPP/IS 2026 (références « 2025-17 ») ; art. 87 (CSS) commenté par la Note commune N°01/2026 de la DGI |
| Page DGI « Aperçu général » (finances.gov.tn, non datée) | **Obsolète** : IS 25 %, ancien barème 26/28/32/35, forfaitaire 75/150 DT — contredit par la LF 2025 et le Code 2026 |
| Guide OTE/IOM 2022 | **Obsolète** sur le capital SARL (1 000 TND) — contredit par l'art. 92 du CSC |
| `doc-fiscale.finances.gov.tn` | **Indisponible** (HTTP 503) — contourné par jibaya.tn (portail officiel de la DGI) |

**Conclusion §2** : aucun texte nouveau n'a été manqué pour le périmètre des 7 formes ; le document d'étape 1 reste fondé sur les éditions 07/02/2024 (CSC) et 2026 (IRPP/IS, courant LF 2026). Aucune affirmation « le Code est à jour » n'est faite au-delà de ce qui est prouvé.

---

## 3. Audit fiscal (chiffre par chiffre)

Traçabilité : **S** = source primaire, **A** = autorité émettrice, **U** = URL, **D** = date/édition, **L** = limites.

### 3.1 Barème IRPP et minimum d'impôt

| Affirmation auditée | Statut | S / A / U / D | Conditions, année fiscale, L |
| --- | --- | --- | --- |
| Barème 0 % (0-5 000) / 15 % / 25 % / 30 % / 33 % / 36 % / 38 % / 40 % (> 70 000 DT) | **Vérifié** | LF 2025 art. 36 (JORT n° 149 du 10/12/2024) + Code IRPP/IS 2026 art. 44 I / DGI / <https://jibaya.tn/wp-content/uploads/2024/12/Loi2024_48.pdf> + <https://jibaya.tn/wp-content/uploads/2026/03/Code_IRPP_IS_2026_fr.pdf> / 09-10/12/2024, éd. 2026 | **Année d'application : revenus réalisés à partir du 01/01/2025** (art. 36-2 LF ; Note commune N°3/2025 §2, <https://jibaya.tn/wp-content/uploads/2025/01/Note-Commune-03-1.pdf>, md5 `be15557c284b3d93a94a45893edf4b95`). L : la page DGI « Aperçu général » affiche l'ancien barème (26/28/32/35) → **obsolète** |
| « Art. 44, modifié par la LF 2024-48 » (rédaction étape 1) | **Précisé (C8)** | Même source | Mention exacte du texte : « (Modifié Art 14-1 LF 2016-78 du 17/12/2016 et **Art 36-1 LF 2024-48 du 09/12/2024**) » |
| Minimum d'impôt 0,2 % du CA ou des recettes brutes, minimum 300 DT | **Vérifié** | Code IRPP/IS 2026 **art. 44 II** / DGI / jibaya.tn / éd. 2026 | Activités commerciales **et** non commerciales ; « exigible même en cas de non réalisation d'un chiffre d'affaires » ; L : ne concerne pas les sociétés (art. 49 II a un régime propre — non repris au site) |
| CSS 2026 sur les revenus des personnes physiques : réduction de 0,5 point | **Vérifié (nouveau)** | Note commune N°01/2026 de la DGI / DGI / <https://jibaya.tn/docs/note-commune-n01-2026/> + PDF <https://jibaya.tn/wp-content/uploads/2026/01/%D9%85%D8%B0%D9%83%D8%B1%D8%A9-%D8%B9%D8%A7%D9%85%D8%A9-%D8%B9%D8%AF%D8%AF-1.pdf> / janvier 2026 (md5 `1532e95c63d0f664be6b3b11502e16bc`) | Art. 87 LF 2025-17 : mesure **exceptionnelle et annuelle** — non-salariés : revenus dont le délai de déclaration intervient en 2026 ; L : note en **arabe** ; à **re-vérifier chaque année** ; exonération des PP au revenu net ≤ 5 000 DT inchangée |

### 3.2 Impôt sur les sociétés (taux)

| Affirmation auditée | Statut | S / A / U / D | Conditions, année fiscale, L |
| --- | --- | --- | --- |
| Taux de droit commun **20 %** | **Vérifié** | LF 2025 art. 37 (JORT n° 149 du 10/12/2024) + Code IRPP/IS 2026 art. 49 I + note (2) / DGI / jibaya.tn / 12/2024, éd. 2026 | Note (2) de l'art. 49 : « Ce taux s'applique aux bénéfices réalisés à partir du 1er janvier 2024 » ; L : page DGI « 25 % » = **obsolète** |
| Taux réduit **10 %** (artisanat, agriculture, pêche, coopératives, emploi des jeunes…) | **Vérifié** | Code IRPP/IS 2026 art. 49 I 1 / DGI / jibaya.tn / éd. 2026 | Liste d'activités du texte ; L : le site doit citer l'article, pas extrapoler |
| Taux **35 %** et **40 %** (secteurs spécifiques, banques) | **Vérifié** | Code IRPP/IS 2026 art. 49 I 3 et 4 / DGI / jibaya.tn / éd. 2026 | Idem |
| **IS minimum 25 %** pour les sociétés exemptées ou à taux réduit (affirmation étape 1, ligne 238) | **FAUSSE → corrigée (C6)** | Loi n° 89-114 **art. 12 I** (partie « loi de promulgation » de la compilation Imprimerie Officielle 2024, <https://alliance-tunisie.com/wp-content/uploads/2024/06/CODE-IRPP-IS-2024.pdf> ; corroboré par le texte JORT de la loi 2017-8 : <http://jort.tn/view/journal-officiel/fr/2017/015/loi-2017-8> et <https://www.lois.tn/doc/42> — miroirs secondaires) / Imprimerie Officielle + JORT / éd. 24/01/2024 | Taux réel : **20 %** (« taux minimum de 20 % »), réduit à 15 % puis à **10 %** « pour les sociétés soumises à l'impôt sur les sociétés **aux taux de 25 %** » (art. 22 LF 1996-113, art. 62 LF 1997-88, complété art. 2 loi 2017-8 ; art. 2-5 loi 2017-8 + art. 14-20 LF 2020-46). Applicable depuis le 01/01/1990 (art. 12 III). L : **le PDF jibaya 2026 ne contient pas cette partie** (édition « code seul ») — d'où l'erreur de l'étape 1 ; la **portée pratique actuelle** du taux 10 % (ancien taux 25 % alors que le taux de droit commun est 20 % depuis 2024) **n'est pas établie** → « À confirmer » si mentionné ; sources hébergées par des miroirs secondaires (document Imprimerie Officielle lui-même primaire) |
| **IRPP minimum 45 %** pour les personnes physiques bénéficiaires d'exonérations | **Vérifié (nouveau, absent du document)** | Loi n° 89-114 **art. 12 bis** (mêmes sources que ci-dessus) | Ajouté art. 112 LF 1992-122, modifié art. 2-6 **loi 2017-8** (60 % → 45 %) ; L : concerne les PP exonérées (pas l'EI de droit commun) — à ne publier que si un cas d'usage l'exige |

### 3.3 Contribution sociale de solidarité (CSS) 2026 — résolution du point « À confirmer »

| Catégorie | Taux / montant 2026 | Source |
| --- | --- | --- |
| Personnes physiques (dont EI, non-salariés) | **Réduction de 0,5 point** (soit aucun supplément sur le barème) sur les revenus dont le délai de déclaration intervient en 2026 ; salariés : sur les salaires payés du 01/01 au 31/12/2026 | Note commune N°01/2026 (art. 87 LF 2025-17) |
| Sociétés au taux de **35 % ou 40 %** | **+ 4 points** sur le taux d'IS (CSS = IS à taux+4 − IS à taux), **minimum 500 DT** | idem |
| Sociétés au taux de **15 % ou 20 %** | **+ 3 points** (soit 23 % effectif pour une société à 20 %), **minimum 400 DT** | idem |
| Sociétés au taux de **10 %** | **+ 3 points**, **minimum 200 DT** | idem |
| Sociétés **totalement exonérées** d'IS | Forfait de **400 DT** pendant la période d'exonération, sur les bénéfices d'exploitation (rattaché à l'art. 12 de la loi 89-114) | idem |
| Exonération PP au revenu net ≤ 5 000 DT | **Inchangée** | idem |
| Base, délais, mode de recouvrement | **Inchangés** (« لم يطرأ أي تغيير ») — CSS non déductible de l'assiette, mêmes délais et voies de recouvrement que l'IRPP/IS | idem |

L : mesure **exceptionnelle annuelle** (poursuite art. 87 LF 2025-17) → **toujours dater** (« pour l'année 2026 ») et **re-vérifier chaque année** ; note en arabe (traduction contrôlée sur les chiffres et les taux).

### 3.4 Régime forfaitaire des entreprises individuelles (art. 44 bis / 44 ter)

| Affirmation auditée | Statut | Source primaire (art.) | Corrections / conditions |
| --- | --- | --- | --- |
| « **Régime forfaitaire optionnel** (art. 44 bis) » | **Erroné → C4** | Code 2026 art. 44 bis : « **Sont soumises** à l'impôt sur le revenu selon le régime forfaitaire d'imposition, les entreprises individuelles… » | L'art. 44 bis est **obligatoire** pour les EI éligibles ; le régime **optionnel** est l'**art. 44 ter § 1** (« peuvent payer un impôt forfaitaire **optionnel** ») |
| Conditions (établissement unique, non importatrice, pas de commissions, pas d'alcool, pas de gros, ≤ 1 véhicule ≤ 3,5 t, pas de BNC, pas de TVA au régime réel, pas de régime réel après vérification, CA ≤ 100 000 DT) | **Vérifié** | art. 44 bis (dernier tiret mod. Art 17-1 LF 2015-53) | — |
| Durée **6 ans** à compter du dépôt de la déclaration d'existence (art. 56), renouvelable (art. 59 V) ; entreprises exerçant au 01/01/2016 réputées créées à cette date | **Vérifié** | art. 44 bis (mod. Art 16-3 LF 2017-66 et Art 18 LF 2020-46) | — |
| « La période de 6 ans ne s'applique pas aux entreprises implantées **en dehors des zones communales** (limites avant 01/01/2015) » | **Omise → C2** | art. 44 bis (Ajouté Art 42 LF 2019-78, mod. Art 18 LF 2020-46) | L'étape 1 présentait « 6 ans » sans cette exception |
| Exclusion des **activités fixées par décret** en zones communales | **Omise → C5** | art. 44 bis (Ajouté Art 45-1 LF 2013-54, mod. Art 16-2 LF 2017-66) + **décret n° 2014-2939** du 01/08/2014 complété par le **décret n° 2022-802** du 09/11/2022 (note (1) de l'art. 44 ter) : cafés (sauf salons de thé et buvettes), mécanique automobile, tôlerie et peinture automobile, électricité (dont automobile), vente de viandes rouges et dérivés, pâtisserie et glace (sauf grands espaces/groupements des grandes villes) | — |
| Tarif **400 DT/an** (zones communales limites avant 01/01/2015 ; réduit de 50 % hors zones) pour CA ≤ 10 000 DT ; **3 %** entre 10 000 et 100 000 DT | **Vérifié** | art. 44 ter (400 DT mod. art. 55-1 décret-loi 2022-79 = LF 2023 ; 3 % mod. Art 45-2 LF 2013-54, Art 17-3 LF 2015-53, Art 16-1 LF 2017-66) | — |
| « (délais de déclaration **à partir de 2023**) » attaché aux montants 4 000/5 000 DT | **Mal attribué → C1** | Note **(2)** de l'art. 44 ter : « Ce tarif s'applique à l'impôt forfaitaire dont le délai de déclaration intervient au cours de l'**année 2023 et des années ultérieures** » | La note porte sur le tarif de **400 DT**, pas sur le forfaitaire optionnel |
| Majoration de **50 %** en cas de dépôt de la déclaration annuelle après 30 jours de l'expiration des délais légaux | **Omise → C5** | art. 44 ter (Ajouté Art 45-3 LF 2013-54) | — |
| Forfaitaire **optionnel 4 000 DT** (CA ≤ 50 000) / **5 000 DT** (50 001-100 000), moitié en zones rurales et villages ; libératoire si bénéfices nets forfaitaires ≤ 25 % du CA déclaré spontanément ; non-vérification 6 ans ; renouvellement automatique ; activités déclassées (décret 2022-802) éligibles ; **délais 25 avril / 25 octobre** ; télépaiement | **Vérifié MAIS NOUVEAU → C3** | art. 44 ter § 1 — **(Ajouté Art 91 LF 2025-17 du 12/12/2025)** | L'étape 1 le présentait comme préexistant ; **première année d'application non précisée par le texte → « À confirmer »** ; corroboré par les résumés secondaires de la JORT LF 2026 |
| Page DGI : 75/150 DT et « 3 ans » | **Obsolète** (inchangé) | art. 44 bis/ter | Confirmé à l'étape 2 |

### 3.5 Transparence fiscale (art. 4 et art. 45 du code IRPP/IS)

| Affirmation auditée | Statut | Source | Nuance apportée (C7) |
| --- | --- | --- | --- |
| « Les associés des SNC … sont personnellement soumis à l'IRPP » | **Vérifié avec réserve** | art. 4 (mod. Art 55 LF 2001-123, Art 19-6 LF 2015-53) | L'art. 4 ne vise que les membres **« personnes physiques ou sociétés de personnes »** — l'affirmation absolue (« ce sont les associés qui sont imposés à l'IRPP ») est incomplète |
| « Les associés des SCS … personnellement soumis à l'IRPP » | **Vérifié avec réserve** | art. 4 | Idem |
| « Les membres des GIE … personnellement soumis à l'IRPP » | **Vérifié avec réserve** | art. 4 | Idem — **cas le plus sensible**, le GIE pouvant avoir des membres personnes morales (art. 439 CSC) |
| Traitement des **membres personnes morales soumises à l'IS** | **Nuance à publier** | **art. 45 I 5** : « Les coparticipants des sociétés en participation, les **membres des groupements d'intérêt économique** … lorsqu'ils ont la forme de **personnes morales soumises à l'impôt sur les sociétés** » sont soumis à l'IS | GIE : **exprès** dans l'art. 45 I 5. SNC/SCS : ni l'art. 4 ni l'art. 45 I 5 ne visent expressément les associés personnes morales → **« À confirmer »** (traitement non établi par les deux seuls articles examinés) |
| IS applicable aux sociétés de l'art. 7 du CSC « sous réserve de l'art. 4 » | **Vérifié** | art. 45 I 1 | Inchangé |
| Taux des **distributions** (art. 29) | **« À confirmer » (inchangé)** | art. 29 (cadre « revenus de valeurs mobilières ») | Le taux détaillé et l'éventuelle retenue n'ont pas été extraits — ne rien affirmer (§5.2 n° 5) |

### 3.6 Autres points fiscaux contrôlés

| Point | Statut | Source |
| --- | --- | --- |
| Déclaration d'existence « **avant d'entamer son activité** » | **Vérifié** | Code 2026 art. 56 — + complément : « (Ajouté Art 60 LF 2024-48) » autorisant le dépôt par organismes publics / moyens électroniques (information de complétude, non publiée telle quelle) |
| Seuils du commissaire aux comptes (décret 2006-1546) | **Re-vérifié** (édition CSC 07/02/2024) | 100 000 / 300 000 DT et 10 ; 1 500 000 / 2 000 000 DT et 30 |
| « Registre du commerce » dans les art. 14, 16, 176, 443 du CSC | **Conflit signalé (inchangé)** | RNE (loi 2018-52, en vigueur 05/02/2019) ; art. 98 mod. loi 2019-47 parle déjà du RNE |

---

## 4. Audit administratif (RNE / APII)

### 4.1 Redevances et délais de dépôt — re-vérifiés sur les pages officielles du RNE (21/11/2026)

Source unique : page « Formalités » du RNE, <https://home.registre-entreprises.tn/formalites/> (CNRE), extraits du 21/11/2026.

| Formalité | Type | Redevance | Délai de dépôt (déclencheur exact) | Forme(s) concernée(s) |
| --- | --- | --- | --- | --- |
| **C 001** | Personne physique commerçant — création | **20 DT** | **30 jours** à compter de la date du début d'activité mentionnée dans la carte d'identification fiscale | EI (commerçant) |
| **C 002** | Personne physique artisan — création | **20 DT** | Texte RNE : les artisans ayant commencé avant le 05/02/2019 ne sont pas soumis à délai (art. 16 loi 2018-52), non opposable aux tiers | EI (artisan) |
| **C 003** | Personne physique professionnel — création | **20 DT** | Idem (avant le 05/02/2019, art. 16 loi 2018-52) | EI (profession libérale) |
| **C 004** | Société anonyme — création | **50 DT** | **30 jours** à compter de la date de la **déclaration de souscription et de versement** | SA |
| **C 005** | GIE — création | **50 DT** | **30 jours** à compter de la **signature du contrat de constitution** | GIE |
| **C 012** | SARL / S.U.A.R.L / SNC / SCA / SCS / société civile — création | **50 DT** | **30 jours** à compter de la **signature des statuts** | SUARL, SARL, SNC, SCS |
| **M 001.06** | Dépôt des états financiers (PP) | **20 DT** | **Fin du 7e mois** suivant la clôture | EI |
| **M 004.09** | Dépôt des états financiers (sociétés) | **50 DT** | **Fin du 7e mois** suivant la clôture | Toutes les sociétés |
| **M 004.37** | Dépôt du PV d'approbation des états financiers | **20 DT** | **30 jours** à partir de la date du PV | Sociétés |
| **M 004.36** | Radiation | **10 DT** | 30 jours à partir de la publication de la clôture de la liquidation | Sociétés |

**Toutes les redevances et tous les délais cités dans le document d'étape 1 sont confirmés.** Écart constaté et documenté : le document écrit « 30 jours » pour C001-C003, alors que le champ « Délais » du RNE ne porte pour C002/C003 que la règle d'échéance de l'art. 16 (avant le 05/02/2019) — la formulation du document reste exacte pour C001 et n'affirme aucun délai pour C002.

### 4.2 Délai statutaire vs délai administratif (ne pas fusionner)

| Regime | Texte | Déclencheur | Portée |
| --- | --- | --- | --- |
| **Statutaire** | CSC art. 14 : immatriculation **« un mois »** à compter de la constitution (rédaction : encore « registre du commerce ») | Constitution de la société | Obligation légale du Code ; l'art. 176 (SA) dit également « dans le mois » |
| **Administratif** | RNE : **30 jours** (C 004 : déclaration de souscription et de versement ; C 012 : signature des statuts ; C 005 : signature du contrat) | Actes spécifiques | Publication officielle du CNRE — **délai de dépôt, pas délai de traitement** |

→ Sur le site : présenter le délai RNE comme « délai de dépôt indiqué par le RNE », et ne pas le présenter comme la même règle que l'« un mois » du CSC (déclencheurs et portée différents). Le délai d'obtention d'un extrait (traitement) **n'est établi par aucune source** (§5.2 n° 4 inchangé).

### 4.3 Validité juridique des redevances (limitation générale)

- Les montants proviennent de la **publication administrative du RNE** (site officiel du CNRE), **pas d'un tarif législatif localisé** (la base légale des redevances — loi de finances ou décret tarifaire — n'a pas été établie à ce stade).
- **Aucune date de validité** n'est affichée par le RNE → ne **jamais** présenter ces montants comme un « tarif permanent de loi » ; formule retenue : **« redevance indiquée par le RNE au 21 novembre 2026 »**, avec renvoi vers le RNE pour vérification.
- La recherche de la base légale des redevances dans la loi 2018-52 reste un **nice-to-have** (non bloquant).

### 4.4 Check-liste APII « Constitution d'une Entreprise Individuelle » (mise à jour 31/08/2026)

Source : APII, `tunisieindustrie.nat.tn`, <https://www.tunisieindustrie.nat.tn/fr/download/cfga/Entreprise_individuelle.pdf> — **re-vérifiée le 22/11/2026** (extraction intégrale, 2 p.).

| Élément | Valeur vérifiée |
| --- | --- |
| Déclaration du projet | N° ADD-APII **ou** copie de la déclaration (APIA / ONA / ONTT / CEPEX) — **validité 1 an** |
| Identité du promoteur | CIN (Tunisien) ou passeport (étranger) |
| Nom commercial (facultatif) | Certificat de réservation RNE — **validité 6 mois** |
| Siège — contrat de location enregistré | **1 % du montant du loyer annuel + 5 DT de timbre par feuille** |
| … si enregistrement > 2 mois après la signature | **1 % + 7,5 DT par feuille (au lieu de 5 DT) + 10 DT de pénalité de retard** (montant forfaitaire) |
| Autres justificatifs de siège | Attestation de domiciliation (domiciliataire patenté, identifiant fiscal + cachet + signature) **ou** engagement + attestation de propriété |
| Carte d'identification fiscale | **Préalable** à l'immatriculation RNE en ligne |
| Activités soumises à autorisation / cahier des charges | Autorisations à fournir le cas échéant ; procuration le cas échéant |

**Toutes les affirmations de la ligne 102 du document d'étape 1 sont confirmées.**

### 4.5 Différences de documents entre formes (synthèse)

| Forme | Formalité | Pièces principales (check-liste RNE) |
| --- | --- | --- |
| EI commerçant / artisan / professionnel | C 001 / C 002 / C 003 | CIN, carte d'identification fiscale, justificatif de siège, autorisations ; nom commercial (facultatif) |
| SUARL / SARL / SNC / SCS | **C 012** (v1.04) | Carte d'identification fiscale ; **statuts enregistrés à la recette des finances** et signés ; rapport du commissaire aux apports le cas échéant ; liste des dirigeants + pièces d'identité ; PV de désignation du CAC le cas échéant ; PV de nomination des gérants nommés par acte séparé ; **déclaration du bénéficiaire effectif** ; contrat enregistré + publication au JORT en cas de fonds de commerce. Publication au bulletin électronique du CNRE 24 h après acceptation, sans frais supplémentaires |
| SA | **C 004** | Déclaration de souscription et de versement (déclencheur du délai) ; pièces assimilées à la constitution de société par actions |
| GIE | **C 005** | Contrat de constitution (déclencheur du délai) |

L : les check-listes C 004 / C 005 détaillées n'ont pas été ré-extraites pièce par pièce à ce stade (les pièces C 012 et C 001/C 003 l'ont été à l'étape 1) — si le site liste les pièces de la SA ou du GIE, **re-télécharger les check-listes C 004 / C 005** avant publication.

---

## 5. Affirmations non étayées ou potentiellement trompeuses (inventaire)

| # | Localisation | Problème | Traitement |
| --- | --- | --- | --- |
| 1 | Ligne 108 — « (délais de déclaration **à partir de 2023**) » après 4 000/5 000 DT | **Note de bas de page mal attribuée** : la note (2) de l'art. 44 ter porte sur le tarif de **400 DT** | **C1** — réattribuée au tarif 400 DT |
| 2 | Ligne 108 — « Durée : 6 ans » | **Exception légale omise** : la période de 6 ans ne s'applique pas hors zones communales (limites avant 01/01/2015) | **C2** |
| 3 | Ligne 108 — forfaitaire optionnel présenté comme préexistant | **Nouveau dispositif** : ajouté par l'art. 91 de la LF 2026 (12/12/2025) ; délais 25 avril / 25 octobre ; télépaiement ; **1re année d'application inconnue** | **C3** + « À confirmer » |
| 4 | Ligne 108 — « **Régime forfaitaire optionnel** (art. 44 bis) » | **Contresens** : l'art. 44 bis est obligatoire (« Sont soumises… ») ; l'option est l'art. 44 ter § 1 | **C4** |
| 5 | Ligne 108 | **Omissions** : exclusions d'activités (décrets 2014-2939 / 2022-802) et majoration de 50 % pour dépôt tardif | **C5** |
| 6 | Ligne 238 — « IS minimum de **25 %** … art. 12 … **reproduit par le Code IRPP/IS 2026** » | **Triple erreur** : (i) le taux est **20 %** (25 % n'apparaît nulle part) ; (ii) la condition est « sociétés au **taux de 25 %** » (pas « au taux de 20 % ») ; (iii) la source n'est **pas** le PDF jibaya (partie « code » seule) mais la partie « loi de promulgation » de la compilation Imprimerie Officielle ; (iv) la dernière modification citée (LF 2024-48) est fausse (art. 2-5 loi 2017-8 + art. 14-20 LF 2020-46) | **C6** + « À confirmer » sur la portée du 10 % |
| 7 | Lignes 279 / 318 / 357 — transparence absolue | **Nuance omise** : art. 4 limité aux membres PP ou sociétés de personnes ; art. 45 I 5 soumet à l'IS les membres personnes morales des GIE (et coparticipants de sociétés en participation) | **C7** |
| 8 | Ligne 107 — barème « en vigueur » sans année | **Année d'application absente** : revenus réalisés à partir du 01/01/2025 (art. 36-2 LF 2025 + Note N°3/2025) ; mention CSS 2026 (0,5 point) absente | **C8** |
| 9 | Lignes 156 / 388 / 434 — CSS 2026 « À confirmer » | **Statut périmé** : la Note commune N°01/2026 (source primaire DGI) établit les taux 2026 | **C9** |
| 10 | §1.3 / §4 / en-tête | **Traçabilité incomplète** : les sources primaires de l'étape 2 (LF 2025 PDF JORT, Notes N°3/2025 et N°01/2026, compilation Imprimerie, contrôle du 22/11/2026) ne sont pas listées | **C10** |
| — | Lignes 99-102, 114, 150, 158, 236, 242, 275, 281, 315, 320, 354, 359 (RNE/APII) | **Aucun problème** : toutes les redevances, délais et pièces re-vérifiés (§4) | Inchangé |

---

## 6. Corrections requises (appliquées au document d'étape 1)

Chaque correction est appliquée **avec sa motivation et la source plus récente qui la justifie** ; aucun conflit n'est supprimé silencieusement (les conflits restent au §5 du document audité et à l'§5.1 du document corrigé).

| # | Localisation | Correction appliquée | Source plus récente / motif de prééminence |
| --- | --- | --- | --- |
| **C1** | L. 108 | La mention « délais de déclaration à partir de 2023 » est réattachée au tarif de **400 DT** ; le forfaitaire optionnel n'est plus doté de cette mention | Note (2) de l'art. 44 ter, Code IRPP/IS 2026 (texte même du Code > interprétation de l'étape 1) |
| **C2** | L. 108 | Ajout de l'exception : la période de 6 ans ne s'applique pas aux entreprises **hors zones communales** (limites avant 01/01/2015) | Art. 44 bis (Ajouté Art 42 LF 2019-78, mod. Art 18 LF 2020-46) — texte plus récent que la rédaction de l'étape 1 |
| **C3** | L. 108 | Le forfaitaire **optionnel** 4 000/5 000 DT est identifié comme **nouveau** (Ajouté Art 91 LF 2025-17 du 12/12/2025) avec ses délais (25 avril / 25 octobre), le télépaiement, et la mention **« première année d'application : À confirmer »** | LF 2026 (loi n° 2025-17 du 12/12/2025, JORT n° 148) incorporée au Code IRPP/IS 2026 — texte le plus récent ; le texte ne fixant pas la 1re année, elle reste non établie |
| **C4** | L. 108 | « Régime forfaitaire **optionnel** (art. 44 bis) » → **« Régime forfaitaire (art. 44 bis) »** obligatoire pour les EI éligibles ; l'option est explicitement l'**art. 44 ter § 1** | Art. 44 bis (« Sont soumises… ») vs art. 44 ter § 1 (« peuvent payer… optionnel ») — texte du Code > libellé de l'étape 1 |
| **C5** | L. 108 | Ajout des **exclusions d'activités** (décret n° 2014-2939 complété par le décret n° 2022-802 : cafés, mécanique, tôlerie/peinture auto, électricité, viandes, pâtisserie/glace…) et de la **majoration de 50 %** pour dépôt tardif (Art 45-3 LF 2013-54) | Notes (1) et corps de l'art. 44 ter, Code IRPP/IS 2026 — texte primaire intégral > résumé de l'étape 1 |
| **C6** | L. 238 (+ réf. L. 250) | « IS minimum **25 %** … reproduit par le Code IRPP/IS 2026 » → **IS minimum de 20 %** (loi n° 89-114 **art. 12 I**, partie « loi de promulgation »), réduit à **10 %** « pour les sociétés soumises à l'IS **aux taux de 25 %** » (art. 2-5 loi 2017-8 + art. 14-20 LF 2020-46) ; source corrigée (**compilation Imprimerie Officielle**, le PDF jibaya ne contient pas cette partie) ; mention **« À confirmer »** sur la portée actuelle du 10 % | Texte intégral de l'art. 12 I de la loi de promulgation (Imprimerie Officielle, éd. 24/01/2024) + texte JORT de la loi 2017-8 — le taux 25 % n'existe dans **aucun** texte examiné ; interprétation erronée de l'étape 1 (confusion des deux « article 12 ») |
| **C7** | L. 279, 318, 357 | Ajout de la nuance : l'art. 4 ne vise que les membres **personnes physiques ou sociétés de personnes** ; les **membres personnes morales soumises à l'IS** des GIE sont soumis à l'IS (art. 45 I 5) ; traitement des associés personnes morales en SNC/SCS : **« À confirmer »** | Art. 4 et art. 45 I 5 du Code IRPP/IS 2026 — texte primaire > affirmation absolue de l'étape 1 |
| **C8** | L. 107 | Ajout de l'**année d'application** du barème (revenus réalisés à partir du **01/01/2025**) avec la mention exacte de la modification (Art 36-1 LF 2024-48), et de la **CSS 2026** (réduction de 0,5 point pour les personnes physiques) | LF 2025 art. 36 (JORT n° 149 du 10/12/2024) + Note commune N°3/2025 §2 + Note commune N°01/2026 — sources primaires postérieures à la rédaction |
| **C9** | L. 156, 388, 434 | CSS 2026 « À confirmer » → **Vérifié** avec le tableau des taux 2026 (+3/+4 points, minimums 400/200/500 DT, forfait 400 DT pour les exonérées, PP −0,5 point) et la réserve « mesure annuelle, à re-vérifier chaque année » | Note commune N°01/2026 de la DGI (art. 87 LF 2025-17) — source primaire désormais extraite |
| **C10** | En-tête, §1.3, §4 | Date de consultation portée aux **21 et 22 novembre 2026** ; ajout des sources de l'étape 2 (LF 2025 PDF JORT, Notes N°3/2025 et N°01/2026, compilation Imprimerie Officielle, contrôle d'amendements CSC) ; note sur la structure « deux parties » du Code IRPP/IS ; renvoi vers le présent audit | Traçabilité exigée par `docs/content-verification.md` |

**Aucune suppression** : les conflits (page DGI obsolète, guide OTE obsolète, « registre du commerce », date de la loi 2018-52) restent documentés au §5.1 du document corrigé.

---

## 7. Classification de confiance par forme

Critères : **confirmed** = toutes les affirmations positives établies par des sources primaires après corrections ; **partially-confirmed** = au moins une zone d'incertitude matérielle subsiste (texte non extrait, année d'application inconnue) ; **unconfirmed** = aucune source primaire ; **outdated** = contredit par un texte plus récent.

| Forme | Classification | Justification / points résiduels |
| --- | --- | --- |
| **Entreprise individuelle (EI)** | **partially-confirmed** | Droit (loi 2018-52, RNE, APII) et fiscalité de droit commun solides ; **5 corrections appliquées** (C1-C5) sur le forfaitaire ; **1re année du forfaitaire optionnel** (LF 2026) non établie ; CSS 2026 sur arabe (traduction contrôlée sur les chiffres) |
| **SUARL** | **partially-confirmed** | Tout le droit sociétaire (CSC art. 148-159) et l'IS vérifiés ; **taux des distributions** (art. 29) non extrait ; CSS 2026 désormais établie (C9) |
| **SARL** | **partially-confirmed** | Idem SUARL (CSC art. 90-147 vérifié) ; **distributions** (art. 29) + **délais réels de traitement RNE** non établis |
| **SA** | **partially-confirmed** | Capital (5 000/50 000 DT), direction (deux régimes), commissaire aux comptes toujours obligatoire vérifiés ; **règles détaillées d'appel public à l'épargne (CMF)** et **distributions** non extraites ; portée actuelle du minimum IS 10 % à confirmer (C6) |
| **SNC** | **confirmed** | Toutes les affirmations positives (nature, responsabilité, capital, cession, direction, immatriculation, transparence art. 4) établies par le CSC et le Code IRPP/IS ; le traitement des **associés personnes morales** est désormais marqué « À confirmer » (complément, pas une affirmation) ; « fréquence pratique » = pratique, pas un fait juridique |
| **SCS** | **confirmed** | Idem SNC (CSC art. 67-76, immixion art. 71, transparence art. 4) ; mêmes réserves de complément |
| **GIE** | **partially-confirmed** | Nature, capital sans minimum, responsabilité, contrôleur de gestion (art. 453), C 005 vérifiés ; **membres personnes morales → IS établi** (art. 45 I 5, C7) ; **régime comptable propre du GIE non extrait** (art. 447 et suiv. non lus intégralement) |

**Formes les mieux étayées** : **SNC** et **SCS** (texte intégral du CSC + transparence vérifiée + redevances RNE confirmées ; seuls des compléments de niche restent « À confirmer »). **Forme la plus corrigée** : **EI** (5 corrections), par ailleurs très bien étayée côté administratif (RNE + APII au 31/08/2026).

Aucune forme n'est classée **unconfirmed** ou **outdated**.

---

## 8. Liste « publiable » vs « À confirmer »

### 8.1 Affirmations publiable-s dès maintenant (toujours datées)

**Sociétaire (CSC, éd. IORT 07/02/2024 — « dernière édition trouvée »)**
- Définitions, fondateurs/associés, responsabilité, capital, direction, décisions, immatriculation des 7 formes (articles cités dans le document corrigé).
- **Aucun capital minimum** pour SARL/SUARL/SNC/SCS/GIE (art. 92, 441) ; SA : **5 000 DT** (pas d'appel public) / **50 000 DT** (appel public), actions ≥ 1 DT (art. 161).
- Seuils du commissaire aux comptes (art. 13 + décret 2006-1546, re-vérifiés éd. 2024) ; SA : commissaire **toujours obligatoire** (art. 13 al. 2).
- Dissolution de la SUARL (art. 156-157), immixion du commanditaire (art. 71), contrôleur de gestion du GIE (art. 453).

**Fiscalité (toujours avec la mention « au 22 novembre 2026 »)**
- Barème IRPP 0/15/25/30/33/36/38/40 % — **revenus réalisés à partir du 01/01/2025** (LF 2025 art. 36, JORT n° 149 du 10/12/2024 ; Note N°3/2025).
- IS **20 %** — **bénéfices réalisés à partir du 01/01/2024** (LF 2025 art. 37 ; art. 49 note 2) ; taux 10/35/40 % (art. 49 I).
- Minimum d'impôt 0,2 % / 300 DT pour les EI (art. 44 II).
- **CSS 2026** (Note N°01/2026) : PP −0,5 point ; sociétés +3 points (min 400 DT à 15/20 %, min 200 DT à 10 %) / +4 points (min 500 DT à 35/40 %) ; forfait 400 DT pour les totalement exonérées — **mention « année 2026, mesure à re-vérifier chaque année » obligatoire**.
- Forfaitaire EI : conditions et exclusions (art. 44 bis + décrets 2014-2939 / 2022-802), tarifs 400 DT / 3 % avec la note « déclarations dont le délai intervient à partir de 2023 » (art. 44 ter), exception des 6 ans hors zones communales, majoration de 50 % pour dépôt tardif.
- Forfaitaire **optionnel** 4 000/5 000 DT — **en précisant** « instauré par la LF 2026 (art. 91, 12/12/2025) ; première année d'application à confirmer », délais 25 avril / 25 octobre.
- IS minimum **20 %** pour les personnes morales totalement/partiellement exonérées (loi 89-114 art. 12 I) — **avec la réserve** sur le 10 % (§3.2) ; transparence art. 4 + nuance art. 45 I 5.
- Déclaration d'existence **avant d'entamer l'activité** (art. 56).

**Administratif (toujours datés et qualifiés)**
- Redevances et délais de dépôt RNE (tableau §4.1) — formule : **« redevance et délai indiqués par le RNE au 21 novembre 2026 (délai de dépôt, pas délai de traitement) »**.
- Distinction statutaire (CSC art. 14 : « un mois ») / administratif (RNE : « 30 jours ») — expliquée, jamais fusionnée.
- Check-liste APII EI (maj 31/08/2026) : documents, validités (1 an / 6 mois), frais de location 1 % + 5 DT, 7,5 DT + 10 DT si retard > 2 mois, CIF préalable au RNE en ligne.

### 8.2 À confirmer avant publication (aucune ne doit être affirmée)

1. **Taux des distributions** de SARL/SUARL/SA (art. 29 et suiv. non extraits) — y compris toute retenue à la source.
2. **Première année d'application** du forfaitaire optionnel (art. 91 LF 2026).
3. **Portée actuelle du minimum IS 10 %** (condition « sociétés au taux de 25 % » historique).
4. **Délais réels de traitement** du RNE (extrait, immatriculation) — seuls les délais de dépôt sont vérifiés.
5. **Base légale et permanence des redevances RNE** (publication administrative, non tarif législatif localisé).
6. **Obligations sociales du gérant / affiliation CNSS** (site CNSS indisponible).
7. **TVA et seuils** (page DGI non datée ; Code TVA 2026 à contrôler lors d'une étape dédiée).
8. **Régime comptable propre du GIE** (art. 447 et suiv. non lus intégralement).
9. **Traitement des associés/membres personnes morales en SNC et SCS** (art. 4 et 45 I 5 silencieux sur ce cas).
10. **Règles détaillées d'appel public à l'épargne** de la SA (CMF, hors périmètre extrait).
11. **Fréquence pratique de la SCS** (sources secondaires uniquement).
12. **Coûts totaux de création** (montants non vérifiés → masqués), **pièces détaillées des check-listes C 004 / C 005** (à re-télécharger), **édition IORT CSC 2025/2026** (indisponible), **texte du code IRPP/IS sur doc-fiscale.finances.gov.tn** (HTTP 503).

---

*Fin de l'audit — Phase 4, étape 2. Corrections C1-C10 appliquées à `docs/research/formes-juridiques.md` le 22 novembre 2026 et documentées au §6 ci-dessus. Aucune modification de `src/`, aucun commit. Prochaine étape possible : rédaction des pages du site, en ne publiant que les éléments de l'§8.1 et en affichant « À confirmer » pour l'§8.2.*

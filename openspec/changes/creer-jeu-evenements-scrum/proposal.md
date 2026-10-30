## Why

En formation PSM et PSPO, les confusions sur les événements Scrum reviennent toujours : la durée de chaque événement, qui doit y être, à quoi il sert, ce qu'on y apporte et ce qui en sort. Le jeu « Rôles et responsabilités » a montré qu'un atelier collectif en temps réel, projeté et joué depuis les téléphones, rend la révision plus rythmée et corrige chaque carte à chaud d'après le Scrum Guide 2020. Ce jeu frère applique la même mécanique aux événements, avec une grille à remplir à la place du diagramme de Venn.

## What Changes

- Même déroulé que « Rôles et responsabilités » : un **formateur** crée une partie depuis l'écran projeté (**code de salle** à 4 lettres et **QR code**) ; les **participants** (10 au maximum) rejoignent depuis leur téléphone avec un prénom unique, sans compte ; réglage du **nombre de cartes par personne** (5 par défaut) et d'un **chrono** facultatif (30, 45 ou 60 secondes) ; **arrivée tardive**, **passer son tour**, **retrait** d'un participant, **fin anticipée**, salles **supprimées au bout de 24 heures**.
- **Plateau en grille** : cinq colonnes (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) et cinq lignes (Timebox, Personnes requises, But, Entrées, Sorties). Les cases Sprint × Personnes requises, Entrées et Sorties sont **grisées** : aucune carte n'y va. Sous la grille, une zone **Piège** pour ce qui n'existe pas dans Scrum.
- **Tour par tour**, le joueur actif retourne la carte suivante de sa main (face cachée) et la place dans une case ou dans la zone Piège ; tout le monde voit son hésitation en direct.
- **Une seule carte par case** : chaque carte regroupe tout le contenu de sa case (par exemple « Atteindre le Sprint Goal en transformant les idées en valeur »). Quand deux cases ont exactement le même contenu (« Toute la Scrum Team », « Le Sprint Backlog… »), la carte existe en deux exemplaires. Verdict **juste** ou **faux**, sans « partiel » ; une case remplie ne peut plus être choisie, et la correction ne montre jamais les autres emplacements d'une carte en plusieurs exemplaires.
- **Glisser-déposer** : la carte retournée se glisse sur une case (souris, stylet ou doigt) ; le dépôt valide le placement. Toucher une case puis « Valider » reste possible.
- **Cases à retourner** : chaque case est face cachée au départ et se retourne quand une première carte juste y est posée ; elle affiche alors les cartes justes déjà posées. La grille se remplit au fil de la partie, et l'écran de fin affiche **la grille complète**, l'antisèche de tous les événements.
- **Correction immédiate** pour toute la salle, avec une explication tirée du Scrum Guide 2020, ciblée selon la case choisie à tort.
- **Un piège par main** dès 2 cartes, à une position tirée au hasard, règle volontairement non affichée.
- **Fin de partie** : score de l'équipe, podium des trois meilleurs pourcentages, récapitulatif des erreurs et grille complète.
- **Entraînement seul** depuis l'accueil, sans formateur ni Firebase : 10 cartes par défaut, au moins un piège, « Rejouer mes erreurs ».
- **Mode démo** (`?demo`) : une partie partagée entre les onglets d'un même navigateur, sans Firebase.
- **Paquet de 30 cartes (32 exemplaires : 22 cartes de grille et 10 pièges)** dans `site/data/cards.json`, relu par deux relecteurs indépendants puis validé par l'auteur ; vue de relecture générée dans `docs/cartes.md`.
- Site statique sur GitHub Pages ; état partagé dans la base Firebase existante de l'auteur, dans une nouvelle branche `eventsGame`.

Hors périmètre de cette première version : modification du paquet depuis l'interface, catégories configurables, verdict partiel (bon événement mais mauvaise catégorie), vote de la salle, autres langues, historique des parties, encart dans la boîte à outils (https://agileroy.github.io/outils/).

## Capabilities

### New Capabilities

- `card-deck` : grille (événements, catégories, cases grisées, zone Piège), format du paquet, une carte par case, verdict juste / faux, explication et vue de relecture.
- `game-room` : création de la salle, code et QR code, arrivée des participants, réglages, distribution des mains, arrivée tardive, présence et suppression au bout de 24 heures.
- `game-turn` : joueur actif, pioche, placement dans la grille, chrono, correction affichée à tous, cases qui se retournent, carte suivante.
- `game-results` : points, score collectif, podium, récapitulatif des erreurs et grille complète.
- `solo-training` : entraînement seul, local, avec « Rejouer mes erreurs ».
- `site-publication` : publication GitHub Pages, interface, connexion temps réel, mode démo, règles de sécurité partagées.

### Modified Capabilities

_Aucune._

## Impact

- Ajoutés dans `scrum-events` : `site/` (page, styles, scripts, paquet, QR code embarqué), `tests/`, `tools/cards-review.mjs`, `docs/cartes.md`, `database.rules.json`, `.github/workflows/pages.yml`, `package.json`, `README.md`, `openspec/` et les commandes OpenSpec de `.claude/`.
- `database.rules.json` : nouvelle branche `eventsGame`, sans modifier les autres branches ; le fichier est recopié à l'identique dans les cinq autres dépôts qui partagent la base.
- Actions manuelles de l'auteur : publier les nouvelles règles dans la console Firebase ; vérifier que GitHub Pages publie depuis GitHub Actions ; valider le paquet de cartes.

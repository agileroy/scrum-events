# scrum-events

Jeu de formation PSM / PSPO sur les événements Scrum, en temps réel et sans publicité. Jeu frère de [roles-responsabilites](https://github.com/agileroy/roles-responsabilites), avec la même mécanique.

**Site : [https://agileroy.github.io/scrum-events/](https://agileroy.github.io/scrum-events/)**

## Fonctionnement

- Le **formateur** crée une partie sur l'écran projeté : un **code de salle** à 4 lettres et un **QR code** s'affichent. Il anime, il ne joue pas.
- Les **participants** (10 au maximum) rejoignent depuis leur téléphone, avec le QR code ou le code, et saisissent un prénom unique dans la salle. Pas de compte.
- Avant de lancer, le formateur règle le **nombre de cartes par personne** (5 par défaut, dans la limite du maximum possible) et un **chrono** facultatif (30, 45 ou 60 secondes).
- Option **« Tout le paquet »** pour voir ensemble toutes les notions : les 22 cartes de grille sont toutes distribuées, complétées par des pièges pour que chacun ait le même nombre de cartes, avec 1 à 2 pièges par personne (par exemple 7 cartes chacun à 4 participants, 4 à 10).
- Au lancement, chaque participant reçoit **sa propre main** : dès 2 cartes, exactement **un piège par main**, à une position tirée au hasard. Cette règle n'est volontairement affichée nulle part dans le jeu.
- **Tour par tour**, le joueur actif retourne la carte suivante de sa main et la glisse dans la **grille** (la bonne colonne suffit, la carte rejoint sa case ; on peut aussi toucher une case puis valider) : une colonne par événement (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), une ligne par catégorie (Timebox, Personnes requises, But, Entrées, Sorties). Les cases Sprint × Personnes, Entrées et Sorties sont grisées. Sous la grille, la zone **Piège** accueille ce qui n'existe pas dans Scrum. Tout le monde voit son hésitation en direct.
- **Une carte, une case** : verdict juste ou faux. Une même réalité présente à plusieurs endroits (« Toute la Scrum Team », « La Definition of Done »…) existe en plusieurs exemplaires ; chaque exemplaire est juste dans l'une de ces cases.
- **Correction immédiate** pour toute la salle, avec une explication tirée du Scrum Guide 2020, ciblée selon l'erreur commise. Le formateur passe à la carte suivante quand la discussion est terminée.
- **Cases à retourner** : chaque case est face cachée au départ et se retourne quand sa carte est posée ; une carte fausse se révèle quand même sur sa bonne case, avec un indicateur « Erreur ». La grille se remplit au fil de la partie.
- **Arrivée tardive**, **passer son tour**, **retrait** d'un participant et **fin anticipée**, comme dans le jeu des rôles.
- **Fin de partie** : score de l'équipe, podium des trois meilleurs pourcentages, récapitulatif des erreurs et **grille complète** (l'antisèche des événements).
- Les salles sont **supprimées au bout de 24 heures** (par le navigateur du prochain formateur qui crée une partie), ou à tout moment par leur formateur.

## Entraînement seul

Depuis l'accueil, « S'entraîner seul » lance une partie sans formateur ni code : 10 cartes par défaut (au moins un piège), ou « Tout le paquet » (les 22 notions et 1 piège), même déroulé sans chrono, puis score, erreurs, grille complète et **« Rejouer mes erreurs »**. Tout se passe dans le navigateur, sans Firebase.

## Paquet de cartes

Le paquet est dans [`site/data/cards.json`](site/data/cards.json) : pour chaque carte, son texte, ses bonnes cases (`answers`, par exemple `["planning-timebox"]`, ou `["trap"]` pour un piège ; plusieurs cases pour une carte en plusieurs exemplaires), une explication générale, la section du Scrum Guide 2020, et des explications ciblées par mauvaise case (`errors`). Vocabulaire : traduction française officielle du Scrum Guide, avec « Product Goal », « Sprint Goal » et « refinement » gardés en anglais.

Après une modification, `npm run cartes` régénère [`docs/cartes.md`](docs/cartes.md), la vue de relecture avec la grille complète ; `npm test` vérifie le format du paquet.

## Réseau d'entreprise

Le VPN de l'entreprise (proxy Zscaler) bloque GitHub Pages et Firebase : jouer hors VPN, et faire rejoindre les participants bloqués depuis leur téléphone avec le QR code.

## Architecture

Site statique (HTML/CSS/JavaScript, sans build) publié sur GitHub Pages ; l'état partagé des salles est dans Firebase Realtime Database (connexion anonyme), sous la branche `eventsGame`.

- `site/js/game-core.js` : logique métier pure (grille, exemplaires, verdict, explications, contenu des cases, tirage, joueur suivant, retardataires, scores, podium), testée avec Node.js ;
- `site/js/game-store.js` : actions de la partie et réactions automatiques du navigateur du formateur ;
- `site/js/firebase-db.js` : seul module qui parle à Firebase ;
- `site/js/memory-db.js` : base en mémoire de même interface, pour les tests de parcours et le **mode démo** (`?demo` dans l'adresse : les onglets d'un même navigateur partagent une partie, sans Firebase) ;
- `site/js/grid.js` : grille des événements ; `site/js/ui.js` : interface ; `site/js/app.js` : point d'entrée ;
- `site/vendor/` : générateur de QR code `qrcode-generator` 1.4.4 (licence MIT) ;
- `database.rules.json` : règles de sécurité de la base, **partagées** avec [roles-responsabilites](https://github.com/agileroy/roles-responsabilites), [poker-planning](https://github.com/agileroy/poker-planning), [matrice-competences](https://github.com/agileroy/matrice-competences), [wheel-of-chance](https://github.com/agileroy/wheel-of-chance) et [moving-motivators](https://github.com/agileroy/moving-motivators) : garder ce fichier identique dans les six dépôts, et le publier dans la console Firebase après chaque modification.

## Développement

```
npm test                                          # logique métier, paquet de cartes, parcours de partie, règles
npm run cartes                                    # régénère docs/cartes.md
python3 -m http.server 8765 --directory site      # puis http://localhost:8765/?demo
```

Chaque push sur `main` lance les tests puis publie `site/` sur GitHub Pages ; un test en échec bloque la publication.

## Méthode

Le projet suit le développement piloté par les spécifications avec [OpenSpec](https://github.com/Fission-AI/OpenSpec) : `openspec/specs/` décrit le comportement attendu, `openspec/changes/` les changements en cours. Commandes Claude Code : `/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:archive`.

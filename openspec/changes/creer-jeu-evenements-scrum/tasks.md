## 1. Paquet de cartes

- [ ] 1.1 Rédiger `site/data/cards.json` (cartes, bonnes cases, explications, explications ciblées) et `tools/cards-review.mjs`, qui génère `docs/cartes.md` avec la grille complète. Vérification : le script génère la vue sans erreur.
- [ ] 1.2 Faire relire le paquet par deux relecteurs indépendants, d'après le Scrum Guide 2020 en français : fidélité au guide, puis jouabilité et clarté (ambiguïtés entre deux cases, pièges, longueur des textes). Intégrer les retours. Vérification : chaque point des deux relectures est intégré ou écarté avec sa raison.
- [ ] 1.3 Faire valider le paquet par l'auteur sur `docs/cartes.md`. Vérification : validation explicite de l'auteur.
- [ ] 1.4 Écrire `tests/cards.test.mjs` et la validation du paquet dans `game-core.js` : identifiants uniques et assez courts pour leurs exemplaires, cases connues et actives, piège sans autre case, textes et explications non vides, pas d'explication ciblée pour une bonne case, chaque case active couverte, un piège par participant avec 10 participants à 5 cartes. Vérification : `npm test` au vert, et des tests rouges sur des paquets volontairement cassés.

## 2. Logique métier pure

- [ ] 2.1 Adapter `site/js/game-core.js` : événements, catégories, cases grisées, cases valides, libellés, exemplaires (`expandDeck`), verdict juste / faux, choix de l'explication, contenu des cases (`filledCells`) et grille complète (`answerGrid`). Vérification : tests de chaque scénario de `card-deck`.
- [ ] 2.2 Reprendre code de salle, prénom, maximum de cartes par personne, mains avec un piège, ordre de passage, joueur suivant, retardataires, scores sans partiel, podium, récapitulatif et tirage d'entraînement. Vérification : tests des scénarios de `game-room`, `game-results` et `solo-training` avec le nouveau paquet (maximum 11 pour 4 participants, 5 pour 10).

## 3. Firebase

- [ ] 3.1 Ajouter la branche `eventsGame` à `database.rules.json` (reprise de `rolesGame` avec les 23 cases valides et le verdict `right|wrong`), sans toucher aux autres branches. Vérification : JSON valide, autres branches identiques octet pour octet, `tests/rules.test.mjs` (cases, code de salle, chrono et délai alignés sur `game-core.js`).
- [ ] 3.2 Adapter `site/js/game-store.js` (branche `eventsGame`, champ `cell`, verdict sur les bonnes cases) en gardant `firebase-db.js` et `memory-db.js`. Vérification : `tests/game-store.test.mjs` (parcours complets à plusieurs clients sur la base en mémoire).

## 4. Interface

- [ ] 4.1 Créer `site/js/grid.js` : grille HTML de boutons, en-têtes longs et courts, cases grisées, zone Piège, sélection, bonnes cases et case fausse mises en évidence, cases qui se retournent et affichent leurs cartes (textes sur grand écran, compteur sur téléphone), grille complète de fin. Vérification : cases d'au moins 44 × 44 px à 360 px de large, rendu dans les deux thèmes.
- [ ] 4.2 Adapter `site/index.html`, `site/app.css` et `site/js/ui.js` : titre et textes, grille à la place du Venn, correction avec les bonnes cases, résultats sans partiel, grille complète en fin de partie et d'entraînement. Vérification : liste de contrôle 5.1.
- [ ] 4.3 Vérifier l'affichage projeté (1280 et 1440 px) et sur téléphone (360 et 390 px), en thème clair et sombre. Vérification : captures sans défilement horizontal, en mode démo.

## 5. Vérification et publication

- [ ] 5.1 Liste de contrôle en mode démo avec un écran formateur et des onglets participants : création et code, QR code, réglages et maximum, lancement, pioche, sélection visible en direct, case grisée non sélectionnable, validation, case qui se retourne, chrono et temps écoulé, correction ciblée, carte suivante, passer son tour, fin, podium, récapitulatif, grille complète ; entraînement seul et « Rejouer mes erreurs ». Reste à faire sur Firebase avec de vrais téléphones.
- [ ] 5.2 Ajouter `package.json`, `.github/workflows/pages.yml` et le `README.md`. Vérification : `npm test` au vert en local.
- [ ] 5.3 Donner `database.rules.json` complet à l'auteur pour la console Firebase, et le recopier dans les cinq autres dépôts qui partagent la base. Vérification : fichier identique partout, tests des autres dépôts au vert. Reste à l'auteur : publier le fichier dans la console Firebase.
- [ ] 5.4 Pousser sur `main` (publication GitHub Actions réussie) et jouer une partie de test sur https://agileroy.github.io/scrum-events/ une fois les règles publiées.

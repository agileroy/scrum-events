## Context

Dépôt neuf, construit sur le code de `roles-responsabilites` (version du 30 octobre 2026, avec le mode entraînement et le piège par main) : site statique vanilla en modules ES, sans build, publié sur GitHub Pages après des tests `node --test`, état partagé dans la base Firebase Realtime Database de l'auteur. La salle, les tours, la pioche dans une main, le chrono, les scores, l'entraînement seul et le mode démo sont repris tels quels ; ce qui change, c'est le plateau (une grille au lieu d'un diagramme de Venn), le verdict (juste ou faux) et le paquet (cartes en plusieurs exemplaires).

## Goals / Non-Goals

**Goals:**
- Le même déroulé collectif que le jeu des rôles, pour que le formateur n'ait rien de nouveau à apprendre.
- Une grille lisible sur l'écran projeté et utilisable au doigt sur un téléphone de 360 px.
- Une grille qui se remplit au fil de la partie, pour finir sur l'antisèche complète des événements.
- Un verdict, une explication et un contenu de grille calculés par une logique pure, testée sans navigateur ni Firebase.

**Non-Goals:**
- Verdict partiel, catégories configurables, édition du paquet depuis l'interface, historique, autres langues.
- Cacher les bonnes réponses à un utilisateur technique : le paquet est public dans le site, comme pour le jeu des rôles.
- Tests automatiques des règles Firebase (émulateur et Java nécessaires) : vérification manuelle documentée.

## Decisions

- **Reprise du jeu des rôles** : `game-store.js`, `firebase-db.js`, `memory-db.js`, `theme.js`, `app.js`, le QR code et le workflow sont repris avec un minimum de changements (branche `eventsGame`, champ `cell` à la place de `region`). `venn.js` est remplacé par `grid.js`. Alternative écartée : une bibliothèque commune aux deux jeux, prématurée pour deux dépôts sans build.

- **Grille et cases** (`game-core.js`) : `EVENTS = sprint, planning, daily, review, retro`, `CATEGORIES = timebox, people, goal, inputs, outputs`. Une case s'identifie par `événement-catégorie` (`planning-timebox`), la zone Piège par `trap`. Les cases grisées (`sprint-people`, `sprint-inputs`, `sprint-outputs`) sont une constante du code, pas du paquet, car les règles de sécurité doivent connaître la liste des cases valides ; la validation du paquet vérifie qu'aucune carte ne vise une case grisée et que chaque case active a au moins une carte. Les colonnes sont les événements (lecture naturelle « que se passe-t-il au Daily ? »), les lignes les catégories.

- **Exemplaires multiples** : dans `cards.json`, une carte porte `answers`, la liste de ses bonnes cases (`["trap"]` pour un piège). `expandDeck` crée un exemplaire par bonne case, identifié `id-1`, `id-2`… ; chaque exemplaire garde toute la liste. La distribution, la pioche, les résultats et les règles travaillent sur les exemplaires, comme sur les cartes du jeu des rôles. Les identifiants de carte font 17 caractères au plus, pour que ceux des exemplaires tiennent dans les 20 caractères acceptés par les règles.

- **Verdict juste ou faux** : juste si la case choisie fait partie des bonnes cases de la carte, faux sinon. Un exemplaire est donc juste dans n'importe laquelle de ses cases, même si un autre exemplaire y est déjà : sur papier, on ne refuserait pas une carte « Toute la Scrum Team » posée une deuxième fois au Sprint Planning. Le « partiel » du jeu des rôles (choix incomplet d'accountabilities) n'a pas d'équivalent naturel ici ; un partiel « bon événement, mauvaise catégorie » a été écarté pour garder la règle simple (proposé en hors-périmètre). Points : 1 par carte juste, 0 par carte fausse.

- **Explication** : comme dans le jeu des rôles, une explication générale et une section du guide pour chaque carte, plus des explications ciblées facultatives par case choisie à tort (`errors`). La correction affiche toutes les bonnes cases d'une carte en plusieurs exemplaires (« Sprint Planning · Personnes requises, Sprint Review · Personnes requises ou Sprint Retrospective · Personnes requises »).

- **Grille en HTML plutôt qu'en SVG** (`grid.js`) : une grille CSS de boutons (`button` par case, `aria-label` « Sprint Review · Entrées »), focalisable et activable au clavier nativement. En-têtes de colonnes et de lignes en libellés longs sur grand écran, courts sur téléphone (« Planning », « Rétro », « Personnes »). Sur un écran de 360 px, une colonne d'en-têtes de 64 px laisse cinq colonnes d'environ 50 px : chaque case reste au-dessus de 44 × 44 px. La zone Piège est un bouton pleine largeur sous la grille.

- **Cases qui se retournent** : chaque case active a deux faces (dos rayé façon carte, face claire) avec la même rotation CSS 3D que la carte piochée. Le contenu d'une case se calcule à partir des résultats (`filledCells` : textes des cartes justes posées dans la case, sans doublon) : il n'y a rien de plus à stocker dans la base, et un écran qui se recharge retrouve la grille. La case se retourne avec animation quand elle reçoit sa première carte juste sous les yeux de l'écran ; au chargement, les cases déjà remplies s'affichent directement. Sur grand écran, la face affiche les textes en petit ; sur téléphone, elle affiche seulement le nombre de cartes posées, pour garder des cases compactes. La grille de fin (`answerGrid`) affiche toutes les cartes du paquet.

- **Mise en évidence** : case sélectionnée (jaune), bonnes cases de la carte jouée (vert), case choisie à tort (rouge), comme dans le Venn.

- **Modèle de données** (sous `/eventsGame`, identique à `rolesGame` sauf les noms) :
  - `rooms/{code}/meta` : `{ hostUid, createdAt, status, cardsPerPlayer, timerSeconds, hands: { uid: [exemplaires] }, playerOrder, startedAt, finishedAt }` ;
  - `rooms/{code}/players/{uid}` : `{ name, joinedAt, quota, removed, connections }` ; `rooms/{code}/names/{clé}` : `uid` ;
  - `rooms/{code}/turn` : `{ seq, playerUid, deckIndex, cardId, drawnAt, selection, placement, placedAt, revealed, done }`, où `selection` et `placement` sont des cases ;
  - `rooms/{code}/results/{seq}` : `{ playerUid, cardId, cell, verdict: 'right' | 'wrong', timedOut }` ;
  - `expiry/{code}` : `{ createdAt, hostUid }`.

- **Règles de sécurité** : la branche `eventsGame` reprend celle de `rolesGame` (formateur seul maître des réglages, des tours et des résultats ; joueur actif seul à piocher dans sa main, sélectionner et placer ; chrono ; prénoms uniques ; ménage au-delà de 24 heures), avec la liste exacte des 23 cases valides dans une expression régulière et le verdict limité à `right|wrong`. Un test compare cette liste à `CELLS` de `game-core.js`. Les autres branches ne changent pas ; le fichier complet est donné à l'auteur pour la console Firebase et recopié dans les cinq autres dépôts.

- **Paquet** : 50 cartes, 60 exemplaires, 15 pièges (25 %). Avec 10 participants, le maximum reste de 5 cartes par personne avec un piège chacun (60 ≥ 50, et 45 cartes non piège ≥ 40). Pas de piège sur les timebox ni de carte sur les personnes facultatives (invités du Sprint Planning, PO et SM au Daily), à la demande de l'auteur. Relecture par deux agents indépendants (fidélité au guide ; jouabilité et clarté), puis validation de l'auteur sur `docs/cartes.md`.

## Risks / Trade-offs

- [Cartes défendables dans deux cases] → c'est le risque principal d'un jeu à une seule bonne case : deux relectures ciblées, un exemplaire supplémentaire quand les deux cases sont justes d'après le guide, et des explications ciblées pour les confusions probables.
- [Grille chargée sur l'écran projeté en fin de partie] → textes courts (relus pour la longueur), police réduite dans les cases, et grille complète de fin dans un panneau à part, pleine largeur.
- [Grille petite sur téléphone] → libellés courts, cases d'au moins 44 px, contenu réduit à un compteur ; le libellé complet de la case choisie s'affiche sous la carte (« Votre choix : Sprint Review · Entrées »).
- [Fichier de règles partagé par six dépôts] → test de cohérence des cases, autres branches comparées octet pour octet, fichier recopié dans les cinq autres dépôts.
- [Correction dépendante de l'écran du formateur] → inchangé par rapport au jeu des rôles, acceptable en formation.

## Migration Plan

1. Publier le site (push sur `main`, GitHub Actions) : sans les nouvelles règles, la partie en groupe est refusée par la base mais l'entraînement seul et le mode démo fonctionnent.
2. L'auteur colle `database.rules.json` dans la console Firebase (Realtime Database → Règles → Publier).
3. Partie de test avec un formateur et deux téléphones.
Retour arrière : republier l'ancien fichier de règles (la branche `eventsGame` est indépendante des autres outils).

## Open Questions

- Faut-il, plus tard, un verdict « partiel » quand l'événement est bon mais pas la catégorie ? À décider après les premières formations.

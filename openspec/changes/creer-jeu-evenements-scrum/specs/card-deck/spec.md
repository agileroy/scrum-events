## ADDED Requirements

### Requirement: Grille des événements
Le plateau SHALL être une grille de cinq colonnes, une par événement Scrum dans cet ordre : Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective ; et de cinq lignes, une par catégorie dans cet ordre : Timebox, Personnes requises, But, Entrées, Sorties. Les cases Sprint × Personnes requises, Sprint × Entrées et Sprint × Sorties SHALL être grisées : elles MUST NOT pouvoir être choisies et aucune carte n'y va. Sous la grille, une zone « Piège » SHALL accueillir ce qui n'existe pas dans Scrum. Le jeu compte donc 22 cases actives et la zone Piège. Le vocabulaire SHALL être celui du Scrum Guide 2020.

#### Scenario: Plateau affiché
- **GIVEN** une partie en cours
- **WHEN** le plateau s'affiche
- **THEN** on voit les cinq événements en colonnes, les cinq catégories en lignes, trois cases grisées dans la colonne Sprint et la zone « Piège » sous la grille

#### Scenario: Case grisée
- **GIVEN** le joueur actif avec sa carte piochée
- **WHEN** il touche la case Sprint × Entrées
- **THEN** rien n'est sélectionné

### Requirement: Paquet de cartes
Le paquet SHALL être un fichier JSON du site (`site/data/cards.json`). Chaque carte SHALL avoir un identifiant unique de 17 caractères au plus (minuscules, chiffres, tirets), un texte, la liste de ses bonnes cases (`answers`), une explication générale fondée sur le Scrum Guide 2020, la section du guide concernée et, facultativement, des explications ciblées par case choisie à tort (`errors`). Un piège SHALL avoir pour seule bonne case la zone Piège. Les tests automatiques MUST refuser un paquet dont une carte a un identifiant en double ou trop long, aucune bonne case, une case inconnue ou grisée, un piège avec une autre bonne case, un texte ou une explication vide, ou une explication ciblée pour l'une de ses bonnes cases ; ils MUST aussi refuser un paquet qui laisse une case active sans carte.

#### Scenario: Paquet invalide
- **GIVEN** un paquet où une carte vise la case grisée Sprint × Sorties
- **WHEN** les tests s'exécutent
- **THEN** ils échouent en signalant la case inconnue

### Requirement: Exemplaires multiples
Une carte qui a plusieurs bonnes cases SHALL exister en autant d'exemplaires, identifiés par l'identifiant de la carte suivi de `-1`, `-2`, etc. Chaque exemplaire SHALL être distribué et joué comme une carte à part entière, et SHALL être juste dans n'importe laquelle des bonnes cases de la carte.

#### Scenario: Trois exemplaires
- **GIVEN** la carte « Toute la Scrum Team », dont les bonnes cases sont Personnes requises du Sprint Planning, de la Sprint Review et de la Sprint Retrospective
- **WHEN** le paquet est chargé
- **THEN** il contient trois exemplaires de cette carte

#### Scenario: Exemplaire juste ailleurs
- **GIVEN** Julie qui a pioché un exemplaire de « Toute la Scrum Team »
- **WHEN** elle le place dans Sprint Retrospective × Personnes requises
- **THEN** la carte est « Juste »

### Requirement: Verdict
Le verdict d'une carte SHALL être « Juste » si la case choisie est l'une de ses bonnes cases, et « Faux » sinon, y compris quand la carte est placée dans la zone Piège alors qu'elle n'est pas un piège, ou dans une case alors qu'elle est un piège. Il n'y a pas de verdict partiel.

#### Scenario: Mauvaise colonne
- **GIVEN** la carte « 8 heures maximum pour un Sprint d'un mois », dont la bonne case est Sprint Planning × Timebox
- **WHEN** elle est placée dans Sprint Review × Timebox
- **THEN** le verdict est « Faux »

#### Scenario: Piège démasqué
- **GIVEN** la carte « Répondre à trois questions : hier, aujourd'hui, obstacles », qui est un piège
- **WHEN** elle est placée dans la zone Piège
- **THEN** le verdict est « Juste »

### Requirement: Explication de la correction
La correction SHALL afficher la case choisie, la ou les bonnes cases, l'explication générale de la carte et la section du Scrum Guide 2020 concernée. Si la carte prévoit une explication ciblée pour la case choisie à tort, elle SHALL s'afficher avant l'explication générale. Les textes SHALL respecter la typographie française (espaces insécables avant les signes doubles).

#### Scenario: Explication ciblée
- **GIVEN** la carte « Les Developers » placée dans Sprint Planning × Personnes requises
- **WHEN** la correction s'affiche
- **THEN** elle montre l'explication ciblée sur le Sprint Planning, puis l'explication générale et la référence « Scrum Guide 2020 · Daily Scrum »

### Requirement: Vue de relecture
Une commande (`npm run cartes`) SHALL générer `docs/cartes.md` à partir du paquet : nombre de cartes, d'exemplaires et de pièges, grille complète, puis chaque carte avec ses bonnes cases, son explication et ses explications ciblées, regroupées par événement puis pièges.

#### Scenario: Relecture du paquet
- **GIVEN** un paquet modifié
- **WHEN** l'auteur lance `npm run cartes`
- **THEN** `docs/cartes.md` est régénéré avec la grille complète et toutes les cartes

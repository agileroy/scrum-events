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
Le paquet SHALL être un fichier JSON du site (`site/data/cards.json`). Chaque carte SHALL avoir un identifiant unique de 17 caractères au plus (minuscules, chiffres, tirets), un texte, la liste de ses bonnes cases (`answers`), une explication générale fondée sur le Scrum Guide 2020, la section du guide concernée et, facultativement, des explications ciblées par case choisie à tort (`errors`). Un piège SHALL avoir pour seule bonne case la zone Piège. Les tests automatiques MUST refuser un paquet dont une carte a un identifiant en double ou trop long, aucune bonne case, une case inconnue ou grisée, un piège avec une autre bonne case, une explication propre à une case qui n'est pas l'une de ses bonnes cases, un texte ou une explication vide, ou une explication ciblée pour l'une de ses bonnes cases ; ils MUST aussi refuser un paquet qui laisse une case active sans carte (voir aussi « Une carte par case »).

#### Scenario: Paquet invalide
- **GIVEN** un paquet où une carte vise la case grisée Sprint × Sorties
- **WHEN** les tests s'exécutent
- **THEN** ils échouent en signalant la case inconnue

### Requirement: Une carte par case
Chaque case active SHALL recevoir exactement une carte, dont le texte regroupe tout l'essentiel du Scrum Guide 2020 pour cette case (par exemple, pour Sprint × But : « Atteindre le Sprint Goal, son unique but, en transformant les idées en valeur »). Quand deux cases ont exactement le même contenu, la carte SHALL exister en autant d'exemplaires, identifiés par l'identifiant de la carte suivi de `-1`, `-2` : chaque exemplaire est distribué et joué comme une carte à part entière, et il est juste dans l'une de ces cases tant qu'elle est libre. Une carte en plusieurs exemplaires MAY avoir une explication propre à chaque case. Les tests automatiques MUST refuser un paquet où une case active reçoit plus d'une carte.

#### Scenario: Deux exemplaires
- **GIVEN** la carte « Toute la Scrum Team », dont les bonnes cases sont Sprint Planning × Personnes requises et Sprint Retrospective × Personnes requises
- **WHEN** le paquet est chargé
- **THEN** il contient deux exemplaires de cette carte

#### Scenario: Deux cartes pour une case
- **GIVEN** un paquet avec deux cartes différentes pour Sprint × But
- **WHEN** les tests s'exécutent
- **THEN** ils échouent en signalant la case en double

### Requirement: Verdict
Le verdict d'une carte SHALL être « Juste » si la case choisie est l'une de ses bonnes cases et qu'elle est encore libre, et « Faux » sinon, y compris quand la carte est placée dans la zone Piège alors qu'elle n'est pas un piège, ou dans une case alors qu'elle est un piège. Une case déjà remplie par une carte juste MUST NOT pouvoir être choisie. Il n'y a pas de verdict partiel.

#### Scenario: Mauvaise colonne
- **GIVEN** la carte « 8 heures maximum pour un Sprint d'un mois, moins pour un Sprint plus court », dont la bonne case est Sprint Planning × Timebox
- **WHEN** elle est placée dans Sprint Review × Timebox
- **THEN** le verdict est « Faux »

#### Scenario: Piège démasqué
- **GIVEN** la carte « Les trois questions : hier, aujourd'hui, obstacles », qui est un piège
- **WHEN** elle est placée dans la zone Piège
- **THEN** le verdict est « Juste »

#### Scenario: Second exemplaire
- **GIVEN** un premier exemplaire de « Toute la Scrum Team » déjà placé juste dans Sprint Planning × Personnes requises
- **WHEN** Julie pioche le second exemplaire
- **THEN** la case Sprint Planning × Personnes requises ne peut plus être choisie, et le second exemplaire est juste dans Sprint Retrospective × Personnes requises

### Requirement: Explication de la correction
La correction SHALL afficher la case choisie, la bonne réponse, l'explication de la carte et la section du Scrum Guide 2020 concernée. Pour une carte juste, la bonne réponse SHALL être la seule case jouée ; pour une carte fausse, les bonnes cases encore libres. Les autres emplacements d'une carte en plusieurs exemplaires MUST NOT être affichés, et l'explication propre à la case montrée, si elle existe, SHALL remplacer l'explication générale. Si la carte prévoit une explication ciblée pour la case choisie à tort, elle SHALL s'afficher avant l'explication. Les textes SHALL respecter la typographie française (espaces insécables avant les signes doubles).

#### Scenario: Exemplaire juste
- **GIVEN** la carte « Toute la Scrum Team » placée dans Sprint Retrospective × Personnes requises
- **WHEN** la correction s'affiche
- **THEN** elle montre « Juste » et la seule bonne réponse « Sprint Retrospective · Personnes requises », avec l'explication propre à la Sprint Retrospective, sans mentionner le Sprint Planning

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

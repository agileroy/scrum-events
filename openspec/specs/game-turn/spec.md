# Game Turn Specification

## Purpose
Joueur actif, pioche, placement dans la grille (toucher ou glisser-déposer), chrono, correction affichée à tous, cases qui se retournent et passage à la carte suivante. Couvre `site/js/ui.js`, `site/js/grid.js`, `site/js/game-store.js` et les règles `eventsGame/rooms/$code/turn` et `results`.

## Requirements

### Requirement: Joueur actif
À chaque tour, le jeu SHALL désigner le joueur actif en suivant l'ordre de passage, en sautant les participants qui n'ont plus de cartes à jouer ou qui ont été retirés. Tous les écrans SHALL afficher son prénom (« À Julie de jouer »), et son téléphone SHALL indiquer clairement « À vous de jouer ! ».

#### Scenario: Tour de Julie
- **GIVEN** une partie dont l'ordre de passage est Julie, Marc, Inès
- **WHEN** le premier tour commence
- **THEN** le téléphone de Julie affiche « À vous de jouer ! », et l'écran projeté et les téléphones de Marc et Inès affichent « À Julie de jouer »

### Requirement: Pioche
Avant la pioche, tous les écrans SHALL montrer une carte face cachée. Le joueur actif SHALL piocher en touchant cette carte sur son téléphone (accessible aussi au clavier, avec le libellé « Retourner la carte ») ; pour les autres, la carte face cachée MUST NOT être cliquable. La carte piochée SHALL être la suivante de la main du joueur, et elle SHALL se retourner avec une animation en même temps sur l'écran projeté et sur tous les téléphones. Si l'utilisateur a demandé de réduire les animations, la carte SHALL s'afficher directement, sans rotation.

#### Scenario: Carte retournée
- **GIVEN** Julie, joueuse active, devant la carte face cachée
- **WHEN** elle touche la carte
- **THEN** la carte se retourne et son texte, par exemple « 15 minutes, chaque jour ouvré, à la même heure et au même lieu », s'affiche sur tous les écrans

#### Scenario: Carte d'un autre joueur
- **GIVEN** Julie, joueuse active
- **WHEN** Marc touche la carte face cachée sur son téléphone
- **THEN** rien ne se passe, et la carte indique « Julie va retourner la carte »

### Requirement: Placement dans la grille
Le joueur actif SHALL placer sa carte dans une colonne (voir `card-deck`) ou dans la zone Piège, soit en faisant glisser la carte retournée (souris, stylet ou doigt) puis en la lâchant, soit en touchant une case (ou au clavier) puis en appuyant sur « Valider ». Pendant le glisser, la colonne survolée SHALL être mise en évidence et sélectionnée, visible en direct sur l'écran projeté et chez les autres participants ; lâcher la carte n'importe où dans la hauteur d'une colonne (sur une case, dans l'espace entre deux cases ou sur l'en-tête), ou sur la zone Piège, SHALL valider le placement immédiatement, sans bouton ; la colonne se lit à la position horizontale du pointeur. La lâcher hors de la grille et de la zone Piège SHALL annuler le geste. À la fin du geste, quel qu'il soit, le curseur et l'affichage SHALL revenir à leur état normal. Au toucher, la colonne choisie SHALL être mise en évidence et son nom affiché sous la carte (« Votre choix : Sprint Review »), et le joueur SHALL pouvoir changer d'avis jusqu'à « Valider ». Chaque case SHALL offrir une zone tactile d'au moins 44 × 44 px sur un écran de 360 px de large. Le placement validé MUST être définitif. Seul le joueur actif MUST pouvoir placer la carte, y compris du point de vue des règles de sécurité de la base, et seulement dans une case active ou dans la zone Piège.

#### Scenario: Glisser-déposer
- **GIVEN** Julie, joueuse active sur un ordinateur, avec sa carte retournée
- **WHEN** elle fait glisser la carte au-dessus de la colonne Sprint Review puis la lâche dans la colonne Daily Scrum
- **THEN** l'écran projeté a montré la colonne Sprint Review puis la colonne Daily Scrum en cours de sélection, la carte est placée sans appui sur « Valider », et le curseur redevient normal

#### Scenario: Lâcher entre deux cases
- **GIVEN** Julie qui fait glisser sa carte dans la colonne Sprint Review
- **WHEN** elle la lâche dans l'espace entre deux cases de cette colonne
- **THEN** la carte est placée dans la colonne Sprint Review, sans appui sur « Valider »

#### Scenario: Toucher puis valider
- **GIVEN** Julie qui a touché une case de la colonne Sprint Review sans valider
- **WHEN** elle touche la zone Piège puis « Valider »
- **THEN** la carte est placée dans la zone Piège

#### Scenario: Placement par un autre joueur
- **GIVEN** Julie, joueuse active
- **WHEN** le navigateur de Marc tente d'écrire un placement pour la carte de Julie
- **THEN** la base refuse l'écriture

### Requirement: Chrono
Si le formateur a activé le chrono, un compte à rebours SHALL démarrer dès la pioche et s'afficher sur tous les écrans. Les 5 dernières secondes SHALL être mises en évidence. À zéro, si le joueur n'a pas validé, la carte SHALL être comptée « Faux » avec la mention « Temps écoulé », et la correction s'afficher comme pour un placement. Une case sélectionnée mais non validée MUST NOT être prise en compte. Sans chrono, aucun compte à rebours ne s'affiche.

#### Scenario: Temps écoulé
- **GIVEN** une partie avec un chrono de 30 secondes, et Julie qui a pioché sans valider
- **WHEN** 30 secondes se sont écoulées
- **THEN** la carte est comptée « Faux » avec la mention « Temps écoulé », et la correction s'affiche

### Requirement: Correction à chaque carte
Dès la validation, ou à la fin du chrono, la correction SHALL s'afficher en même temps sur l'écran projeté et sur tous les téléphones : verdict (« Juste » ou « Faux »), case choisie, bonne réponse mise en évidence dans la grille (voir `card-deck`), case choisie à tort mise en évidence différemment, et explication (voir `card-deck`). Le score collectif en cours SHALL être mis à jour. Le téléphone du joueur actif SHALL vibrer brièvement (au plus 200 ms) si le navigateur le permet.

#### Scenario: Correction pour toute la salle
- **GIVEN** Julie qui a validé la carte « Les Developers » dans Sprint Review × Personnes requises
- **WHEN** la correction s'affiche
- **THEN** tout le monde voit « Faux », la case Daily Scrum × Personnes requises mise en évidence comme bonne réponse et l'explication ciblée pour la Sprint Review

### Requirement: Cases qui se retournent
Au début de la partie, chaque case active SHALL être face cachée. Quand une carte est jugée « Juste », elle SHALL se poser dans sa bonne case, qui se retourne (avec la même animation que la carte, sauf réduction des animations) et affiche la carte. Quand une carte est jugée « Faux », sa bonne case libre SHALL aussi se retourner et afficher la carte, avec un indicateur coloré « Erreur » qui reste visible jusqu'à la fin de la partie ; la case choisie à tort SHALL être mise en évidence pendant la correction. Les pièges posés SHALL s'afficher dans la zone Piège, avec le même indicateur pour ceux qui ont été mal placés. Sur l'écran projeté, la face d'une case SHALL montrer le texte de la carte ; sur téléphone, une marque (✓ ou ✗). La grille SHALL se reconstituer à l'identique après un rechargement de page.

#### Scenario: Première carte juste
- **GIVEN** la case Sprint Planning × Timebox encore face cachée
- **WHEN** la carte « 8 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court » est déposée dans la colonne Sprint Planning
- **THEN** la case Sprint Planning × Timebox se retourne sur tous les écrans et l'écran projeté y affiche le texte de la carte

#### Scenario: Carte fausse révélée
- **GIVEN** la case Sprint Retrospective × Timebox encore face cachée
- **WHEN** la carte « 3 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court » est déposée dans la colonne Sprint Review
- **THEN** le verdict est « Faux », la colonne Sprint Review est mise en évidence comme choix, et la case Sprint Retrospective × Timebox se retourne avec la carte et l'indicateur « Erreur »

### Requirement: Passage à la carte suivante
Après la correction, seul le formateur SHALL pouvoir passer au joueur suivant, avec « Carte suivante ». Après la dernière carte, ce bouton SHALL devenir « Voir les résultats ». Le formateur SHALL pouvoir passer le tour d'un joueur déconnecté ou qui ne répond pas, avant la pioche ou avant la validation (« Passer son tour ») : la carte éventuellement piochée reste dans la main du joueur, qui la retrouvera à son prochain tour. Le formateur SHALL pouvoir terminer la partie à tout moment (« Terminer la partie »), après confirmation, et afficher les résultats des cartes déjà jouées.

#### Scenario: Carte suivante
- **GIVEN** la correction de la carte de Julie affichée
- **WHEN** le formateur clique sur « Carte suivante »
- **THEN** c'est au tour de Marc, et les téléphones affichent « À Marc de jouer »

#### Scenario: Joueur absent
- **GIVEN** Marc, joueur actif, déconnecté
- **WHEN** le formateur clique sur « Passer son tour »
- **THEN** c'est au tour d'Inès, et Marc garde ses cartes restantes pour le tour complet suivant

#### Scenario: Pas de bouton pour les participants
- **GIVEN** la correction affichée
- **WHEN** Julie regarde son téléphone
- **THEN** elle ne voit aucun bouton « Carte suivante »

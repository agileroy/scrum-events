## MODIFIED Requirements

### Requirement: Placement dans la grille
Le joueur actif SHALL placer sa carte dans une colonne (voir `card-deck`) ou dans la zone Piège, soit en faisant glisser la carte retournée (souris, stylet ou doigt) puis en la lâchant, soit en touchant une case (ou au clavier) puis en appuyant sur « Valider ». Pendant le glisser, la colonne survolée SHALL être mise en évidence et sélectionnée, visible en direct sur l'écran projeté et chez les autres participants ; lâcher la carte sur une case, sur un en-tête de colonne ou sur la zone Piège SHALL valider le placement immédiatement, sans bouton ; la lâcher ailleurs SHALL annuler le geste. À la fin du geste, quel qu'il soit, le curseur et l'affichage SHALL revenir à leur état normal. Au toucher, la colonne choisie SHALL être mise en évidence et son nom affiché sous la carte (« Votre choix : Sprint Review »), et le joueur SHALL pouvoir changer d'avis jusqu'à « Valider ». Chaque case SHALL offrir une zone tactile d'au moins 44 × 44 px sur un écran de 360 px de large. Le placement validé MUST être définitif. Seul le joueur actif MUST pouvoir placer la carte, y compris du point de vue des règles de sécurité de la base, et seulement dans une case active ou dans la zone Piège.

#### Scenario: Glisser-déposer
- **GIVEN** Julie, joueuse active sur un ordinateur, avec sa carte retournée
- **WHEN** elle fait glisser la carte au-dessus de la colonne Sprint Review puis la lâche dans la colonne Daily Scrum
- **THEN** l'écran projeté a montré la colonne Sprint Review puis la colonne Daily Scrum en cours de sélection, la carte est placée sans appui sur « Valider », et le curseur redevient normal

#### Scenario: Toucher puis valider
- **GIVEN** Julie qui a touché une case de la colonne Sprint Review sans valider
- **WHEN** elle touche la zone Piège puis « Valider »
- **THEN** la carte est placée dans la zone Piège

#### Scenario: Placement par un autre joueur
- **GIVEN** Julie, joueuse active
- **WHEN** le navigateur de Marc tente d'écrire un placement pour la carte de Julie
- **THEN** la base refuse l'écriture

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

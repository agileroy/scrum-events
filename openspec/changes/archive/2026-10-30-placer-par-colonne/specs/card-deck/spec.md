## MODIFIED Requirements

### Requirement: Verdict
La colonne SHALL suffire : une carte posée n'importe où dans la colonne de l'un de ses événements (une case de la colonne, ou son en-tête) SHALL être « Juste » et rejoindre sa bonne case, si celle-ci est encore libre. Un piège SHALL être « Juste » seulement dans la zone Piège. Dans tous les autres cas, le verdict SHALL être « Faux » : mauvaise colonne, carte non piège dans la zone Piège, piège dans la grille, ou bonne case déjà révélée. Toutes les cases actives SHALL rester choisissables. Il n'y a pas de verdict partiel.

#### Scenario: Bonne colonne, autre ligne
- **GIVEN** la carte « 8 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court », dont la bonne case est Sprint Planning × Timebox
- **WHEN** elle est déposée sur Sprint Planning × But
- **THEN** le verdict est « Juste » et la carte se pose dans Sprint Planning × Timebox

#### Scenario: Mauvaise colonne
- **GIVEN** la même carte
- **WHEN** elle est déposée dans la colonne Sprint Review
- **THEN** le verdict est « Faux »

#### Scenario: Piège démasqué
- **GIVEN** la carte « Les trois questions : hier, aujourd'hui, obstacles », qui est un piège
- **WHEN** elle est placée dans la zone Piège
- **THEN** le verdict est « Juste »

#### Scenario: Second exemplaire
- **GIVEN** un premier exemplaire de « Toute la Scrum Team » déjà révélé dans Sprint Planning × Personnes requises
- **WHEN** le second exemplaire est déposé dans la colonne Sprint Retrospective
- **THEN** il est « Juste » et se pose dans Sprint Retrospective × Personnes requises

### Requirement: Explication de la correction
La correction SHALL afficher le choix (l'événement de la colonne choisie, ou « Piège »), la bonne réponse, l'explication de la carte et la section du Scrum Guide 2020 concernée. Pour une carte juste, la bonne réponse SHALL être la seule case où la carte s'est posée ; pour une carte fausse, les bonnes cases encore libres. Les autres emplacements d'une carte en plusieurs exemplaires MUST NOT être affichés, et l'explication propre à la case montrée, si elle existe, SHALL remplacer l'explication générale. Si la carte prévoit une explication ciblée pour la case choisie à tort, ou à défaut pour une case de la même colonne, elle SHALL s'afficher avant l'explication. Les textes SHALL respecter la typographie française (espaces insécables avant les signes doubles).

#### Scenario: Exemplaire juste
- **GIVEN** la carte « Toute la Scrum Team » déposée dans la colonne Sprint Retrospective
- **WHEN** la correction s'affiche
- **THEN** elle montre « Juste » et la seule bonne réponse « Sprint Retrospective · Personnes requises », avec l'explication propre à la Sprint Retrospective, sans mentionner le Sprint Planning

#### Scenario: Explication ciblée
- **GIVEN** la carte « Les Developers » déposée dans la colonne Sprint Planning
- **WHEN** la correction s'affiche
- **THEN** elle montre l'explication ciblée sur le Sprint Planning, puis l'explication générale et la référence « Scrum Guide 2020 · Daily Scrum »

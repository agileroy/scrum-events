## ADDED Requirements

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
Le joueur actif SHALL choisir une case libre de la grille, ou la zone Piège, en la touchant (ou au clavier), ou en y faisant glisser sa carte retournée ; une case déjà remplie MUST NOT pouvoir être choisie. La case choisie SHALL être mise en évidence et son nom complet affiché sous la carte (« Votre choix : Sprint Review · Entrées »), et il SHALL pouvoir changer d'avis tant qu'il n'a pas confirmé. Chaque case SHALL offrir une zone tactile d'au moins 44 × 44 px sur un écran de 360 px de large. Un bouton « Valider » SHALL confirmer le placement ; déposer la carte sur une case par glisser-déposer (souris, stylet ou doigt) SHALL aussi le confirmer, la case survolée étant sélectionnée et visible de tous pendant le geste. Le placement validé MUST être définitif. Seul le joueur actif MUST pouvoir placer la carte, y compris du point de vue des règles de sécurité de la base, et seulement dans une case active ou dans la zone Piège. Avant la validation, l'écran projeté et les autres téléphones SHALL afficher la case en cours de sélection.

#### Scenario: Placement en direct
- **GIVEN** Julie, joueuse active, avec sa carte piochée
- **WHEN** elle touche la case Daily Scrum × Timebox
- **THEN** la case est mise en évidence sur son téléphone, sur l'écran projeté et chez les autres participants

#### Scenario: Changement d'avis
- **GIVEN** Julie qui a touché la case Sprint Review × Entrées sans valider
- **WHEN** elle touche la zone Piège puis « Valider »
- **THEN** la carte est placée dans la zone Piège

#### Scenario: Glisser-déposer
- **GIVEN** Julie, joueuse active sur un ordinateur, avec sa carte retournée
- **WHEN** elle fait glisser la carte au-dessus de Sprint Review × Entrées puis la lâche sur Daily Scrum × Entrées
- **THEN** l'écran projeté a montré Sprint Review × Entrées puis Daily Scrum × Entrées en cours de sélection, et la carte est placée dans Daily Scrum × Entrées

#### Scenario: Case déjà remplie
- **GIVEN** la case Sprint Planning × Timebox déjà retournée
- **WHEN** Julie la touche ou y lâche sa carte
- **THEN** rien n'est sélectionné et la carte reste à placer

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
Au début de la partie, chaque case active SHALL être face cachée. Quand une carte est placée juste dans une case, cette case SHALL se retourner (avec la même animation que la carte, sauf réduction des animations) et afficher la carte qui y a été posée ; sur l'écran projeté, la face SHALL montrer son texte, et sur téléphone, une marque de case remplie. Une carte fausse MUST NOT remplir de case. La grille SHALL se reconstituer à l'identique après un rechargement de page.

#### Scenario: Première carte juste
- **GIVEN** la case Sprint Planning × Timebox encore face cachée
- **WHEN** la carte « 8 heures maximum pour un Sprint d'un mois, moins pour un Sprint plus court » y est placée et jugée « Juste »
- **THEN** la case se retourne sur tous les écrans et l'écran projeté y affiche le texte de la carte

#### Scenario: Carte fausse
- **GIVEN** la case Sprint Review × Timebox encore face cachée
- **WHEN** la carte « 3 heures maximum pour un Sprint d'un mois, moins pour un Sprint plus court » y est placée et jugée « Faux »
- **THEN** la case reste face cachée

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

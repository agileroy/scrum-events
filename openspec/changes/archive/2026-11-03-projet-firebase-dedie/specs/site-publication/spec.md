## REMOVED Requirements

### Requirement: Règles de sécurité partagées
**Reason**: le jeu a désormais son propre projet Firebase ; la base n'est plus partagée avec les autres outils.
**Migration**: les contraintes de jeu sont reprises telles quelles dans « Règles de sécurité du jeu » ; la publication manuelle est remplacée par « Déploiement automatique des règles ».

## ADDED Requirements

### Requirement: Projet Firebase dédié
Le jeu SHALL utiliser un projet Firebase qui lui est propre, qu'aucun autre outil n'utilise. `database.rules.json` SHALL ne contenir que la branche `eventsGame`, et tout le reste de la base SHALL être fermé en lecture comme en écriture.

#### Scenario: Fichier commun recopié par erreur
- **GIVEN** un `database.rules.json` qui contient aussi la branche d'un autre outil
- **WHEN** les tests s'exécutent
- **THEN** un test échoue et ni les règles ni le site ne sont publiés

### Requirement: Règles de sécurité du jeu
Les règles de la branche `eventsGame` MUST imposer : seul le formateur d'une salle modifie ses réglages, lance la partie, fait avancer les tours, écrit les résultats et retire des participants ; un participant n'écrit que sa propre fiche ; seul le joueur actif pioche la carte suivante de sa main, puis sélectionne et place sa carte, dans une case active ou la zone Piège, avant la fin du chrono ; une salle n'est supprimée que par son formateur, ou par n'importe qui au-delà de 24 heures.

#### Scenario: Écriture hors de sa salle
- **GIVEN** Marc, participant de la salle « KZTR »
- **WHEN** son navigateur tente de modifier les réglages de la salle
- **THEN** la base refuse l'écriture

#### Scenario: Case grisée refusée
- **GIVEN** Julie, joueuse active
- **WHEN** son navigateur tente d'écrire le placement `sprint-outputs`
- **THEN** la base refuse l'écriture

### Requirement: Déploiement automatique des règles
À chaque push sur `main`, après la réussite des tests, GitHub Actions SHALL publier `database.rules.json` dans le projet Firebase du jeu, avec un compte de service gardé en secret (`FIREBASE_SERVICE_ACCOUNT`), puis seulement publier le site. Si un test échoue, les règles MUST NOT être publiées. Sans secret, le déploiement des règles SHALL être sauté avec un avertissement, sans empêcher la publication du site.

#### Scenario: Règles modifiées
- **GIVEN** un push sur `main` qui modifie `database.rules.json` et dont les tests réussissent
- **WHEN** le workflow s'exécute
- **THEN** les nouvelles règles sont actives dans le projet du jeu, sans action dans la console

#### Scenario: Secret absent
- **GIVEN** un dépôt sans secret `FIREBASE_SERVICE_ACCOUNT`
- **WHEN** le workflow s'exécute sur `main`
- **THEN** le job des règles signale qu'il est sauté et le site est publié quand même

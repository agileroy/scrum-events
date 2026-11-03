# Site Publication Specification

## Purpose
Publication sur GitHub Pages, interface (langue, appareils, thème), connexion au service temps réel, mode démo et règles de sécurité partagées.

## Requirements

### Requirement: Publication automatique
Le site SHALL être publié sur GitHub Pages, à l'adresse https://agileroy.github.io/scrum-events/, à chaque push sur `main`. Les tests automatiques SHALL être lancés avant la publication, et la publication MUST NOT avoir lieu si un test échoue. Les tests SHALL aussi être lancés sur chaque pull request, sans publication. Les fichiers publiés SHALL être versionnés (paramètre de version dans leurs adresses) pour éviter les styles et scripts périmés en cache après une mise à jour.

#### Scenario: Test en échec
- **GIVEN** un push sur `main` qui casse un test
- **WHEN** le workflow GitHub Actions s'exécute
- **THEN** le job de tests échoue et le site publié reste la version précédente

### Requirement: Interface et appareils
L'interface SHALL être en français. L'écran du formateur SHALL être conçu pour être projeté (lisible à distance sur un écran de 1280 px et plus, la grille occupant l'essentiel de la largeur). L'écran des participants SHALL être utilisable sur téléphone (largeur de 360 px et plus) sans défilement horizontal. Les deux SHALL fonctionner en thème clair et en thème sombre, avec un bouton de bascule mémorisé dans le navigateur. Le site MUST NOT afficher de publicité ni charger de traceur.

#### Scenario: Participant sur téléphone
- **GIVEN** un téléphone de 360 px de large
- **WHEN** Julie est joueuse active
- **THEN** la carte, la grille complète, la zone Piège et le bouton « Valider » tiennent dans la largeur de l'écran sans défilement horizontal

### Requirement: Connexion au service temps réel
Le site SHALL n'utiliser que des connexions HTTPS (port 443) vers Firebase. Si la connexion est perdue, l'écran SHALL afficher « Connexion perdue, reconnexion… » et reprendre automatiquement à son retour, sans recharger la page. Si le service est injoignable au chargement, l'accueil SHALL l'indiquer et garder l'entraînement seul disponible.

#### Scenario: Coupure réseau
- **GIVEN** un participant dans une partie
- **WHEN** sa connexion est coupée puis rétablie
- **THEN** le message de connexion perdue s'affiche pendant la coupure, puis la partie se met à jour

### Requirement: Mode démo
Avec `?demo` dans l'adresse, le site SHALL fonctionner sans Firebase : les onglets d'un même navigateur partagent une même partie, ce qui permet d'essayer le jeu seul avec un onglet formateur et plusieurs onglets participants.

#### Scenario: Essai à plusieurs onglets
- **GIVEN** un onglet formateur et deux onglets participants ouverts avec `?demo`
- **WHEN** le formateur lance la partie
- **THEN** les trois onglets suivent la même partie

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

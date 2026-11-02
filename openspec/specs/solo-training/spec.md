# Solo Training Specification

## Purpose
Entraînement seul, sans formateur ni service temps réel, avec « Rejouer mes erreurs ». Couvre `site/js/game-core.js` et `site/js/ui.js`.

## Requirements

### Requirement: Lancement d'un entraînement
La page d'accueil SHALL proposer une carte « S'entraîner seul », à côté de « Animer une partie » et « Rejoindre une partie », avec un champ « Nombre de cartes » et un bouton « Commencer ». Le nombre de cartes SHALL valoir 10 par défaut ; il SHALL être modifiable au clavier, et une valeur hors bornes ou illisible SHALL être ramenée dans [1, nombre d'exemplaires du paquet] au lancement. Une case « Tout le paquet » SHALL permettre de jouer toutes les cartes de grille avec 1 piège (23 cartes avec le paquet actuel), le champ « Nombre de cartes » étant alors désactivé. L'entraînement MUST NOT nécessiter de prénom, de code de salle, de formateur ni de connexion au service temps réel.

#### Scenario: Valeur par défaut
- **GIVEN** la page d'accueil
- **WHEN** l'utilisateur regarde la carte « S'entraîner seul »
- **THEN** le nombre de cartes vaut 10

#### Scenario: Nombre hors bornes
- **GIVEN** un paquet de 40 exemplaires
- **WHEN** l'utilisateur saisit 200 puis clique sur « Commencer »
- **THEN** un entraînement de 40 cartes commence

#### Scenario: Tout le paquet seul
- **GIVEN** la page d'accueil
- **WHEN** l'utilisateur coche « Tout le paquet » puis clique sur « Commencer »
- **THEN** un entraînement de 23 cartes commence : les 22 cartes de grille et 1 piège

### Requirement: Tirage des cartes
Les cartes d'un entraînement SHALL être tirées au hasard parmi tous les exemplaires du paquet, toutes différentes, dans un ordre aléatoire. Chaque entraînement MUST contenir au moins 1 piège ; si le tirage n'en contient aucun, une carte tirée au hasard SHALL être remplacée par un piège tiré au hasard.

#### Scenario: Au moins un piège
- **GIVEN** de nombreux entraînements de 10 cartes
- **WHEN** on compte les pièges de chacun
- **THEN** chacun en contient au moins 1

### Requirement: Tour d'entraînement
Chaque carte SHALL se jouer comme en groupe : carte face cachée à toucher pour la retourner, choix d'une case libre de la grille ou de la zone Piège, au toucher modifiable jusqu'à « Valider » ou par glisser-déposer, puis correction (verdict, case choisie, bonnes cases mises en évidence, explication ciblée et explication générale, référence au Scrum Guide 2020), selon les mêmes règles de verdict que la partie en groupe (voir `card-deck`). Les cases SHALL se retourner et se remplir comme en groupe (voir `game-turn`). Il n'y a pas de chrono. Après la correction, un bouton « Carte suivante » SHALL passer à la carte suivante ; après la dernière carte, il SHALL devenir « Voir les résultats ». L'écran SHALL indiquer la progression (« Carte 3 sur 10 ») et le score en cours. Un lien « Arrêter » SHALL permettre, après confirmation, d'afficher les résultats des cartes déjà jouées.

#### Scenario: Correction d'une carte
- **GIVEN** un entraînement en cours, avec la carte « 4 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court » retournée
- **WHEN** l'utilisateur la place dans Sprint Planning × Timebox et clique sur « Valider »
- **THEN** la correction affiche « Faux », la bonne case Sprint Review × Timebox et l'explication ciblée pour le Sprint Planning, puis le bouton « Carte suivante »

#### Scenario: Arrêt anticipé
- **GIVEN** un entraînement de 10 cartes dont 4 ont été jouées
- **WHEN** l'utilisateur clique sur « Arrêter » et confirme
- **THEN** l'écran de fin affiche les résultats des 4 cartes jouées

### Requirement: Fin d'un entraînement
L'écran de fin SHALL afficher le pourcentage de bonnes réponses, le nombre de cartes justes et fausses, le récapitulatif des cartes fausses et la grille complète, comme en groupe, sans podium. Il SHALL proposer « Rejouer mes erreurs » s'il y a au moins une carte fausse, « Nouvel entraînement » et un retour à l'accueil. « Rejouer mes erreurs » SHALL lancer un entraînement composé uniquement des cartes fausses de l'entraînement qui vient de se terminer, dans un ordre mélangé, sans ajouter de piège.

#### Scenario: Rejouer mes erreurs
- **GIVEN** un entraînement terminé avec 3 cartes fausses
- **WHEN** l'utilisateur clique sur « Rejouer mes erreurs »
- **THEN** un entraînement de ces 3 cartes commence

#### Scenario: Sans erreur
- **GIVEN** un entraînement terminé sans carte fausse
- **WHEN** l'écran de fin s'affiche
- **THEN** il affiche « Aucune erreur, bravo ! » et ne propose pas « Rejouer mes erreurs »

### Requirement: Entraînement local
L'entraînement SHALL se dérouler entièrement dans le navigateur : il MUST NOT écrire dans le service temps réel ni dans le stockage du navigateur, et il SHALL fonctionner même si le service temps réel est injoignable. Recharger la page SHALL ramener à l'accueil, sans reprendre l'entraînement en cours.

#### Scenario: Service injoignable
- **GIVEN** un réseau qui bloque Firebase
- **WHEN** l'utilisateur ouvre le site et lance un entraînement
- **THEN** l'entraînement se déroule normalement

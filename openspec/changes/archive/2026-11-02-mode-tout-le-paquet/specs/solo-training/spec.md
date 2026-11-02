## MODIFIED Requirements

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

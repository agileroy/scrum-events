## ADDED Requirements

### Requirement: Mode tout le paquet
Avec « Tout le paquet », le lancement SHALL distribuer toutes les cartes de grille, chacune une seule fois, et compléter avec des pièges pour que chaque participant ait le même nombre de cartes, avec au moins 1 et au plus 2 pièges par personne. Le nombre de cartes par personne SHALL être le plus petit qui respecte ces conditions ; les seconds pièges SHALL aller à des participants tirés au hasard, et l'ordre de chaque main SHALL être mélangé. Sous la case, l'écran du formateur SHALL afficher le détail (« 22 notions + 6 pièges : 7 cartes chacun »). Le paquet SHALL compter assez de pièges pour que ce mode soit possible de 1 à 10 participants ; les tests automatiques MUST le vérifier. Le choix est mémorisé dans le navigateur du formateur, pour sa salle.

#### Scenario: Quatre participants
- **GIVEN** un paquet de 22 cartes de grille et 18 pièges, et 4 participants présents
- **WHEN** le formateur coche « Tout le paquet » et lance la partie
- **THEN** chacun reçoit 7 cartes, les 22 cartes de grille sont toutes distribuées, et chacun a 1 ou 2 pièges (6 pièges en tout)

#### Scenario: Dix participants
- **GIVEN** le même paquet et 10 participants présents
- **WHEN** le formateur lance la partie en « Tout le paquet »
- **THEN** chacun reçoit 4 cartes, dont 18 pièges en tout : 8 participants en ont 2 et 2 en ont 1

#### Scenario: Retardataire
- **GIVEN** une partie lancée en « Tout le paquet »
- **WHEN** Marc rejoint la salle
- **THEN** Marc suit la partie en spectateur, puisqu'il ne reste aucune carte de grille à distribuer

## MODIFIED Requirements

### Requirement: Réglages de la partie
Avant le lancement, le formateur SHALL choisir le nombre de cartes par personne et le chrono (sans chrono, 30, 45 ou 60 secondes ; sans chrono par défaut). Le nombre de cartes par personne SHALL aller de 1 au maximum possible : le plus grand nombre de cartes par personne qui permet de distribuer les mains de tous les participants, chacune avec exactement 1 piège à partir de 2 cartes (voir « Lancement et tirage ») ; 1 carte par personne reste toujours possible tant que le paquet compte au moins une carte par participant. Il SHALL valoir 5 par défaut (ou le maximum s'il est plus petit) et être ramené au nouveau maximum si un participant arrive. Le formateur SHALL pouvoir le changer avec les boutons − et +, ou en saisissant le nombre au clavier : la saisie est appliquée quand il valide (Entrée) ou quitte le champ, et une valeur hors bornes est ramenée dans [1, maximum]. Le formateur SHALL aussi pouvoir cocher « Tout le paquet » (voir « Mode tout le paquet ») : le nombre de cartes par personne est alors calculé et affiché, et les boutons − et + sont désactivés. Le bouton « Lancer la partie » SHALL être désactivé tant qu'aucun participant n'est présent.

#### Scenario: Valeur par défaut
- **GIVEN** un paquet de 40 exemplaires dont 18 pièges, et 4 participants présents
- **WHEN** le formateur ouvre les réglages
- **THEN** le nombre de cartes par personne vaut 5, avec un maximum de 6

#### Scenario: Maximum
- **GIVEN** un paquet de 40 exemplaires dont 18 pièges, et 10 participants présents
- **WHEN** le formateur ouvre les réglages
- **THEN** le nombre de cartes par personne vaut 3 et ne peut pas dépasser 3

#### Scenario: Saisie au clavier
- **GIVEN** un paquet de 40 exemplaires dont 18 pièges, et 4 participants présents
- **WHEN** le formateur saisit 4 dans le champ puis appuie sur Entrée
- **THEN** le nombre de cartes par personne vaut 4 pour tout le monde

#### Scenario: Saisie hors bornes
- **GIVEN** un paquet de 40 exemplaires dont 18 pièges, et 4 participants présents
- **WHEN** le formateur saisit 40 puis quitte le champ
- **THEN** le nombre de cartes par personne est ramené à 6

#### Scenario: Ajustement à l'arrivée d'un participant
- **GIVEN** un paquet de 40 exemplaires dont 18 pièges, 4 participants et le réglage à 6 cartes par personne
- **WHEN** un cinquième participant arrive
- **THEN** le réglage est ramené à 5 cartes par personne

### Requirement: Arrivée tardive
Un participant qui rejoint une partie déjà lancée SHALL être ajouté à la fin de l'ordre de passage. Son nombre de cartes SHALL être égal au nombre de tours restant aux autres participants au moment de son arrivée, c'est-à-dire le nombre de cartes réglé moins le nombre de tours complets déjà joués, et limité par les cartes encore non distribuées. Sa main SHALL être prise parmi ces cartes, avec exactement 1 piège à partir de 2 cartes, comme au lancement ; s'il ne reste plus de piège ou plus assez de cartes non piège, sa main SHALL être complétée avec les cartes disponibles. S'il ne reste aucune carte de grille à distribuer (toutes les notions sont déjà dans les mains, par exemple en mode « Tout le paquet »), il SHALL rejoindre en spectateur, avec un message qui l'explique. Il MUST NOT rejoindre une salle déjà pleine ni une partie terminée.

#### Scenario: Retardataire
- **GIVEN** une partie à 5 cartes par personne dont 2 tours complets ont été joués
- **WHEN** Marc rejoint la salle
- **THEN** Marc jouera 3 cartes, dont exactement 1 piège, en dernier dans l'ordre de passage

#### Scenario: Paquet épuisé
- **GIVEN** une partie dont toutes les cartes de grille ont été distribuées
- **WHEN** Marc rejoint la salle
- **THEN** Marc suit la partie en spectateur, avec le message « Plus assez de cartes pour vous faire jouer : vous suivez la partie en spectateur »

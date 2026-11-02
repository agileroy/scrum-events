## Why

En formation, le formateur veut parfois voir ensemble toutes les notions des événements Scrum, et pas seulement un tirage de quelques cartes par personne.

## What Changes

- Une option **« Tout le paquet »** à côté du nombre de cartes par personne : les 22 cartes de grille sont toutes distribuées, chacune une fois, et des pièges complètent pour que chacun ait le même nombre de cartes, avec **au moins 1 et au plus 2 pièges par personne**.
- Le paquet passe de 10 à **18 pièges** (8 nouveaux, relus par deux relecteurs), pour que le mode soit possible de 1 à 10 participants (il en faut 18 à 10 participants, 14 à 9, 13 à 7).
- Un retardataire suit en spectateur quand il ne reste aucune carte de grille à distribuer.
- La même option dans l'entraînement seul : les 22 notions et 1 piège.
- La partie normale ne change pas (1 piège par main).

## Capabilities

### New Capabilities

_Aucune._

### Modified Capabilities

- `game-room` : réglages (« Tout le paquet »), nouveau mode de distribution, arrivée tardive.
- `solo-training` : option « Tout le paquet ».

## Impact

`site/data/cards.json` (8 pièges), `site/js/game-core.js` (`fullDeckPlan`, `dealFullDeck`, `undealtGridCards`), `site/js/game-store.js`, `site/js/ui.js`, `site/index.html`, `site/app.css`, tests. Pas de changement des règles Firebase : les mains, le nombre de cartes et les quotas restent dans les limites déjà acceptées.

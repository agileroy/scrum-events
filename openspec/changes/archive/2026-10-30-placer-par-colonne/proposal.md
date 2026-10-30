## Why

Retours de l'auteur après les premiers essais du glisser-déposer : une fois, la carte lâchée n'a pas été validée et le curseur est resté sur la main fermée ; viser la case exacte est trop exigeant ; et quand une carte est fausse, sa bonne case doit se révéler, avec un indicateur d'erreur.

## What Changes

- **La colonne suffit** : une carte posée n'importe où dans la colonne de son événement (ou sur l'en-tête de colonne) est juste et rejoint sa bonne case. La zone Piège reste exacte.
- **Glisser-déposer fiable** : le geste est suivi sur toute la fenêtre ; lâcher la carte valide toujours le placement, et le curseur revient toujours à la normale.
- **Carte fausse révélée** : la bonne case se retourne quand même avec la carte et un indicateur « Erreur » ; les pièges posés s'affichent dans la zone Piège.
- Toutes les cases actives restent choisissables (une case révélée appartient quand même à sa colonne).

## Capabilities

### New Capabilities

_Aucune._

### Modified Capabilities

- `card-deck` : verdict à la colonne, explication ciblée de la même colonne à défaut de la case exacte.
- `game-turn` : placement à la colonne, validation au lâcher, cases révélées après une erreur.

## Impact

`site/js/game-core.js` (`resolvePlacement`, `boardState`, `choiceLabel`), `site/js/game-store.js`, `site/js/grid.js`, `site/js/ui.js`, `site/app.css`, tests. Pas de changement des règles Firebase : le formateur écrit dans `results` la case où la carte s'est posée.

## 1. Logique

- [x] 1.1 `resolvePlacement`, `boardState`, `choiceLabel` et explication ciblée de la même colonne dans `game-core.js` ; résultat calculé avec `resolvePlacement` dans `game-store.js`. Vérification : tests des scénarios de `card-deck` et `game-turn` (`npm test`, 80 tests au vert).

## 2. Interface

- [x] 2.1 Grille : colonne mise en évidence (sélection et survol), en-têtes de colonne comme cibles de dépôt, cases révélées avec l'indicateur « Erreur », pièges posés dans la zone Piège. Vérification : captures en mode démo.
- [x] 2.2 Glisser-déposer suivi sur la fenêtre, validation au lâcher, curseur rétabli. Vérification : entraînement de 32 cartes en glisser-déposer (bonne colonne, en-tête, mauvaise colonne, pièges) et partie en groupe à deux onglets : toutes les cartes validées au lâcher, curseur jamais bloqué, aucune erreur console.

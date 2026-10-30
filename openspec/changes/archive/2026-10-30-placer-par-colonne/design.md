## Context

Le jeu est publié ; ces changements touchent le placement et l'affichage de la grille, sans modifier le modèle de données ni les règles Firebase.

## Decisions

- **Résolution du placement** (`resolvePlacement`) : la case exacte si elle est une bonne case libre ; sinon la bonne case libre de la même colonne ; sinon faux. Le navigateur du formateur l'applique au calcul du résultat et écrit dans `results/{seq}/cell` la case où la carte s'est posée (la case choisie si elle est fausse), ce que les règles acceptent déjà.
- **Plateau rejoué** (`boardState`) : les résultats sont rejoués dans l'ordre ; une carte juste occupe sa case, une carte fausse occupe sa bonne case encore libre, marquée « Erreur ». Le contenu de la grille, les cases occupées, la bonne réponse montrée et le récapitulatif en découlent, sur tous les écrans, sans nouvelle donnée en base.
- **Glisser-déposer** : écoute de `pointermove` / `pointerup` / `pointercancel` sur la fenêtre pendant le geste, au lieu de la capture du pointeur sur la carte, que le navigateur peut perdre quand la carte est redessinée (cause probable du dépôt non validé et du curseur bloqué) ; fin du geste aussi sur `blur`. Les en-têtes de colonne sont des cibles de dépôt.
- **Choix affiché** : l'événement (« Votre choix : Sprint Review »), puisque la ligne n'importe plus ; la colonne entière est mise en évidence.

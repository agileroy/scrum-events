## Decisions

- **Plan** (`fullDeckPlan`) : avec G cartes de grille et N participants, le nombre de cartes par personne est k = ⌈(G + N) / N⌉, le plus petit qui laisse au moins 1 piège par personne ; il en laisse alors moins de 2N, donc au plus 2 par personne. Le plan est impossible si le paquet n'a pas N·k − G pièges. Avec 22 cartes de grille, il faut 18 pièges à 10 participants : le paquet est porté à 18 pièges.
- **Distribution** (`dealFullDeck`) : un piège par personne, un second pour N·k − G − N participants tirés au hasard, puis les cartes de grille mélangées ; chaque main est mélangée.
- **Choix du mode** : mémorisé dans le navigateur du formateur (clé par salle), sans nouveau champ en base, pour ne pas modifier les règles partagées par les six outils. Après le lancement, le mode se déduit des mains (plus aucune carte de grille non distribuée), ce qui suffit pour l'arrivée tardive.
- **Arrivée tardive** : spectateur s'il ne reste aucune carte de grille non distribuée, dans les deux modes (un retardataire ne reçoit jamais une main faite seulement de pièges).
- **Pièges** : 8 nouveaux, chacun relu pour la fidélité au guide et la jouabilité (pas de mot qui trahit la réponse, pas de doublon avec les pièges existants, pas de piège sur les timebox).

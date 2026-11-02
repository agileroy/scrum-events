# Paquet de cartes « Les événements Scrum »

Source : Scrum Guide 2020, traduction française officielle (novembre 2020). Fichier source : `site/data/cards.json` (ce document est généré, ne pas le modifier).

38 cartes différentes, soit 40 exemplaires dont 18 pièges.
Une carte par case. Quand deux cases ont le même contenu, la carte existe en deux exemplaires, chacun juste dans la colonne de l'une de ces cases tant qu'elle est libre. En jeu, la bonne colonne suffit : la carte rejoint sa case.

## Grille complète

| | Sprint | Sprint Planning | Daily Scrum | Sprint Review | Sprint Retrospective |
|---|---|---|---|---|---|
| **Timebox** | Un mois ou moins, durée fixe ; le suivant démarre dès la fin du précédent | 8 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court | 15 minutes, chaque jour ouvré, à la même heure et au même lieu | 4 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court | 3 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court |
| **Personnes requises** | *(grisée)* | Toute la Scrum Team | Les Developers | La Scrum Team et les principales parties prenantes | Toute la Scrum Team |
| **But** | Atteindre le Sprint Goal en transformant les idées en valeur | Lancer le Sprint : pourquoi il est important, ce qui peut être fait et comment | Inspecter la progression vers le Sprint Goal et adapter le Sprint Backlog si nécessaire | Inspecter le résultat du Sprint et déterminer les adaptations futures | Trouver des pistes pour améliorer la qualité et l'efficacité |
| **Entrées** | *(grisée)* | Product Backlog, Product Goal, capacité, performances passées, Definition of Done | Le Sprint Backlog : Sprint Goal, éléments sélectionnés et plan pour les livrer | Les Increments, les changements de l'environnement, la progression vers le Product Goal | Le dernier Sprint : individus, interactions, processus, outils et Definition of Done |
| **Sorties** | *(grisée)* | Le Sprint Backlog : Sprint Goal, éléments sélectionnés et plan pour les livrer | Un plan d'action pour la prochaine journée de travail | Des décisions sur la suite du produit et un Product Backlog ajusté si nécessaire | Les changements les plus utiles, parfois ajoutés au prochain Sprint Backlog |

## Sprint

### sp-timebox · Un mois ou moins, durée fixe ; le suivant démarre dès la fin du précédent

**Explication** (Sprint) : Les Sprints sont des événements d'une durée fixe, d'un mois ou moins, pour créer une cohérence. Un nouveau Sprint commence immédiatement après la fin du précédent.

- Si placée en **Sprint Planning · Timebox** : Le Sprint Planning dure au plus 8 heures pour un Sprint d'un mois : c'est le Sprint lui-même qui dure un mois ou moins.

### sp-but · Atteindre le Sprint Goal en transformant les idées en valeur

**Explication** (Sprint, Engagement : Sprint Goal) : Le Sprint Goal est l'unique but du Sprint. Les Sprints sont au cœur de Scrum : c'est là que les idées sont transformées en valeur, avec une inspection et une adaptation de la progression vers le Product Goal au moins une fois par mois.

- Si placée en **Sprint Planning · But** : Le Sprint Planning crée le Sprint Goal, mais l'atteindre est le but de tout le Sprint.
- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat du Sprint ; atteindre le Sprint Goal est le but du Sprint lui-même.
- Si placée en **Sprint Planning · Sorties** : Le Sprint Goal est bien créé au Sprint Planning, mais cette carte décrit le but du Sprint : l'atteindre en transformant les idées en valeur.
- Si placée en **Daily Scrum · But** : Le Daily Scrum inspecte la progression vers le Sprint Goal ; l'atteindre est le but du Sprint tout entier.

## Sprint Planning

### pl-timebox · 8 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court

**Explication** (Sprint Planning) : Le Sprint Planning est limité à un maximum de huit heures pour un Sprint d'un mois. Pour un Sprint plus court, l'événement est généralement plus court.

- Si placée en **Sprint Review · Timebox** : La Sprint Review est limitée à 4 heures pour un Sprint d'un mois ; 8 heures, c'est le Sprint Planning.
- Si placée en **Sprint Retrospective · Timebox** : La Sprint Retrospective est limitée à 3 heures pour un Sprint d'un mois ; 8 heures, c'est le Sprint Planning.

### mx-equipe · Toute la Scrum Team (2 exemplaires : Sprint Planning · Personnes requises, Sprint Retrospective · Personnes requises)

**Explication** (Sprint Planning, Sprint Retrospective) : Toute la Scrum Team est requise à cet événement.

- Exemplaire **Sprint Planning · Personnes requises** : Le plan du Sprint Planning est créé par le travail collaboratif de toute la Scrum Team : le Product Owner, le Scrum Master et les Developers.
- Exemplaire **Sprint Retrospective · Personnes requises** : À la Sprint Retrospective, la Scrum Team inspecte le déroulement du Sprint et identifie les changements les plus utiles pour améliorer son efficacité.

- Si placée en **Daily Scrum · Personnes requises** : Le Daily Scrum est un événement pour les Developers ; le Product Owner et le Scrum Master n'y participent qu'en tant que Developers, s'ils travaillent activement sur des éléments du Sprint Backlog.
- Si placée en **Sprint Review · Personnes requises** : La Sprint Review réunit la Scrum Team, mais aussi les principales parties prenantes, à qui elle présente les résultats de son travail.

### pl-but · Lancer le Sprint : pourquoi il est important, ce qui peut être fait et comment

**Explication** (Sprint Planning) : Le Sprint Planning lance le Sprint en présentant le travail à effectuer. Il aborde trois thèmes : pourquoi ce Sprint est important (le Sprint Goal), ce qui peut être fait, et comment le travail choisi sera réalisé.

- Si placée en **Daily Scrum · But** : Le Daily Scrum adapte le plan au fil du Sprint ; les thèmes pourquoi, quoi et comment sont ceux du Sprint Planning.
- Si placée en **Sprint · But** : Le but du Sprint est d'atteindre le Sprint Goal ; c'est le Sprint Planning qui lance le Sprint en définissant pourquoi, quoi et comment.

### pl-entrees · Product Backlog, Product Goal, capacité, performances passées, Definition of Done

**Explication** (Sprint Planning) : Le Product Owner veille à ce que les participants soient prêts à discuter des éléments les plus importants du Product Backlog et de leur lien avec le Product Goal. Plus les Developers connaissent leurs performances passées, leur capacité à venir et leur Definition of Done, mieux ils peuvent prévoir ce qu'ils accompliront.

- Si placée en **Sprint Review · Entrées** : La Sprint Review discute de la progression vers le Product Goal, mais elle part du résultat du Sprint ; le Product Backlog, la capacité et la Definition of Done servent à préparer le Sprint, au Sprint Planning.
- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective inspecte la Definition of Done, mais pas le Product Backlog ni la capacité : cet ensemble sert à préparer le Sprint, au Sprint Planning.

### mx-sbl · Le Sprint Backlog : Sprint Goal, éléments sélectionnés et plan pour les livrer (2 exemplaires : Sprint Planning · Sorties, Daily Scrum · Entrées)

**Explication** (Sprint Planning, Daily Scrum, Sprint Backlog) : Le Sprint Backlog réunit le Sprint Goal, les éléments du Product Backlog sélectionnés et le plan pour les livrer.

- Exemplaire **Sprint Planning · Sorties** : Le Sprint Goal, les éléments sélectionnés et le plan pour les livrer forment le Sprint Backlog : c'est le résultat du Sprint Planning.
- Exemplaire **Daily Scrum · Entrées** : Le Sprint Backlog devrait être assez détaillé pour que les Developers inspectent leur progression au Daily Scrum : c'est ce qu'ils y examinent.

- Si placée en **Sprint Planning · Entrées** : Le Sprint Backlog n'existe pas avant le Sprint Planning : il en est le résultat.
- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum ajuste le Sprint Backlog si nécessaire, mais il ne le crée pas.

## Daily Scrum

### da-timebox · 15 minutes, chaque jour ouvré, à la même heure et au même lieu

**Explication** (Daily Scrum) : Le Daily Scrum est un événement de 15 minutes. Pour réduire la complexité, il se tient à la même heure et au même lieu, chaque jour ouvré du Sprint.

### da-people · Les Developers

**Explication** (Daily Scrum) : Le Daily Scrum est un événement de 15 minutes pour les Developers de la Scrum Team. Le Sprint Planning, la Sprint Review et la Sprint Retrospective impliquent toute la Scrum Team.

- Si placée en **Sprint Planning · Personnes requises** : Les Developers sont présents au Sprint Planning, mais c'est toute la Scrum Team qui y est requise : seul le Daily Scrum est réservé aux Developers.
- Si placée en **Sprint Review · Personnes requises** : La Sprint Review réunit la Scrum Team et les principales parties prenantes : seul le Daily Scrum est réservé aux Developers.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit toute la Scrum Team : seul le Daily Scrum est réservé aux Developers.

### da-but · Inspecter la progression vers le Sprint Goal et adapter le Sprint Backlog si nécessaire

**Explication** (Daily Scrum) : L'objectif du Daily Scrum est d'inspecter la progression vers le Sprint Goal et d'adapter le Sprint Backlog si nécessaire. Il améliore la communication, aide à identifier les obstacles et favorise la prise de décision rapide.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat du Sprint avec les parties prenantes ; la progression vers le Sprint Goal s'inspecte chaque jour, au Daily Scrum.
- Si placée en **Daily Scrum · Sorties** : Adapter le Sprint Backlog fait partie du but du Daily Scrum ; ce qui en sort concrètement, c'est le plan d'action pour la prochaine journée.
- Si placée en **Sprint · But** : Le Sprint vise à atteindre le Sprint Goal ; en inspecter la progression chaque jour, c'est le but du Daily Scrum.

### da-sorties · Un plan d'action pour la prochaine journée de travail

**Explication** (Daily Scrum) : Le Daily Scrum se concentre sur la progression vers le Sprint Goal et produit un plan d'action pour la prochaine journée de travail.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le plan de tout le Sprint ; le plan de la prochaine journée sort du Daily Scrum.
- Si placée en **Sprint Review · Sorties** : La Sprint Review ajuste le Product Backlog ; le plan de la prochaine journée sort du Daily Scrum.
- Si placée en **Daily Scrum · But** : Le but du Daily Scrum est d'inspecter la progression vers le Sprint Goal ; le plan d'action pour la journée en est la sortie.

## Sprint Review

### re-timebox · 4 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court

**Explication** (Sprint Review) : La Sprint Review est l'avant-dernier événement du Sprint ; elle est limitée à un maximum de quatre heures pour un Sprint d'un mois. Pour un Sprint plus court, l'événement est généralement plus court.

- Si placée en **Sprint Planning · Timebox** : Le Sprint Planning est limité à 8 heures pour un Sprint d'un mois ; 4 heures, c'est la Sprint Review.
- Si placée en **Sprint Retrospective · Timebox** : La Sprint Retrospective est limitée à 3 heures pour un Sprint d'un mois ; 4 heures, c'est la Sprint Review.

### re-people · La Scrum Team et les principales parties prenantes

**Explication** (Sprint Review) : À la Sprint Review, la Scrum Team présente les résultats de son travail aux principales parties prenantes ; ensemble, ils passent en revue ce qui a été accompli et ce qui a changé, et collaborent sur la suite.

- Si placée en **Sprint Planning · Personnes requises** : La Scrum Team peut inviter d'autres personnes au Sprint Planning pour des conseils, mais ce n'est pas requis ; les principales parties prenantes sont attendues à la Sprint Review.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit la Scrum Team, pour améliorer sa façon de travailler ; les principales parties prenantes sont attendues à la Sprint Review.

### re-but · Inspecter le résultat du Sprint et déterminer les adaptations futures

**Explication** (Sprint Review) : L'objectif de la Sprint Review est d'inspecter le résultat du Sprint et de déterminer les adaptations futures. C'est une session de travail, pas une simple présentation.

- Si placée en **Sprint Retrospective · But** : La Sprint Retrospective inspecte la façon de travailler de l'équipe ; le résultat du Sprint, le produit, s'inspecte à la Sprint Review.
- Si placée en **Daily Scrum · But** : Le Daily Scrum inspecte la progression vers le Sprint Goal pendant le Sprint ; le résultat du Sprint s'inspecte à la Sprint Review.

### re-entrees · Les Increments, les changements de l'environnement, la progression vers le Product Goal

**Explication** (Sprint Review, Increment) : À la Sprint Review, la Scrum Team et les parties prenantes passent en revue ce qui a été accompli durant le Sprint (la somme des Increments) et ce qui a changé dans leur environnement ; les progrès vers le Product Goal sont discutés.

- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective regarde la façon de travailler de l'équipe ; l'Increment et l'environnement s'examinent à la Sprint Review.
- Si placée en **Sprint Planning · Entrées** : Le Sprint Planning prépare le Sprint suivant ; l'inspection des Increments réalisés se fait à la Sprint Review.

### re-sorties · Des décisions sur la suite du produit et un Product Backlog ajusté si nécessaire

**Explication** (Sprint Review) : À partir de ce qui a été accompli et de ce qui a changé, les participants collaborent sur la marche à suivre et les décisions à prendre ; le Product Backlog peut être ajusté pour répondre à de nouvelles opportunités.

- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective décide des améliorations de la façon de travailler ; la suite à donner au produit se décide à la Sprint Review.
- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum adapte le Sprint Backlog ; ajuster le Product Backlog pour répondre aux nouvelles opportunités est une sortie de la Sprint Review.
- Si placée en **Sprint Review · But** : Le but de la Sprint Review est d'inspecter et de déterminer les adaptations ; le Product Backlog ajusté et les décisions en sont la sortie.
- Si placée en **Sprint Planning · Entrées** : Le Product Backlog ajusté alimente bien le prochain Sprint Planning, mais il sort de la Sprint Review.

## Sprint Retrospective

### rt-timebox · 3 heures maximum pour un Sprint d'un mois, généralement moins s'il est plus court

**Explication** (Sprint Retrospective) : La Sprint Retrospective conclut le Sprint. Elle est limitée à un maximum de trois heures pour un Sprint d'un mois. Pour un Sprint plus court, l'événement est généralement plus court.

- Si placée en **Sprint Review · Timebox** : La Sprint Review est limitée à 4 heures pour un Sprint d'un mois ; 3 heures, c'est la Sprint Retrospective.
- Si placée en **Sprint Planning · Timebox** : Le Sprint Planning est limité à 8 heures pour un Sprint d'un mois ; 3 heures, c'est la Sprint Retrospective.

### rt-but · Trouver des pistes pour améliorer la qualité et l'efficacité

**Explication** (Sprint Retrospective) : L'objectif de la Sprint Retrospective consiste à réfléchir à des pistes pour améliorer la qualité et l'efficacité.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le produit et décide de la suite ; améliorer la qualité et l'efficacité de l'équipe est le but de la Sprint Retrospective.
- Si placée en **Sprint Retrospective · Sorties** : Chercher des pistes d'amélioration, c'est le but ; ce qui en sort, ce sont les changements retenus.

### rt-entrees · Le dernier Sprint : individus, interactions, processus, outils et Definition of Done

**Explication** (Sprint Retrospective) : La Scrum Team inspecte le déroulement du dernier Sprint en ce qui concerne les individus, les interactions, les processus, les outils et sa Definition of Done. Elle discute de ce qui s'est bien passé, des problèmes rencontrés et de leur résolution.

- Si placée en **Sprint Review · Entrées** : La Sprint Review inspecte le produit et l'environnement ; les individus, interactions, processus et outils sont inspectés à la Sprint Retrospective.
- Si placée en **Sprint Planning · Entrées** : Le Sprint Planning s'appuie sur la Definition of Done, mais c'est à la Sprint Retrospective qu'on inspecte la façon dont le Sprint s'est déroulé.

### rt-sorties · Les changements les plus utiles, parfois ajoutés au prochain Sprint Backlog

**Explication** (Sprint Retrospective) : La Scrum Team identifie les changements les plus utiles pour améliorer son efficacité. Les améliorations ayant le plus d'impact sont abordées dès que possible ; elles peuvent même être ajoutées au Sprint Backlog du prochain Sprint.

- Si placée en **Sprint Review · Sorties** : La Sprint Review décide de la suite à donner au produit ; les changements pour améliorer l'efficacité de l'équipe sortent de la Sprint Retrospective.
- Si placée en **Sprint Planning · Entrées** : Ces améliorations peuvent alimenter le prochain Sprint Backlog, mais elles sont produites par la Sprint Retrospective : c'est leur case.
- Si placée en **Sprint Retrospective · But** : Le but est de chercher des pistes d'amélioration ; les changements retenus en sont le résultat.
- Si placée en **Sprint Planning · Sorties** : Ces changements peuvent rejoindre le prochain Sprint Backlog, mais ils sortent de la Sprint Retrospective ; le Sprint Planning produit le Sprint Backlog dans son ensemble.

## Pièges (18)

### pg-questions · Les trois questions : hier, aujourd'hui, obstacles

**Explication** (Daily Scrum, Changements entre les versions 2017 et 2020) : Le Scrum Guide 2020 a supprimé les trois questions du Daily Scrum. Les Developers choisissent la structure et les techniques qu'ils souhaitent, à condition que le Daily Scrum se concentre sur la progression vers le Sprint Goal et produise un plan pour la prochaine journée. Une équipe peut encore utiliser ces questions comme technique, mais ce n'est plus une règle de Scrum.

- Si placée en **Daily Scrum · But** : Ces trois questions figuraient dans les anciennes versions du guide ; la version 2020 les a supprimées. Le but du Daily Scrum est d'inspecter la progression vers le Sprint Goal.
- Si placée en **Daily Scrum · Entrées** : Les trois questions ne sont plus prescrites ; au Daily Scrum, les Developers inspectent le Sprint Backlog et la progression vers le Sprint Goal.

### pg-chef · Le manager des Developers

**Explication** (Scrum Team) : Les événements Scrum ne prévoient pas de manager. La Scrum Team est autogérée : elle décide en interne qui fait quoi, quand et comment, et il n'y a pas de hiérarchie en son sein.

- Si placée en **Daily Scrum · Personnes requises** : Le Daily Scrum est un événement pour les Developers ; aucun manager n'y est requis.
- Si placée en **Sprint Review · Personnes requises** : Un manager peut venir à la Sprint Review comme partie prenante, mais le guide ne prévoit aucun manager des Developers : la Scrum Team est autogérée.
- Si placée en **Sprint Planning · Personnes requises** : Le Sprint Planning réunit toute la Scrum Team ; le guide ne prévoit pas de manager des Developers.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit la Scrum Team ; le guide ne prévoit pas de manager des Developers.

### pg-assigner · Les tâches réparties entre les Developers par le Scrum Master

**Explication** (Sprint Planning, Scrum Team) : La Scrum Team décide en interne qui fait quoi, quand et comment. Au Sprint Planning, la façon de transformer les éléments du Product Backlog en Increment est laissée à la seule discrétion des Developers : personne d'autre ne leur dit comment faire.

- Si placée en **Sprint Planning · But** : Le Sprint Planning définit pourquoi, quoi et comment, mais personne n'assigne de tâches : les Developers s'organisent eux-mêmes.
- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le plan des Developers, pas une répartition des tâches décidée par le Scrum Master : la Scrum Team est autogérée.
- Si placée en **Daily Scrum · Sorties** : Le plan du jour appartient aux Developers ; personne ne leur assigne de tâches.

### pg-po-goal · Un Sprint Goal fixé par le Product Owner seul

**Explication** (Sprint Planning) : Au Sprint Planning, le Product Owner explique comment augmenter la valeur du produit, puis l'ensemble de la Scrum Team collabore à définir le Sprint Goal.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Goal est bien un résultat du Sprint Planning, mais il est défini par toute la Scrum Team, pas par le Product Owner seul.
- Si placée en **Sprint Planning · Entrées** : Le Sprint Goal n'est pas imposé par le Product Owner avant l'événement : toute la Scrum Team le définit pendant le Sprint Planning.
- Si placée en **Sprint Planning · But** : Le Sprint Planning définit bien le Sprint Goal, mais toute la Scrum Team y collabore, pas le Product Owner seul.

### pg-obligatoire · Au moins une amélioration ajoutée obligatoirement au prochain Sprint Backlog

**Explication** (Sprint Retrospective, Changements entre les versions 2017 et 2020) : Le guide 2017 imposait d'inclure au moins une amélioration dans le Sprint Backlog suivant. Le guide 2020 dit seulement que les améliorations ayant le plus d'impact peuvent même être ajoutées au Sprint Backlog du prochain Sprint.

- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective identifie les changements les plus utiles ; les ajouter au prochain Sprint Backlog est possible, pas obligatoire.
- Si placée en **Sprint Planning · Entrées** : Rien n'oblige à ajouter une amélioration au Sprint Backlog ; le guide 2020 le permet seulement.

### pg-valider · Faire valider l'Increment par les parties prenantes

**Explication** (Sprint Review, Increment, Engagement : Definition of Done) : Un élément du Product Backlog devient un Increment dès qu'il satisfait la Definition of Done ; un Increment peut même être livré avant la fin du Sprint. La Sprint Review n'est donc pas une étape de validation : c'est une session de travail où l'on inspecte le résultat et décide de la suite.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat et décide de la suite ; elle ne valide pas l'Increment : c'est la Definition of Done qui fait d'un travail un Increment.
- Si placée en **Sprint Review · Sorties** : La Sprint Review produit un Product Backlog ajusté et des décisions, pas une validation formelle de l'Increment.

### pg-dor · La Definition of Ready

**Explication** (Product Backlog, Engagement : Definition of Done) : Le guide parle d'éléments du Product Backlog « prêts » à être traités en Sprint Planning après le refinement, mais il ne définit aucune Definition of Ready. Le seul engagement de ce type est la Definition of Done.

- Si placée en **Sprint Planning · Entrées** : Les éléments « prêts » arrivent au Sprint Planning, mais Scrum ne définit pas de Definition of Ready ; l'entrée formelle de ce type est la Definition of Done.
- Si placée en **Sprint Review · Entrées** : Scrum ne définit pas de Definition of Ready ; ce qui conditionne la présentation à la Sprint Review, c'est la Definition of Done.

### pg-refinement · Les éléments validés lors de l'événement de refinement

**Explication** (Théorie Scrum, Product Backlog) : Scrum compte cinq événements : le Sprint et les quatre qu'il contient. Le refinement du Product Backlog n'en fait pas partie : c'est une activité continue, qui peut d'ailleurs se poursuivre pendant le Sprint Planning.

- Si placée en **Sprint Planning · But** : Pendant le Sprint Planning, la Scrum Team affine bien les éléments sélectionnés, mais le refinement reste une activité continue, pas un événement.
- Si placée en **Sprint Planning · Entrées** : Des éléments affinés arrivent bien au Sprint Planning, mais le refinement est une activité continue, pas un événement Scrum.

### pg-urgence · Changer le Sprint Goal pour une demande urgente

**Explication** (Sprint, Engagement : Sprint Goal) : Durant le Sprint, aucun changement n'est permis qui pourrait remettre en cause le Sprint Goal. Le périmètre peut être clarifié et renégocié avec le Product Owner ; si le Sprint Goal devient obsolète, seul le Product Owner peut annuler le Sprint.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum peut adapter le Sprint Backlog, mais sans remettre en cause le Sprint Goal.
- Si placée en **Sprint Review · Sorties** : La Sprint Review peut ajuster le Product Backlog pour de nouvelles opportunités, mais le Sprint Goal du Sprint en cours ne change pas.

### pg-qualite · Reporter les tests au Sprint suivant pour tenir le Sprint Goal

**Explication** (Sprint) : Durant le Sprint, les objectifs de qualité ne sont jamais revus à la baisse. Si le travail s'avère différent de ce qui était prévu, les Developers renégocient le périmètre avec le Product Owner.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum peut ajuster le Sprint Backlog, jamais la qualité : les objectifs de qualité ne sont jamais revus à la baisse.
- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective cherche à améliorer la qualité, pas à la baisser.

### pg-sm-anime · Le Scrum Master comme animateur attitré

**Explication** (Scrum Master, Daily Scrum) : Aucun événement n'impose que le Scrum Master l'anime. Il s'assure que tous les événements Scrum ont bien lieu et sont efficients, productifs et tenus dans leur timebox ; le Daily Scrum, par exemple, est un événement pour les Developers, qui en choisissent la structure et les techniques.

- Si placée en **Daily Scrum · Personnes requises** : Le Daily Scrum est un événement pour les Developers ; le Scrum Master s'assure qu'il a lieu, il n'est pas tenu de l'animer.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit la Scrum Team ; le Scrum Master s'assure qu'elle a lieu, mais le guide n'impose pas qu'il l'anime.
- Si placée en **Sprint Planning · Personnes requises** : Le Sprint Planning réunit toute la Scrum Team ; le Scrum Master en fait partie, mais aucun animateur attitré n'est prévu.
- Si placée en **Sprint Review · Personnes requises** : La Sprint Review réunit la Scrum Team et les principales parties prenantes ; le guide ne désigne pas d'animateur.

### pg-sprint0 · Un Sprint 0 de préparation, avant le premier Increment

**Explication** (Scrum Team, Sprint) : Toute la Scrum Team est responsable de la création d'un Increment qui ait de la valeur et qui soit utile, à chaque Sprint. Un « Sprint 0 » sans Increment n'existe pas dans Scrum : tout le travail nécessaire, y compris la préparation, se fait dans le cadre des Sprints.

- Si placée en **Sprint · But** : Le Sprint Goal est l'unique but du Sprint, et chaque Sprint doit créer un Increment utile : un Sprint de préparation sans Increment n'existe pas dans Scrum.
- Si placée en **Sprint Planning · But** : Le Sprint Planning lance un Sprint qui doit produire au moins un Increment utile ; il n'existe pas de Sprint de préparation sans Increment.
- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le Sprint Backlog d'un Sprint qui doit livrer un Increment utile ; un Sprint de préparation sans Increment n'existe pas.

### pg-daily-seul · Le seul moment où les Developers ajustent leur plan

**Explication** (Daily Scrum) : Le Daily Scrum n'est pas le seul moment où les Developers sont autorisés à ajuster leur plan. Ils se réunissent souvent tout au long de la journée pour en discuter plus en détail.

- Si placée en **Daily Scrum · But** : Le Daily Scrum inspecte bien la progression et adapte le Sprint Backlog, mais les Developers peuvent ajuster leur plan à tout moment de la journée.
- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum produit un plan pour la journée, mais ce n'est pas le seul moment où les Developers peuvent l'ajuster.

### pg-po-demo · Le Product Owner et les parties prenantes, sans les Developers

**Explication** (Sprint Review) : À la Sprint Review, c'est la Scrum Team qui présente les résultats de son travail aux principales parties prenantes, et tous collaborent sur la suite. Ce n'est pas une démonstration du Product Owner seul.

- Si placée en **Sprint Review · Personnes requises** : La Sprint Review réunit toute la Scrum Team, Developers compris, et les principales parties prenantes.
- Si placée en **Sprint Planning · Personnes requises** : Le Sprint Planning réunit toute la Scrum Team, Developers compris ; d'autres personnes peuvent seulement y être invitées pour des conseils.

### pg-po-accept · Les éléments acceptés par le Product Owner

**Explication** (Increment, Engagement : Definition of Done) : Le guide ne prévoit aucune acceptation par le Product Owner : un élément du Product Backlog est terminé et fait partie de l'Increment dès qu'il satisfait la Definition of Done.

- Si placée en **Sprint Review · Entrées** : La Sprint Review inspecte les Increments, c'est-à-dire le travail qui répond à la Definition of Done ; aucune acceptation par le Product Owner n'est prévue.
- Si placée en **Sprint Planning · Entrées** : Le Product Backlog entre au Sprint Planning ; la notion d'éléments « acceptés par le Product Owner » n'existe pas dans Scrum.
- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective inspecte la Definition of Done elle-même ; c'est elle, et non le Product Owner, qui dit quand un travail est terminé.

### pg-engagement · Un engagement à livrer tous les éléments sélectionnés

**Explication** (Sprint, Engagement : Sprint Goal) : L'engagement du Sprint Backlog est le Sprint Goal. Les éléments sélectionnés forment un plan qui peut évoluer : si le travail s'avère différent de ce qui était prévu, les Developers renégocient le périmètre avec le Product Owner, sans remettre en cause le Sprint Goal.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit un Sprint Backlog dont l'engagement est le Sprint Goal ; le périmètre des éléments sélectionnés peut être renégocié pendant le Sprint.
- Si placée en **Sprint · But** : Le but du Sprint est d'atteindre le Sprint Goal ; les éléments sélectionnés peuvent être renégociés avec le Product Owner.
- Si placée en **Sprint Planning · But** : Le Sprint Planning définit pourquoi, quoi et comment, mais le seul engagement est le Sprint Goal, pas la livraison de tous les éléments.

### pg-pp-planning · Les parties prenantes, pour choisir le travail du Sprint

**Explication** (Sprint Planning) : Au Sprint Planning, ce sont les Developers qui sélectionnent les éléments du Product Backlog, en discutant avec le Product Owner. La Scrum Team peut inviter d'autres personnes pour donner des conseils, mais elles ne choisissent pas le travail.

- Si placée en **Sprint Planning · Personnes requises** : Toute la Scrum Team est requise au Sprint Planning ; elle peut inviter d'autres personnes pour des conseils, mais elles ne choisissent pas le travail.
- Si placée en **Sprint Review · Personnes requises** : Les principales parties prenantes sont attendues à la Sprint Review, pas obligatoirement au Sprint Planning.
- Si placée en **Sprint Planning · Entrées** : Le Product Backlog et le Product Goal entrent au Sprint Planning, mais ce sont les Developers, avec le Product Owner, qui choisissent le travail du Sprint.

### pg-3sprints · Les Sprint Backlogs des trois prochains Sprints, établis dès ce Sprint Planning

**Explication** (Sprint Planning, Sprint Backlog) : Le Sprint Planning lance le Sprint en présentant le travail à effectuer durant ce Sprint. Il produit un seul Sprint Backlog, celui du Sprint en cours : son Sprint Goal, les éléments sélectionnés et le plan pour les livrer. Ce Sprint Backlog est mis à jour tout au long du Sprint selon ce qu'on en apprend.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le Sprint Backlog du Sprint qui commence, et un seul : chaque Sprint a son propre Sprint Goal, défini lors de son Sprint Planning.
- Si placée en **Sprint Planning · But** : Le Sprint Planning lance le Sprint en cours : pourquoi il est important, ce qui peut être fait et comment. Il n'établit pas le plan des Sprints suivants.
- Si placée en **Sprint Review · Sorties** : La Sprint Review ajuste le Product Backlog et décide de la suite, sans établir le Sprint Backlog des Sprints suivants.

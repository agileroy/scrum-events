# Paquet de cartes « Les événements Scrum »

Source : Scrum Guide 2020, traduction française officielle (novembre 2020). Fichier source : `site/data/cards.json` (ce document est généré, ne pas le modifier).

50 cartes différentes, soit 60 exemplaires dont 15 pièges.
Une carte qui a plusieurs bonnes cases existe en autant d'exemplaires ; chaque exemplaire est juste dans n'importe laquelle de ces cases.

## Grille complète

| | Sprint | Sprint Planning | Daily Scrum | Sprint Review | Sprint Retrospective |
|---|---|---|---|---|---|
| **Timebox** | Une durée fixe d'un mois ou moins | 8 heures maximum pour un Sprint d'un mois<br>Généralement plus court pour un Sprint plus court | 15 minutes, chaque jour ouvré du Sprint | Généralement plus court pour un Sprint plus court<br>4 heures maximum pour un Sprint d'un mois | Généralement plus court pour un Sprint plus court<br>3 heures maximum pour un Sprint d'un mois |
| **Personnes requises** | *(grisée)* | Toute la Scrum Team | Les Developers | Toute la Scrum Team<br>Les principales parties prenantes | Toute la Scrum Team |
| **But** | Transformer les idées en valeur<br>Rendre le travail prévisible, mois après mois<br>Le Sprint Goal | Lancer le Sprint en définissant le travail<br>Traiter trois thèmes : pourquoi, quoi, comment | Inspecter la progression vers le Sprint Goal<br>Repérer les obstacles et décider rapidement | Inspecter le résultat du Sprint et adapter la suite | Améliorer la qualité et l'efficacité |
| **Entrées** | *(grisée)* | Les éléments les plus importants du Product Backlog<br>Le Product Goal<br>Performances passées et capacité à venir des Developers<br>La Definition of Done | Le Sprint Goal<br>Le Sprint Backlog<br>Le plan pour livrer les éléments sélectionnés | Le Product Goal<br>Les Increments réalisés durant le Sprint<br>Ce qui a changé dans l'environnement<br>La progression vers le Product Goal | La Definition of Done<br>Individus, interactions, processus et outils du dernier Sprint<br>Ce qui a bien ou mal fonctionné pendant le Sprint |
| **Sorties** | *(grisée)* | Le Sprint Goal<br>Le Sprint Backlog<br>Le plan pour livrer les éléments sélectionnés | Un plan pour la prochaine journée de travail<br>Un Sprint Backlog ajusté si nécessaire | Un Product Backlog ajusté aux nouvelles opportunités<br>Des décisions sur la suite à donner au produit | Les changements retenus pour gagner en efficacité<br>Des améliorations, parfois dans le prochain Sprint Backlog |

## Sprint

### sp-duree · Une durée fixe d'un mois ou moins

**Explication** (Sprint) : Les Sprints sont des événements d'une durée fixe, d'un mois ou moins, pour créer une cohérence. Un nouveau Sprint commence immédiatement après la fin du précédent.

- Si placée en **Sprint Planning · Timebox** : Le Sprint Planning dure au plus 8 heures pour un Sprint d'un mois : c'est le Sprint lui-même qui dure un mois ou moins.
- Si placée en **Sprint Review · Timebox** : La Sprint Review dure au plus 4 heures pour un Sprint d'un mois : c'est le Sprint lui-même qui dure un mois ou moins.

### sp-valeur · Transformer les idées en valeur

**Explication** (Sprint) : Les Sprints sont au cœur de Scrum : c'est là que les idées sont transformées en valeur. Tout le travail nécessaire pour atteindre le Product Goal se fait dans le cadre des Sprints.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat du Sprint ; c'est pendant le Sprint, l'événement conteneur, que les idées sont transformées en valeur.
- Si placée en **Sprint Planning · But** : Le Sprint Planning lance le Sprint en définissant le travail ; c'est le Sprint dans son ensemble qui transforme les idées en valeur.

### sp-predictible · Rendre le travail prévisible, mois après mois

**Explication** (Sprint) : Les Sprints permettent la prédictibilité en assurant l'inspection et l'adaptation de la progression vers le Product Goal, au moins une fois par mois calendaire. Des Sprints plus courts raccourcissent le cycle d'apprentissage et limitent les risques.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat d'un Sprint ; c'est la cadence du Sprint lui-même, d'un mois au plus, que le guide associe à la prédictibilité.
- Si placée en **Sprint · Timebox** : La durée d'un mois ou moins est bien la timebox du Sprint ; mais la prédictibilité qu'elle permet est le but du Sprint, pas sa durée.

## Sprint Planning

### pl-8h · 8 heures maximum pour un Sprint d'un mois

**Explication** (Sprint Planning) : Le Sprint Planning est limité à un maximum de huit heures pour un Sprint d'un mois. Pour les Sprints plus courts, l'événement est généralement plus court.

- Si placée en **Sprint Review · Timebox** : La Sprint Review est limitée à 4 heures pour un Sprint d'un mois ; 8 heures, c'est le Sprint Planning.
- Si placée en **Sprint Retrospective · Timebox** : La Sprint Retrospective est limitée à 3 heures pour un Sprint d'un mois ; 8 heures, c'est le Sprint Planning.

### mx-court · Généralement plus court pour un Sprint plus court (3 exemplaires : Sprint Planning · Timebox, Sprint Review · Timebox, Sprint Retrospective · Timebox)

**Explication** (Sprint Planning, Sprint Review, Sprint Retrospective) : Pour le Sprint Planning, la Sprint Review et la Sprint Retrospective, le guide donne une durée maximale pour un Sprint d'un mois et précise que l'événement est généralement plus court pour un Sprint plus court. Cette carte existe en trois exemplaires, un par événement.

- Si placée en **Daily Scrum · Timebox** : Le guide fixe le Daily Scrum à 15 minutes, sans le réduire pour un Sprint plus court.
- Si placée en **Sprint · Timebox** : Le Sprint a une durée fixe d'un mois ou moins ; cette mention concerne les événements qu'il contient : Sprint Planning, Sprint Review et Sprint Retrospective.

### mx-equipe · Toute la Scrum Team (3 exemplaires : Sprint Planning · Personnes requises, Sprint Review · Personnes requises, Sprint Retrospective · Personnes requises)

**Explication** (Sprint Planning, Sprint Review, Sprint Retrospective) : Le plan du Sprint Planning est créé par le travail collaboratif de toute la Scrum Team ; à la Sprint Review, la Scrum Team présente les résultats de son travail ; à la Sprint Retrospective, la Scrum Team inspecte le déroulement du Sprint. Cette carte existe en trois exemplaires, un par événement.

- Si placée en **Daily Scrum · Personnes requises** : Le Daily Scrum est un événement pour les Developers de la Scrum Team, pas pour toute la Scrum Team.

### pl-lancer · Lancer le Sprint en définissant le travail

**Explication** (Sprint Planning) : Le Sprint Planning lance le Sprint en présentant le travail à effectuer durant le Sprint. Le plan qui en résulte est créé par le travail collaboratif de toute la Scrum Team.

- Si placée en **Daily Scrum · But** : Le Daily Scrum adapte le plan au fil du Sprint ; c'est le Sprint Planning qui lance le Sprint et définit le travail.
- Si placée en **Sprint · But** : Le Sprint transforme les idées en valeur ; c'est le Sprint Planning, son premier événement, qui le lance en définissant le travail.

### pl-themes · Traiter trois thèmes : pourquoi, quoi, comment

**Explication** (Sprint Planning) : Le Sprint Planning aborde trois thèmes : pourquoi ce Sprint est important (le Sprint Goal), ce qui peut être fait durant ce Sprint, et comment le travail choisi sera réalisé.

- Si placée en **Daily Scrum · But** : Les trois questions pourquoi, quoi et comment sont les thèmes du Sprint Planning. Le guide 2020 a d'ailleurs supprimé les trois questions du Daily Scrum.

### pl-pbi · Les éléments les plus importants du Product Backlog

**Explication** (Sprint Planning) : Le Product Owner veille à ce que les participants soient prêts à discuter des éléments les plus importants du Product Backlog et de leur lien avec le Product Goal. Les Developers y sélectionnent ensuite les éléments à inclure dans le Sprint.

- Si placée en **Sprint Review · Sorties** : La Sprint Review peut ajuster le Product Backlog ; ses éléments les plus importants sont le point de départ du Sprint Planning.
- Si placée en **Daily Scrum · Entrées** : Au Daily Scrum, les Developers travaillent sur le Sprint Backlog ; les éléments du Product Backlog sont discutés au Sprint Planning.

### pl-pgoal · Le Product Goal (2 exemplaires : Sprint Planning · Entrées, Sprint Review · Entrées)

**Explication** (Sprint Planning, Sprint Review) : Au Sprint Planning, la Scrum Team discute de la façon dont les éléments les plus importants du Product Backlog servent le Product Goal ; à la Sprint Review, les progrès vers le Product Goal sont discutés. Cette carte existe en deux exemplaires.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le Sprint Goal ; le Product Goal, objectif à long terme, existe avant lui et se trouve dans le Product Backlog.
- Si placée en **Sprint Review · Sorties** : La Sprint Review discute de la progression vers le Product Goal, mais elle ne le produit pas : le Product Goal est l'objectif à long terme, formulé par le Product Owner.
- Si placée en **Sprint · But** : Le Sprint sert le Product Goal, objectif à long terme, mais son but propre est le Sprint Goal.

### pl-capacite · Performances passées et capacité à venir des Developers

**Explication** (Sprint Planning) : Plus les Developers connaissent leurs performances passées, leur capacité à venir et leur Definition of Done, mieux ils sont à même de prévoir ce qu'ils peuvent accomplir durant le Sprint.

- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective inspecte le déroulement du Sprint ; le guide cite les performances passées et la capacité à venir pour aider la sélection du travail au Sprint Planning.

### mx-dod · La Definition of Done (2 exemplaires : Sprint Planning · Entrées, Sprint Retrospective · Entrées)

**Explication** (Sprint Planning, Sprint Retrospective) : Au Sprint Planning, les Developers s'appuient sur leur Definition of Done pour prévoir ce qu'ils peuvent accomplir et planifier un Increment qui y réponde. À la Sprint Retrospective, la Scrum Team inspecte notamment sa Definition of Done. Cette carte existe en deux exemplaires.

- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective inspecte la Definition of Done ; les changements qui en découlent font partie des améliorations identifiées. La Definition of Done existe avant elle : c'est ce qu'on inspecte.
- Si placée en **Sprint Review · Entrées** : La Definition of Done décide de ce qui peut être présenté, mais la Sprint Review inspecte l'Increment ; la Definition of Done sert au Sprint Planning et est inspectée en Sprint Retrospective.

### mx-sgoal · Le Sprint Goal (3 exemplaires : Sprint Planning · Sorties, Daily Scrum · Entrées, Sprint · But)

**Explication** (Sprint Planning, Daily Scrum, Engagement : Sprint Goal) : Le Sprint Goal est l'unique but du Sprint. Il est créé pendant le Sprint Planning (il doit être finalisé avant la fin de l'événement) puis ajouté au Sprint Backlog ; au Daily Scrum, les Developers inspectent la progression vers ce Sprint Goal. Cette carte existe en trois exemplaires.

- Si placée en **Sprint Planning · Entrées** : Le Sprint Goal n'existe pas avant le Sprint Planning : toute la Scrum Team le définit pendant l'événement.
- Si placée en **Sprint Review · Entrées** : Le guide ne cite pas le Sprint Goal parmi les éléments de la Sprint Review : elle inspecte le résultat du Sprint et la progression vers le Product Goal. Le Sprint Goal est créé au Sprint Planning et suivi au Daily Scrum.

### mx-sbl · Le Sprint Backlog (2 exemplaires : Sprint Planning · Sorties, Daily Scrum · Entrées)

**Explication** (Sprint Planning, Daily Scrum, Sprint Backlog) : Le Sprint Backlog réunit le Sprint Goal, les éléments du Product Backlog sélectionnés et le plan pour les livrer : c'est le résultat du Sprint Planning. Il doit être assez détaillé pour que les Developers inspectent leur progression au Daily Scrum. Cette carte existe en deux exemplaires.

- Si placée en **Sprint Planning · Entrées** : Le Sprint Backlog n'existe pas avant le Sprint Planning : il en est le résultat.
- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum adapte le Sprint Backlog si nécessaire, mais il le reçoit du Sprint Planning : c'est ce que les Developers inspectent.

### pl-plan · Le plan pour livrer les éléments sélectionnés (2 exemplaires : Sprint Planning · Sorties, Daily Scrum · Entrées)

**Explication** (Sprint Planning, Sprint Backlog) : Pour chaque élément sélectionné, les Developers planifient au Sprint Planning le travail nécessaire pour créer un Increment qui réponde à la Definition of Done. Ce plan fait partie du Sprint Backlog, que les Developers inspectent et adaptent au Daily Scrum. Cette carte existe en deux exemplaires.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum produit un plan pour la prochaine journée ; le plan pour livrer les éléments du Sprint naît au Sprint Planning.

## Daily Scrum

### da-15min · 15 minutes, chaque jour ouvré du Sprint

**Explication** (Daily Scrum) : Le Daily Scrum est un événement de 15 minutes. Pour réduire la complexité, il se tient à la même heure et au même lieu, chaque jour ouvré du Sprint.

### da-devs · Les Developers

**Explication** (Daily Scrum) : Le Daily Scrum est un événement de 15 minutes pour les Developers de la Scrum Team. Le Sprint Planning, la Sprint Review et la Sprint Retrospective impliquent toute la Scrum Team.

- Si placée en **Sprint Planning · Personnes requises** : Les Developers sont présents au Sprint Planning, mais c'est toute la Scrum Team qui y est requise : seul le Daily Scrum est réservé aux Developers.
- Si placée en **Sprint Review · Personnes requises** : La Sprint Review réunit toute la Scrum Team et les principales parties prenantes : seul le Daily Scrum est réservé aux Developers.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit toute la Scrum Team : seul le Daily Scrum est réservé aux Developers.

### da-inspecter · Inspecter la progression vers le Sprint Goal

**Explication** (Daily Scrum) : L'objectif du Daily Scrum est d'inspecter la progression vers le Sprint Goal et d'adapter le Sprint Backlog si nécessaire, en ajustant le travail planifié.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat du Sprint avec les parties prenantes ; la progression vers le Sprint Goal s'inspecte chaque jour, au Daily Scrum.

### da-obstacles · Repérer les obstacles et décider rapidement

**Explication** (Daily Scrum) : Les Daily Scrums améliorent la communication, aident à identifier les obstacles et favorisent la prise de décision rapide ; ils éliminent ainsi le besoin d'autres réunions.

- Si placée en **Sprint Retrospective · But** : La Sprint Retrospective cherche à améliorer la qualité et l'efficacité ; identifier les obstacles et décider vite au quotidien, c'est le Daily Scrum.
- Si placée en **Sprint Review · But** : La Sprint Review décide de la suite du produit ; repérer les obstacles et décider vite au quotidien, c'est le Daily Scrum.

### da-plan · Un plan pour la prochaine journée de travail

**Explication** (Daily Scrum) : Les Developers choisissent la structure et les techniques de leur Daily Scrum, à condition qu'il se concentre sur la progression vers le Sprint Goal et produise un plan d'action pour la prochaine journée de travail.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le plan pour tout le Sprint ; le plan d'action pour la prochaine journée sort du Daily Scrum.
- Si placée en **Daily Scrum · But** : Le Daily Scrum doit produire ce plan : c'est sa sortie ; son but est d'inspecter la progression vers le Sprint Goal.

### da-ajuste · Un Sprint Backlog ajusté si nécessaire

**Explication** (Daily Scrum) : Le Daily Scrum inspecte la progression vers le Sprint Goal et adapte le Sprint Backlog si nécessaire, en ajustant le travail planifié.

- Si placée en **Sprint Review · Sorties** : La Sprint Review peut ajuster le Product Backlog ; c'est au Daily Scrum que les Developers ajustent le Sprint Backlog.
- Si placée en **Sprint Retrospective · Sorties** : Les améliorations de la Sprint Retrospective peuvent être ajoutées au Sprint Backlog du prochain Sprint ; ajuster le Sprint Backlog en cours, c'est le Daily Scrum.
- Si placée en **Daily Scrum · But** : Adapter le Sprint Backlog fait partie de l'objectif du Daily Scrum ; le Sprint Backlog ajusté en est le résultat concret.

## Sprint Review

### re-4h · 4 heures maximum pour un Sprint d'un mois

**Explication** (Sprint Review) : La Sprint Review est l'avant-dernier événement du Sprint ; elle est limitée à un maximum de quatre heures pour un Sprint d'un mois, et généralement plus courte pour un Sprint plus court.

- Si placée en **Sprint Planning · Timebox** : Le Sprint Planning est limité à 8 heures pour un Sprint d'un mois ; 4 heures, c'est la Sprint Review.
- Si placée en **Sprint Retrospective · Timebox** : La Sprint Retrospective est limitée à 3 heures pour un Sprint d'un mois ; 4 heures, c'est la Sprint Review.

### re-pp · Les principales parties prenantes

**Explication** (Sprint Review) : À la Sprint Review, la Scrum Team présente les résultats de son travail aux principales parties prenantes ; ensemble, ils passent en revue ce qui a été accompli et ce qui a changé, et collaborent sur la suite.

- Si placée en **Sprint Planning · Personnes requises** : La Scrum Team peut inviter d'autres personnes au Sprint Planning pour des conseils, mais ce n'est pas requis ; les principales parties prenantes sont attendues à la Sprint Review.
- Si placée en **Sprint Retrospective · Personnes requises** : La Sprint Retrospective réunit la Scrum Team pour améliorer sa façon de travailler ; les parties prenantes sont attendues à la Sprint Review.

### re-inspecter · Inspecter le résultat du Sprint et adapter la suite

**Explication** (Sprint Review) : L'objectif de la Sprint Review est d'inspecter le résultat du Sprint et de déterminer les adaptations futures. C'est une session de travail, pas une simple présentation.

- Si placée en **Sprint Retrospective · But** : La Sprint Retrospective inspecte la façon de travailler (individus, interactions, processus, outils) ; le résultat du Sprint, le produit, s'inspecte à la Sprint Review.
- Si placée en **Daily Scrum · But** : Le Daily Scrum inspecte la progression vers le Sprint Goal pendant le Sprint ; le résultat du Sprint s'inspecte à la Sprint Review.

### re-increment · Les Increments réalisés durant le Sprint

**Explication** (Sprint Review, Increment, Engagement : Definition of Done) : Plusieurs Increments peuvent être créés durant un Sprint ; leur somme est présentée à la Sprint Review. Un travail qui ne répond pas à la Definition of Done ne peut pas y être présenté.

- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective inspecte la façon dont le Sprint s'est déroulé ; l'Increment, lui, est inspecté à la Sprint Review.

### re-env · Ce qui a changé dans l'environnement

**Explication** (Sprint Review) : Pendant la Sprint Review, la Scrum Team et les parties prenantes passent en revue ce qui a été accompli durant le Sprint et ce qui a changé dans leur environnement, pour décider de la suite.

- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective regarde l'intérieur de l'équipe (individus, interactions, processus, outils) ; les changements de l'environnement sont examinés à la Sprint Review.

### re-progres · La progression vers le Product Goal

**Explication** (Sprint Review) : À la Sprint Review, la Scrum Team présente les résultats de son travail aux principales parties prenantes et les progrès vers le Product Goal sont discutés.

- Si placée en **Daily Scrum · Entrées** : Le Daily Scrum inspecte la progression vers le Sprint Goal ; la progression vers le Product Goal se discute à la Sprint Review.

### re-pbl · Un Product Backlog ajusté aux nouvelles opportunités

**Explication** (Sprint Review) : À la Sprint Review, le Product Backlog peut être ajusté pour répondre à de nouvelles opportunités.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum ajuste le Sprint Backlog ; c'est à la Sprint Review que le Product Backlog peut être ajusté avec les parties prenantes.
- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit le Sprint Backlog ; un Product Backlog ajusté aux nouvelles opportunités est un résultat de la Sprint Review.
- Si placée en **Sprint Planning · Entrées** : Il alimentera le prochain Sprint Planning, mais c'est la Sprint Review qui l'ajuste ; l'entrée du Sprint Planning, ce sont les éléments les plus importants du Product Backlog.

### re-decisions · Des décisions sur la suite à donner au produit

**Explication** (Sprint Review) : À partir de ce qui a été accompli et de ce qui a changé, les participants à la Sprint Review collaborent sur la marche à suivre et sur les décisions à prendre.

- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective décide des améliorations de la façon de travailler ; la suite à donner au produit se décide à la Sprint Review.
- Si placée en **Sprint Review · But** : Le but de la Sprint Review est d'inspecter le résultat et de déterminer les adaptations ; les décisions prises en sont la sortie.

## Sprint Retrospective

### rt-3h · 3 heures maximum pour un Sprint d'un mois

**Explication** (Sprint Retrospective) : La Sprint Retrospective conclut le Sprint. Elle est limitée à un maximum de trois heures pour un Sprint d'un mois, et généralement plus courte pour un Sprint plus court.

- Si placée en **Sprint Review · Timebox** : La Sprint Review est limitée à 4 heures pour un Sprint d'un mois ; 3 heures, c'est la Sprint Retrospective.

### rt-ameliorer · Améliorer la qualité et l'efficacité

**Explication** (Sprint Retrospective) : L'objectif de la Sprint Retrospective consiste à réfléchir à des pistes pour améliorer la qualité et l'efficacité.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le produit et décide de la suite ; améliorer la qualité et l'efficacité de l'équipe est le but de la Sprint Retrospective.
- Si placée en **Sprint Retrospective · Sorties** : Chercher des pistes d'amélioration, c'est le but de la Sprint Retrospective ; ce qui en sort, ce sont les changements retenus.

### rt-individus · Individus, interactions, processus et outils du dernier Sprint

**Explication** (Sprint Retrospective) : La Scrum Team inspecte le déroulement du dernier Sprint en ce qui concerne les individus, les interactions, les processus, les outils et sa Definition of Done.

- Si placée en **Sprint Review · Entrées** : La Sprint Review inspecte le produit et l'environnement ; les individus, interactions, processus et outils sont inspectés à la Sprint Retrospective.

### rt-bilan · Ce qui a bien ou mal fonctionné pendant le Sprint

**Explication** (Sprint Retrospective) : La Scrum Team discute de ce qui s'est bien passé durant le Sprint, des problèmes rencontrés et de la manière dont ces problèmes ont été (ou n'ont pas été) résolus.

- Si placée en **Daily Scrum · Entrées** : Le Daily Scrum regarde la progression vers le Sprint Goal pour la journée à venir ; le bilan de tout le Sprint se fait à la Sprint Retrospective.
- Si placée en **Sprint Review · Entrées** : La Sprint Review passe en revue ce qui a été accompli dans le produit ; la façon dont le Sprint s'est passé pour l'équipe est le sujet de la Sprint Retrospective.

### rt-changements · Les changements retenus pour gagner en efficacité

**Explication** (Sprint Retrospective) : La Scrum Team identifie les changements les plus utiles pour améliorer son efficacité. Les améliorations ayant le plus d'impact sont abordées dès que possible.

- Si placée en **Sprint Review · Sorties** : La Sprint Review décide de la suite à donner au produit ; les changements pour améliorer l'efficacité de l'équipe sortent de la Sprint Retrospective.
- Si placée en **Sprint Retrospective · But** : Le but est de chercher des pistes d'amélioration ; les changements retenus en sont le résultat.

### rt-backlog · Des améliorations, parfois dans le prochain Sprint Backlog

**Explication** (Sprint Retrospective) : Les améliorations ayant le plus d'impact sont abordées dès que possible ; elles peuvent même être ajoutées au Sprint Backlog du prochain Sprint. Le guide 2020 ne l'impose plus.

- Si placée en **Sprint Planning · Entrées** : Ces améliorations peuvent finir dans le prochain Sprint Backlog, mais c'est la Sprint Retrospective qui les produit.
- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum adapte le plan du Sprint en cours ; les améliorations de la façon de travailler sortent de la Sprint Retrospective.

## Pièges (15)

### pg-questions · Les trois questions : hier, aujourd'hui, obstacles

**Explication** (Daily Scrum, Changements entre les versions 2017 et 2020) : Le Scrum Guide 2020 a supprimé les trois questions du Daily Scrum. Les Developers choisissent la structure et les techniques qu'ils souhaitent, à condition que le Daily Scrum se concentre sur la progression vers le Sprint Goal et produise un plan pour la prochaine journée. Une équipe peut encore utiliser ces questions comme technique, mais ce n'est plus une règle de Scrum.

- Si placée en **Daily Scrum · But** : Ces trois questions figuraient dans les anciennes versions du guide ; la version 2020 les a supprimées. Le but du Daily Scrum est d'inspecter la progression vers le Sprint Goal.

### pg-manager · Rendre compte de l'avancement au manager

**Explication** (Daily Scrum) : Aucun événement Scrum n'est un point d'avancement pour un manager. Le Daily Scrum est un événement des Developers, qui inspectent eux-mêmes leur progression vers le Sprint Goal et adaptent leur plan.

- Si placée en **Daily Scrum · But** : Le Daily Scrum n'est pas un compte rendu à un manager : les Developers y inspectent leur progression vers le Sprint Goal et adaptent leur plan.
- Si placée en **Sprint Review · But** : La Sprint Review est une session de travail avec les parties prenantes sur le produit, pas un point d'avancement pour un manager.

### pg-chef · Le manager des Developers

**Explication** (Scrum Team) : Les événements Scrum ne prévoient pas de manager. La Scrum Team est autogérée : elle décide en interne qui fait quoi, quand et comment, et il n'y a pas de hiérarchie en son sein.

- Si placée en **Daily Scrum · Personnes requises** : Le Daily Scrum est un événement pour les Developers ; aucun manager n'y est requis.
- Si placée en **Sprint Review · Personnes requises** : Un manager peut venir à la Sprint Review comme partie prenante, mais le guide ne prévoit aucun manager des Developers : la Scrum Team est autogérée.
- Si placée en **Sprint Planning · Personnes requises** : Le Sprint Planning réunit toute la Scrum Team ; le guide ne prévoit pas de manager des Developers.

### pg-assigner · Le Scrum Master ou le Product Owner assigne les tâches aux Developers

**Explication** (Sprint Planning, Scrum Team) : La Scrum Team décide en interne qui fait quoi, quand et comment. Au Sprint Planning, la façon de transformer les éléments du Product Backlog en Increment est laissée à la seule discrétion des Developers : personne d'autre ne leur dit comment faire.

- Si placée en **Sprint Planning · But** : Le Sprint Planning définit pourquoi, quoi et comment, mais personne n'assigne de tâches : les Developers s'organisent eux-mêmes.
- Si placée en **Sprint Planning · Sorties** : Le Sprint Planning produit un plan des Developers, pas une répartition imposée des tâches : la Scrum Team est autogérée.
- Si placée en **Daily Scrum · Sorties** : Le plan du jour appartient aux Developers ; personne ne leur assigne de tâches.

### pg-po-goal · Un Sprint Goal fixé par le Product Owner seul

**Explication** (Sprint Planning) : Au Sprint Planning, le Product Owner explique comment augmenter la valeur du produit, puis l'ensemble de la Scrum Team collabore à définir le Sprint Goal.

- Si placée en **Sprint Planning · Sorties** : Le Sprint Goal est bien un résultat du Sprint Planning, mais il est défini par toute la Scrum Team, pas par le Product Owner seul.
- Si placée en **Sprint Planning · Entrées** : Le Sprint Goal n'est pas imposé par le Product Owner avant l'événement : toute la Scrum Team le définit pendant le Sprint Planning.

### pg-coupables · Chercher les coupables des problèmes du Sprint

**Explication** (Sprint Retrospective, Valeurs Scrum) : La Sprint Retrospective cherche des pistes pour améliorer la qualité et l'efficacité. Chercher des coupables va à l'encontre du respect et de l'ouverture, valeurs de Scrum : la Scrum Team identifie les changements les plus utiles.

- Si placée en **Sprint Retrospective · But** : La Sprint Retrospective cherche des améliorations, pas des coupables : les membres de la Scrum Team se respectent mutuellement.
- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective produit des améliorations, pas une liste de coupables.

### pg-seul-plan · Le seul moment pour ajuster le plan du Sprint

**Explication** (Daily Scrum) : Le Daily Scrum n'est pas le seul moment où les Developers sont autorisés à ajuster leur plan : ils se réunissent souvent tout au long de la journée pour en discuter plus en détail.

- Si placée en **Daily Scrum · But** : Le Daily Scrum adapte bien le plan, mais ce n'est pas le seul moment : les Developers peuvent le faire tout au long de la journée.

### pg-seul-livrer · Le seul moment où l'on peut livrer un Increment

**Explication** (Increment) : Un Increment peut être livré aux parties prenantes avant la fin du Sprint. La Sprint Review ne doit jamais être considérée comme le seul moment pour apporter de la valeur.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat du Sprint, mais elle n'est jamais le seul moment pour livrer : un Increment peut être livré avant la fin du Sprint.
- Si placée en **Sprint Review · Sorties** : La Sprint Review n'est pas une porte de livraison : un Increment peut être livré aux parties prenantes avant la fin du Sprint.

### pg-qualite · Baisser la qualité pour tenir le Sprint Goal

**Explication** (Sprint) : Durant le Sprint, les objectifs de qualité ne sont jamais revus à la baisse. Si le travail s'avère différent de ce qui était prévu, les Developers renégocient le périmètre avec le Product Owner.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum peut ajuster le Sprint Backlog, jamais la qualité : les objectifs de qualité ne sont jamais revus à la baisse.
- Si placée en **Sprint Retrospective · Sorties** : La Sprint Retrospective cherche à améliorer la qualité, pas à la baisser.

### pg-estimer · Estimer tous les éléments du Product Backlog

**Explication** (Sprint Planning, Product Backlog) : Au Sprint Planning, les Developers sélectionnent les éléments à inclure dans le Sprint et planifient leur réalisation. Le dimensionnement des éléments relève du refinement, une activité continue ; aucun événement n'a pour but d'estimer tout le Product Backlog.

- Si placée en **Sprint Planning · But** : Le Sprint Planning porte sur le travail du Sprint, pas sur tout le Product Backlog ; le dimensionnement se fait au fil du refinement, activité continue.
- Si placée en **Sprint Review · Sorties** : La Sprint Review peut ajuster le Product Backlog, mais elle n'a pas pour résultat d'estimer tous ses éléments.

### pg-velocite · Comparer sa vélocité à celle des autres équipes

**Explication** (Sprint Retrospective) : Le Scrum Guide ne parle ni de vélocité ni de comparaison entre équipes. La Sprint Retrospective inspecte la façon de travailler de la Scrum Team pour améliorer sa qualité et son efficacité.

- Si placée en **Sprint Retrospective · Entrées** : La Sprint Retrospective inspecte les individus, interactions, processus et outils de l'équipe ; le guide ne prévoit aucune comparaison avec d'autres équipes.
- Si placée en **Sprint Review · Entrées** : La Sprint Review inspecte l'Increment et la progression vers le Product Goal ; le guide ne prévoit aucune comparaison de vélocité entre équipes.

### pg-urgence · Changer le Sprint Goal pour une demande urgente

**Explication** (Sprint, Engagement : Sprint Goal) : Durant le Sprint, aucun changement n'est permis qui pourrait remettre en cause le Sprint Goal. Le périmètre peut être clarifié et renégocié avec le Product Owner ; si le Sprint Goal devient obsolète, seul le Product Owner peut annuler le Sprint.

- Si placée en **Daily Scrum · Sorties** : Le Daily Scrum peut adapter le Sprint Backlog, mais sans remettre en cause le Sprint Goal.
- Si placée en **Sprint Review · Sorties** : La Sprint Review peut ajuster le Product Backlog pour de nouvelles opportunités, mais le Sprint Goal du Sprint en cours ne change pas.

### pg-valider · Faire valider l'Increment par les parties prenantes

**Explication** (Sprint Review, Engagement : Definition of Done) : Un élément du Product Backlog devient un Increment dès qu'il satisfait la Definition of Done. La Sprint Review n'est pas une recette : c'est une session de travail où l'on inspecte le résultat et décide de la suite.

- Si placée en **Sprint Review · But** : La Sprint Review inspecte le résultat et décide de la suite ; elle ne valide pas l'Increment : c'est la Definition of Done qui fait d'un travail un Increment.
- Si placée en **Sprint Review · Sorties** : La Sprint Review produit un Product Backlog ajusté et des décisions, pas une validation formelle de l'Increment.

### pg-dor · La Definition of Ready

**Explication** (Product Backlog, Engagement : Definition of Done) : Le guide parle d'éléments du Product Backlog « prêts » à être traités en Sprint Planning après le refinement, mais il ne définit aucune Definition of Ready. Le seul engagement de ce type est la Definition of Done.

- Si placée en **Sprint Planning · Entrées** : Les éléments « prêts » arrivent au Sprint Planning, mais Scrum ne définit pas de Definition of Ready ; l'entrée formelle de ce type est la Definition of Done.
- Si placée en **Sprint Review · Entrées** : Scrum ne définit pas de Definition of Ready ; ce qui conditionne la présentation à la Sprint Review, c'est la Definition of Done.

### pg-refinement · Le refinement, cinquième événement Scrum

**Explication** (Théorie Scrum, Product Backlog) : Scrum compte cinq événements : le Sprint et les quatre qu'il contient. Le refinement du Product Backlog n'en fait pas partie : c'est une activité continue, qui peut d'ailleurs se poursuivre pendant le Sprint Planning.

- Si placée en **Sprint Planning · But** : Pendant le Sprint Planning, la Scrum Team affine bien les éléments sélectionnés, mais le refinement reste une activité continue, pas un événement.

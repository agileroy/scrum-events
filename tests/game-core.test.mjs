import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CELLS, EVENTS, CATEGORIES, DISABLED_CELLS, TRAP, cellLabel, isCell, answersLabel, expandDeck, filledCells, answerGrid,
  verdict, explanationFor, frenchTypography, validateDeck, validateName, normalizeName, nameKey,
  generateCode, isValidCode, normalizeCode, maxCardsPerPlayer, deckStats, dealHands, undealtCards, drawTrainingDeck, clampCardsPerPlayer, shuffle, asList,
  nextPlayer, lateQuota, playedCounts, secondsLeft, teamScore, playerScores, podium, mistakes, formatPercent,
} from '../site/js/game-core.js';

// ---------------------------------------------------------------- Grille

test('grille : 5 événements × 5 catégories, 3 cases grisées, 22 cases actives et la zone Piège', () => {
  assert.deepEqual(EVENTS, ['sprint', 'planning', 'daily', 'review', 'retro']);
  assert.deepEqual(CATEGORIES, ['timebox', 'people', 'goal', 'inputs', 'outputs']);
  assert.deepEqual(DISABLED_CELLS, ['sprint-people', 'sprint-inputs', 'sprint-outputs']);
  assert.equal(CELLS.length, 23);
  assert.ok(isCell('planning-timebox'));
  assert.ok(isCell(TRAP));
  for (const cell of DISABLED_CELLS) assert.ok(!isCell(cell), cell);
  assert.ok(!isCell('planning-chef'));
});

test('libellés des cases', () => {
  assert.equal(cellLabel('review-inputs'), 'Sprint Review · Entrées');
  assert.equal(cellLabel('daily-people'), 'Daily Scrum · Personnes requises');
  assert.equal(cellLabel(TRAP), 'Piège');
});

// ---------------------------------------------------------------- Verdict

const single = { id: 'pl-8h', text: '8 heures', answers: ['planning-timebox'] };
const triple = { id: 'mx-equipe', text: 'Toute la Scrum Team', answers: ['planning-people', 'review-people', 'retro-people'] };
const trap = { id: 'pg-x', text: 'Piège', answers: [TRAP] };

test('verdict : juste dans la bonne case', () => {
  assert.equal(verdict('planning-timebox', single), 'right');
  assert.equal(verdict(TRAP, trap), 'right');
});

test('verdict : une carte en plusieurs exemplaires est juste dans chacune de ses cases', () => {
  for (const cell of triple.answers) assert.equal(verdict(cell, triple), 'right', cell);
  assert.equal(verdict('daily-people', triple), 'wrong');
});

test('verdict : mauvaise colonne ou mauvaise ligne, c\'est faux (pas de partiel)', () => {
  assert.equal(verdict('review-timebox', single), 'wrong');
  assert.equal(verdict('planning-goal', single), 'wrong');
});

test('verdict : la zone Piège face à une case est toujours fausse', () => {
  assert.equal(verdict(TRAP, single), 'wrong');
  for (const cell of CELLS.filter((c) => c !== TRAP)) assert.equal(verdict(cell, trap), 'wrong', cell);
});

test('verdict : carte non placée (temps écoulé), case inconnue ou grisée', () => {
  assert.equal(verdict(null, single), 'wrong');
  assert.equal(verdict('sprint-outputs', { answers: ['sprint-outputs'] }), 'wrong');
  assert.equal(verdict('chef', single), 'wrong');
});

test('libellé des bonnes cases', () => {
  assert.equal(answersLabel(single), 'Sprint Planning · Timebox');
  assert.equal(answersLabel(triple), 'Sprint Planning, Sprint Review ou Sprint Retrospective · Personnes requises');
  assert.equal(answersLabel({ answers: ['planning-outputs', 'daily-inputs'] }), 'Sprint Planning · Sorties ou Daily Scrum · Entrées');
});

// ---------------------------------------------------------------- Exemplaires

test('exemplaires : une carte par bonne case, identifiants suffixés', () => {
  const copies = expandDeck({ cards: [single, triple] });
  assert.deepEqual(copies.map((c) => c.id), ['pl-8h', 'mx-equipe-1', 'mx-equipe-2', 'mx-equipe-3']);
  assert.ok(copies.every((c) => c.cardId === c.id.replace(/-\d$/, '') || c.cardId === 'pl-8h'));
  assert.deepEqual(copies[2].answers, triple.answers);
});

test('contenu des cases : cartes justes seulement, sans doublon, dans l\'ordre', () => {
  const byId = Object.fromEntries(expandDeck({ cards: [single, triple, trap] }).map((c) => [c.id, c]));
  const results = {
    0: { cardId: 'mx-equipe-1', cell: 'planning-people', verdict: 'right' },
    1: { cardId: 'mx-equipe-2', cell: 'planning-people', verdict: 'right' },
    2: { cardId: 'pl-8h', cell: 'review-timebox', verdict: 'wrong' },
    3: { cardId: 'pg-x', cell: TRAP, verdict: 'right' },
    4: { cardId: 'pl-8h', verdict: 'wrong', timedOut: true },
  };
  assert.deepEqual(filledCells(results, byId), { 'planning-people': ['Toute la Scrum Team'] });
});

test('grille complète : chaque carte dans chacune de ses cases, sans les pièges', () => {
  const grid = answerGrid({ cards: [single, triple, trap] });
  assert.deepEqual(grid['planning-timebox'], ['8 heures']);
  assert.deepEqual(grid['retro-people'], ['Toute la Scrum Team']);
  assert.equal(grid[TRAP], undefined);
});

// ---------------------------------------------------------------- Explication et typographie

const sizing = {
  id: 'da-devs', text: 'Les Developers', answers: ['daily-people'], reference: 'Daily Scrum',
  explanation: 'Générale.', errors: { 'planning-people': 'Ciblée Planning.' },
};

test('explication ciblée pour la case choisie, avec l\'explication générale', () => {
  assert.deepEqual(explanationFor(sizing, 'planning-people'), { targeted: 'Ciblée Planning.', general: 'Générale.', reference: 'Daily Scrum' });
});

test('explication générale seule sans explication ciblée, ou si la réponse est juste', () => {
  assert.equal(explanationFor(sizing, 'review-people').targeted, null);
  assert.equal(explanationFor(sizing, 'daily-people').targeted, null);
  assert.equal(explanationFor(sizing, null).targeted, null);
});

test('typographie française : espaces insécables', () => {
  assert.equal(frenchTypography("Ce n'est pas un piège : non ; si ! Vrai ?"), "Ce n'est pas un piège\u00a0: non\u00a0; si\u00a0! Vrai\u00a0?");
  assert.equal(frenchTypography('le « comment » ici'), 'le «\u00a0comment\u00a0» ici');
});

// ---------------------------------------------------------------- Paquet

/** Paquet minimal valide : une carte par case active et un piège. */
const fullDeck = (extra = []) => ({
  cards: [
    ...CELLS.filter((c) => c !== TRAP).map((cell, i) => ({ id: `c${i}`, text: 'T', answers: [cell], explanation: 'E', reference: 'R', errors: {} })),
    { id: 'p0', text: 'P', answers: [TRAP], explanation: 'E', reference: 'R', errors: {} },
    ...extra,
  ],
});
const card = (over = {}) => ({ id: 'a', text: 'T', answers: ['daily-goal'], explanation: 'E', reference: 'R', errors: {}, ...over });

test('paquet valide', () => {
  assert.deepEqual(validateDeck(fullDeck([card(), card({ id: 'b', answers: ['planning-people', 'retro-people'] })])), []);
});

test('paquet invalide : doublon, case inconnue ou grisée, champ vide, erreur ciblée sur une bonne case', () => {
  assert.match(validateDeck(fullDeck([card(), card()])).join(), /double/);
  assert.match(validateDeck(fullDeck([card({ answers: ['chef'] })])).join(), /case inconnue/);
  assert.match(validateDeck(fullDeck([card({ answers: ['sprint-outputs'] })])).join(), /case inconnue/);
  assert.match(validateDeck(fullDeck([card({ answers: [] })])).join(), /aucune bonne case/);
  assert.match(validateDeck(fullDeck([card({ answers: [TRAP, 'daily-goal'] })])).join(), /piège/);
  assert.match(validateDeck(fullDeck([card({ explanation: ' ' })])).join(), /vide/);
  assert.match(validateDeck(fullDeck([card({ errors: { 'daily-goal': 'x' } })])).join(), /bonnes cases/);
  assert.match(validateDeck(fullDeck([card({ errors: { chef: 'x' } })])).join(), /case inconnue/);
  assert.match(validateDeck(fullDeck([card({ id: 'a'.repeat(18) })])).join(), /Identifiant invalide/);
});

test('paquet invalide : une case active sans carte', () => {
  const deck = fullDeck();
  deck.cards = deck.cards.filter((c) => !c.answers.includes('review-outputs'));
  assert.match(validateDeck(deck).join(), /Aucune carte pour la case review-outputs/);
});

test('paquet invalide : un exemplaire qui reprend l\'identifiant d\'une autre carte', () => {
  assert.match(validateDeck(fullDeck([card({ id: 'x', answers: ['daily-goal', 'retro-goal'] }), card({ id: 'x-1' })])).join(), /Exemplaire en double/);
});

// ---------------------------------------------------------------- Prénom et code

test('prénom : espaces de bord retirés, 1 à 20 caractères', () => {
  assert.equal(normalizeName('  Julie  '), 'Julie');
  assert.ok(validateName('   '));
  assert.ok(validateName('a'.repeat(21)));
  assert.equal(validateName('a'.repeat(20)), null);
});

test('prénom unique sans tenir compte des majuscules', () => {
  assert.equal(nameKey('Julie'), nameKey(' julie '));
  assert.equal(nameKey('a.b/c'), 'a%2Eb%2Fc');
});

test('code de salle : 4 lettres sans lettres ambiguës', () => {
  let i = 0;
  const values = [0, 0.5, 0.99, 0.2];
  const code = generateCode(() => values[i++]);
  assert.equal(code.length, 4);
  assert.ok(isValidCode(code));
  assert.ok(!isValidCode('ABCI'));
  assert.ok(!isValidCode('ABC0'));
  assert.ok(!isValidCode('ABC'));
  assert.equal(normalizeCode(' kztr '), 'KZTR');
  for (let n = 0; n < 200; n += 1) assert.ok(isValidCode(generateCode()));
});

// ---------------------------------------------------------------- Réglages

test('maximum de cartes par personne', () => {
  const deck = { total: 67, traps: 16 };
  assert.equal(maxCardsPerPlayer(deck, 10), 6);
  assert.equal(maxCardsPerPlayer(deck, 8), 7);
  assert.equal(maxCardsPerPlayer(deck, 7), 8);
  assert.equal(maxCardsPerPlayer(deck, 4), 13);   // assez de cartes non piège pour compléter les mains
  assert.equal(maxCardsPerPlayer({ total: 20, traps: 2 }, 3), 1);  // pas assez de pièges : 1 carte chacun
});

test('réglage : 5 par défaut, ramené dans [1, maximum]', () => {
  assert.equal(clampCardsPerPlayer(null, maxCardsPerPlayer({ total: 67, traps: 16 }, 4)), 5);
  assert.equal(clampCardsPerPlayer(undefined, maxCardsPerPlayer({ total: 67, traps: 16 }, 10)), 5);
  assert.equal(clampCardsPerPlayer(null, 3), 3);              // maximum plus petit que 5
  assert.equal(clampCardsPerPlayer(8, maxCardsPerPlayer({ total: 67, traps: 16 }, 8)), 7);
  assert.equal(clampCardsPerPlayer('12', 13), 12);            // saisie au clavier
  assert.equal(clampCardsPerPlayer('40', 13), 13);
  assert.equal(clampCardsPerPlayer('0', 16), 1);
  assert.equal(clampCardsPerPlayer('abc', 16), 5);
});

test('mélange : même contenu, ordre déterministe avec un aléa fixé', () => {
  const items = ['a', 'b', 'c', 'd', 'e'];
  const mixed = shuffle(items, () => 0);
  assert.deepEqual([...mixed].sort(), items);
  assert.deepEqual(mixed, ['b', 'c', 'd', 'e', 'a']);
  assert.deepEqual(items, ['a', 'b', 'c', 'd', 'e']);
});

test('listes Firebase remises en tableau', () => {
  assert.deepEqual(asList({ 1: 'b', 0: 'a', 10: 'c' }), ['a', 'b', 'c']);
  assert.deepEqual(asList(['a', null, 'b']), ['a', 'b']);
  assert.deepEqual(asList(undefined), []);
});

// ---------------------------------------------------------------- Joueur suivant

const players = (quota, extra = {}) => ({
  julie: { quota }, marc: { quota }, ines: { quota }, ...extra,
});
const order = ['julie', 'marc', 'ines'];
const res = (...uids) => Object.fromEntries(uids.map((uid, seq) => [seq, { playerUid: uid, cardId: `c${seq}`, verdict: 'right' }]));

test('joueur suivant : ordre de passage cyclique', () => {
  assert.equal(nextPlayer({ order, players: players(2), results: {} }), 'julie');
  assert.equal(nextPlayer({ order, players: players(2), results: res('julie'), currentUid: 'julie' }), 'marc');
  assert.equal(nextPlayer({ order, players: players(2), results: res('julie', 'marc', 'ines'), currentUid: 'ines' }), 'julie');
});

test('joueur suivant : fin de partie quand tout le monde a joué ses cartes', () => {
  assert.equal(nextPlayer({ order, players: players(1), results: res('julie', 'marc', 'ines'), currentUid: 'ines' }), null);
});

test('joueur suivant : un participant retiré est sauté', () => {
  const p = players(2, { marc: { quota: 2, removed: true } });
  assert.equal(nextPlayer({ order, players: p, results: res('julie'), currentUid: 'julie' }), 'ines');
});

test('joueur absent : après « Passer son tour », il garde ses cartes et rejoue au tour suivant', () => {
  // Marc passé (aucun résultat pour lui) : c'est à Inès, puis Julie, puis Marc à nouveau.
  const p = players(2);
  const results = res('julie');
  assert.equal(nextPlayer({ order, players: p, results, currentUid: 'marc' }), 'ines');
  const after = res('julie', 'ines', 'julie');
  assert.equal(nextPlayer({ order, players: p, results: after, currentUid: 'julie' }), 'marc');
  assert.equal(playedCounts(after).marc ?? 0, 0);
});

test('retardataire : autant de cartes qu\'il en reste aux autres', () => {
  const p = players(5);
  const twoRounds = res('julie', 'marc', 'ines', 'julie', 'marc', 'ines');
  assert.equal(lateQuota({ players: p, results: twoRounds, available: 47, cardsPerPlayer: 5 }), 3);
  // Tour en cours : Inès n'a pas encore joué son 3e carte ; il en reste 3 au moins avancé.
  const mid = res('julie', 'marc', 'ines', 'julie', 'marc', 'ines', 'julie', 'marc');
  assert.equal(lateQuota({ players: p, results: mid, available: 47, cardsPerPlayer: 5 }), 3);
});

test('retardataire : limité par les cartes non distribuées, spectateur s\'il n\'en reste pas', () => {
  const p = players(6);
  assert.equal(lateQuota({ players: p, results: {}, available: 2, cardsPerPlayer: 6 }), 2);
  assert.equal(lateQuota({ players: p, results: {}, available: 0, cardsPerPlayer: 6 }), 0);
});

// ---------------------------------------------------------------- Mains

const fakeDeck = [
  ...Array.from({ length: 16 }, (_, i) => ({ id: `trap-${i}`, answers: ['trap'] })),
  ...Array.from({ length: 51 }, (_, i) => ({ id: `card-${i}`, answers: [['planning-goal', 'daily-goal', 'review-goal', 'retro-goal'][i % 4]] })),
];
const isTrap = (id) => id.startsWith('trap');

test('mains : exactement 1 piège par main dès 2 cartes, toutes les cartes différentes', () => {
  const uids = ['julie', 'marc', 'ines', 'paul'];
  for (let round = 0; round < 50; round += 1) {
    const hands = dealHands(fakeDeck, uids, 5);
    const all = Object.values(hands).flat();
    assert.equal(all.length, 20);
    assert.equal(new Set(all).size, 20);
    for (const uid of uids) {
      assert.equal(hands[uid].length, 5);
      assert.equal(hands[uid].filter(isTrap).length, 1, uid);
    }
  }
});

test('mains : le piège apparaît à chaque rang', () => {
  const seen = new Set();
  for (let round = 0; round < 200; round += 1) {
    for (const hand of Object.values(dealHands(fakeDeck, ['a', 'b', 'c', 'd'], 5))) seen.add(hand.findIndex(isTrap));
  }
  assert.deepEqual([...seen].sort(), [0, 1, 2, 3, 4]);
});

test('mains : avec 1 carte par personne, tirage dans tout le paquet', () => {
  let traps = 0;
  for (let round = 0; round < 300; round += 1) {
    const hands = dealHands(fakeDeck, ['a', 'b', 'c'], 1);
    for (const hand of Object.values(hands)) { assert.equal(hand.length, 1); traps += isTrap(hand[0]) ? 1 : 0; }
  }
  assert.ok(traps > 0 && traps < 900, 'des pièges et des cartes non piège');
});

test('mains : un retardataire est servi avec les cartes non distribuées, complétées si besoin', () => {
  const hands = dealHands(fakeDeck, ['a', 'b'], 5);
  const rest = undealtCards(fakeDeck, hands);
  assert.equal(rest.length, 57);
  const late = dealHands(rest, ['late'], 3).late;
  assert.equal(late.filter(isTrap).length, 1);
  assert.ok(late.every((id) => !Object.values(hands).flat().includes(id)));
  // Plus aucun piège disponible : la main est complétée avec les autres cartes.
  const noTrap = dealHands(fakeDeck.filter((c) => !isTrap(c.id)), ['x'], 3).x;
  assert.equal(noTrap.length, 3);
  // Plus assez de cartes non piège : la main est complétée avec des pièges.
  const fewOthers = dealHands([...fakeDeck.slice(0, 4), fakeDeck[20]], ['y'], 3).y;
  assert.equal(fewOthers.length, 3);
});

test('statistiques du paquet', () => {
  assert.deepEqual(deckStats(fakeDeck), { total: 67, traps: 16 });
});

test('chrono : secondes restantes', () => {
  assert.equal(secondsLeft(1000, 30, 1000), 30);
  assert.equal(secondsLeft(1000, 30, 30500), 1);
  assert.equal(secondsLeft(1000, 30, 99999), 0);
  assert.equal(secondsLeft(1000, 0, 2000), null);
  assert.equal(secondsLeft(undefined, 30, 2000), null);
});

// ---------------------------------------------------------------- Scores

const scored = (...entries) => Object.fromEntries(entries.map(([uid, v], seq) => [seq, { playerUid: uid, cardId: `c${seq}`, verdict: v, cell: 'daily-goal' }]));

test('pourcentage individuel : 3 justes, 1 fausse = 75 %', () => {
  const results = scored(['julie', 'right'], ['julie', 'right'], ['julie', 'right'], ['julie', 'wrong']);
  assert.equal(playerScores(results).julie.percent, 75);
  assert.equal(formatPercent(62.5), '62,5\u202f%');
});

test('score collectif : 15 justes, 5 fausses = 75 %', () => {
  const entries = [...Array(15).fill(['a', 'right']), ...Array(5).fill(['c', 'wrong'])];
  const score = teamScore(scored(...entries));
  assert.deepEqual({ ...score }, { count: 20, points: 15, right: 15, wrong: 5, percent: 75 });
});

test('podium : les ex aequo partagent la même marche', () => {
  const results = scored(
    ['julie', 'right'], ['julie', 'right'], ['julie', 'right'], ['julie', 'right'], ['julie', 'wrong'],
    ['marc', 'right'], ['marc', 'right'], ['marc', 'right'], ['marc', 'right'], ['marc', 'wrong'],
    ['ines', 'right'], ['ines', 'right'], ['ines', 'right'], ['ines', 'wrong'], ['ines', 'wrong'],
    ['paul', 'right'], ['paul', 'right'], ['paul', 'wrong'], ['paul', 'wrong'], ['paul', 'wrong'],
    ['zoe', 'wrong'],
  );
  const steps = podium(results);
  assert.equal(steps.length, 3);
  assert.deepEqual(steps[0], { rank: 1, percent: 80, uids: ['julie', 'marc'] });
  assert.deepEqual(steps[1], { rank: 2, percent: 60, uids: ['ines'] });
  assert.deepEqual(steps[2], { rank: 3, percent: 40, uids: ['paul'] });
});

test('podium : un participant sans carte jouée n\'y figure pas', () => {
  assert.deepEqual(podium({}), []);
});

test('récapitulatif : cartes fausses, dans l\'ordre joué, avec explication ciblée', () => {
  const cards = {
    'pg-assigner': { id: 'pg-assigner', text: 'Assigner les tâches', answers: ['trap'], explanation: 'Gén.', reference: 'Sprint Planning', errors: { 'planning-goal': 'Pas d\'assignation.' } },
    'pl-8h': { id: 'pl-8h', text: '8 heures', answers: ['planning-timebox'], explanation: 'Gén.', reference: 'Sprint Planning', errors: {} },
  };
  const results = {
    0: { playerUid: 'julie', cardId: 'pl-8h', cell: 'planning-timebox', verdict: 'right' },
    1: { playerUid: 'marc', cardId: 'pg-assigner', cell: 'planning-goal', verdict: 'wrong' },
    2: { playerUid: 'ines', cardId: 'pl-8h', verdict: 'wrong', timedOut: true },
  };
  const list = mistakes(results, cards);
  assert.deepEqual(list.map((m) => [m.seq, m.playerUid, m.cell]), [[1, 'marc', 'planning-goal'], [2, 'ines', undefined]]);
  assert.equal(list[0].explanation.targeted, 'Pas d\'assignation.');
  assert.equal(list[1].explanation.targeted, null);
  assert.deepEqual(mistakes({ 0: results[0] }, cards), []);
});

// ---------------------------------------------------------------- Entraînement seul

test('entraînement : cartes différentes et au moins 1 piège par partie', () => {
  for (let round = 0; round < 300; round += 1) {
    const ids = drawTrainingDeck(fakeDeck, 10);
    assert.equal(ids.length, 10);
    assert.equal(new Set(ids).size, 10);
    assert.ok(ids.some(isTrap), 'au moins un piège');
  }
});

test('entraînement : une seule carte est un piège', () => {
  for (let round = 0; round < 50; round += 1) assert.ok(isTrap(drawTrainingDeck(fakeDeck, 1)[0]));
});

test('entraînement : nombre ramené dans [1, taille du paquet], 10 par défaut', () => {
  assert.equal(drawTrainingDeck(fakeDeck, 200).length, 67);
  assert.equal(drawTrainingDeck(fakeDeck, 0).length, 1);
  assert.equal(drawTrainingDeck(fakeDeck, '').length, 10);
  assert.equal(drawTrainingDeck(fakeDeck, 'abc').length, 10);
  assert.equal(drawTrainingDeck(fakeDeck, '20').length, 20);
  assert.equal(drawTrainingDeck(fakeDeck, -3).length, 1);
});

test('entraînement : le remplacement par un piège ne crée pas de doublon', () => {
  // Aléa qui ne mélange rien : les 3 premières cartes non piège sont tirées, puis remplacées.
  const noTrapFirst = [...fakeDeck.slice(16), ...fakeDeck.slice(0, 16)];
  const ids = drawTrainingDeck(noTrapFirst, 3, () => 0.999);
  assert.equal(new Set(ids).size, 3);
  assert.equal(ids.filter(isTrap).length, 1);
});

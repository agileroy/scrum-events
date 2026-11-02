import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  validateDeck, expandDeck, maxCardsPerPlayer, deckStats, MAX_PLAYERS, CELLS, TRAP, answersOf, fullDeckPlan,
} from '../site/js/game-core.js';

const deck = JSON.parse(await readFile(new URL('../site/data/cards.json', import.meta.url), 'utf8'));
const copies = expandDeck(deck);

test('le paquet de cartes du site est valide', () => {
  assert.deepEqual(validateDeck(deck), []);
});

test('une carte par case : chaque case active reçoit exactement un exemplaire', () => {
  for (const cell of CELLS.filter((c) => c !== TRAP)) {
    assert.equal(deck.cards.filter((card) => answersOf(card).includes(cell)).length, 1, cell);
  }
  assert.equal(copies.filter((c) => !answersOf(c).includes(TRAP)).length, CELLS.length - 1);
});

test('le paquet permet un piège par participant, salle pleine, et 5 cartes chacun à 6', () => {
  const stats = deckStats(copies);
  assert.ok(stats.traps >= MAX_PLAYERS, 'au moins un piège par participant');
  assert.ok(maxCardsPerPlayer(stats, MAX_PLAYERS) >= 3);
  assert.ok(maxCardsPerPlayer(stats, 6) >= 4);
});

test('assez de pièges pour le mode « tout le paquet », de 1 à 10 participants', () => {
  const stats = deckStats(copies);
  for (let n = 1; n <= MAX_PLAYERS; n += 1) assert.ok(fullDeckPlan(stats, n), `${n} participants`);
});

test('les identifiants des exemplaires sont acceptés par les règles de sécurité', () => {
  for (const copy of copies) assert.match(copy.id, /^[a-z0-9-]{1,20}$/);
  assert.equal(new Set(copies.map((c) => c.id)).size, copies.length);
});

test('les textes de carte restent courts (petite case projetée)', () => {
  for (const card of deck.cards) assert.ok(card.text.length <= 110, `${card.id} : ${card.text.length} caractères`);
});

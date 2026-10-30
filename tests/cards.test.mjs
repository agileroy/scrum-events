import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  validateDeck, expandDeck, maxCardsPerPlayer, deckStats, MAX_PLAYERS, CELLS, TRAP, answersOf,
} from '../site/js/game-core.js';

const deck = JSON.parse(await readFile(new URL('../site/data/cards.json', import.meta.url), 'utf8'));
const copies = expandDeck(deck);

test('le paquet de cartes du site est valide', () => {
  assert.deepEqual(validateDeck(deck), []);
});

test('chaque case active a au moins une carte', () => {
  for (const cell of CELLS.filter((c) => c !== TRAP)) {
    assert.ok(deck.cards.some((card) => answersOf(card).includes(cell)), cell);
  }
});

test('le paquet permet 5 cartes par personne avec un piège chacun, salle pleine', () => {
  const stats = deckStats(copies);
  assert.ok(stats.traps >= MAX_PLAYERS, 'au moins un piège par participant');
  assert.ok(maxCardsPerPlayer(stats, MAX_PLAYERS) >= 5);
});

test('les pièges représentent entre 15 et 30 % des exemplaires', () => {
  const share = deckStats(copies).traps / copies.length;
  assert.ok(share >= 0.15 && share <= 0.3, `part des pièges : ${Math.round(share * 100)} %`);
});

test('les identifiants des exemplaires sont acceptés par les règles de sécurité', () => {
  for (const copy of copies) assert.match(copy.id, /^[a-z0-9-]{1,20}$/);
  assert.equal(new Set(copies.map((c) => c.id)).size, copies.length);
});

test('les textes de carte restent courts (petite case projetée)', () => {
  for (const card of deck.cards) assert.ok(card.text.length <= 80, `${card.id} : ${card.text.length} caractères`);
});

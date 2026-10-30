// Cohérence entre les règles de sécurité Firebase et la logique du jeu.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { CELLS, DISABLED_CELLS, CODE_ALPHABET, TIMER_CHOICES, VERDICT_LABELS } from '../site/js/game-core.js';

const rules = JSON.parse(await readFile(new URL('../database.rules.json', import.meta.url), 'utf8')).rules;
const game = rules.eventsGame;
const room = game.rooms.$code;

test('la branche eventsGame existe à côté des autres outils', () => {
  for (const branch of ['room', 'skillMatrix', 'wheelOfChance', 'movingMotivators', 'rolesGame', 'eventsGame']) assert.ok(rules[branch], branch);
  assert.equal(rules['.read'], false);
  assert.equal(rules['.write'], false);
});

test('les cases acceptées par les règles sont celles du jeu, sans les cases grisées', () => {
  const pattern = /\^\(([a-z|-]+)\)\$/;
  for (const node of [room.turn.selection, room.turn.placement, room.results.$seq.cell]) {
    const cells = node['.validate'].match(pattern)[1].split('|');
    assert.deepEqual([...cells].sort(), [...CELLS].sort());
    for (const cell of DISABLED_CELLS) assert.ok(!cells.includes(cell), cell);
  }
});

test('les verdicts acceptés par les règles sont ceux du jeu', () => {
  const verdicts = room.results.$seq.verdict['.validate'].match(/\^\(([a-z|]+)\)\$/)[1].split('|');
  assert.deepEqual(verdicts.sort(), Object.keys(VERDICT_LABELS).sort());
});

test('la branche eventsGame ne fait référence qu\'à elle-même', () => {
  const text = JSON.stringify(game);
  assert.ok(!text.includes('rolesGame'));
  assert.ok(!text.includes("'region'"));
});

test('le code de salle des règles correspond à l\'alphabet du jeu', () => {
  const rule = game.expiry.$code['.validate'].match(/\[([A-Z-]+)\]\{4\}/)[1];
  const allowed = rule.replace(/([A-Z])-([A-Z])/g, (_, a, b) => {
    let out = '';
    for (let c = a.charCodeAt(0); c <= b.charCodeAt(0); c += 1) out += String.fromCharCode(c);
    return out;
  });
  assert.equal(allowed, CODE_ALPHABET);
});

test('les durées de chrono acceptées par les règles sont celles du jeu', () => {
  const values = [...room.meta.timerSeconds['.validate'].matchAll(/=== (\d+)/g)].map((m) => Number(m[1]));
  assert.deepEqual(values.sort((a, b) => a - b), [...TIMER_CHOICES].sort((a, b) => a - b));
});

test('suppression au-delà de 24 heures seulement (hors formateur)', () => {
  assert.match(room['.write'], /now - 86400000/);
  assert.match(game.expiry.$code['.write'], /now - 86400000/);
});

test('la pioche est vérifiée contre la main du joueur actif', () => {
  assert.ok(room.meta.hands.$uid.$i, 'mains par participant');
  assert.equal(room.meta.deckOrder, undefined, 'plus de paquet commun');
  assert.match(room.turn.cardId['.validate'], /meta\/hands'\)\.child\(data\.parent\(\)\.child\('playerUid'\)/);
});

// Génère docs/cartes.md, une vue lisible du paquet de cartes pour la relecture.
// Usage : node tools/cards-review.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import {
  EVENTS, CATEGORIES, EVENT_LABELS, CATEGORY_LABELS, DISABLED_CELLS, TRAP, cellLabel, answersOf, expandDeck, deckStats,
} from '../site/js/game-core.js';

const deck = JSON.parse(await readFile(new URL('../site/data/cards.json', import.meta.url), 'utf8'));
const copies = expandDeck(deck);
const stats = deckStats(copies);
const lines = [
  '# Paquet de cartes « Les événements Scrum »',
  '',
  `Source : ${deck.source}. Fichier source : \`site/data/cards.json\` (ce document est généré, ne pas le modifier).`,
  '',
  `${deck.cards.length} cartes différentes, soit ${stats.total} exemplaires dont ${stats.traps} pièges.`,
  'Une carte qui a plusieurs bonnes cases existe en autant d\'exemplaires ; chaque exemplaire est juste dans n\'importe laquelle de ces cases.',
  '',
  '## Grille complète',
  '',
  `| | ${EVENTS.map((event) => EVENT_LABELS[event]).join(' | ')} |`,
  `|---|${EVENTS.map(() => '---').join('|')}|`,
];
for (const category of CATEGORIES) {
  const row = EVENTS.map((event) => {
    const cell = `${event}-${category}`;
    if (DISABLED_CELLS.includes(cell)) return '*(grisée)*';
    return deck.cards.filter((card) => answersOf(card).includes(cell)).map((card) => card.text).join('<br>');
  });
  lines.push(`| **${CATEGORY_LABELS[category]}** | ${row.join(' | ')} |`);
}

function cardBlock(card) {
  const answers = answersOf(card);
  const copiesNote = answers.length > 1 ? ` (${answers.length} exemplaires : ${answers.map(cellLabel).join(', ')})` : '';
  lines.push(`### ${card.id} · ${card.text}${copiesNote}`, '', `**Explication** (${card.reference}) : ${card.explanation}`, '');
  for (const [wrong, text] of Object.entries(card.errors ?? {})) lines.push(`- Si placée en **${cellLabel(wrong)}** : ${text}`);
  if (Object.keys(card.errors ?? {}).length) lines.push('');
}

for (const event of EVENTS) {
  const cards = deck.cards.filter((card) => answersOf(card)[0]?.startsWith(`${event}-`));
  if (!cards.length) continue;
  lines.push('', `## ${EVENT_LABELS[event]}`, '');
  for (const card of cards) cardBlock(card);
}
const traps = deck.cards.filter((card) => answersOf(card).includes(TRAP));
lines.push('', `## Pièges (${traps.length})`, '');
for (const card of traps) cardBlock(card);

await mkdir(new URL('../docs/', import.meta.url), { recursive: true });
await writeFile(new URL('../docs/cartes.md', import.meta.url), lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/cartes.md : ${deck.cards.length} cartes, ${stats.total} exemplaires`);

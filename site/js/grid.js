// Grille des événements Scrum : une colonne par événement, une ligne par catégorie, des cases grisées
// et une zone « Piège ». Chaque case est un bouton (toucher, clic ou clavier) à deux faces : face cachée
// au départ, elle se retourne quand une première carte juste y est posée.

import {
  EVENTS, CATEGORIES, EVENT_LABELS, EVENT_SHORT, CATEGORY_LABELS, CATEGORY_SHORT, DISABLED_CELLS, TRAP,
  cellLabel, frenchTypography,
} from './game-core.js?v=__VERSION__';

function node(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

/** En-tête à deux libellés : long sur grand écran, court sur téléphone. */
function header(className, long, short) {
  const el = node('div', className);
  el.append(node('span', 'label-long', long), node('span', 'label-short', short));
  return el;
}

function cardList(texts, played = null) {
  const list = node('ul', 'cell-cards');
  for (const text of texts) {
    const item = node('li', played?.has(text) ? 'is-played' : '');
    item.textContent = frenchTypography(text);
    list.append(item);
  }
  return list;
}

/**
 * Crée la grille dans `container`.
 * - mode « play » : cases à choisir (`onSelect(cell)` quand `setInteractive(true)`), mises en évidence
 *   avec `update`, retournées et remplies avec `setFilled` ;
 * - mode « answers » : grille complète de fin, toutes cases retournées, remplie avec `setAnswers`.
 */
export function createGrid(container, { onSelect = () => {}, mode = 'play' } = {}) {
  const answers = mode === 'answers';
  const root = node('div', `events-grid${answers ? ' is-answers' : ''}`);
  const table = node('div', 'grid-table');
  table.setAttribute('role', 'group');
  table.setAttribute('aria-label', answers ? 'Grille complète des événements Scrum' : 'Grille des événements Scrum');
  table.append(node('div', 'grid-corner'));
  for (const event of EVENTS) table.append(header(`grid-head grid-event event-${event}`, EVENT_LABELS[event], EVENT_SHORT[event]));

  const cells = {};
  for (const category of CATEGORIES) {
    table.append(header('grid-head grid-category', CATEGORY_LABELS[category], CATEGORY_SHORT[category]));
    for (const event of EVENTS) {
      const id = `${event}-${category}`;
      if (DISABLED_CELLS.includes(id)) {
        const off = node('div', 'cell is-disabled');
        off.setAttribute('aria-hidden', 'true');
        table.append(off);
        continue;
      }
      const cell = node(answers ? 'div' : 'button', `cell event-${event}`);
      if (!answers) { cell.type = 'button'; cell.disabled = true; }
      cell.dataset.cell = id;
      cell.setAttribute('aria-label', cellLabel(id));
      const inner = node('span', 'cell-inner');
      const back = node('span', 'cell-face cell-back');
      const front = node('span', 'cell-face cell-front');
      front.append(node('span', 'cell-count'), node('span', 'cell-list'));
      inner.append(back, front);
      cell.append(inner);
      table.append(cell);
      cells[id] = { el: cell, front, filled: false };
    }
  }

  const trap = node(answers ? 'div' : 'button', 'cell-trap');
  if (!answers) { trap.type = 'button'; trap.disabled = true; }
  trap.dataset.cell = TRAP;
  trap.setAttribute('aria-label', 'Piège : n\'existe pas dans Scrum');
  trap.append(node('span', 'trap-title', 'Piège'), node('span', 'trap-sub', 'n\'existe pas dans Scrum'));
  const trapList = node('span', 'trap-list');
  trap.append(trapList);
  cells[TRAP] = { el: trap };

  root.append(table, trap);
  container.replaceChildren(root);

  if (!answers) {
    root.addEventListener('click', (event) => {
      const target = event.target.closest('[data-cell]');
      if (target && !target.disabled) onSelect(target.dataset.cell);
    });
  }

  let primed = false;   // faux tant que la grille n'a pas affiché un premier état : pas d'animation au chargement
  let interactive = false;

  /** Une case remplie est occupée : elle ne peut plus être choisie. */
  function refreshDisabled() {
    for (const { el, filled } of Object.values(cells)) if (el.tagName === 'BUTTON') el.disabled = !interactive || Boolean(filled);
  }

  return {
    element: root,

    setInteractive(value) {
      interactive = value;
      root.classList.toggle('is-interactive', value);
      refreshDisabled();
    },

    /** Case active et libre sous un point de l'écran (glisser-déposer), ou null. */
    cellAt(x, y) {
      const target = document.elementFromPoint(x, y)?.closest?.('[data-cell]');
      if (!target || !root.contains(target) || target.disabled) return null;
      return target.dataset.cell;
    },

    /** Mise en évidence de la case survolée pendant un glisser-déposer. */
    setDropTarget(cell) {
      for (const [id, { el }] of Object.entries(cells)) el.classList.toggle('is-drop-target', id === cell);
    },

    /** state : { selection, chosen, correct: [cases] } ; met en évidence la sélection, puis la correction. */
    update({ selection = null, chosen = null, correct = [] } = {}) {
      const corrected = correct.length > 0;
      for (const [id, { el }] of Object.entries(cells)) {
        el.classList.toggle('is-selected', id === selection && !corrected);
        el.classList.toggle('is-correct', correct.includes(id));
        el.classList.toggle('is-chosen', corrected && id === chosen && !correct.includes(id));
        if (el.tagName === 'BUTTON') el.setAttribute('aria-pressed', String(id === selection && !corrected));
      }
    },

    /** Contenu des cases ({ case: [textes] }) ; une case qui reçoit sa première carte se retourne. */
    setFilled(contents) {
      for (const [id, entry] of Object.entries(cells)) {
        if (id === TRAP) continue;
        const texts = contents?.[id] ?? [];
        const filled = texts.length > 0;
        const key = texts.join('\n');
        if (entry.key !== key) {
          entry.front.querySelector('.cell-count').textContent = filled ? '✓' : '';
          entry.front.querySelector('.cell-list').replaceChildren(cardList(texts));
          entry.key = key;
        }
        if (filled !== entry.filled) {
          const animate = primed && filled;
          entry.el.classList.toggle('no-anim', !animate);
          entry.el.classList.toggle('is-filled', filled);
          entry.el.setAttribute('aria-label', filled ? `${cellLabel(id)} : ${texts.join(' ; ')}` : cellLabel(id));
          entry.filled = filled;
          if (!animate) requestAnimationFrame(() => requestAnimationFrame(() => entry.el.classList.remove('no-anim')));
        }
      }
      primed = true;
      refreshDisabled();
    },

    /** Nouvelle partie : cases remises face cachée sans animation. */
    reset() {
      primed = false;
      this.setFilled({});
      primed = false;
      this.update({});
    },

    /** Grille complète : textes de toutes les cartes ; `played` : textes posés juste pendant la partie. */
    setAnswers(grid, trapTexts, played = new Set()) {
      for (const [id, entry] of Object.entries(cells)) {
        if (id === TRAP) continue;
        const texts = grid[id] ?? [];
        entry.el.classList.add('is-filled', 'no-anim');
        entry.front.querySelector('.cell-list').replaceChildren(cardList(texts, played));
      }
      trapList.replaceChildren(cardList(trapTexts, played));
    },
  };
}

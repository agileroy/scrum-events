// Grille des événements Scrum : une colonne par événement, une ligne par catégorie, des cases grisées
// et une zone « Piège ». Chaque case est un bouton (toucher, clic ou clavier) à deux faces : face cachée
// au départ, elle se retourne quand sa carte est révélée (posée juste, ou corrigée après une erreur).
// La colonne suffit pour placer une carte : la sélection et le survol mettent en évidence toute la colonne.

import {
  EVENTS, CATEGORIES, EVENT_LABELS, EVENT_SHORT, CATEGORY_LABELS, CATEGORY_SHORT, DISABLED_CELLS, TRAP,
  cellLabel, frenchTypography, eventOf,
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

/** Liste de cartes : textes simples, ou entrées { text, wrong } (carte révélée après une erreur). */
function cardList(items, played = null) {
  const list = node('ul', 'cell-cards');
  for (const item of items) {
    const entry = typeof item === 'string' ? { text: item, wrong: false } : item;
    const li = node('li', [played?.has(entry.text) ? 'is-played' : '', entry.wrong ? 'is-mistake' : ''].join(' ').trim());
    li.textContent = frenchTypography(entry.text);
    if (entry.wrong) li.title = 'Révélée après une erreur';
    list.append(li);
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
  const heads = {};
  for (const event of EVENTS) {
    const head = header(`grid-head grid-event event-${event}`, EVENT_LABELS[event], EVENT_SHORT[event]);
    // Déposer sur l'en-tête de colonne vaut déposer dans la colonne (première case active).
    head.dataset.dropCell = CATEGORIES.map((category) => `${event}-${category}`).find((id) => !DISABLED_CELLS.includes(id));
    heads[event] = head;
    table.append(head);
  }

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
      front.append(node('span', 'cell-count'), node('span', 'cell-list'), node('span', 'cell-flag', 'Erreur'));
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

  /** Toutes les cases actives restent choisissables : la colonne suffit, la carte rejoint sa bonne case. */
  function refreshDisabled() {
    for (const { el } of Object.values(cells)) if (el.tagName === 'BUTTON') el.disabled = !interactive;
  }

  /** Met en évidence la colonne d'une case (ou la zone Piège) avec la classe donnée. */
  function highlightColumn(cell, className) {
    const event = cell && cell !== TRAP ? eventOf(cell) : null;
    for (const [id, { el }] of Object.entries(cells)) {
      el.classList.toggle(className, id === TRAP ? cell === TRAP : Boolean(event) && eventOf(id) === event);
    }
    for (const [name, head] of Object.entries(heads)) head.classList.toggle(className, name === event);
  }

  return {
    element: root,

    setInteractive(value) {
      interactive = value;
      root.classList.toggle('is-interactive', value);
      refreshDisabled();
    },

    /**
     * Cible d'un dépôt sous un point de l'écran : la zone Piège, ou une colonne. La colonne se lit à la position
     * horizontale du pointeur, n'importe où dans la hauteur de la grille (cases, espaces entre les cases, en-têtes) :
     * on renvoie la case exacte sous le pointeur si elle existe, sinon la première case active de la colonne.
     * Renvoie null hors de la grille.
     */
    cellAt(x, y) {
      const trapRect = trap.getBoundingClientRect();
      if (x >= trapRect.left && x <= trapRect.right && y >= trapRect.top && y <= trapRect.bottom) return TRAP;
      const tableRect = table.getBoundingClientRect();
      if (x < tableRect.left || x > tableRect.right || y < tableRect.top || y > tableRect.bottom) return null;
      const exact = document.elementFromPoint(x, y)?.closest?.('[data-cell]');
      if (exact && root.contains(exact) && exact.dataset.cell !== TRAP) return exact.dataset.cell;
      const heads_ = Object.values(heads);
      const gap = heads_.length > 1 ? Math.max(0, heads_[1].getBoundingClientRect().left - heads_[0].getBoundingClientRect().right) : 0;
      for (const head of heads_) {
        const rect = head.getBoundingClientRect();
        if (x >= rect.left - gap / 2 - 1 && x <= rect.right + gap / 2 + 1) return head.dataset.dropCell;
      }
      return null;   // colonne des libellés de ligne
    },

    /** Mise en évidence de la colonne survolée pendant un glisser-déposer. */
    setDropTarget(cell) {
      highlightColumn(cell, 'is-drop-target');
    },

    /** state : { selection, chosen, correct: [cases] } ; met en évidence la sélection, puis la correction. */
    update({ selection = null, chosen = null, correct = [] } = {}) {
      const corrected = correct.length > 0;
      highlightColumn(corrected ? null : selection, 'is-selected');
      for (const [id, { el }] of Object.entries(cells)) {
        el.classList.toggle('is-correct', correct.includes(id));
        el.classList.toggle('is-chosen', corrected && id === chosen && !correct.includes(id));
        if (el.tagName === 'BUTTON') el.setAttribute('aria-pressed', String(id === selection && !corrected));
      }
    },

    /**
     * Plateau (voir `boardState`) : { cells: { case: { text, wrong } }, traps: [...] }. Une case qui reçoit sa carte
     * se retourne ; une carte révélée après une erreur porte un indicateur « Erreur ».
     */
    setFilled(board = {}) {
      for (const [id, entry] of Object.entries(cells)) {
        if (id === TRAP) continue;
        const card = board.cells?.[id] ?? null;
        const filled = Boolean(card);
        const key = card ? `${card.wrong ? 'x' : 'o'}${card.text}` : '';
        if (entry.key !== key) {
          entry.front.querySelector('.cell-count').textContent = filled ? (card.wrong ? '✗' : '✓') : '';
          entry.front.querySelector('.cell-list').replaceChildren(cardList(card ? [card] : []));
          entry.el.classList.toggle('is-mistake', Boolean(card?.wrong));
          entry.el.setAttribute('aria-label', card ? `${cellLabel(id)} : ${card.text}${card.wrong ? ' (révélée après une erreur)' : ''}` : cellLabel(id));
          entry.key = key;
        }
        if (filled !== entry.filled) {
          const animate = primed && filled;
          entry.el.classList.toggle('no-anim', !animate);
          entry.el.classList.toggle('is-filled', filled);
          entry.filled = filled;
          if (!animate) requestAnimationFrame(() => requestAnimationFrame(() => entry.el.classList.remove('no-anim')));
        }
      }
      trapList.replaceChildren(...((board.traps ?? []).length ? [cardList(board.traps)] : []));
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

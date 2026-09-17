import Dashboard from './js/Dashboard.js';

const dashboard = new Dashboard();
dashboard.addWidget('quote');
dashboard.addWidget('signal');
document.querySelector('#add-todo').addEventListener('click', () => dashboard.addWidget('todo'));
const githubLink = document.createElement('a'); githubLink.href = 'https://github.com/dyslexis333'; githubLink.target = '_blank'; githubLink.rel = 'noreferrer'; githubLink.textContent = 'GitHub ↗'; document.querySelector('.hero-links').append(githubLink);
const telegramLink = document.createElement('a'); telegramLink.href = 'https://t.me/dyslexis'; telegramLink.target = '_blank'; telegramLink.rel = 'noreferrer'; telegramLink.textContent = 'Telegram ↗'; document.querySelector('.hero-links').append(telegramLink);
document.querySelector('.hero-links a').textContent = 'Faceit ↗';
const signalName = document.querySelector('#github-name'); signalName.addEventListener('click', () => window.open('https://github.com/dyslexis333', '_blank', 'noopener'));

const recentMatches = [
  ['DE_ANCIENT', 'WIN', '13 : 11', '15.09.26 · K/D 1.29'],
  ['DE_ANCIENT', 'LOSS', '16 : 19', '14.09.26 · K/D 0.85'],
  ['DE_CACHE', 'WIN', '13 : 10', '14.09.26 · K/D 1.19'],
  ['DE_DUST2', 'WIN', '13 : 11', '14.09.26 · K/D 1.06'],
];
const matchList = document.querySelector('#match-list');
matchList.replaceChildren(...recentMatches.map(([map, result, score, meta]) => {
  const row = document.createElement('div'); row.className = 'match-row';
  const mapNode = document.createElement('span'); mapNode.className = 'match-map'; mapNode.textContent = map;
  const resultNode = document.createElement('span'); resultNode.className = `match-result ${result === 'WIN' ? 'win' : 'loss'}`; resultNode.textContent = result;
  const scoreNode = document.createElement('strong'); scoreNode.textContent = score;
  const metaNode = document.createElement('span'); metaNode.className = 'match-meta'; metaNode.textContent = meta;
  row.append(mapNode, resultNode, scoreNode, metaNode); return row;
}));

const date = document.querySelector('#current-date');
date.textContent = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()).toUpperCase();
document.querySelector('#theme-toggle').addEventListener('click', () => document.body.classList.toggle('light'));

document.querySelector('#add-match').addEventListener('click', () => {
  const map = window.prompt('Карта матча:', 'VERTIGO');
  if (!map?.trim()) return;
  const row = document.createElement('div'); row.className = 'match-row';
  [['span', 'match-map', map.trim().toUpperCase()], ['span', 'match-result win', 'WIN'], ['strong', '', '13 : 8'], ['span', 'match-meta', 'Faceit · только что']].forEach(([tag, className, value]) => { const node = document.createElement(tag); node.className = className; node.textContent = value; row.append(node); });
  document.querySelector('#match-list').prepend(row);
});

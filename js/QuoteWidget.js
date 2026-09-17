import ApiWidget from './ApiWidget.js';
export default class QuoteWidget extends ApiWidget {
  constructor(config) { super(config); this.state = document.querySelector(config.stateSelector); this.author = document.querySelector(config.authorSelector); this.refresh = document.querySelector(config.refreshSelector); this.handleRefresh = () => this.load(); this.on(this.refresh, 'click', this.handleRefresh); this.load(); }
  load() { const quotes = [['Побеждает тот, кто сохраняет холодную голову.', '— игровой принцип'], ['Каждый раунд — новая возможность.', '— матчевый настрой'], ['Точность начинается с концентрации.', '— заметка игрока'], ['Команда сильнее идеального одиночки.', '— командная работа']]; this.request('https://dummyjson.com/quotes/random', this.state, data => { const quote = quotes[(Number(data.id) || Date.now()) % quotes.length]; this.element && (this.element.querySelector('h2').textContent = `«${quote[0]}»`); this.author.textContent = quote[1]; }); }
}

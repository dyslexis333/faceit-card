import UIComponent from './UIComponent.js';
export default class ApiWidget extends UIComponent {
  constructor(config) { super(config); this.controller = null; this.element = document.querySelector(`#${config.id}`); }
  async request(url, stateNode, renderData) {
    this.controller?.abort(); this.controller = new AbortController(); stateNode.textContent = 'Загрузка данных...';
    try { const response = await fetch(url, { signal: this.controller.signal, headers: { Accept: 'application/json' } }); if (!response.ok) throw new Error(`HTTP ${response.status}`); const data = await response.json(); if (!data || (Array.isArray(data) && data.length === 0)) throw new Error('Пустой ответ'); renderData(data); stateNode.textContent = 'Источник обновлён'; }
    catch (error) { if (error.name !== 'AbortError') stateNode.textContent = 'Не удалось получить данные. Попробуйте обновить.'; }
  }
  destroy() { this.controller?.abort(); super.destroy(); }
}

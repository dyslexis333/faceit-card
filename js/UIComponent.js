export default class UIComponent {
  constructor({ title, id }) { this.title = title; this.id = id; this.element = null; this.listeners = []; }
  render() { const el = document.createElement('article'); el.id = this.id; el.className = 'panel'; this.element = el; return el; }
  on(target, event, handler) { target.addEventListener(event, handler); this.listeners.push(() => target.removeEventListener(event, handler)); }
  destroy() { this.listeners.forEach(remove => remove()); this.listeners = []; this.element?.remove(); this.element = null; }
}

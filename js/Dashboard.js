import QuoteWidget from './QuoteWidget.js';
import SignalWidget from './SignalWidget.js';
import ToDoWidget from './ToDoWidget.js';
export default class Dashboard {
  constructor(mountNode = document.querySelector('#widget-mount')) { this.widgets = []; this.mountNode = mountNode; }
  addWidget(widgetType) { const configs = { quote: { title: 'Quote', id: 'quote-widget', stateSelector: '#quote-state', authorSelector: '#quote-author', refreshSelector: '[data-refresh="quote"]' }, signal: { title: 'Signal', id: 'github-widget', stateSelector: '#github-state' } }; let widget; if (widgetType === 'todo') { widget = new ToDoWidget({ onRemove: id => this.removeWidget(id) }); this.mountNode?.append(widget.render()); } else { const Widget = widgetType === 'quote' ? QuoteWidget : SignalWidget; widget = new Widget(configs[widgetType]); } this.widgets.push(widget); return widget; }
  removeWidget(widgetId) { const index = this.widgets.findIndex(widget => widget.id === widgetId); if (index >= 0) { this.widgets[index].destroy(); this.widgets.splice(index, 1); } }
}

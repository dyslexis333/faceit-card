import ApiWidget from './ApiWidget.js';
export default class SignalWidget extends ApiWidget {
  constructor(config) { super(config); this.state = document.querySelector(config.stateSelector); this.load(); }
  load() { this.request('https://api.github.com/users/dyslexis333', this.state, data => { const text = value => typeof value === 'string' ? value : ''; document.querySelector('#github-name').textContent = text(data.name) || data.login || 'dyslexis333'; document.querySelector('#github-bio').textContent = text(data.bio) || 'GitHub-профиль игрока'; document.querySelector('#github-repos').textContent = data.public_repos ?? 0; document.querySelector('#github-followers').textContent = data.followers ?? 0; const avatar = document.querySelector('#github-avatar'); if (data.avatar_url) { avatar.textContent = ''; avatar.style.backgroundImage = `url(${encodeURI(data.avatar_url)})`; avatar.style.backgroundSize = 'cover'; } }); }
}

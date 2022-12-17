import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/skip-content.css';
import '../styles/latest.css';
import '../styles/posts.css';
import '../styles/content.css';
import '../styles/headline.css';
import '../styles/movie.css';
// eslint-disable-next-line import/extensions
import App from './views/app.js';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

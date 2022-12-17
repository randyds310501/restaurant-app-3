import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorites';
import Home from '../views/pages/home';
// eslint-disable-next-line import/extensions
import Like from '../views/pages/like.js';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorites': Favorite,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;

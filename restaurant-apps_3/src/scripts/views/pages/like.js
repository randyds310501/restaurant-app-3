// eslint-disable-next-line import/extensions
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
// eslint-disable-next-line import/extensions
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

// eslint-disable-next-line no-unused-vars
const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Movie</h2>
      <div id="movies" class="movies">
      </div>
    </div>
          `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#movies');
    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

// eslint-disable-next-line no-undef
export default Like;

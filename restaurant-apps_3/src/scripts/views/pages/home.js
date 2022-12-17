// eslint-disable-next-line import/extensions
import RestaurantApiSource from '../../data/therestaurantdb-source.js';
// eslint-disable-next-line import/extensions
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Explore Restaurant</h2>
    <div id="movies" class="movies">
    </div>
  </div>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantApiSource.listRestaurant();
    const restaurantContainer = document.querySelector('#movies');
    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

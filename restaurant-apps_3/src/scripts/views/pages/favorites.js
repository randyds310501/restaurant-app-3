// eslint-disable-next-line import/extensions
import RestaurantApiSource from '../../data/therestaurantdb-source.js';
// eslint-disable-next-line import/extensions
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';

const Favorite = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Your Favorites Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
          `;
  },

  async afterRender() {
    const restaurant = await RestaurantApiSource.listRestaurant();
    const restaurantContainer = document.querySelector('.restaurants');
    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      // eslint-disable-next-line operator-linebreak
      restaurantContainer.innerHTML +=
        createRestaurantDetailTemplate(restaurant);
    });
  },
};

export default Favorite;

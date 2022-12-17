import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/extensions
import RestaurantApiSource from '../../data/therestaurantdb-source.js';
// eslint-disable-next-line import/extensions
import {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  // eslint-disable-next-line import/extensions
} from '../templates/template-creator.js';
// eslint-disable-next-line import/extensions
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Detail</h2>
    <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    // eslint-disable-next-line no-console
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#movie');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    // eslint-disable-next-line no-undef
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;

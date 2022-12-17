// eslint-disable-next-line import/no-unresolved
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
// eslint-disable-next-line import/no-unresolved
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        // eslint-disable-next-line comma-dangle
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});

// eslint-disable-next-line import/no-unresolved
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestaurants.find((Restaurant) => Restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(Restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(Restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(Restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter(
      // eslint-disable-next-line eqeqeq, comma-dangle
      (Restaurant) => Restaurant.id != id
    );
  },
};

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign, no-undef
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});

/* eslint-disable no-underscore-dangle */
class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      // eslint-disable-next-line no-console
      console.log(event);
      this._latestQuery = event.target.value;
      this._favoriteRestaurants.searchFavorites(this._latestQuery);
    });
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;

/* eslint-disable max-len */
// import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
// import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
// // eslint-disable-next-line no-undef
// describe('Searching restaurants', () => {
//  let presenter
//  const searchRestaurants = (query) => {
//   const queryElement = document.getElementById('query');
//   queryElement.value = query;
//   queryElement.dispatchEvent(new Event('change'));
// };
//   // eslint-disable-next-line no-undef
//   beforeEach(() => {
//     document.body.innerHTML = `
//           <div id="movie-search-container">
//             <input id="query" type="text">
//             <div class="movie-result-container">
//               <ul class="movies">
//               </ul>
//             </div>
//           </div>
//         `;
//   });
//   spyOn(FavoriteMovieIdb, 'searchMovies');
//     presenter = new FavoriteMovieSearchPresenter({ favoriteMovies: FavoriteMovieIdb });
//   });

//   // eslint-disable-next-line no-undef
//   it('should be able to capture the query typed by the user', () => {
//     // // eslint-disable-next-line no-undef
//     // spyOn(FavoriteRestaurantIdb, 'searchRestaurant');
//     // const presenter = new FavoriteRestaurantSearchPresenter({
//     //   favoriteRestaurant: FavoriteRestaurantIdb,
//     // });

//     // const queryElement = document.getElementById('query');
//     // queryElement.value = 'film a';
//     // queryElement.dispatchEvent(new Event('change'));
//     searchRestaurants('film a')
//     // eslint-disable-next-line no-undef, new-cap
//     expect(presenter.latestQuery).toEqual('film a');
//   });
//   // eslint-disable-next-line no-undef
//   fit('should ask the model to search for liked restaurant', () => {
//     // eslint-disable-next-line no-undef
//     // spyOn(FavoriteRestaurantIdb, 'searchRestaurant');
//     // const presenter = new FavoriteRestaurantSearchPresenter({
//     //   // eslint-disable-next-line comma-dangle
//     //   favoriteRestaurants: FavoriteRestaurantIdb,
//     // });

//     // const queryElement = document.getElementById('query');
//     // queryElement.value = 'film a';
//     // queryElement.dispatchEvent(new Event('change'));
//     searchRestaurants('film a')

//     // eslint-disable-next-line no-undef
//     expect(FavoriteRestaurantIdb.searchRestaurants).toHaveBeenCalledWith(
//       // eslint-disable-next-line comma-dangle
//       'film a'
//     );
//   });
// });

import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
// eslint-disable-next-line no-undef
describe('Searching Restaurant', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    document.body.innerHTML = `
          <div id="movie-search-container">
            <input id="query" type="text">
            <div class="movie-result-container">
              <ul class="movies">
              </ul>
            </div>
          </div>
        `;
  });

  // eslint-disable-next-line no-undef
  it('should be able to capture the query typed by the user', () => {
    // eslint-disable-next-line no-undef
    spyOn(FavoriteRestaurantIdb, 'searchRestaurant');
    const presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurant: FavoriteRestaurantIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));
    // eslint-disable-next-line no-undef, new-cap
    expect(presenter.latestQuery).toEqual('film a');
  });
  // eslint-disable-next-line no-undef
  fit('should ask the model to search for liked restaurant', () => {
    // eslint-disable-next-line no-undef
    // spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    // const presenter = new FavoriteRestaurantSearchPresenter({
    //   // eslint-disable-next-line comma-dangle
    //   favoriteRestaurants: FavoriteRestaurantIdb,
    // });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    // eslint-disable-next-line no-undef
    expect(FavoriteRestaurantIdb.searchRestaurant).toHaveBeenCalledWith(
      // eslint-disable-next-line comma-dangle
      'film a'
    );
  });
});

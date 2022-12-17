// /* eslint-disable no-undef */
// import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
// import * as TestFactories from './helpers/testFactories';

// // eslint-disable-next-line no-undef
// describe('Unliking A Restaurant', () => {
//   const addLikeButtonContainer = () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//   };

//   // eslint-disable-next-line no-undef
//   beforeEach(async () => {
//     addLikeButtonContainer();
//     await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
//   });

//   // eslint-disable-next-line no-undef
//   afterEach(async () => {
//     await FavoriteRestaurantIdb.deleteRestaurant(1);
//   });

//   // eslint-disable-next-line no-undef
//   it('should show unlike button when the restaurant has been liked', async () => {
//     await createLikeButtonPresenterWithRestaurant({ id: 1 });
//     // eslint-disable-next-line no-undef
//     expect(
//       // eslint-disable-next-line comma-dangle
//       document.querySelector('[aria-label="unlike this restaurant"]')
//     ).toBeTruthy();
//   });

//   // eslint-disable-next-line no-undef
//   it('should not show like button when the restaurant has not been liked', async () => {
//     await createLikeButtonPresenterWithRestaurant({ id: 1 });
//     // eslint-disable-next-line no-undef
//     expect(
//       // eslint-disable-next-line comma-dangle
//       document.querySelector('[aria-label="like this restaurant"]')
//     ).toBeFalsy();
//   });
//   // eslint-disable-next-line no-undef
//   it('should be able to remove the restaurant from liked list', async () => {
//     await createLikeButtonPresenterWithRestaurant({ id: 1 });

//     document
//       .querySelector('[aria-label="Unlike this restaurant"]')
//       .dispatchEvent(new Event('click'));
//     // eslint-disable-next-line no-undef
//     expect((await FavoriteRestaurantIdb.getRestaurants(1)).data).toEqual([]);
//   });
//   // eslint-disable-next-line no-undef
//   it('should not throw error if the unliked restaurant is not in the list', async () => {
//     await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
//     // hapus dulu film dari daftar film yang disukai
//     await FavoriteRestaurantIdb.deleteRestaurant(1);
//     // kemudian, simulasikan pengguna menekan widget batal menyukai film
//     document
//       .querySelector('[aria-label="unlike this restaurant"]')
//       .dispatchEvent(new Event('click'));
//     // eslint-disable-next-line no-undef
//     expect((await FavoriteRestaurantIdb.getAllRestaurants()).data).toEqual([]);
//   });
// });

import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });

    // eslint-disable-next-line no-undef
    expect(
      // eslint-disable-next-line comma-dangle
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });

    // eslint-disable-next-line no-undef
    expect(
      // eslint-disable-next-line comma-dangle
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });
  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
  // eslint-disable-next-line no-undef
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });
    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="movie-item__header">  
<h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="detail_gambar"/>
  <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${
          restaurant.rating
        }</span></p>
      </div>
      <div class="movie__info">
      <h3 class="info">Information</h3>
      <h4>Address</h4>
      <p class="info">${restaurant.address}</p>
      <h4>City</h4>
      <p class="info">${restaurant.city}</p>
    </div>
  <div class="movie__overview">
    <p class="post-item-desk">${restaurant.description}</p>
  </div>

  <div class="menus">
  <h3>Menus</h3>
  <div class="category">
  <h4 class="Foods">Foods</h4>
  <ul>
    ${restaurant.menus.foods.map((food) => `<li>-${food.name}</li>`).join('')}
  </ul>
  <h4>Drinks</h4>
  <ul>
    ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
  </ul>
  </div>
  <h3>Reviews</h3>
  <div>
    ${restaurant.customerReviews
      .map(
        (review) => `
      <div>
        <p>&quot; ${review.review} &quot;</p>
        <span>- <b>${review.name}</b>, ${review.date}</span>
      </div>
    `
      )
      .join('')}
 
  </div>
  </div>

  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${restaurant.name}"
      <img loading="lazy" class="movie__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="detail_gambar"/>
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

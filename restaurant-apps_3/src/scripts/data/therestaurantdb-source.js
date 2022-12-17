import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    // return response.json();
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantApiSource;

import axios from 'axios';

class HomeApi {
  static async getHome() {
    try {
      const response = await axios.get('/url/example');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default HomeApi;
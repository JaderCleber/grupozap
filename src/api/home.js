import axios from 'axios';

class HomeApi {
  static async getHome() {
    try {
      const response = await axios.get('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json');
      return response.data;
    } catch (error) {
      console.error(error);
      return 
    }
  }
}

export default HomeApi;
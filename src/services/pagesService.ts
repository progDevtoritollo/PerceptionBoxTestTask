import axios from 'axios';


class Page {
  API_ENDPOINT = "https://rickandmortyapi.com/api/character"

  async getPage() {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
   
    try{
      let response = await axios.get(`${this.API_ENDPOINT}`) 
      console.log(response.data)
      return response.data.results
    }
    catch (e) {
    console.log(e)
  };

  }
}
const pages = new Page()

export default pages

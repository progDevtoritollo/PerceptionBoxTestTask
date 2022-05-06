import axios from 'axios';


class Page {
  API_ENDPOINT = "https://rickandmortyapi.com/api/character/?page="

  async getPage(page:number) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
   
    try{
      console.log(page);
      let response = await axios.get(`${this.API_ENDPOINT}` + page) 
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

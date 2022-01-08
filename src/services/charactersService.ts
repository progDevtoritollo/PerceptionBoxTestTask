import axios from 'axios';


class Characters {
  API_ENDPOINT = "https://rickandmortyapi.com/api/character"

  async getCharacters() {
    axios.defaults.headers.common['accept'] = 'application/json'
   
    try{
      let response = await axios.get(`${this.API_ENDPOINT}`) 
      console.log(response.data)
      return response.data.results
    }
    catch (e) {
    console.log(e)
  }

  }
}
const characters = new Characters()

export default characters

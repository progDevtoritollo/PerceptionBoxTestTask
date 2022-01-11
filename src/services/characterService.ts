import axios from 'axios';

import { CharacterInterface } from "./../types"

class Character {
  API_ENDPOINT = "https://rickandmortyapi.com/api/character"

  async getCharacter(id: number) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
      
      try{
        let response = await axios
        .get<CharacterInterface>(`${this.API_ENDPOINT}/${id}`) 
        // console.log("могу получить - response.data: "+ response)
        console.log(""+ JSON.stringify(response)) 

        return response.data


      }
      catch (e) {
      alert(e)
      console.log(e)
    }
  }
}
const character = new Character()

export default character

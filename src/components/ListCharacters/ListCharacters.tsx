import React, { useState, useEffect } from "react";

import charactersService from "./../../services/charactersService";
import { CharactersInterface } from "./../types/index"
import Character from "./../Character/Character"
import "./ListCharacters.scss";



const ListCharacters: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [characters, setCharacters] = useState<CharactersInterface[]>([])

  async function fetchCharacters() {
    let data = await charactersService.getCharacters()
    if (loading) {
      setCharacters(data)
    }
  }

  useEffect(() => {
    fetchCharacters()
    return () => { setLoading(false) }
  })

  return <div className="character">
    {/* <button onClick={fetchCharacters}>fetchCharacters</button>
    <div>Respond: </div> */}
    {loading ? (<p>Loading...</p>) : (
      <>
        <ul>
          {characters.map((character: CharactersInterface) => (
            <Character key={character.id} name={character.name} image={character.image} status={character.status} />
          ))}
        </ul>
      </>)
    }
  </div>;
};

export default ListCharacters;

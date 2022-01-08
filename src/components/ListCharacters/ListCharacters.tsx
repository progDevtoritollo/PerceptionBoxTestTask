import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

import charactersService from "./../../services/charactersService";
import { CharactersInterface } from "../../types/index"
import Character from "./../Character/Character"
import "./ListCharacters.scss";
import CharactersListAction from "./../../actions/characters"



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
    CharactersListAction.fetchItems()
    return () => { setLoading(false) }
  })

  return <div className="character">
    {/* <button onClick={fetchCharacters}>fetchCharacters</button>
    <div>Respond: </div> */}
    {loading ? (<p>Loading...</p>) : (
      <>
        <ul className="characters-list">
          {characters.map((character: CharactersInterface) => (
            <Character key={character.id} id={character.id} name={character.name} image={character.image} status={character.status} />
          ))}
        </ul>
        <Pagination count={42} color="secondary" />
      </>)
    }
  </div>;
};

export default ListCharacters;

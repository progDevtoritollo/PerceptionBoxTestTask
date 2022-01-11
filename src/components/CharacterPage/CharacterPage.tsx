import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

import { CharacterInterface } from "../../types"
import characterService from "../../services/characterService";
import "./CharacterPage.scss";

// interface CharacterInterface {
//   character: CharactersInterface[];
// }


const CharacterPage: React.FC = () => {
  const [character, setCharacter] = useState<CharacterInterface>()
  const [loading, setLoading] = useState<boolean>(true)
  const location = useLocation();

  async function fetchCharacter() {
    let str = location.pathname.split("/")
    const id = (location.pathname.split("/")[str.length - 1]);
    try {
      let data = await characterService.getCharacter(+id);
      setCharacter(data)
      setLoading(false)
      console.log(character)
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }


  useEffect(() => {
    fetchCharacter()

    // return () => { setLoading(false) }
  }, []);

  return (

    <div className="character-page">
      {loading ? (<p>Loading...</p>) : (
        <>
          <img src={character?.image} alt={character?.name}></img>
          <div className="character">Character Name: {character?.name}</div>
          <div className="character">Character species: {character?.species}</div>
          <div className="character">Character gender: {character?.gender}</div>
          {/* <div className="character">Character location: {character?.location}</div> */}
          {/* <div className="character">Character Name: {character?.episode}</div> */}
          <div className="character">Character status: {character?.status}</div>
          <div className="character">Character created: {character?.created}</div>
        </>
      )}
    </div>
  );
};

export default CharacterPage;

import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

import pagesService from "../../services/pagesService";
import { CharactersInterface } from "../../types/index"
import Character from "./../Character/Character"

import "./ListCharacters.scss";
type ListCharactersInterface = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

const ListCharacters = ({ page, setPage }: ListCharactersInterface) => {

  // const ListCharacters = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [characters, setCharacters] = useState<CharactersInterface[]>([])


  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  async function fetchCharacters() {
    let data = await pagesService.getPage(page)
    // if (loading) {
    setCharacters(data)
    // }
  }

  useEffect(() => {
    fetchCharacters()
    return () => { setLoading(false) }
  }, [characters, page])

  return <div className="character">
    {loading ? (<p>Loading...</p>) : (
      <>
        <ul className="characters-list">
          {characters.map((character: CharactersInterface) => (
            <Character key={character.id} id={character.id} name={character.name} image={character.image} status={character.status} />
          ))}
        </ul>
        <div className="characters-pagination">
          <Pagination page={page} count={42} onChange={handlePaginationChange} color="secondary" />
        </div>
      </>)
    }
  </div>;
};

export default ListCharacters;

import React from "react";
import Avatar from '@mui/material/Avatar';


import "./Character.scss";

interface CharacterProps {
  name: string,
  image: string,
  status: string,
}


const Character = ({ name, image, status }: CharacterProps) => {

  return <div className="character">
    <div><Avatar alt={name} src={image} sx={{ width: 56, height: 56 }} /></div>
    <div className="description">
      <p className="character-name">{name}</p>
      <p className="character-status">{status}</p>
    </div>
  </div>;
};

export default Character;

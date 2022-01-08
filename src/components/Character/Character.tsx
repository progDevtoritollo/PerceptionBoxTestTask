import React from "react";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./Character.scss";

interface CharacterProps {
  id: number,
  name: string,
  image: string,
  status: string,
}


const Character = ({ id, name, image, status }: CharacterProps) => {
  function CardhandleClik() {
    console.log(id + " " + name + " " + status)
  }
  //   return (
  //     <div className="character">
  //       <div><Avatar alt={name} src={image} sx={{ width: 56, height: 56 }} /></div>
  //       <div className="description">
  //         <div className="character-name">{name}</div>
  //         <div className="character-status">{status}</div>
  //       </div>
  //     </div>);
  // };

  return (
    <div className="character">
      <Card sx={{ maxWidth: 345 }} onClick={CardhandleClik}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {status}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions >
          <div className="card-footer"><Button size="small" color="primary">
            Like
          </Button>
            <Button size="small" color="primary">
              Dislike
            </Button>
          </div>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default Character;

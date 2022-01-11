import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { useHistory } from "react-router-dom";

import "./Character.scss";


interface CharacterProps {
  id: number,
  name: string,
  image: string,
  status: string,
}


const Character = ({ id, name, image, status }: CharacterProps) => {

  const history = useHistory();

  function CardhandleClik() {
    console.log(id + " " + name + " " + status)
    history.push('/character/' + id);
  }


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

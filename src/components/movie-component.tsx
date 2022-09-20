import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import blossom from "./blossom.png";

type MovieProps = {
    /**
     * Id of movie
     */
     idMovie: number;
     /**
     * Image of movie
     */
    imageMovie: string;
    /**
     * Name of movie
     */
    nameMovie?: string;
     /**
     * onClick in the movie
     */
    onClickMovie: (id: number) => void;
};

const Movie: React.FC<MovieProps> = (props) => {
    const { idMovie, imageMovie, nameMovie, onClickMovie } = props;
    
    const [skip, setSkip] = React.useState(0);

    useEffect(() => {
       
    }, []);
  
    useEffect(() => {
    }, [skip]);  
    
    const onClick = (id: number) => {
        onClickMovie(id)
    };

    return (
        <Card onClick={() => onClick(idMovie)}>
            <CardMedia
              component="img"
          width="80px"
          style={{padding:"10px"}}
                image={blossom}
            //   image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
        <CardContent style={{ backgroundColor: "#4D4D4D" }}>
          
              <Typography color="white" gutterBottom variant="body1" component="div">
                    {nameMovie}
              </Typography>
        </CardContent>
        </Card>
      );
};
export default Movie;

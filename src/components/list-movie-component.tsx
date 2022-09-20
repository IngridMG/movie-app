import React, { useEffect } from "react";
import Movie from "./movie-component";
import { MovieType } from "../utils/types";
import axios from 'axios'
import {
    IconButton,
    DialogContent,

} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MovieDetails from "./movie-details_component";
import { BootstrapDialog, BootstrapDialogTitle, Item } from "../utils/dialog-elements";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
  
type ListMovieProps = {
     /**
     * Image of movie
     */
    url: string;
    
};

const ListMovie: React.FC<ListMovieProps> = (props) => {
    const { url } = props;
      
    const [movies, setMovies] = React.useState(Array<MovieType>());
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [idSelect, setIdSelect] = React.useState(0);  

    useEffect(() => {
        fetchItems();        
    }, [page]);

    const fetchItems = async () => {
        axios.get(`${url}&page=${page}`).then((response) => {
            setMovies(response.data.results)
          });
    }

    const nextPage = () => {
        setPage(page + 1)
        console.log(page)
    }
    const beforePage = () => {
        if (page <= 1)
            setPage(1)
        else
            setPage(page - 1)
        console.log(page)
    }

    const onClickMovie = (id: number) => {
        setIdSelect(id);
        handleOpen();
    };
   
    return (
        <div >
            <BootstrapDialog 
                style={{width: "1000px"}}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Detalles de la pelicula
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <MovieDetails idMovie={idSelect}/>
                </DialogContent>        
            </BootstrapDialog>
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} >
                    {movies.map(item => (
                        <Grid item xs={2} sm={1} md={3} key={item.id}>
                            <Item>
                                <Movie imageMovie="https://image.tmdb.org/t/p/w185_and_h278_bestv2/" key={item.id} nameMovie={item.title} idMovie={item.id} onClickMovie={ () => onClickMovie(item.id)}/>
                            </Item>
                        </Grid>
                        ))}
                </Grid>
            </Box>

            <div>
            <IconButton onClick={beforePage} size="large">
                <ArrowCircleLeftIcon />
                    </IconButton>
                <IconButton onClick={nextPage} size="large">
                    <ArrowCircleRightIcon />
            </IconButton>
            </div>
            
        </div>
    );
};
export default ListMovie;

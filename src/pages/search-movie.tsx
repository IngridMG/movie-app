import React, { useEffect } from "react";
import Movie from "../components/movie-component";
import { MovieType } from "../utils/types";
import axios from 'axios'
import {
    Button,
    IconButton,
    TextField,
    DialogContent,
    Box,
    Grid
} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MovieDetails from "../components/movie-details_component";
import { BootstrapDialog, BootstrapDialogTitle, Item } from "../utils/dialog-elements";

const SearchMovie: React.FC = () => {

    const baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664'
        
    const [searchMovie, setSearchMovie] = React.useState("");
    const [movies, setMovies] = React.useState(Array<MovieType>());
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [idSelect, setIdSelect] = React.useState(0);  

    useEffect(() => {
        searchMovies();        
    }, [page]);

    const searchMovies = async () => {
        if (searchMovie != null && searchMovie != "")
            axios.get(`${baseURL}&query=${searchMovie}&page=${page}`).then((response) => {
                setMovies(response.data.results)
            })
            .catch((reason: any) => {
                alert(`Ocurrio el error${reason}`)
        })        
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
    const onChangeMovieToSearch = (value: any) => {
        setSearchMovie(value)
    }

    const search = () => {
        setPage(1);
        searchMovies();
    }

    const onClickMovie = (id: number) => {
        setIdSelect(id);
        handleOpen();
    };
   
    return (
        <div >
            <BootstrapDialog 
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Details of movie
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <MovieDetails idMovie={idSelect}/>
                </DialogContent>        
            </BootstrapDialog>
            <div style={{paddingTop:"20px"}}>
                <TextField
                    value={searchMovie}
                    onChange={(e) => {onChangeMovieToSearch(e.target.value);}}
                    label="Movie name"
                />
                <Button onClick={search} style={{
                        textTransform: "none",
                        marginLeft: "10px",
                    height: "55px",
                    width: "100px",
                        color: "#F9F9F9",
                        backgroundColor: "#4D4D4D",
                        borderColor: "gray",
                    }}>
                    Search
                </Button>
            </div>

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
export default SearchMovie;

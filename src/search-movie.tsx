import React, { useEffect } from "react";
import Movie from "./components/movie-component";
import { MovieType } from "./types";
import axios from 'axios'
import {
    Button,
    IconButton,
    TextField
} from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

const SearchMovie: React.FC = () => {

    const baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664'
        
    const [searchMovie, setSearchMovie] = React.useState("");
    const [movies, setMovies] = React.useState(Array<MovieType>());
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        searchMovies();        
    }, [page]);

    const searchMovies = async () => {
        axios.get(`${baseURL}&query=${searchMovie}&page=${page}`).then((response) => {
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
    const onChangeMovieToSearch = (value: any) => {
        setSearchMovie(value)
    }

    const search = () => {
        setPage(1);
        searchMovies();
    }
   
    return (
        <div >

            <div>
                <TextField
                    value={searchMovie}
                    onChange={(e) => {onChangeMovieToSearch(e.target.value);}}
                    label="Nombre"
                />
                <Button onClick={search}>
                    Buscar
                </Button>
            </div>

            {movies.map(item => (
                <Movie imageMovie="https://image.tmdb.org/t/p/w185_and_h278_bestv2/" key={item.id} nameMovie={item.title} />
            ))}
            
            <div>
            <IconButton onClick={beforePage}>
                <ArrowLeftRounded />
                    </IconButton>
                <IconButton onClick={nextPage}>
                    <ArrowRightRounded />
            </IconButton>
            </div>
            
            
        </div>
    );
};
export default SearchMovie;

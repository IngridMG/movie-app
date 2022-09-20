import React, { useEffect } from "react";
import Movie from "./components/movie-component";
import { MovieType } from "./types";
import axios from 'axios'
import {
    IconButton
} from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

const PopularityBoysMovies: React.FC = () => {
        
    const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_adult=false&with_genres=28'

    const [popularity_movies, setMovies] = React.useState(Array<MovieType>());
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        fetchItems();        
    }, [page]);

    const fetchItems = async () => {
        axios.get(`${baseURL}&page=${page}`).then((response) => {
            //console.log(response.data)
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
   
    return (
        <div >
            {popularity_movies.map(item => (
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
    )
};
export default PopularityBoysMovies;

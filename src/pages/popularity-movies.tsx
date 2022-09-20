import React from "react";
import ListMovie from "../components/list-movie-component";

const PopularityMovies: React.FC = () => {
   
    const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_video=false'

    return (
        <ListMovie url={baseURL}/>
    );
};
export default PopularityMovies;

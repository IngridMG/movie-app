import React from "react";
import ListMovie from "../components/list-movie-component";  

const PostersMovie: React.FC = () => {      
    const baseURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664'
   
    return (
        <ListMovie url={baseURL}/>
    );
};
export default PostersMovie;

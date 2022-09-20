import React, { useEffect } from "react";
import axios from 'axios'
import blossom from "./movie_image.png";

type MovieDetailsProps = {
     /**
     * Image of movie
     */
    idMovie: number;
};


const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
    const { idMovie } = props;

    const baseURL = 'https://api.themoviedb.org/3/movie/'
    const apiKEY = "api_key=45bf6592c14a965b33549f4cc7e6c664"

    const [title, setTitle] = React.useState("");
    const [synopsis, setSynopsis] = React.useState("");
    const [tagline, setTagline] = React.useState("");
    const [popularity, setPopularity] = React.useState(0);
    const [votes, setVotes] = React.useState(0);

    useEffect(() => {
        fetchItems()
    }, []);

    const fetchItems = async () => {
        console.log(idMovie)
        axios.get(`${baseURL}${idMovie}?${apiKEY}`).then((response) => {
            console.log(response.data)
            setTitle(response.data.title)
            setSynopsis(response.data.overview)
            setTagline(response.data.tagline)
            setPopularity(response.data.popularity)
            setVotes(response.data.vote_count)
        })
        .catch((reason: any) => {
            alert(`Ocurrio el error${reason}`)
    })        
    }

    return (
        <div >
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
            <div style={{ paddingLeft:"10px", paddingRight:"20px"  }}>
                <img
                        src={blossom}
                        width="250px"
                    alt={"Image of Movie"}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label style={{ paddingBottom:"5px"}}>Titulo: {title}</label>
                    <label style={{ paddingBottom:"5px"}}>Sinopsis: {synopsis}</label>
                    <label style={{ paddingBottom:"5px"}}>Frase célebre: {tagline}</label>
                    <label style={{ paddingBottom:"5px"}}>Popularidad: {popularity}</label>
                    <label>Votos: {votes}</label>
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;

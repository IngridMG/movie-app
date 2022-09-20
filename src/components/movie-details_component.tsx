import React, { useEffect } from "react";

type MovieDetailsProps = {
     /**
     * Image of movie
     */
    imageMovie: string;
    /**
     * Name of movie
     */
    nameMovie?: string;
     /**
     * Synopsis of movie
     */
    synopsisOfMovie?: string;
      /**
     * Famous phrase of movie
     */
    famousPhraseOfMovie?: string;
     /**
     * popularity of movie
     */
    popularityOfMovie: string;
    /**
     * Votes of movie
     */
    votesMovie: number;
};

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
    const { imageMovie, nameMovie, votesMovie, popularityOfMovie,synopsisOfMovie, famousPhraseOfMovie } = props;
    
    const [skip, setSkip] = React.useState(0);

    useEffect(() => {
       
    }, []);

  
    useEffect(() => {
    }, [skip]);   

    return (
        <div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <img
                    src={imageMovie}
                    alt={"Image of Movie"}
                />
                <label>{nameMovie}</label>
            </div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <label>Sinopsis: </label>
                <label>{synopsisOfMovie}</label>
            </div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <label>Frase célebre: </label>
                <label>{famousPhraseOfMovie}</label>
            </div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <label>Frase célebre: </label>
                <label>{famousPhraseOfMovie}</label>
            </div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <label>Popularidad: </label>
                <label>{popularityOfMovie}</label>
            </div>
            <div style={{   display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                <label>Votos: </label>
                <label>{votesMovie}</label>
            </div>
        </div>
    );
};
export default MovieDetails;

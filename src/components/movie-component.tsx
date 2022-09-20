import React, { useEffect } from "react";


type MovieProps = {
     /**
     * Image of movie
     */
    imageMovie: string;
    /**
     * Name of movie
     */
     nameMovie?: string;
};

const Movie: React.FC<MovieProps> = (props) => {
    const { imageMovie, nameMovie } = props;
    
    const [skip, setSkip] = React.useState(0);

    useEffect(() => {
       
    }, []);

  
    useEffect(() => {
    }, [skip]);   

    return (
        <div style={{   display: "flex", flexDirection: "row", justifyContent: "center", }}>
            <img
                src={imageMovie}
                alt={"Image of Movie"}
            />
            <label>{nameMovie}</label>
        </div>
    );
};
export default Movie;

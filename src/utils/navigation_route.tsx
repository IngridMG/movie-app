import React, { useEffect } from "react";
import {Link} from 'react-router-dom'

const Nav: React.FC = () => {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <ul className="navLinks">
                <Link style={navStyle} to={"/"}>Cinema Movies</Link>
                <Link style={navStyle} to={"/popularity"}>Popular Movies</Link>
                <Link style={navStyle} to={"/popularity_boys"}>Movies for Kids</Link>
                <Link style={navStyle} to={"/search_movie"}>Search Movie</Link>
            </ul>
            
        </nav>
    );
};
export default Nav;

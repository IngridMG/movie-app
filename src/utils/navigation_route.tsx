import React, { useEffect } from "react";
import {Link} from 'react-router-dom'

const Nav: React.FC = () => {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <ul className="navLinks">
                <Link style={navStyle} to={"/"}><li>Cartelera</li></Link>
                <Link style={navStyle} to={"/popularity"}><li>Películas populares</li></Link>
                <Link style={navStyle} to={"/popularity_boys"}><li>Películas para los niños</li></Link>
                <Link style={navStyle} to={"/search_movie"}><li>Buscar película</li></Link>
            </ul>
            
        </nav>
    );
};
export default Nav;

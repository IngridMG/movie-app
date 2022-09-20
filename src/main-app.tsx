import React, { useEffect } from "react";
import Nav from './navigation_route'
import PostersMovie from './posters_movie'
import PopularityMovie from './popularity-movies'
import PopularityBoysMovie from './popularity-boys-movies'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import SearchMovie from "./search-movie";

const MainApp: React.FC = () => {
    
    const [skip, setSkip] = React.useState(0);

    useEffect(() => {
       
    }, []);

  
    useEffect(() => {
    }, [skip]);   

    return (
        <Router >
            <div className="App">
                <Nav />
                <Routes>                
                    <Route path="/" element={<PostersMovie />} />
                    <Route path="/popularity" element={<PopularityMovie />} />
                    <Route path="/popularity_boys" element={<PopularityBoysMovie />} />
                    <Route path="/search_movie" element={<SearchMovie />} />
                </Routes>
            </div>
        </Router>
    );
};
export default MainApp;

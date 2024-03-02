import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    
    

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page.</p>
            <Link to="/about">About</Link>
            <Link to="/carousel">Carousel</Link>
            <Link to="/test">Test</Link>

            <br />
            <Link to="/test">Test</Link>
        </div>
    );
    }

export default Home;
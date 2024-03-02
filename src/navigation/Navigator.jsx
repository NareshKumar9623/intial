import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "../lib/About";
import Home from "../lib/Home";
import CarouselPage from "../lib/CarouselPage";
import Test1 from "../lib/testing/Test1";

const Navigator = () => {
    console.log("Navigator");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/carousel" element={<CarouselPage />} />
                <Route path="/test" element={<Test1 />} />
            </Routes>
        </Router>
    );
}

export default Navigator;
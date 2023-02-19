import React from "react";
import AboutMe from "./contentsaboutme";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from "../App";
function About(){
    return(
        <Routes>
        <Route path="/" element={<AboutMe />} />
        </Routes>
    );
}



export default About;
import React from "react";
import AboutMe from "./contentsaboutme";
function About(){
    return(
        <Routes>
        <Route path="/" element={<AboutMe />} />
        </Routes>
    );
}



export default About;
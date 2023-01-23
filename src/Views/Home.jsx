import "../styles/Home.scss";
import React from "react";
import AllMovies from "./AllMovies";
import AllCinemas from "./AllCinemas";

function Home ({ listMovies, listCinemas }) {
    //console.log(`Home page : ${ReqsApi}`);
    return (
        <div className="Home">
            <AllMovies listMovies={listMovies} />
            <AllCinemas listCinemas = {listCinemas} />
        </div>
    )
 
}

export default Home;
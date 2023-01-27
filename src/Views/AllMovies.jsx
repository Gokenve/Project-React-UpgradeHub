import "../styles/AllMovies.scss"
import React from "react";
import CardButton from "../components/cardButton/CardButton.jsx";

function AllMovies({ listMovies, handleClicK }) {

    return (
        <section className = "allMovies">
            <CardButton 
            listMovies={listMovies} handleClicK= {handleClicK}
            page='detailMovie' />
        </section>
    )
}

export default AllMovies;
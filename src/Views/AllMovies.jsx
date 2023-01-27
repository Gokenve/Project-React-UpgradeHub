import "../styles/AllMovies.scss"
import React from "react";
import CardButton from "../components/cardButton/CardButton.jsx";

function AllMovies ({ listMovies, handleClicK }) {

    //const handleMovie = (movie) => {
        //console.log(movie);
    //}
    return (
        <section className = "AllMovies">
            <CardButton listMovies={listMovies} handleClicK= {handleClicK} />
            {/*<ul>
                {listMovies.map(( movie, index ) => {
                    return (
                        <article className = "moviesCard" onClick={handleMovie(movie)} key = {index}>
                            <li className="listMovies">
                                <img className = "movieImg" src = {movie.picture} alt ={movie.title} />
                                <p>{movie.title}</p>
                                <p>{movie.year}</p>
                            </li>
                    </article>
                    )
                })}
            </ul>*/}
        </section>
    )
}

export default AllMovies;
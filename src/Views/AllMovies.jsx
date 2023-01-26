import "../styles/AllMovies.scss"
import React from "react";

function AllMovies ({ listMovies }) {
    
    return (
        <section className = "AllMovies">
            <ul>
                {listMovies.map(( movie, index ) => {
                    return (
                        <article className = "moviesCard" key = {index}>
                            <li className="listMovies">
                                <img className = "movieImg" src = {movie.picture} alt ={movie.title} />
                                <p>{movie.title}</p>
                                <p>{movie.year}</p>
                            </li>
                    </article>
                    )
                })}
            </ul>
        </section>
    )
}

export default AllMovies;
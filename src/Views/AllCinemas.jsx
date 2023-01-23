import "../styles/AllCinemas.scss"
import React from "react";

function AllCinemas({ listCinemas }) {
  console.log(listCinemas);

  return (
    <section className="allCinemas">
      <ul>
        {listCinemas.map((cinema, index) => {
          return (
            <article className="cinemasCard" key={index}>
              <li className="listCinemas">
                <p>{cinema.name}</p>
                <p>{cinema.location}</p>
                <ul>
                  {cinema.movies.map((movie, index) => {
                    return (
                      <article className="moviesCinemaCard" key={index}>
                        <li className="listMovies">
                          <img className="cinemaMovieImg" src={movie.picture} alt={movie.title} />
                          <p>{movie.title}</p>
                        </li>
                      </article>
                    );
                  })}
                </ul>
              </li>
            </article>
          );
        })}
      </ul>
    </section>
  );
}

export default AllCinemas;

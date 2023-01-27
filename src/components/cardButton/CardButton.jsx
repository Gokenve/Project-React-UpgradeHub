import "./CardButton.scss";
import React from "react";

const CardButton = ({ listMovies, listCinemas, handleClicK, page }) => {

  if (listMovies) {
    return (
      <div className="containerMovieButton">
        <ul>
          {listMovies.map((movie, index) => {
            return (
              <button
              className="movieButton"
              onClick={handleClicK}
              page={page}
              key={index}>
                <article className="moviesCard">
                  <li className="listMovies">
                    <img
                      className="movieImg"
                      src={movie.picture}
                      alt={movie.title}
                      page={page}
                      id={movie._id}
                    />
                    <div className="containerTextCard">
                      <h2 page={page} id={movie._id}>{movie.title}</h2>
                      <p page={page} id={movie._id}>{movie.year}</p>
                    </div>
                  </li>
                </article>
              </button>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="containerCinemaButton">
        <ul>
          {listCinemas.map((cinema, index) => {
            return (
              <button
                className="cinemaButton"
                onClick={handleClicK}
                page={page}
                key={index} >
                <article className="cinemasCard" key={index}>
                  <li className="listCinemas">
                    <p page={page} id={cinema._id}>{cinema.name}</p>
                    <p page={page} id={cinema._id}>{cinema.location}</p>
                    <div className="containerTitleMoviesCinemasCard">
                      <ul>
                        {cinema.movies.map((movie, index) => {
                          return (
                            <article className="moviesCinemaCard" key={index}>
                              <li className="listMovies">
                                <p id={cinema._id}>{movie.title}</p>
                              </li>
                            </article>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </article>
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default CardButton;

import React from "react";

const CardButton = ({
  listMovies,
  listCinemas,
  handleClicK,
}) => {
  if (listMovies) {
    return (
      <div className="containerMovieButton">
        <ul>
          {listMovies.map((movie) => {
            return (
              <button className = "movieButton" onClick = {handleClicK} key = {movie._id} >
                <article className = "moviesCard" >
                  <li className = "listMovies">
                    <img
                      className = "movieImg"
                      src={movie.picture}
                      alt={movie.title}
                      id={movie._id}
                    />
                    <div className="containerTextCard">
                      <h2 id = {movie._id} >{movie.title}</h2>
                      <p id = {movie._id} >{movie.year}</p>
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
      <div className="movieButton">
        <ul>
          {listCinemas.map((cinema) => {
            return (
              <article className="cinemasCard" key={cinema._id}>
                <li className="listCinemas">
                  <p>{cinema.name}</p>
                  <p>{cinema.location}</p>
                  <ul>
                    {cinema.movies.map((movie, index) => {
                      return (
                        <article className="moviesCinemaCard" key={index}>
                          <li className="listMovies">
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
      </div>
    );
  }
};

export default CardButton;

import "../styles/AllCinemas.scss";
import React from "react";
import CardButton from "../components/cardButton/CardButton.jsx";

function AllCinemas({ listCinemas, handleClicK }) {

  return (
    <section className="allCinemas">
      <CardButton listCinemas={listCinemas} handleClick= {handleClicK} />
        {/*<ul>
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
        </ul>*/}
    </section>
  );
}

export default AllCinemas;

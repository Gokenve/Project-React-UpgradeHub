import "../styles/DetailMovies.scss";
import React from "react";

const DetailMovie = ({ movie }) => {
  return (
    <article className="oneMovieCard">
      <div className="containerImgDet">
        <img className="moviImgDet" src={movie.picture} alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>Género</p>
        <ul>
          {movie.genre.map((item, index) => {
            return (
              <li key={index}>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
        <p>Año : {movie.year}</p>
        <p>Duración : {movie.data_sheet.duration}</p>
        <p>Director : </p>
        <h3>{movie.director}</h3>
        <p>Reparto :</p>
        <ul>
        {movie.cast.map((item, index) => {
            return (
                <li key={index}>
                    <h3>{item}</h3>
                </li>
            );
          })}
        </ul>
        <p>Producción :</p>
        <ul>
        {movie.data_sheet.producers.map((item, index) => {
            return (
                <li key={index}>
                  <h3>{item}</h3>
                </li>
            );
          })}
        </ul>
        <p>Guión :</p>
          {movie.data_sheet.script.map((item, index) => {
            return (
                <li key={index}>
                  <h3>{item}</h3>
                </li>
            );
          })}
      </div>
    </article>
  );
};

export default DetailMovie;

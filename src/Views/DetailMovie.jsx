import React from 'react'

const DetailMovie = ({ movie }) => {
  return (
    <article className = 'oneMovieCard'>
        <img className = 'moviImgDet' src = {movie.picture} alt = {movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.genre.map((item) => {
                return (
                    <ul key={item._id}>
                        <li>
                            <h3>{item}</h3>
                        </li>
                    </ul>
                );
            })
        }</p>
        <p>{movie.year}</p>
        <p>{movie.data_sheet.duration}</p>
        <h3>{movie.director}</h3>
        <p>{movie.cast.map((item) => {
                return (
                    <ul key={item._id}>
                        <li>
                            <h3>{item}</h3>
                        </li>
                    </ul>
                );
            })
        }</p>
        <p>{movie.data_sheet.producers.map((item) => {
                return (
                    <ul key={item._id}>
                        <li>
                            <h3>{item}</h3>
                        </li>
                    </ul>
                );
            })
        }</p>
        <p>{movie.data_sheet.script.map((item) => {
                return (
                    <ul key={item._id}>
                        <li>
                            <h3>{item}</h3>
                        </li>
                    </ul>
                );
            })
        }</p>
    </article>
  )
}

export default DetailMovie

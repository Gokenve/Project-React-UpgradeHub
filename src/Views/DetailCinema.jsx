import "../styles/DetailCinema.scss";
import React from 'react'

const DetailCinema = ({ cinema }) => {
  return (
    <article>
        <div>
            <h2>{cinema.name}</h2>
            <p>Website :</p>
            <p>{cinema.website}</p>
            <p>Localidad : {cinema.location}</p>
            <p>Contacto :</p>
            <h4>{cinema.contact.email}</h4>
            <h4>{cinema.contact.address}</h4>
            <h4>{cinema.contact.phone}</h4>
            <p>Peliculas :</p>
            <ul>
                {cinema.movies.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item.picture} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <p>Duración : </p>
                            <p>{item.duration}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    </article>
  )
};

export default DetailCinema;

import "../styles/Home.scss";

import React from "react";
//import { Route, Routes } from "react-router-dom";

import AllMovies from "./AllMovies";
import AllCinemas from "./AllCinemas";

import Button from "../components/button/Button";
import Inputs from "../components/inputs/Inputs";

function Home({ home, listMovies, listCinemas, handleFilter, handleClicK, filter }) {
  //console.log('Home ----- ', listMovies);
  //console.log('Home ----- ', listCinemas);
 //console.log('Home tipo --------- ', typeFilter)
 /*const valuesText = (textInput) => {
  filter === 'movies' ? textInput = 'Título de la película' : textInput = 'Nombre del cine';
  console.log('----- textImput de Home -------- ', textInput)
  return textInput;
 }*/
 const typeInput = 'text';

  return (
    <>
      <div className= "containerButtons">
        <Button text= "Películas" id= "movies" typeButton= "buttonHome" handleClicK= {handleClicK} />
        <Button text= "Cines" id= "cinemas" typeButton= "buttonHome" handleClicK= {handleClicK}  />
        <Inputs type= {typeInput} onChange= {handleFilter} value= {home}/>

        {/*<label htmlFor="">Filtrar por {filter}</label>
        <input type="text" onChange={handleFilter} value={filter} />*/}
      </div>
      <section className="Home" >
        { home === 'movies' ? <AllMovies listMovies ={listMovies}/>
        :
        <AllCinemas listCinemas ={listCinemas}/>}
      </section>
    </>
  );
}

export default Home;

import "../styles/Home.scss";

import React from "react";
//import { Route, Routes } from "react-router-dom";

import AllMovies from "./AllMovies";
import AllCinemas from "./AllCinemas";

import Button from "../components/button/Button";
import Inputs from "../components/inputs/Inputs";

function Home({
  listMovies,
  listCinemas,
  movie,
  handleFilter,
  handleClicK,
  page,
  filter,
}) {
  let inputValue;
  let inputText;

  if (page === "movies") {
    inputValue = "Título de la película";
    inputText = "Filtrar película";
  } else {
    inputValue = "Nombre del cine";
    inputText = "Filtrar cine ";
  }

  return (
    <>
      <div className="containerButtons">
        <Button
          text="Películas"
          page="movies"
          classButton="buttonHome"
          handleClicK={handleClicK}
        />
        <Button
          text="Cines"
          page="cinemas"
          classButton="buttonHome"
          handleClicK={handleClicK}
        />
        <Inputs
          type="text"
          handleFilter={handleFilter}
          value={inputValue}
          page={page}
          inputText={inputText}
        />

        {/*<label htmlFor="">Filtrar por {filter}</label>
        <input type="text" onChange={handleFilter} value={filter} />*/}
      </div>
      <section className="Home">
        {page === "movies" ? (
          <AllMovies
          listMovies={listMovies}
          handleClicK={handleClicK} 
          movie={movie}
          />
        ) : (
          <AllCinemas listCinemas={listCinemas} handleClicK={handleClicK} />
        )}
      </section>
    </>
  );
}

export default Home;

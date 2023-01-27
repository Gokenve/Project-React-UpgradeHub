import "../styles/Home.scss";

import React from "react";
//import { Route, Routes } from "react-router-dom";

import AllMovies from "./AllMovies";
import AllCinemas from "./AllCinemas";

import Button from "../components/button/Button";
import Inputs from "../components/inputs/Inputs";
import DetailMovie from "./DetailMovie";
import DetailCinema from "./DetailCinema";


function Home({
  listMovies,
  listCinemas,
  movie,
  cinema,
  handleFilter,
  handleClicK,
  page,
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
      </div>
      <section className="Home">
        {page === "movies" && (
          <AllMovies
            listMovies={listMovies}
            handleClicK={handleClicK}
            page={page} /> )}
        {page === "cinemas" && (
          <AllCinemas
            listCinemas={listCinemas}
            handleClicK={handleClicK}
            page={page}/>)}
        {page === "detailMovie" &&
          <DetailMovie
          movie={movie}
          handleClicK={handleClicK}
          page={page} />}
        {page === "detailCinema" &&
          <DetailCinema
            movie={cinema}
            handleClicK={handleClicK}
            page={page} />}
      </section>
    </>
  );
}

export default Home;

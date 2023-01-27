import "../styles/AllCinemas.scss";
import React from "react";
import CardButton from "../components/cardButton/CardButton.jsx";

function AllCinemas({ listCinemas, handleClicK }) {

  return (
    <section className="allCinemas">
      <CardButton
      listCinemas={listCinemas}
      handleClick= {handleClicK}
      page="detailCinema" />
    </section>
  );
};

export default AllCinemas;

import "../styles/App.scss";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Views/Home";

import reqsApiMovies from "../sevices/reqsApiMovies";
import reqsApiCinemas from "../sevices/reqsApiCinemas";

function App() {

  //? State Variables Declarations
  const [listMovies, setListMovies] = useState([]);
  //const [filteredListMovies, setFilteredListMovies] = useState([]);
  const [movie, setMovie] = useState({
    _id: "",
    title: "",
    director: "",
    cast: [],
    year: Number,
    genre: [],
    data_sheet: {
      producers: [],
      script: [],
      duration: "",
    }
  });
  const [listCinemas, setListCinemas] = useState([]);
  const [cinema, setCinema] = useState({
    _id: "",
    name: "",
    website: "",
    location: "",
    movies: [{
      _id: "",
      picture: "",
      title: "",
      duration: "",
      contact: {
        email: "",
        address: "",
        phone: "",
      } 
    }],
      
  });
  const [page, setPage] = useState('movies');

  //? Request to the API
  useEffect(() => {
    reqsApiMovies().then((res1) => {
      const ListAllMovies = res1.data;
      setListMovies(ListAllMovies);
    });
    reqsApiCinemas().then((res2) => {
      const listAllCinemas = res2.data;
      setListCinemas(listAllCinemas);
    });
  }, []);

  //? Clicks event handler function
  const handleClicK = (ev) =>
  {
    let eventFromnPage = ev.target.attributes.page.value; 
    ev.preventDefault();
    const foundMovie = listMovies.find( movieToFind => {
      return movieToFind._id === ev.target.id
    });
    const foundCinema = listCinemas.find( cinemaToFind => {
      return cinemaToFind._id === ev.target.id
    });
    setPage(eventFromnPage)
    setMovie({ ...foundMovie });
    setCinema({ ...foundCinema });
  }

    //? Inputs event handler function
    const handleFilter = (ev) =>
  {
    ev.preventDefault();
    setListMovies(ev.target.value);
    setListCinemas(ev.target.value);
  }

  return (
    <div className="App">
      <Routes>
        <>{/*Route path="/" element={} */}</>
        <Route path= "/home/*" element= { 
          <Home 
          listMovies = {listMovies}
          listCinemas = {listCinemas}
          movie = {movie}
          cinema = {cinema}
          handleFilter = {handleFilter}
          handleClicK = {handleClicK}
          page= {page}
           /> 
        }/>
        <>{/*Route path= "/user" element= {} */}</>
      </Routes>
    </div>
  );
};

export default App;

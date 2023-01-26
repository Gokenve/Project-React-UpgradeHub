import "../styles/App.scss";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Views/Home";

import reqsApiMovies from "../sevices/reqsApiMovies";
import reqsApiCinemas from "../sevices/reqsApiCinemas";

function App() {
  const [listMovies, setListMovies] = useState([]);
  const [listCinemas, setListCinemas] = useState([]);
  const [home, setHome] = useState('movies');
  const [filter, setFilter] = useState('movies');

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

  const handleClicK = (ev) =>
  {
      console.log('---------- HandleClick en App ----------', ev.target.id);
      ev.target.className === "buttonHome" &&
      ev.preventDefault();
      setHome(ev.target.id);
      setFilter(ev.target.id);
      
  }

    const handleFilter = (ev) =>
  {
    console.log('Filtro app -------- ', ev.target);
    ev.preventDefault();
    setListMovies(ev.target.value);
    setListCinemas(ev.target.value);
  }

  return (
    <div className="App">
      <Routes>
        <>{/*Route path="/" element={} */}</>
        <Route path= "/home/*" element= { 
          <Home listMovies= {listMovies} listCinemas= {listCinemas} handleFilter= {handleFilter} handleClicK= {handleClicK} home= {home} filter= {filter} /> 
        }/>
        <>{/*Route path= "/reister" element= {} */}</>
      </Routes>


    </div>
  );
}

export default App;

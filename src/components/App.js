import '../styles/App.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import ReqsApi from "../sevices/ReqsApi";
import Home from '../Views/Home';

function App() {

  const [listMovies, setListMovies] = useState([]);
  const [listCinemas, setListCinemas] = useState([]);
  console.log('UseState ---- ', listMovies, listCinemas);

  useEffect(() => {
    axios.get("http://localhost:4000/movies")
    .then((res1) => {
        const ListAllMovies = res1.data;
        console.log(ListAllMovies);
        setListMovies(ListAllMovies);
    });
}, []);

useEffect(() => {

  axios.get("http://localhost:4000/cinemas").then((res2) => {
      const listAllCinemas = res2.data;
      console.log(listAllCinemas);
      setListCinemas(listAllCinemas);
  });

}, []);

  console.log('App ------- ', ReqsApi);
  return (
    <div className="App">
      <Home listMovies = {listMovies} listCinemas = {listCinemas} />
    </div>
  );
}

export default App;

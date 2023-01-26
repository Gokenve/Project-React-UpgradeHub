import axios from "axios";

const reqsApiMovies = () => {
    
    return axios.get("http://localhost:4000/movies");

}

export default reqsApiMovies;
import axios from "axios";

const reqsApiMovies = (newUser) => {
    
    return axios.post("http://localhost:4000/user/register", {newUser});

}

export default reqsApiMovies;
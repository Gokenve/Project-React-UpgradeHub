import axios from "axios";

const reqsApiCinemas = () => {
    
    return axios.get("http://localhost:4000/cinemas");

}

export default reqsApiCinemas;
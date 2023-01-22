import { useEffect } from "react";
import axios from "axios";

const ReqsApi = () => {

    useEffect(() => {

        axios.get("http://localhost:4000/movies")
        .then((res1) => {
            console.log(res1.data);
        });

    }, []);

    useEffect(() => {

        axios.get("http://localhost:4000/cinemas").then((res2) => {
            console.log(res2.data);
        });

    }, []);

}

export default ReqsApi;
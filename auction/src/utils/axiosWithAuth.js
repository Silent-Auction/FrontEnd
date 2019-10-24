import axios from "axios";

export default function axiosWithAuth() {

    return axios.create({
        baseURL: "https://silent-auction-bw.herokuapp.com/api/",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
} 
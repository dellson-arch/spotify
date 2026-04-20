import axios from "axios";
import { useDispatch } from "react-redux";

export let axiosInstance = axios.create({
    baseURL : "https://fakestoreapi.com"
})

let dispatch = useDispatch()

axiosInstance.interceptors.response.use(
    (response) => {
        return response //return karta hu tab mera waha ui tak pouchega 
    },
    (error) => {}
)


Q. ye chalega ya nahi 
A-> Nahi kyu ki hooks can only be called in functional component
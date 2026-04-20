import axios from "axios";
import { addErrors } from "../../shared/state/errorSlice";
import { dispatch } from "../store/store";

export let axiosInstance = axios.create({
    baseURL : "https://fakestoreapi.com"
})



axiosInstance.interceptors.response.use(
    (response) => {
        // return response //return karta hu tab mera waha ui tak pouchega
        console.log("response in interceptors-->",response)
        return response 
    },
    (error) => {
        console.log("error in api", error.message) //ye mera error ka message hai ab isko mere ko redux me update karna hai but apan dispatch call idhar nahi kar sakte
        dispatch(addErrors(error.message)) //solution
    }
)
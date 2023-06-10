import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


// crating a securedAxios
const securedAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

const useSecuredAxios = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect( ()=>{
        securedAxios.interceptors.request.use((config)=>{
            const token = localStorage.getItem("secret-token");
            if(token){
                config.headers.Authorization = `bearer ${token}`
            }
            return config;

        })

        axios.interceptors.response.use( response=> response, async(error) =>{
            if(error.response && (error.response.status === 401 || error.response.status === 403)){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        })
    },[logOut, navigate])





    return [securedAxios];
};

export default useSecuredAxios;
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:3900'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()
    // request interceptor to add auithorizaiton header for every secxure call to the the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by intercepter', token)
        config.headers.authorization = `Bearer ${token}`;
        return config
    },function(error){
        return Promise.reject(error)
    })

    // intercept 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error) => {
        const status = error.response.status;
        // console.log('Stautus error in the interceptor', status)
        // if 401 & 403 logout the use4r an dmove the usre to th e login 
        if(status === 401 || status === 403 ){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://contest-hub-server-zeta.vercel.app"
    })
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
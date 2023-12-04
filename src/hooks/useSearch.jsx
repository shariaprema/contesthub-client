import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSearch = (search) => {
    const axiosSecure = useAxiosSecure()
const [allContests, setAllContests] = useState([])



useEffect(()=>{
    axiosSecure(`/contests?search=${search}`)
    .then(res=>setAllContests(res.data))
},[search])






    return allContests;
};

export default useSearch;
// import React, { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useContest = () => {
    const axiosPublic = useAxiosPublic()

    //  const [contest, setContest]= useState([])
    // const [loading,setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/contests')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setContest(data)
    //         setLoading(false)
           
    //     })

    // },[])

    const {data: contest =[], isPending:loading , refetch} = useQuery({
        queryKey: ['contests'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/contests')
            return res.data
        }
    
    })
    
        return [contest,loading,refetch]
    };

export default useContest;
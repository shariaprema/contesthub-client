// import React, { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useContest = () => {
    const axiosPublic = useAxiosPublic()

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
import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}= useAuth()
   const location = useLocation()
    
    if(loading){
        return <div className=' min-h-screen pt-24 text-center '><span className="loading loading-bars loading-lg text-center"></span></div>
       
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;
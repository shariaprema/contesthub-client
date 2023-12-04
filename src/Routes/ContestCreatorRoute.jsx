import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useContestCreator from "../hooks/useContestCreator";

const ContestCreatorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    const [isContestCreator, isContestCreatorLoading] = useContestCreator()
    if(loading || isContestCreatorLoading){
        return <><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        </>
    }

    if(user && isContestCreator){
        return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default ContestCreatorRoute;




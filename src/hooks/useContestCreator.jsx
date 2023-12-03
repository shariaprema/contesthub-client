import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useContestCreator = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isContestCreator, isPending: isContestCreatorLoading}= useQuery({
        queryKey: [user?.email, 'isContestCreator'],
        queryFn: async()=>{
            const res= await axiosSecure(`/users/contestCreator/${user?.email}`)
            console.log(res.data);
           return res.data?.contestCreator
        }

    })
    return [isContestCreator, isContestCreatorLoading]
};

export default useContestCreator;
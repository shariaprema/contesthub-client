import { Helmet } from "react-helmet";
import TitleSection from "../../../conponents/TitleSection/TitleSection";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users')
            return res.data;
            
        }
    })

    const handleMakeAdmin =user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleMakeContestCreator =user=>{
        axiosSecure.patch(`/users/contestCreator/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${user.name} is an Contest Creator Now!`,
                    showConfirmButton: false,
                    timer: 1700
                  });
            }
        })
    }








    return (
        <div className="">
           <Helmet>
            <title>ContestHub | Manage User</title>
            </Helmet>

            <TitleSection
            subHeading={'Contest Hub'}
            heading={'Manage All User'}
            >
            </TitleSection>


            <div className="mb-16 mt-9 h-full min-h-screen">

            <div className="flex justify-center">
              <h2 className="text-3xl text-black p-2 rounded-md border-2
               border-purple-900 font-bold  mb-5 justify-center 
               inline-block items-center mx-auto text-center bg-purple-500 "> Total Users:{users.length}</h2>
           </div>
         
           <div className="overflow-x-auto">
            <table className="table table-zebra table-pin-rows h-full w-full">
             
                <thead>
                <tr className="text-lg">
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Make Admin</th>
                    <th>Make Contest Creator</th>
                   
                   
                </tr>
                </thead>
                
                <tbody className="text-sm font-bold">
                {
                    users.map((user, index)=> <tr key={user._id} className="bg-base-200">
                    <th>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                   
                    <td className="">
                        {
                            user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)}  className="btn btn-sm bg-purple-500 hover:bg-purple-500"><FaUser className="text-white   text-lg"/>Admin</button>
                        }
                    </td>
                    <td className="">
                        {
                            user.role === 'contestCreator' ? 'Contest Creator' : <button onClick={()=>handleMakeContestCreator(user)}  className="btn btn-sm bg-purple-500 hover:bg-purple-500"><FaUser className="text-white text-lg"/>Contest Creator</button>
                        }
                    </td>
                    
                    </tr>
                )
                }
                
            
                </tbody>
            </table>
            </div>
           </div>
        </div>
            
    );
};

export default ManageUser;
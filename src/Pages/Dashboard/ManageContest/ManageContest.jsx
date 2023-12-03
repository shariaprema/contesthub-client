import { Helmet } from "react-helmet";
import TitleSection from "../../../conponents/TitleSection/TitleSection";
import useContest from "../../../hooks/useContest";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageContest = () => {

    const [contest,loading,refetch] = useContest()
    console.log(contest);

    const handleDeleteContest = contest =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/contests/${contest._id}`)
            .then(res=>{
               if(res.data.deletedCount>0){
                refetch()
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
    
               }
            })
    
            }
          });
    

    }







   

    return (
        <div>
             <Helmet>
            <title>ContestHub | Manage Contest</title>
            </Helmet>

            <TitleSection
            subHeading={'Contest Hub'}
            heading={'Manage Contest'}
            >
            </TitleSection>

            <div className="my-16 h-full min-h-screen">

<div className="flex justify-center">
  <h2 className="text-3xl text-black p-2 rounded-md border-2 border-purple-900 font-bold  mb-5 justify-center inline-block items-center mx-auto text-center
   bg-purple-500">Total Users: {contest.length}</h2>
</div>

<div className="overflow-x-auto">
<table className="table h-full w-full">

 {/* _id,contest_name,contest_type,contest_category,image,attempted_count,short_description,contest_winner_name,inspirational_message,contest_prize,winner_image,deadline_counter,
       task_submission,contest_price */}
 
    <thead>
    <tr className="text-lg">
        <th>No.</th>
        <th>Contest</th>
        <th>Type</th>
        <th>Category</th>
        <th>Participate</th>
        <th>Price</th>
        <th>Deadline</th>
        <th>Confirm</th>
        <th>Delete</th>


       
       
    </tr>
    </thead>
    
    <tbody className="text-sm font-bold">

    {
        contest.map((item, index)=> <tr key={item._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{item.contest_name}</td>
        <td>{item.contest_type}</td>
        <td>{item.contest_category}</td>
        <td>{item.attempted_count}</td>
        <td>${item.contest_price}</td>
        <td>{item.deadline_counter}</td>
        
         <td>
        <th>
            <button  onClick={()=>handleDeleteContest(contest)} className="btn btn-ghost btn-xs"><FaCheck className="text-purple-600 w-5 h-5"/></button>
            </th>


        </td>

        <td>
        <th>
            <button  className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600 w-5 h-5"/></button>
            </th>


          </td>
       
        
        
        </tr>)
    }
    

    </tbody>
</table>
</div>
</div>

            
        </div>
    );
};

export default ManageContest;

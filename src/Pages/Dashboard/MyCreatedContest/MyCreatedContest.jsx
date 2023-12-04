import { Helmet } from 'react-helmet';
import TitleSection from '../../../conponents/TitleSection/TitleSection';
import { useLoaderData } from 'react-router-dom';


const MyCreatedContest = () => {

    const contest = useLoaderData()
    console.log(contest);




//   _id,contest_name,contest_type,contest_category,image,attempted_count,short_description,contest_winner_name,inspirational_message,contest_prize,winner_image,deadline_counter,
//             task_submission,contest_price 

    return (
        <div>
        <Helmet>
       <title>ContestHub | My Created Contest</title>
       </Helmet>

       <TitleSection
       subHeading={'Contest Hub'}
       heading={'My Created Contest'}
       >
       </TitleSection>


       {/* <div className="my-16 h-full min-h-screen">

            <div className="flex justify-center">
            <h2 className="text-3xl text-black p-2 rounded-md border-2 border-purple-900 font-bold  mb-5 justify-center inline-block items-center mx-auto text-center
            bg-purple-500">Total Users: {contest.length}</h2>
            </div>

            <div className="overflow-x-auto">
            <table className="table h-full w-full">

           

            <thead>
            <tr className="text-lg">
            <th>No.</th>
            <th>Contest</th>
            <th>Type</th>
            <th>Category</th>
            <th>Participate</th>
            <th>Price</th>
            <th>Deadline</th>
            <th>Action</th>

            
            
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
                <button  onClick={()=>handleDeleteContest(contest)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600 w-5 h-5"/></button>
                </th>
            </td>
            
            
            
            </tr>)
            }


            </tbody>
            </table>
            </div>
            </div> */}

       
   </div>
    );
};

export default MyCreatedContest;

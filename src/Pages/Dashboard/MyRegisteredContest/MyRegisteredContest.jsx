import { Helmet } from "react-helmet";
import TitleSection from "../../../conponents/TitleSection/TitleSection";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyRegisteredContest = () => {
    const {user} =  useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments=[]} = useQuery({
        queryKey:['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data 
        }
    })


    console.log(payments);
    return (
        <div>
            <Helmet>
            <title>ContestHub | My Registered Contest</title>
            </Helmet>

            <TitleSection
            subHeading={'Contest Hub'}
            heading={'My Registered Contest'}
            >
            </TitleSection>

        <div className="my-16 h-full min-h-screen">

        <div className="flex justify-center">
        <h2 className="text-3xl text-black p-2 rounded-md border-2 border-purple-900 font-bold  mb-5 justify-center inline-block items-center mx-auto text-center
        bg-purple-500">Total Users: {payments.length}</h2>
        </div>

        <div className="overflow-x-auto">
        <table className="table h-full w-full">

        {/* _id,contest_name,contest_type,contest_category,image,attempted_count,short_description,contest_winner_name,inspirational_message,contest_prize,winner_image,deadline_counter,
            task_submission,contest_price */}

        <thead>
        <tr className="text-lg">
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Deadline</th>
        <th>Total Price</th>
  
        </tr>
        </thead>

        <tbody className="text-sm font-bold">

        {
            payments.map((payment, index)=><tr key={payment._id}
            className="bg-base-200">
           <th>{index+1}</th>
           <td>{payment.name}</td>
           <td>{payment.email}</td>
           <td>{payment.transactionId}</td>
           <td>{payment.data}</td>
           <td>${payment.contest_price}</td>
       
        </tr>)
        }


        </tbody>
        </table>
        </div>
        </div>

           
            
        </div>
    );
};

export default MyRegisteredContest;


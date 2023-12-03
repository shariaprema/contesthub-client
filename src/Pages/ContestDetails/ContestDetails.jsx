import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import TitleSection from "../../conponents/TitleSection/TitleSection";
import moment from 'moment';
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";





const CountdownTimer = ({ deadline }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }, []);
  
    function calculateTimeRemaining() {
      const now = moment();
      const remainingTime = moment(deadline).diff(now);
     
      const duration = moment.duration(remainingTime);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    return (
      <div>
        <p>Deadline Counter: {timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds</p>
        {timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0 && (
          <p>Contest has ended.</p>
        )}
      </div>
    );
  };
  


const ContestDetails = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  const location= useLocation()
  const axiosSecure = useAxiosSecure()
  const contestDetails = useLoaderData()
  const [,refetch]= useCart()
   const {_id,contest_name,contest_type,contest_category,image,attempted_count,short_description,
    contest_winner_name,inspirational_message,contest_prize,winner_image,task_submission,contest_price,
    deadline_counter} =  contestDetails || {}

    // TIMMER COUNT
    const deadline = deadline_counter


const handleRegister = ()=>{
  if(user && user.email){
  //payment add to the database

  const cartItems ={
    contestId: _id,
    email: user.email,
    contest_name,
    contest_type,
    contest_category,
    image,
    attempted_count,
    short_description,
    contest_winner_name,
    inspirational_message,
    contest_prize,
    winner_image,
    task_submission,
    contest_price,
    deadline_counter
  }

  axiosSecure.post('/carts', cartItems)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
          Swal.fire({
              position: "top",
              icon: "success",
              title: `${contest_name} Add to your card successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()

    }
})




  }

  else{
    Swal.fire({
      title: "You are not login",
      text: "Please login for Registration",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
          navigate ('/login' ,{ state: { from: location } })

      }
    });

  }

}



    
    return (
        <div>
            <TitleSection
            subHeading={'Contest Hub'}
            heading={'Contest Details'}
            >
            </TitleSection>
           
            <div className="card card-compact w-3/4 text-black bg-purple-200 shadow-xl mx-auto my-10 ">
            <figure><img src={image} alt="pic" className="w-full" /></figure>
            <p className="absolute right-2 text-center top-3 rounded-md text-lg font-semibold  bg-orange-500 text-white py-1 px-3">Attempted Count: {attempted_count}</p>
        
            <div className="card-body px-8">
                <div className="px-2 space-y-2">
                <h2 className="text-3xl font-bold text-purple-800">{contest_name}</h2>
                <h2 className="text-lg font-bold">{contest_type} Contest</h2>
                <h2 className="text-base font-bold text-green-600">{contest_category} Contest</h2>
                <h2 className="text-lg font-bold">Contest Prize: ${contest_prize}</h2>
                <h2 className="text-lg font-bold">Contest Winner:</h2>
                <div className="">
                    <img className="w-16 h-16 rounded-full ml-1" src={winner_image} alt="" />
                    <p className=" text-base font-bold">{contest_winner_name}</p>
                </div>

                <h2 className="text-lg font-bold text-orange-500"><CountdownTimer deadline={deadline} /></h2>
                <h2 className="text-2xl font-bold">Contest Price: ${contest_price}</h2>



                <p className="text-justify">{short_description}</p>

                <div className="card-actions">

                
               <Link to={'/dashboard/cart'}>
               <button onClick={handleRegister} className="btn px-10 btn-outline bg-purple-500 border-0 border-b-4
                border-orange-500 text-white ">Registration</button>
               </Link>
                </div>
                </div>
            </div>
            </div> 

        </div>
    );
};

export default ContestDetails;



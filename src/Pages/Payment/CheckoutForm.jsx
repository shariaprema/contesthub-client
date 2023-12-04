import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useContest from "../../hooks/useContest";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const CheckoutForm = () => {

    const [error,setError]= useState('')
    const [transactionId ,setTransactionId] = useState('')
    const {user}=useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [contest,loading,refetch]= useContest()
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate()
    const [cart]= useCart()
    console.log(clientSecret);

    const totalPrice = cart.reduce((total,item)=>total + item.contest_price, 0)
    console.log(totalPrice);

    useEffect(() => {
      if(totalPrice > 0){
        axiosSecure.post('create-payment-intent', {price: totalPrice})
        .then(res=>{
            console.log('my payment',res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        
      }
     

    },[axiosSecure,totalPrice])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
      }


      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }



      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('Payment error', error);
        setError(error.message)
      }
       else {
        console.log('[Payment Method]', paymentMethod);
        setError('') 
      }


      // confirm payment:
      const {paymentIntent, error: cardConfirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name:user?.displayName || 'anonymous',
          }
        }
      })

      if(cardConfirmError){
        console.log('Card Confirm Error');
      }

      else{
        console.log('Payment Intent',paymentIntent);
        if(paymentIntent.status === 'succeeded'){
          console.log('Transaction Id:',paymentIntent.id);
          setTransactionId(paymentIntent.id)


         //now save the payment in the database:
          const payment = {
            email: user.email,
            name:  user.displayName,
            transactionId: paymentIntent.id,
            contest_name: contest.contest_name,
            // contest_type: contest_type,
            // image: image,
            // contest_prize: contest_prize,
            contest_price: totalPrice,
            data: new Date(), 
            cartId: cart.map(item=>item._id),
            contestItemIds: cart.map(item=>item.contestId,),
            status: 'pending'

          }

        const res = await axiosSecure.post('/payments', payment)
        console.log('Payment Save', res.data);
          refetch();
          if(res?.data?.insertedId){
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Thank you for the Payment",
              showConfirmButton: false,
              timer: 1500
            });
            // navigate ('/dashboard/myRegisteredContest')

          }

        }
      }


  };

    return (
      <div className="text-2xl">

<form className="min-h-screen py-10 w-3/4 bg-purple-400 text-black  mx-auto mt-10 rounded-lg p-10" onSubmit={handleSubmit}>
        <CardElement
       
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
         <button className="btn mx-auto px-10 btn-outline mt-10 mb-5 flex justify-center bg-purple-600 border-0 border-b-4 border-orange-500 text-white"  type="submit" disabled={!stripe || !clientSecret}  >
          Pay
        </button>
        <p className="text-red-600 text-xs mt-2 font-bold  ">{error}</p> 
        {
          transactionId && <p className="text-green-800 text-xl text-center mt-2 font-bold">Your Transaction Id: [{transactionId}]  </p>
        } 


      </form>


      </div>

     
    );
};

export default CheckoutForm;
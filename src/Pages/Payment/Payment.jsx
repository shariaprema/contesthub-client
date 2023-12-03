import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import TitleSection from "../../conponents/TitleSection/TitleSection";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div className="bg-purple-300 py-10">
            <Helmet>
            <title>ContestHub | Payment</title>
            </Helmet>

            <TitleSection
            subHeading={'Please Pay for Contest'}
            heading={'Payment'}
            >
            </TitleSection>

            <div>
             <Elements stripe={stripePromise}>
             <CheckoutForm/> 
            </Elements>
            
            </div>
            
        </div>
    );
};

export default Payment;
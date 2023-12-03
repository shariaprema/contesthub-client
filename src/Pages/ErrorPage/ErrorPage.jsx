import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../src/assets/image/lotti/Animation - 1.json";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <Helmet>
            <title>ContestHub | Error</title>
            </Helmet>
          <div className="relative">
          <Lottie className="w-[700px]  flex mx-auto " animationData={groovyWalkAnimation} loop={true} />
          </div>
          <Link to={'/'}> <button className=" bg-purple-500 hover:bg-orange-500  absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-4 py-2 rounded-md">Go Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;






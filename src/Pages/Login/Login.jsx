import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../src/assets/image/lotti/Animation - 2.json";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../conponents/SocialLogin/SocialLogin";

const Login = () => {
    const [disabled,setDisabled]= useState(true)
    const {signIn,user,loading} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    console.log('state the location login page', location.state);

    useEffect(()=>{
        loadCaptchaEnginge(5); 

    },[])



    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)


        signIn(email,password)
        .then((result) => {
          const user = result.user
          console.log(user)
          
          Swal.fire({
            position: "top",
            icon: "success",
            title: "User Login Successfully!",
            showConfirmButton: false,
            timer: 1500
          });

          navigate(from, {replace: true});
          
        })
        .catch((error) => {
          console.log(error.message)
        });
      }



      const handleValidateCaptcha =(e) =>{
     
        const user_captcha_value = e.target.value
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }

        else{
            setDisabled(true)
        }
    }




    return (
        <div className="hero  min-h-screen  bg-purple-300 ">

        <Helmet>
            <title>ContestHub | Login</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row ">
           
           <div className=" text-center md:w-1/2 lg:text-left"> 
            <Lottie className="w-2/3" animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="card md:w-1/2 h-ful   max-w-sm shadow-2xl bg-base-100">
           
            <h1 className="text-4xl font-bold text-center  text-purple-500 pt-5"> Please Login!</h1>
            <form  onSubmit={handleLogin} className="card-body  ">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>

                {/* captcha settings */}
                <div className="form-control">
                <label className="label">           
                    <LoadCanvasTemplate className="label-text " />
                </label>
                <input type="text" onBlur={handleValidateCaptcha}   name="captcha" placeholder="Type the captcha above" className="input input-bordered" />
                </div>
                {/* captcha settings end */}

                <div className="form-control mt-3 ">
              
                {/* disabled={false} */}
                <input  disabled={disabled}  type="submit" className="btn btn-primary text-white bg-purple-600 hover:bg-purple-800" value="Login"/>
                </div>
            </form>

            <p className="text-center font-semibold  ">
                <small>New Here?<Link className='text-purple-700  font-bold' to='/signUp'> SignUp</Link> </small> 
            </p>
            <div className="divider my-0 py-0"></div>
            <div className='flex justify-center items-center  pb-2'>
            <SocialLogin></SocialLogin>
            </div>
            
            </div>
            
        </div>
        
        </div>
    );
};

export default Login;




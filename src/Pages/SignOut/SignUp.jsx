import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import groovyWalkAnimation from "../../../src/assets/image/lotti/Animation - 3.json";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../conponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const { user, createUser, updateUserProfile } = useAuth()
  const { register, handleSubmit, reset,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const registerUser = result.user;
      console.log(registerUser);
      updateUserProfile(data.name, data.photoURL)
     
      .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              console.log('user added to the Database');
              reset();
              Swal.fire({
                position: "top",
                icon: "success",
                title: "User Created Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
    })
    .catch((error) => {
      console.log(error.message);
    })
  }


 
    return (
        <div>
        <Helmet>
          <title>ContestHub | SignUp</title>
        </Helmet>
  
        <div className="hero   bg-purple-300">
          <div className="hero-content flex-col lg:flex-row">
          <div className=" text-center md:w-1/2 lg:text-left"> 
            <Lottie className="w-10/12" animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center text-purple-500 pt-5"> Please Register!</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="font-semibold text-xs text-red-700 mt-1">
                      This field is required
                    </span>
                  )}
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="font-semibold text-xs text-red-700 mt-1">
                      photoURL is required
                    </span>
                  )}
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="font-semibold text-xs text-red-700 mt-1">
                      This field is required
                    </span>
                  )}
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      minLength: 6,
                      maxLength: 12,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
  
                  {errors.password?.type === "required" && (
                    <p className="font-semibold text-xs text-red-700 mt-1">
                      {" "}
                      Password is required
                    </p>
                  )}

                  {errors.password?.type === "maxLength" && (
                    <p className="font-semibold text-xs text-red-700 mt-1">
                      {" "}
                      Password must be less than 12 characters
                    </p>
                  )}    

                  {errors.password?.type === "minLength" && (
                    <p className="font-semibold text-xs text-red-700 mt-1">
                      {" "}
                      Password must be 6 characters
                    </p>
                  )}
  
                  
                  {errors.password?.type === "pattern" && (
                    <p className="font-semibold text-xs text-red-700 mt-1">
                      {" "}
                      Password must have, one upper case, one lower case, one
                      number & one special character
                    </p>
                  )}
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary text-white bg-purple-600 hover:bg-purple-800 border-none">Submit</button>
                  
                </div>
  
              </form>
              <p className="text-center font-semibold ">
                <small>
                  You already register, please <Link 
                  className="text-purple-600 font-bold" 
                  to="/login"> 
                  Login
                  </Link>
                </small>
              </p>
              <div className="divider my-0 py-0"></div>
            <div className='flex justify-center items-center  pb-2'>
            <SocialLogin></SocialLogin>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
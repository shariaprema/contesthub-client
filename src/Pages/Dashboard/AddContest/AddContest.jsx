import { Helmet } from "react-helmet";
import TitleSection from "../../../conponents/TitleSection/TitleSection";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=1&key=${image_hosting_key}`;

const AddContest = () => {
    const {user}=useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset} = useForm()
    const onSubmit = async(data) =>{
        console.log(data)

         //image upload to imageBB and then get an url
    const imageFile = { image: data.image[0] } 
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
         'content-Type': 'multipart/form-data' 
        }
    })
    if(res.data.success){
        const contestItems={
            email: data.email,
            name: data.name,
            contest_name: data.contest_name,
            contest_price: parseFloat(data.contest_price),
            contest_type: data.contest_type,
            contest_prize: parseFloat(data.contest_prize),
            deadline_counter: data.deadline_counter,
            task_submission: data.task_submission,
            short_description: data.short_description,
            image: res.data.data.display_url,
          
           

        }

        const addContest = await axiosSecure.post('/contests',contestItems)
        console.log(addContest.data);
        if(addContest.data.insertedId){
            reset()
            Swal.fire({
                position: "top",
                icon: "success",
                title: `Your ${data.contest_name} contest has been added Successfully!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    console.log('with image url',res.data);
}


    return (
        <div>
            <Helmet>
            <title>ContestHub | Add Contest</title>
            </Helmet>

            <TitleSection
            subHeading={'Contest Hub'}
            heading={'Add Contest'}
            >
            </TitleSection>

        <div className="bg-purple-300  font-medium my-10 p-5 border-2 shadow-2xl border-purple-800 rounded-lg">


        {/* _id,contest_name,contest_type,contest_category,image,attempted_count,
        short_description,contest_winner_name,inspirational_message,contest_prize,
        winner_image,deadline_counter,
      task_submission,contest_price */}



        <form onSubmit={handleSubmit(onSubmit)}>
            {/*Creator email */}
        <div className="flex gap-3 justify-center items-center mx-auto  my-6 ">
        <div className="form-control w-full flex-1">
        <label className="label">
        <span className="label-text">Creator Email</span>
        </label>
        <input defaultValue={user.email} readOnly  {...register("email", { required: true})}
        type="email"
        placeholder="Email"
        className="input input-bordered w-full " />
        </div>


        {/* Creator Name */}
        <div className="form-control w-full flex-1">
        <label className="label">
        <span className="label-text">Creator Name</span>
        </label>
        <input defaultValue={user.displayName} readOnly {...register("name", { required: true})}
        type="text"
        placeholder="Creator Name"
        className="input input-bordered w-full " />
        </div>
        </div>

        <div className="flex gap-3 justify-center items-center mx-auto  my-6 ">
        {/* Contest Name */}
        <div className="form-control w-full flex-1">
        <label className="label">
        <span className="label-text">Contest Name</span>
        </label>
        <input {...register("contest_name", { required: true})}
        type="text"
        placeholder="Contest Name"
        className="input input-bordered w-full " />
        </div>


        {/* Contest Price */}
        <div className="form-control w-full flex-1 ">
        <label className="label">
        <span className="label-text">Contest Price</span>
        </label>
        <input {...register("contest_price", { required: true})}
        type="number"
        placeholder="Price"
        className="input input-bordered w-full " />
        </div>

        </div>


        <div className="flex gap-3 justify-center items-center mx-auto  my-6 ">
        {/* Category */}
        <div className="form-control w-full flex-1">
        <label className="label">
        <span className="label-text">Contest Type</span>
        </label>
        <select defaultValue="default" {...register("contest_type", { required: true})}
        className="select select-bordered">
        <option disabled value="default">Select a Type</option>
        <option value="salad">Coding</option>
        <option value="pizza">Photography</option>
        <option value="soup">Design</option>
        <option value="dessert">Writing</option>
        <option value="drinks">Gaming</option>
        </select>
        </div>


        {/* Contest Prize */}
        <div className="form-control w-full flex-1 ">
        <label className="label">
        <span className="label-text">Contest Prize</span>
        </label>
        <input {...register("contest_prize", { required: true})}
        type="number"
        placeholder="Contest Prize"
        className="input input-bordered w-full " />
        </div>

        </div>

        <div className="flex gap-3 justify-center items-center mx-auto  my-6 ">
        <div className="form-control w-full flex-1">
        <label className="label">
        <span className="label-text">Contest Deadline</span>
        </label>
        <input {...register("deadline_counter", { required: true})}
        type="datetime-local"
        placeholder="Contest Deadline"
        className="input input-bordered w-full " />
        
        </div>


        {/* Task Submission Instruction */}
        <div className="form-control w-full flex-1 ">
        <label className="label  ">
        <span className="label-text">Task Submission Instruction</span>
        </label>
        <textarea {...register("task_submission", { required: true})}
        type="text"
        placeholder="Task Instruction"
        className="textarea textarea-bordered h-24 w-full " />
        </div>

        </div>


        {/* Contest Description */}
        <div className="form-control w-full ">
        <label className="label">
        <span className="label-text">Contest Description</span>
        </label>
        <textarea {...register("short_description", { required: true})}
        type="text"
        placeholder="Contest Description"
        className="textarea textarea-bordered h-24 w-full " />
        </div>

        {/* Recipe Image */}
        <dir className="form-control mt-8">
        <input {...register("image", { required: true})}
        type="file"
        placeholder="Image URL"
        className="file-input input-bordered" />
        </dir>


    <button className="btn my-8 px-10 btn-outline bg-purple-900 btn-block border-0 border-b-4
        border-orange-500 text-white ">
        Add Contest
        
    </button>
    </form>


        </div>


            
        </div>
    );
};

export default AddContest;
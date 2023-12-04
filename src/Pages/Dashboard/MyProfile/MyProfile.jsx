import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import TitleSection from "../../../conponents/TitleSection/TitleSection";

const MyProfile = () => {

   const{user} = useAuth()


    return (
        <div>
            <Helmet>
            <title>ContestHub | My Profile</title>
            </Helmet>



            <TitleSection
            subHeading={'Contest Hub'}
            heading={'My Profile'}
            >
            </TitleSection>

                <div className="bg-purple-300 mt-20">

                        <div className="m-24 text-center text-black">
                            <img className="w-[200px] h-[200px] rounded-full flex mx-auto" src={user.photoURL} alt="winner" />
                            
                            <h2 className="text-3xl font-bold text-Purple-700"><span className="text-3xl font-bold">Hi, Welcome </span>{user.displayName}</h2>
                            <h2 className="text-xl text-orange-500">{user.email}</h2>
                            
                        </div>

                 </div>


            
        </div>
    );
};

export default MyProfile;
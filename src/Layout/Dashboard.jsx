import { NavLink, Outlet } from "react-router-dom";
import { TiBackspace, TiShoppingCart, TiSocialPinterest, TiUserAdd } from "react-icons/ti";
import { FaAd, FaAddressCard, FaAdversal, FaCommentDots,
FaGamepad, FaHome, FaRegistered, FaSubway, FaTrophy, FaUser, FaUserAlt,
 FaUtensils, FaWpbeginner } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useContestCreator from "../hooks/useContestCreator";


const Dashboard = () => {
    const [cart] = useCart()
   const [isAdmin] = useAdmin()
   const [isContestCreator] = useContestCreator()
   
console.log({isAdmin});
console.log({isContestCreator});

    return (
        <div className="flex">
        <div className="w-64 min-h-screen font-semibold bg-purple-700">
            <ul className="menu space-y-3 text-base">
                <h2 className="text-5xl bg-white text-center mb-4 py-4 rounded-md ">Dashboard</h2>

                 {/* ADMIN PANEL */}
            {
                isAdmin && !isContestCreator && 
                 <> 
                <h2 className="text-2xl font-bold mb-4  rounded-md bg-purple-400  border-y-2 pl-5"> Admin</h2>

                <li>                     
                    <NavLink to='/dashboard/users'>
                   
                    <FaUser className="w-5 h-5"/>
                       Manage User
                    </NavLink>
                </li>

                <li>                     
                    <NavLink to='/dashboard/manageContest'>
                    
                    <FaAd  className="w-5 h-5"/>
                   Manage Contest
                    </NavLink>
                </li>

                      
               </> 

           }   

                 

                  {/* Contest PANEL */}


                  {
                    isContestCreator && !isAdmin &&
                  
                  <> 

                   <h2 className="text-2xl  font-bold mb-1  rounded-md bg-purple-400  border-y-2 pl-5"> Contest Creator</h2>

                  <li>                     
                        <NavLink to='/dashboard/addContest'>                  
                        <FaGamepad className="w-5 h-5" />
                        Add Contest
                        </NavLink>

                    </li>

                    
                    <li>                     
                        <NavLink to='/dashboard/myCreatedContest'>
                        
                        <FaCalendar  className="w-5 h-5"/>
                        My Created Contest
                        </NavLink>
                    </li>

                    <li>                     
                        <NavLink to='/dashboard/contestSubmitted '>
                        <FaSubway className="w-5 h-5" />
                        Contest Submitted 
                                </NavLink>
                            </li>

                </>
           
                 } 

                    
         
                    

            {/* USER PANEL */}


            {
            !isAdmin && !isContestCreator && 

            
            <>

           <h2 className="text-2xl font-bold mb-1  rounded-md bg-purple-400  border-y-2 pl-5">User</h2>

                <li>                     
                   <NavLink to='/dashboard/cart'>
                   <TiShoppingCart className="w-5 h-5" />
                       My Cart
                       ({cart.length})
                   </NavLink>
               </li>
           <li>                     
               <NavLink to='/dashboard/myRegisteredContest'>                  
               <FaRegistered className="w-5 h-5" />
               My Registered Contest
               </NavLink>

           </li>

           <li>                     
               <NavLink to='/dashboard/myWinningContest'>
               
               <FaTrophy className="w-5 h-5"/>
               My Winning Contest Page
               </NavLink>
           </li>
           <li>                     
               <NavLink to='/dashboard/myProfile'>
               
               <FaUserAlt  className="w-5 h-5"/>
               My Profile

               </NavLink>
           </li>


            </>

            } 

                
            <div className="divider"></div>

            <li>                     
                <NavLink to='/'>                     
                <FaHome className="w-5 h-5"/>
                    Home
                </NavLink>
            </li>
  
            </ul>
        </div>
        <div className="flex-1 px-8 mb-8 bg-purple-300">
       <Outlet></Outlet>
        </div>
        
    </div>
    );
};

export default Dashboard;






// {!isAdmin && !isContestCreator $$ <link>....<link>}




// {isAdmin && !isContestCreator && .....} admin
// {isContestCreator && !isAdmin && .....} creator
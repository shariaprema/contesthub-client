import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo/Logo-V1.png"
import { MdDashboardCustomize } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
// import logo2 from "../../../assets/image/logo/logo-light-1.png"

const Navbar = () => {
const [cart]= useCart()
 
    const {user, logOut} = useAuth()
     const handleLogOut = ()=>{
        logOut()
        .then((result)=>{
            console.log(result.user);

        })

        .catch((error)=>{
            console.log(error);
        })
     }




    
    const navOption =  <>
                <li><Link to="/">Home</Link></li>
              
                 <li><Link to="/allContest">All Contest</Link></li>

                {/* { user &&
                <li><Link to="/dashboard/cart">
                <button className="btn btn-ghost btn-sm px-2 py-0 text-xs hover:bg-purple-800  text-white bg-purple-500">
                <MdDashboardCustomize className="w-5 h-5" />
                
                <div className="badge badge-secondary bg-orange-600">+{cart.length}  Dashboard</div>
                </button>
                
                </Link>
                </li> 

                } */}
                 </>




    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-70 hover:text-orange-500 bg-purple-900 text-white font-semibold max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                
                    {navOption}

                </ul>
                </div>
                <div className="">
               <img src={logo} className="w-36" alt="" />
              
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu   menu-horizontal px-1 text-base">

                {navOption}

                </ul>
            </div>

            <div className="navbar-end">

                {
                user?.email ? 
                <div className="dropdown dropdown-end mr-2 mt-1">
                <div className="avatar online">
                <div className="w-10  rounded-full">
                    <img tabIndex={0} src={user.photoURL} alt={user.displayName} />
                </div>
                </div>
                <ul tabIndex={0} className="menu text-center space-y-3  dropdown-content z-[1] p-2 shadow bg-purple-500  rounded-box w-52 mt-4">
                <li className="hover:bg-orange-500 hover:py-2 text-white hover:rounded-md ">{user.email}</li> 
                <li className="hover:bg-orange-500 text-white hover:py-2 hover:rounded-md ">{user.displayName}</li>
               
                { user &&
                <li className=" flex mx-auto justify-center text-center hover:bg-orange-500 hover:py-1 hover:px-5  hover:rounded-md text-white">
                <Link to="/dashboard/cart">
                <MdDashboardCustomize className="w-5 h-5" />Dashboard +{cart.length} 
                </Link>
                </li> 

                }
                <Link to='/login'> <li onClick={handleLogOut} className="hover:bg-orange-500 hover:py-2 hover:rounded-md   text-white">LogOut</li></Link>
                </ul>
            </div>
                :
                <div>
               <Link to='/login'> <button className="btn bg-orange-400">Login</button></Link>
                </div>

            }
            
            </div>



            </div>
            
            
        </div>
    );
};

export default Navbar;

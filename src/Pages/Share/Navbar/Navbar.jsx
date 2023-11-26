import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo/Logo-V1.png"
import logo2 from "../../../assets/image/logo/logo-light-1.png"

const Navbar = () => {

    const navOption =  <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Dashboard</Link></li>
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

            
          

            


                {/* {
                user ?  */}
                <div className="navbar-end">
                <div className="dropdown dropdown-end mr-2 mt-1">
                <div className="avatar online">
                <div className="w-10  rounded-full">
                    <img tabIndex={0} src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>Item 1</a></li> 
                <li><a>Item 2</a></li>
                <li><a>LogOut</a></li>
                </ul>
            </div>
                {/* : */}
                <div>
                <Link to='/login'> <button className="btn bg-orange-400">Login</button></Link>
                </div>

            {/* }
             */}
            </div>



            </div>
            
            
        </div>
    );
};

export default Navbar;

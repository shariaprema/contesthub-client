import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";
import Footer from "../Pages/Share/Footer/Footer";

const Main = () => {
    const location = useLocation()
    const withoutHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>

          {withoutHeaderFooter || <Navbar></Navbar>}
          <Outlet></Outlet>
          {withoutHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;
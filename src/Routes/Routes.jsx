import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllContest from "../Pages/AllContest/AllContest";
import SignUp from "../Pages/SignOut/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import Dashboard from "../Layout/Dashboard";
import MyRegisteredContest from "../Pages/Dashboard/MyRegisteredContest/MyRegisteredContest";
import Payment from "../Pages/Payment/Payment";
import Cart from "../Pages/Dashboard/Cart/Cart";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ManageContest from "../Pages/Dashboard/ManageContest/ManageContest";
import AddContest from "../Pages/Dashboard/AddContest/AddContest";
import MyCreatedContest from "../Pages/Dashboard/MyCreatedContest/MyCreatedContest";
import AdminRoute from "./AdminRoute";
import ContestCreatorRoute from "./ContestCreatorRoute";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";

      const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage/>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "allContest",
              element:<AllContest></AllContest>
            },
            {
              path: "/contestDetails/:id",
              element: <ContestDetails></ContestDetails>,
              loader: ({params})=>fetch(`http://localhost:5000/contests/${params.id}`)
            },
            {
              path: "login",
              element: <Login></Login>,
            },
            {
              path: "signUp",
              element: <SignUp></SignUp>
            },

            {
              path: "payment",
              element:<PrivateRoutes><Payment></Payment></PrivateRoutes>,
            },
          ],
        },

        {
          path: "dashboard",
          element:<PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
          children: [
            //Normal User Routes

            {
              path: "cart",
              element:<PrivateRoutes> <Cart></Cart> </PrivateRoutes>,
            },
            {
              path: "myRegisteredContest",
              element: <PrivateRoutes><MyRegisteredContest></MyRegisteredContest> </PrivateRoutes>

            },
            {
              path: "myProfile",
              element: <PrivateRoutes> <MyProfile></MyProfile> </PrivateRoutes>

            },

             //Admin Routes

             {
              path: "users",
              element: <AdminRoute><ManageUser></ManageUser></AdminRoute> 

            },

             {
              path: "manageContest",
              element: <AdminRoute><ManageContest></ManageContest></AdminRoute>  

            },






             {
              path: "addContest",
              element: <ContestCreatorRoute><AddContest></AddContest> </ContestCreatorRoute> 

            },

             {
              path: "myCreatedContest",
              element: <ContestCreatorRoute><MyCreatedContest></MyCreatedContest></ContestCreatorRoute>  

            },

           
    
            
          ]
        },
      ]);



export default router;
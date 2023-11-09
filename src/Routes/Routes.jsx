import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Addjobs from "../Pages/Addjobs/Addjobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/addjobs',
          element:<Addjobs></Addjobs>
        },
        {
          path:'/details/:id',
          element:<JobDetails></JobDetails>
        }
      ]
    },
  ]);

  export default router;
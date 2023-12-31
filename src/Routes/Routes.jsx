import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Addjobs from "../Pages/Addjobs/Addjobs";
import Blog from "../Pages/Blog/Blog";
import AllJobsRoute from "../Pages/AllJobsRoute/AllJobsRoute";
import PrivateRoute from "./PrivateRoute";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Myjobs from "../Pages/MyJobs/Myjobs";
import UpdatedJob from "../Pages/UpdatedJob/UpdatedJob";


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
          element:<PrivateRoute><Addjobs></Addjobs></PrivateRoute>,
          
        },
        {
          path: '/alljob',
          element:<AllJobsRoute></AllJobsRoute>

        },
        {
          path:'/details/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/jobs')
        },
        {
          path: '/appliedjob',
          element:<PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>,
          

        },
        {
          path: '/myjobs',
          element:<PrivateRoute><Myjobs></Myjobs></PrivateRoute>
        },
        {
          path:'/updatedjob/:id',
          element:<UpdatedJob></UpdatedJob>,
          loader:({params}) =>fetch(`http://localhost:5000/job/${params.id}`)
        },
        
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        
      ]
    },
  ]);

  export default router;
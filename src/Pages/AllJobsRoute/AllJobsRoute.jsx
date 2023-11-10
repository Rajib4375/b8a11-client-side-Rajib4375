import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const AllJobsRoute = () => {
  
    const {user}= useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs`;

    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setJobs(data))
    },[])
   

    return (
        <div>
           <h2>My all jobs : {jobs.length}</h2>
        </div>
    );
};

export default AllJobsRoute;
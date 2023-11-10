/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useState } from "react";
import AllJobsRow from "./AllJobsRow";



const AllJobsRoute = () => { 
  
    
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs`;

    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setJobs(data))
    },[])
   

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Company Name</th>
        <th>Job Title</th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th>Salary range</th>
      </tr>
    </thead>
    <tbody>
   {
    jobs.map(job =><AllJobsRow
    key={job._id} job ={job}
    ></AllJobsRow>)
   }
    </tbody>
  
    
  </table>
</div>
    );
};

export default AllJobsRoute;
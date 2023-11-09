import { useEffect, useState } from "react";
import AllJobs from "./AllJobs";


const AllJobsCatagory = () => {
    const [alljobs, setAllJobs] = useState([]);
 
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res =>res.json())
        .then(data => setAllJobs(data))
    },[])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    alljobs.map(alljob =><AllJobs 
                        key={alljob._id} 
                        alljob={alljob}></AllJobs>)
                }
             
                </div>
            
        </div>
    );
};

export default AllJobsCatagory;
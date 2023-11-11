/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MyjobsCard from "./MyjobsCard";



const Myjobs = () => {
    const [myJobs, setMyJobs] = useState([]);

    const url = `http://localhost:5000/jobs`;

    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setMyJobs(data))
    },[])
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            myJobs.map(myjob =><MyjobsCard key={myjob._id} myjob={myjob}></MyjobsCard>)
        }
       </div>
    );
};

export default Myjobs;
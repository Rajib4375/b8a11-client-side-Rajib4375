import { useEffect, useState } from "react";
import PartTimeCard from "./PartTimeCard";


const PartTimeJob = () => {
    const [partTime, setPartTime] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Part%20Time')
        .then(res =>res.json())
        .then(data => setPartTime(data))
    },[])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    partTime.map(partTime =><PartTimeCard key={partTime._id} partTime={partTime}></PartTimeCard>)
                }
             
                </div>
            
        </div>
    );
};

export default PartTimeJob;
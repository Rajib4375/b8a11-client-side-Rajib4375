import { useEffect, useState } from "react";
import HybridCard from "./HybridCard";


const Hybrid = () => {

    const [hybrid, sethybrid] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Remote%20Job')
        .then(res =>res.json())
        .then(data => sethybrid(data))
    },[])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    hybrid.map(hybrid=><HybridCard key={hybrid._id} hybrid={hybrid}></HybridCard>)
                }
             
                </div>
            
        </div>
    );
};

export default Hybrid;
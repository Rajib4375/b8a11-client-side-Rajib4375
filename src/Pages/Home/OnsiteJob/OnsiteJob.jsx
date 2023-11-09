import { useEffect, useState } from "react";
import OnsiteCard from "./onsiteCard";


const OnsiteJob = () => {
    const [onsitejob, setOnsitejob] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs/On%20Site%20Job')
        .then(res =>res.json())
        .then(data => setOnsitejob(data))
    },[])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    onsitejob.map(onsitejob =><OnsiteCard key={onsitejob._id} onsitejob={onsitejob}></OnsiteCard>)
                }
             
                </div>
            
        </div>
    );
};

export default OnsiteJob;
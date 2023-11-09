import { useEffect, useState } from "react";
import RemoteJobCard from "./RemoteJobCard";


const RemoteJob = () => {
    const [remotejob, setRemotejob] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Remote%20Job')
        .then(res =>res.json())
        .then(data => setRemotejob(data))
    },[])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    remotejob.map(remotejob =><RemoteJobCard 
                        key={remotejob._id}
                         remotejob={remotejob}>
                            
                         </RemoteJobCard>)
                }
             
                </div>
            
        </div>
    );
};

export default RemoteJob;
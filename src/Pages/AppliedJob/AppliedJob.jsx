/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJob = () => {
    const {user} =useContext(AuthContext);
    const [Application, setApplication] = useState([]);

    const url = `http://localhost:5000/jobApplyed?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setApplication(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-7 mt-10 ">
            {
              Application.map(apply =><AppliedJobCard key={apply._id} apply={apply}></AppliedJobCard>)
            }
        </div>
    );
};

export default AppliedJob;
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MyjobsCard from "./MyjobsCard";
import Swal from "sweetalert2";



const Myjobs = () => {
    const [myJobs, setMyJobs] = useState([]);

    const url = `http://localhost:5000/jobs`;

    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setMyJobs(data))
    },[]);


    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!"
         }).then((result) => {
           if (result.isConfirmed) {
        
           fetch(`http://localhost:5000/jobs/${_id}`,{
               method:'DELETE'
           })
           .then(res=> res.json())
           .then(data =>{
               console.log(data);
               if(data.deletedCount > 0){
                     Swal.fire({
               title: "Deleted!",
               text: "Your Job has been deleted.",
               icon: "success"
             });
             const remaining = myJobs.filter(myJob =>myJob._id !== _id)
             setMyJobs(remaining);
               }
           })

           }
         });
   }

    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            myJobs.map(myjob =><MyjobsCard key={myjob._id} myjob={myjob} handleDelete={handleDelete}></MyjobsCard>)
        }
       </div>
    );
};

export default Myjobs;
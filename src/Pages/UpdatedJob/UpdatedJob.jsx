/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedJob = () => {
    const jobs = useLoaderData();
    const {_id, company_name, job_title, job_category, job_posting_date, application_deadline,compony_logo, salary_range} = jobs;

    const handleUpdateJob = event =>{
        event.preventDefault();
        const form = event.target;
        const company_name = form.company_name.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const job_posting_date = form.job_posting_date.value;
        const application_deadline = form.application_deadline.value;
        const compony_logo = form.compony_logo.value;
        const salary_range = form.salary_range.value;
        const job_Applicants = form.job_Applicants.value;

        const updatedjob = {company_name,job_title, job_category, job_posting_date, application_deadline, compony_logo, salary_range, job_Applicants};
        console.log(updatedjob);

        // send data to server
        fetch(`http://localhost:5000/jobs/${_id}`, {
       method: 'PUT',
       headers:{
        'content-type': 'application/json'
       },
       body: JSON.stringify(updatedjob)
    
        })
        .then(res =>res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount >0){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Job Update Successfully",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })





    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-black">Update A Job</h2>
            <form onSubmit={handleUpdateJob}>
                {/* form -1 */}
                <div className="md:flex">
                <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text">Company name</span>
              </label>
             <label className="input-group">
           <input type="text" placeholder="company_name" name="company_name" defaultValue={company_name}  className="input input-bordered w-full" />
             </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
            <label className="label">
           <span className="label-text">Job title</span>
           </label>
           <label className="input-group">
           
           <input type="text" placeholder="job_title" name="job_title" defaultValue={job_title} className="input input-bordered w-full" />
             </label>
              </div>
                </div>
                   {/* form -2 */}
                   <div className="md:flex">
                <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text">job category</span>
              </label>
             <label className="input-group">
           <input type="text" placeholder="job_category" name="job_category" defaultValue={job_category} className="input input-bordered w-full" />
             </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
            <label className="label">
           <span className="label-text">job posting date</span>
           </label>
           <label className="input-group">
           
           <input type="text" placeholder="job_posting_date" name="job_posting_date" defaultValue={job_posting_date} className="input input-bordered w-full" />
             </label>
              </div>
              </div>
              {/* form -3 */}
              <div className="md:flex">
                <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text">application deadline</span>
              </label>
             <label className="input-group">
           <input type="text" placeholder="application_deadline" defaultValue={application_deadline} name="application_deadline" className="input input-bordered w-full" />
             </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
            <label className="label">
           <span className="label-text">salary range</span>
           </label>
           <label className="input-group">
           
           <input type="text" placeholder="salary_range" name="salary_range" defaultValue={salary_range} className="input input-bordered w-full" />
             </label>
              </div>
                </div>
                      {/* form -4 */}
              <div className="md:flex">
                <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text">compony logo</span>
              </label>
             <label className="input-group">
           <input type="text" placeholder="compony_logo" name="compony_logo" defaultValue={compony_logo} className="input input-bordered w-full" />
             </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
            <label className="label">
           <span className="label-text">job Applicants</span>
           </label>
           <label className="input-group">
           
           <input type="text" placeholder="job_Applicants" name="job_Applicants" className="input input-bordered w-full" />
             </label>
              </div>
                </div>
                <input type="submit" value="Update Job" className="btn btn-block mt-4" />
                
            </form>
        </div>
    );
};

export default UpdatedJob;
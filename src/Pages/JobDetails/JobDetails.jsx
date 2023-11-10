import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";


const JobDetails = () => {

  const {user} = useContext(AuthContext);

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job._id === id);
    console.log(job)
    
    const { company_name, job_title, job_category, job_posting_date, application_deadline,compony_logo, salary_range} = job;

    return (
        <div className="card card-side bg-base-100 shadow-xl lg:w-[900px] mx-auto mt-10">
  <figure><img className="lg:w-[400px] lg:h-[300px] " src={compony_logo}/></figure>
  <div className="card-body">
    <h2 className="card-title">Company Name : {company_name}</h2>
    <p>Job Title : {job_title}</p>
    <p>Job Category: {job_category}</p>
    <p>Posting Date : {job_posting_date}</p>
    <p>Application Deadline : {application_deadline}</p>
    <p>Salary: {salary_range}</p>
    <div className="card-actions justify-end">
     
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#7E90FE] text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>AppLy</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    
  <div>
  <div>
            <h2 className='text-center text-3xl'>Job Apply</h2>
            <form >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Resume Link</span>
                        </label>
                        <input type="text" placeholder="Resume Link" name="resume"   className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
  </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     
    </div>
  </div>
</div>
    );
};

export default JobDetails;
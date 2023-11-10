/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";



const AllJobs = ({alljob}) => {
    const {_id, company_name, job_title, job_category, job_posting_date, application_deadline,compony_logo, salary_range} = alljob;

  


    return (
        <div className=" border-2  rounded-lg lg:w-[600px] lg:h-[392px] p-12">
            <img className="w-[116px] h-[60px] mb-2" src={compony_logo} alt="" />
            <h2 className="text-2xl font-extrabold">{job_title}</h2>
            <p className="text-xl font-semibold">{company_name}</p>
            <button className="btn btn-outline  m-2">{job_category}</button>
            <p className="text-xl font-semibold">Salary:{salary_range} Tk</p>
            
            
            <div className="">
                <p>Posting Date : {job_posting_date}</p>
                <p>Application Deadline : {application_deadline}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}>
                <button  className="btn btn-primary bg-[#7E90FE]">View Details</button>
                </Link>
              </div>
            </div>
            
        </div>
    );
};

export default AllJobs;
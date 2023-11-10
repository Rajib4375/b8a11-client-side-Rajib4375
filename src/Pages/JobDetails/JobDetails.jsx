import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
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
    
  </div>
</div>
    );
};

export default JobDetails;
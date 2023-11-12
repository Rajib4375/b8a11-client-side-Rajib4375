import { useLoaderData } from "react-router-dom";

const UpdatedJob = () => {
    const jobs = useLoaderData();
    const {_id, company_name, job_title, job_category, job_posting_date, application_deadline,compony_logo, salary_range} = jobs;
    return (
        <div>
            <img src={compony_logo} alt="" />
        </div>
    );
};

export default UpdatedJob;
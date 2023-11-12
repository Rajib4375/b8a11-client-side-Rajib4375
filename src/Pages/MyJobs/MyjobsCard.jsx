/* eslint-disable react/prop-types */
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const MyjobsCard = ({myjob, handleDelete}) => {
    const {_id, company_name, job_title, job_category, job_posting_date, application_deadline,compony_logo, salary_range} = myjob;


   


    return (
        <div className="card w-96 bg-slate-400 shadow-xl p-6">
  <figure><img className="w-[200px] h-[150px] rounded-xl " src={compony_logo} /></figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Company Name: {company_name}
    </h2>
    <p>Post Name: {job_title}</p>
    <p>Job Category: {job_category}</p>
    <p>Posting Date: {job_posting_date}</p>
    <p>Application Dadline: {application_deadline}</p>
    <p>Salary: {salary_range}</p>
    <div className="card-actions justify-end">
     <Link to={`/updatedjob/${_id}`}>
     <button className='text-3xl'><BiSolidEdit></BiSolidEdit></button>
     </Link>
      <button onClick={()=>handleDelete(_id)} className='text-3xl text-orange-500'><AiFillDelete></AiFillDelete></button>
    </div>
  </div>
</div>
    );
};

export default MyjobsCard;
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const AllJobsRow = ({job}) => {
    const {_id, company_name, job_title,  job_posting_date, application_deadline,compony_logo, salary_range} = job;
    return (
        <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={compony_logo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{company_name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         {job_title}
        </td>
        <td>{job_posting_date}</td>
        <td>{application_deadline}</td>
        <td>{salary_range}</td>
        <th>
        <Link to={`/details/${_id}`}><button  className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
    );
};

export default AllJobsRow;
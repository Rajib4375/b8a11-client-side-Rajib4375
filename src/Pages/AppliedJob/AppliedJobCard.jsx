/* eslint-disable react/prop-types */


const AppliedJobCard = ({apply}) => {
    const {compony_logo,date,email,jobHolderName,resume,title} = apply;
    return (
        <div className="card card-side bg-white shadow-xl p-7">
  <figure><img className="w-[100px] h-[70px]" src={compony_logo} alt="Movie"/></figure>
  <div className="card-body text-black">
    <h2 className="card-title">Applicant Name : {jobHolderName}</h2>
    <p>Post: {title}</p>
    <p>Applicant Email: {email}</p>
    <p>Resume Link:{resume}</p>
    <p>Application Date:{date}</p>
    
  </div>
</div>
    );
};

export default AppliedJobCard;
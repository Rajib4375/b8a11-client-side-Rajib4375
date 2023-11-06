


const Banner = () => {
    return (
        <div className="hero h-[800px] " style={{backgroundImage: 'url(https://i.ibb.co/0M5Y8kp/c98bfed5928b01576982e23e32aa5ecb18e2edce.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
      <p className="mb-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2" />
      <input className="btn bg-[#7E90FE] text-white" type="button" value="Search" />
      </div>
     
    </div>
  </div>
</div>
    );
};

export default Banner;
import logo from '../../../assets/career logo.webp'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-10">
        <aside>
        <img className="w-[120px] h-[70px]" src={logo} alt="" />
          
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Work</a> 
          <a className="link link-hover">Careers</a> 
          <a className="link link-hover">Latest News</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Contact</header> 
          <a className="link link-hover">524 Broadway , NYC</a> 
          <a className="link link-hover">+1 777 - 978 - 5570</a> 
          
        </nav>
      </footer>
    );
};

export default Footer;
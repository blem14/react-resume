import './Footer.css';
import { FaReact, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-references">
        <a className="Footer-link-icon" href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="Footer-powered-by">
        Powered by: <a className="Footer-link-icon" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <FaReact />
        </a>
      </div>
    </div>
  );
}

export default Footer;

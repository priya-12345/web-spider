import { FOOTER_URL } from "../utils/constants";

const Footer = () => {
    return (
      <div className="footer">
        <div className="logo-container">
          <img
            className="logo"
            src={FOOTER_URL}
          />
        </div>
        <div className="nav-items">
        <ul className="footer-nav">
          <li><a href="#copyright" className="footer-link">Copyright</a></li>
          <li><a href="#links" className="footer-link">Links</a></li>
          <li><a href="#address" className="footer-link">Address</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
      </div>
      </div>
    );
  };

  export default Footer;
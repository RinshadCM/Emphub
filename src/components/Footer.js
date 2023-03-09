import React from 'react';
import './/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-logo">
          <img src="https://i.postimg.cc/jSJyT91R/Gold-Luxury-Initial-Circle-Logo-1.png" alt="EmpHub Logo" />
          <h2>EmpHub</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

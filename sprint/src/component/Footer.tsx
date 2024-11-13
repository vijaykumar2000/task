import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
         we are committed to delivering innovative and high-quality products that enhance everyday life. Our passion for excellence drives us to design solutions that not only meet but exceed customer expectations. 

          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: sprint@gmail.com</li>
            <li>Phone: +918788052861</li>
            <li> Mon - Fri, 9 AM - 6 PM (EST)</li>
            <li>Sales: +1 800 234 5678</li>
            <li>Technical Support: +1 800 876 5432</li>
          </ul>
        </div>
        <div className="footer-section">
            <h4> Address</h4>
            <p> Central Building 3rd Floor office no.17, FC road GoodLuck chowk, MH-411017, India.</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a> 
            </li>   
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

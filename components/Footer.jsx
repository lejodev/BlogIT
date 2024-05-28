import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About BlogIt</h5>
            <p style={{ fontSize: "0.8rem" }}>
              BlogIt is your platform for insightful articles and updates. We provide valuable content on various topics, including technology trends and AI. Join our community to stay informed and motivated.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <div className="mt-3">
              <a href="mailto:alejandro.rv97@gmail.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-rincon-vera-4810b615a/" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/Alejandro_RV8" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/lejodev" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 BlogIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

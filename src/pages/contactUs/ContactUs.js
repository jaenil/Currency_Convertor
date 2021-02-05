import React from "react";
import Footer from "../../components/footer/Footer";
import "./ContactUs.css";
import { FaDiscord, FaGithubSquare } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <div className="contactUs-main-container">
        <h1>Connect with Us</h1>
        <div className="contactUs-container">
          <div className="user">
            <p>Jaenil</p>
            <div className="social-media">
              <FaGithubSquare />
              <span>github.com/jaenil</span>
            </div>
            <div className="social-media">
              <FaDiscord />
              <span>jp123</span>
            </div>
          </div>
          <div className="user">
            <p>Uryel</p>
            <div className="social-media">
              <FaGithubSquare />
              <span>github.com/uryellll</span>
            </div>
            <div className="social-media">
              <FaDiscord />
              <span>uryellll</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

import React from "react";
import Footer from "../../components/footer/Footer";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs-main-container">
        <div className="aboutUs-container">
          <h1>About</h1>
          <p>
            This is a simple currency converter react project using api from
            <a href="https://exchangeratesapi.io/" target="_blank">
              {" "}
              api.exchangeratesapi.io/
            </a>
            .
          </p>
          <p>
            You can view the project repository at
            <a
              href="https://github.com/jaenil/Currency_Convertor"
              target="_blank"
            >
              {" "}
              github.com/jaenil/Currency_Convertor
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

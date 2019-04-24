import React from "react";
import image from "../Assets/Chi-Eta-Phi-1.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="header container">
      <div className="header-image ">
        <a className="chi-eta-phi-image" href="Home">
          <img src={image} alt="national inc" />
        </a>
      </div>
      <div className="header-content ">
        <ul className="menu-item" style={{ margin: 0 }}>
          <li className="menu-item link">
            <a href="https://52lions06.github.io/williammckelvey/">Home</a>
          </li>
          <li className="menu-item link">
            <a href="https://52lions06.github.io/williammckelvey/">About</a>
          </li>
          <li
            className="menu-item link"
            style={{ paddingLeft: "1em", paddingRight: "1em" }}
          >
            <a href="https://52lions06.github.io/williammckelvey/">
              Leadership
            </a>
          </li>
          <li
            className="menu-item link"
            style={{ paddingLeft: "1em", paddingRight: "1em" }}
          >
            <span style={{ display: "inline-flex" }}>
              <a
                href="https://52lions06.github.io/williammckelvey/"
                style={{ width: "7em" }}
              >
                News &#x26; Events
              </a>
            </span>
          </li>
          <li className="menu-item link">
            <a href="https://52lions06.github.io/williammckelvey/">Photos</a>
          </li>
          <li
            className="menu-item link"
            style={{ paddingLeft: "1em", paddingRight: "0.5em" }}
          >
            <span style={{ display: "inline-flex" }}>
              <a
                href="https://52lions06.github.io/williammckelvey/"
                style={{ width: "6em" }}
              >
                Contact Us
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="header-social-media ">
        <a href="https://www.facebook.com" className="fa fa-facebook">
          remove
        </a>
        <a href="https://www.twitter.com" className="fa fa-twitter">
          remove
        </a>
      </div>
    </div>
  );
};
export default Header;

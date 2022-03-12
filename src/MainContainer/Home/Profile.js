import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="background">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text">
                Hello world, my name is{" "}
                <span className="highlighted-text">Breck</span>
              </span>
            </div>
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/breck-cowan-19a344219/">
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
                <a href="https://github.com/BreckCowan">
                  <i className="fa fa-2x fa-github-square"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCwaqGSyZ_du7gLLKwW5R-hg">
                  <i className="fa fa-2x fa-youtube-square"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Welcome to my site 😃",
                      1000,
                      "Let build together 🏗️",
                      1000,
                      "Enthusiastic Developer 🖥️",
                      1000,
                      "Cat Lover 🐱",
                      1000,
                      "React Developer ",
                      1000,
                      "Video Game Enthusiast 🎮",
                      1000,
                      "Front End Developer",
                      1000,
                      "Movie Afficiando 🎥",
                      1000,
                      "MongoDB",
                      1000,
                      "Creative and Inspired 🎇",
                      1000,
                      "Whiskey Connisour",
                      1000,
                      "Works great with teams 📬",
                      1000,
                      "Node.js",
                      1000,
                      "MERN Stack Dev",
                      1000,
                      "Front End Developer",
                      1000,
                      "Travel 🛫",
                      1000,
                    ]}
                    wrapper="p"
                  />
                </h1>
                <span className="profile-role-tagline">
                  I am ready to start building projects with you!
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn"> Hire me </button>
              <a href="Breck-Cowan.pdf" download="Breck-Cowan.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animations";
import "./Resume.css";

import udemy from "../../assets/Resume/udemy.png";
import fcc from "../../assets/Resume/fcc.jpg";

export default function Resume(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen container" id={props.id || ""}>
      <div className="resume-parent">
        <ScreenHeading title={"Resume"} subHeading={"What can I do for you?"} />

        <div className="resume-elements" id="resume-elements">
          <div className="left-sidebar">
            <div className="profile">
              <div className="profile-details">
                <h1>Breck Cowan</h1>
                <p>Web Developer</p>
              </div>
            </div>
          </div>

          <div className="right-sidebar">
            <div className="summary">
              <h3>Summary</h3>
              <p>
                I am a self-taught web developer seeking my first position in
                the technology sector. I have always been one to take on
                challenges, seek solutions, and gain knowledge in the process.
                Spending most of my professional career in hospitality
                management taught me countless lessons in conflict resolution,
                team training, and client satisfaction. My goal is to join an
                organization as a junior developer and continue to learn by
                building practical applications for clients all over the world.{" "}
              </p>
            </div>
            <div className="technical-skill-container">
              <h3>Technical Skills</h3>
              <div className="technical">
                <ul className="languages">
                  <h5>Languages</h5>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>

                <ul className="frameworks skill">
                  <h5>Frameworks</h5>
                  <li>React</li>
                  <li>Node</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                </ul>

                <ul className="ide skill">
                  <h5>IDE's</h5>
                  <li>VS Code</li>
                  <li>Atom</li>
                  <li>Postman</li>
                  <li>Robo 3T</li>
                </ul>

                <ul className="operating-systems skill">
                  <h5>OS</h5>
                  <li>Windows</li>
                  <li>Ubuntu</li>
                </ul>

                <ul className="version-control skill">
                  <h5>Version Control</h5>
                  <li>git</li>
                  <li>github</li>
                </ul>
              </div>
            </div>

            <h3>Work Experience</h3>
            <div className="work">
              <div className="work-heading">
                <h5>WEB DEVELOPMENT | INDEPENDENT STUDY | 2020-PRESENT</h5>
              </div>
              <div className="work-details">
                Through peer lead course work from various resources such as W3
                schools, Digital Defynd, and Udemy, have made me familiar with
                MERN Stack Development and JavaScript libraries. Building
                responsive sites and simple web applications have given me the
                ability to consume API’s for displaying information in real
                time, creating schemas for building data structure in MongoDB,
                and how CRUD operations are used for data storage and retrieval.
              </div>
              <br />
              <div className="work-heading">
                <h5>SERVICE INDUSTRY | VARIOUS ROLES | 2006-2020</h5>
              </div>
              <div className="work-details">
                An extensive career in hospitality has strengthened my customer
                service skills, ability for team management, and use of
                effective sales tactics. As management, some of my
                responsibilities included handling financials, menu creation and
                development, costing beverages for maximum profit, forecasting
                business for proper ordering of goods, writing schedules, and
                continuous product knowledge training for myself and my staff.
                Managing a restaurant requires the ability to multitask, think
                critically, and resolve issues quickly to continue a smooth
                service. For full details about roles and responsibilities,
                please visit my{" "}
                <a href="https://www.linkedin.com/in/breck-cowan-19a344219/">
                  LinkedIn
                </a>{" "}
                portfolio.
              </div>
            </div>

            <h3>Education</h3>

            <div className="education">
              <div className="school-name">
                <h5>YAVAPIA COLLEGE</h5>
              </div>
              <p>
                ASSOCIATES OF ARTS – PHOTOGRAPHIC, FILM, AND VIDEO TECHNOLOGY |
                SEDONA, ARIZONA
              </p>

              <div className="school-name">
                <h5>JOHN MARSHALL HIGH SCHOOL</h5>
              </div>
              <p>HIGH SCHOOL DIPLOMA | SAN ANTONIO, TEXAS</p>
            </div>

            <h3>Certifications</h3>
            <div className="certifications">
              <div className="free-code-camp">
                <a href="https://www.freecodecamp.org/certification/fcc958c2064-6c79-4bef-99f2-cc550a82d347/responsive-web-design">
                  Responsive Web Design
                </a>
                <p>
                  <span>
                    Issued by Quincy Larson - Obtained from{" "}
                    <img src={fcc} alt="freeCodeCamp logo" />
                  </span>
                </p>
              </div>

              <div className="free-code-camp">
                <a href="https://www.udemy.com/certificate/UC-570aafc5-43f8-4928-899a-e9ee6806f476/">
                  The Complete 2022 Web Development Bootcamp
                </a>

                <p>
                  <span>
                    Issued by Dr. Angela Yu - Obtained from{" "}
                    <img src={udemy} alt="freeCodeCamp logo" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

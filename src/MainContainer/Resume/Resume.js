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
            <section id="profile">
              <div className="profile">
                <div className="profile-details">
                  <h1 id="name-plate">Breck Cowan</h1>
                  <h4>Web Developer</h4>
                </div>

                <div className="resume-contact">
                  <p>
                    <a
                      id="resume-email"
                      href="mailto: breck.dev.work@gmail.com"
                    >
                      breck.dev.work@gmail.com
                    </a>
                  </p>
                </div>

                <div className="col">
                  <div className="col-icon">
                    <a href="https://www.linkedin.com/in/breck-cowan-19a344219/">
                      <i className="fa fa-2x fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/BreckCowan">
                      <i className="fa fa-2x fa-github-square"></i>
                    </a>
                  </div>
                </div>

                <div className="interests">
                <h3>Interests</h3>

                  <h5>Wine and Dine</h5>
                  <p>While I enjoy cooking, going out for a nice dinner and having a fine meal is something that I find hard to decline</p>
                    <h5>Working Out</h5>
                      <p>In my spare time, I like to work out and try to grow stronger and healthier</p>
                    <h5>Photography</h5>
                      <p>Being a student of film, I have always had an interest in photography and the stories that composition and light can tell</p>
                    <h5>Live Music</h5>
                      <p>I love to listen to music but absolutely love live proformances by artists how put their heart and soul into entertaining an audience</p>
                    <h5>Video Games</h5>
                      <p>Playing a game with a rich story, incredible graphics, and an amazing soundtrack will always be one of my favorite ways to unwind</p>
                </div>
                  
              </div>
            </section>
          </div>

          <div className="right-sidebar">
            <section id="summary">
              <div className="summary">
                <h3>Summary</h3>
                <span>
                  I am a self-taught web developer seeking my first position in
                  the technology sector. I have always been one to take on
                  challenges, seek solutions, and gain knowledge in the process.
                  Spending most of my professional career in hospitality
                  management taught me countless lessons in conflict resolution,
                  team training, and client satisfaction. My goal is to join an
                  organization as a junior developer and continue to learn by
                  building practical applications for clients all over the
                  world.{" "}
                </span>
              </div>
            </section>

          

            <section id="technical-skills">
              <h3>Technical Skills</h3>
              <span className="technical">
                <ul className="languages skill">
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
                  <h5>IDE/Editor</h5>
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
                  <li>Github</li>
                </ul>
              </span>
            </section>

            <section id="work">
              <h3>Work Experience</h3>
              <div className="work">
                <div className="work-heading">
                  <h5>WEB DEVELOPMENT | INDEPENDENT STUDY | 2020-PRESENT</h5>
                </div>
                <span className="work-details">
                  Through peer lead course work from various resources such as
                  freeCodeCamp, W3 schools, Digital Defynd, and Udemy, have made
                  me familiar with MERN Stack Development and JavaScript
                  libraries. Building responsive sites and simple web
                  applications have given me the ability to consume API’s for
                  displaying information in real time, creating schemas for
                  building data structure in MongoDB, and implementing CRUD
                  operations are used for data storage and retrieval.
                </span>
                <br />
                <div className="work-heading">
                  <h5>SERVICE INDUSTRY | VARIOUS ROLES | 2006-2020</h5>
                </div>
                <span className="work-details">
                  An extensive career in hospitality has strengthened my
                  customer service skills, ability for team management, and use
                  of effective sales tactics. As management, some of my
                  responsibilities included handling financials, menu creation
                  and development, costing beverages for maximum profit,
                  forecasting business for proper ordering of goods, writing
                  schedules, and continuous product knowledge training for
                  myself and my staff. Managing a restaurant requires the
                  ability to multitask, think critically, and resolve issues
                  quickly to continue a smooth service. For full details about
                  roles and responsibilities, please visit my{" "}
                  <a href="https://www.linkedin.com/in/breck-cowan-19a344219/">
                    LinkedIn
                  </a>{" "}
                  portfolio.
                </span>
              </div>
            </section>

            <section id="education">
              <h3>Education</h3>

              <div className="education">
                <div className="school-name">
                  <h5>YAVAPIA COLLEGE</h5>
                </div>
                <p>
                  ASSOCIATES OF ARTS – PHOTOGRAPHIC, FILM, AND VIDEO TECHNOLOGY
                  | SEDONA, ARIZONA
                </p>

                <div className="school-name">
                  <h5>JOHN MARSHALL HIGH SCHOOL</h5>
                </div>
                <p>HIGH SCHOOL DIPLOMA | SAN ANTONIO, TEXAS</p>
              </div>
            </section>

            <section id="certifications">
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

                <div className="free-code-camp">
                  <a href="https://www.udemy.com/certificate/UC-570aafc5-43f8-4928-899a-e9ee6806f476/">
                    Learn to Code in Python 3: Programming beginner to advanced
                  </a>

                  <p>
                    <span>
                      Issued by Ivan Lourenço Gomes - Obtained from{" "}
                      <img id="free-cc" src={udemy} alt="freeCodeCamp logo" />
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

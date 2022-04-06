import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "In 2020, I began studying web development with the intention of transitioning my career path to the technology sector.  I spent most of my professional life in the food and beverage industry, from a bus boy up to managing my own bar programs but feel that I am ready for a new chapter in my life.  I have always been one to take on challenges, seek solutions, and gain knowledge in the process.  Teamwork, client satisfaction, and a positive attitude are skills that I carry into any role that I take on.  I look forward to joining a team of developers to expand on the knowledge that I have gained on my own and continue growing my skills everyday as a web developer.",
    highlights: {
      bullets: [
        "Full Stack Web Developer",
        "Responsive Web Design",
        "React Dev",
        "Redux for State Management",
        "Building REST API",
        "Managing database",
      ],
      heading: "Summary : ",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"A Brief History of Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
          <div className="about-me-highlights">
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
          </div>
            {renderHighlight()}
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire me{" "}
              </button>
              <a href="Breck-Cowan.pdf" download="Breck-Cowan.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

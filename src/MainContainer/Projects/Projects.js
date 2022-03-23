import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (

<div className="projects-container screen container" id={props.id || ""}>

    <div class="projects-parent">
      {/* Project section begins */}
      <ScreenHeading title={"Projects"} subHeading={"What have you been working on?"} />
      <section id="projects" class="projects-section">

        <div class="projects-grid">
          <a
            href="https://codepen.io/BreckCowan/details/ZEaXveO"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Tribute Page
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/BreckCowan/details/qBVVZXL"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Survey Form
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/BreckCowan/details/YzEaPwq"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Technical Document
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/BreckCowan/details/MWOXRpO"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Javascript Calculator
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/BreckCowan/details/MWOXRpO"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Company Landing Page
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/BreckCowan/details/mdqKgXJ"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="#" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Weather App
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
      </section>

      {/* END PROJECTS SECTION */}
    </div>
</div>
  );
}

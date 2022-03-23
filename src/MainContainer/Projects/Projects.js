import './Projects.css'
import React from 'react'

export default function Projects() {
  return (
    <div class="main-container">
      {/* Project section begins */}

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

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
            <img
              class="project-image"
              src="#"
              alt="project"
            />
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
  );
}


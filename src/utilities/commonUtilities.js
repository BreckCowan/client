import Home from "../MainContainer/Home/Home";
import AboutMe from "../MainContainer/AboutMe/AboutMe";
import Projects from "../MainContainer/Projects/Projects";
import ContactMe from "../MainContainer/ContactMe/ContactMe";
import Resume from "../MainContainer/Resume/Resume";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};

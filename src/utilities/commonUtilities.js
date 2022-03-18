import Home from "../MainContainer/Home/Home";
import Projects from "../MainContainer/Projects/Projects";
import AboutMe from "../MainContainer/AboutMe/AboutMe";
import ContactMe from "../MainContainer/ContactMe/ContactMe";
import Footer from "../MainContainer/Footer/Footer";

export const TOTAL_SCREENS = [
  {
    screen_name: "Profile",
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
    screen_name: "Contact Me",
    component: ContactMe,
  },
  {
    screen_name: "Footer",
    component: Footer,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};

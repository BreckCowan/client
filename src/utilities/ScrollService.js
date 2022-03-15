import { TOTAL_SCREENS } from "./CommonUtilities";
import { Subject } from "rxjs";
import {object} from "prop-types"

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
//Scroll service to Contact Me element
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
//Scroll service to Home element
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
//Checking if the current element is in view partially or fully
  isElementInView = (element, type) => {
    let rec = element.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch(type) {
        case "partial":
            return partiallyVisible,

            case "complete":
                return completelyVisible
                default:
                    return false;
    }

  };
//
  changeScreenUnderViewport = (event) => {
      if(!event || object.keys(event).length < 1)
      return;
      for(let screen of TOTAL_SCREENS) {
          let screenFromDOM = document.getElementById(screen.screen_name);
          if(!screenFromDOM)
          continue;

          let fullyVisible = this.isElementInView(screenFromDOM, "complete");
          let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

          if(fullyVisible || partiallyVisible) {
              if(partiallyVisible && !screen.alreadyRendered){
                  ScrollService.currentScreenFadeIn.next({
                      fadeInScreen: screen.screen_name
                  })
                  screen['alreadyRendered'] = true;
                  break;
              }
              if(fullyVisible){
                  ScrollService.currentScreenBroadCaster.next({
                      screenInView: screen.screen_name,
                  })
                  break;
              }
          }
      }
  }
}

import React, { useRef } from "react";
import env from "react-dotenv";
import emailjs from "@emailjs/browser";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        env.SERVICE,
        env.TEMPLATE,
        form.current,
        env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me-container screen container" id={props.id || ""}>
      <div className="contact-me-parent">
        <ScreenHeading
          title={"Contact Me"}
          subHeading={"We should keep in touch"}
        />
        <div className="contact-me-card">
        <div className="thank-you">
          <p>Thank your for taking the time to visit my site!  I look forward to hearing from you and would love to work on amazing sites with you in the future. <br />  Have a great day! Cheers!</p>
        </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="name-control">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Your name"
                  id="name"
                  type="text"
                  name="from_name"
                />
              </div>

              <div className="email-control">
                <label>Email</label>
                <input
                  placeholder="YourEmail@domain.com"
                  className="form-control"
                  id="email"
                  type="email"
                  name="user_email"
                />
              </div>

              <div className="message-control">
                <label>Message</label>
                <textarea
                  className="form-control"
                  placeholder="Write your message here..."
                  name="message"
                  rows="4"
                  cols="50"
                />
              </div>

                <input className="form-control message-submit" type="submit" value="Send message" />

            </div>
          </form>
        </div>

        {/* 
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What would you like to discuss?
          </label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            Example multiple select
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="form-control">
          <button method="submit" type="submit">Send</button>
        </div>
      </form> */}
      </div>
    </div>
  );
}

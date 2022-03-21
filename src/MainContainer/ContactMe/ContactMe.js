import React from "react";
import "./ContactMe.css";


export default function ContactMe() {
  return (
    <div>
      <h1>ContactMe</h1>

      <p>
        Thank your for taking the time to visit my site! If you would like to
        contact me, please send me an email below. I look forward to meeting and
        hope to create some beautiful sites for you!
      </p>

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
      </form>
    </div>
  );
}

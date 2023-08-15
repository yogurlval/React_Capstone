import React from "react";
import "./Contact.css";
import Pho2 from "../assets/pho2.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Pho2})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter your Name" />
          <label htmlFor="email">Email</label>
          <input name="name" type="text" placeholder="Enter email address" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Enter your message"
            cols="30"
            rows="8"
          ></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

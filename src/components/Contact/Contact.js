import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CombinationBG from "../../img/CombinationBG.png";
const Contact = () => {
  const form = useRef();
  const EmailSender = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grk12vh",
        "template_ou33jgk",
        form.current,
        "pY4hw0Yq3N0gBAusa"
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
    <div className="Contact">
      {/* <img src={CombinationBG} alt="CombinationBG" /> */}
      <form ref={form} onSubmit={EmailSender}>
        <div className="Contact-bgColor"></div>
        <h1>Contact Form</h1>
          <div className="form-floating my-2">
            <input
              type="text"
              id="floatingNameInput"
              name="user_name"
              className="form-control"
              placeholder="Name..."
            />
            <label className="form-label" htmlFor="floatingNameInput">
              Name
            </label>
          </div>
          <div className="form-floating my-2">
            <input
              type="email"
              id="floatingEmailInput"
              name="user_email"
              className="form-control"
              placeholder="Email..."
            />
            <label className="form-label" htmlFor="floatingEmailInput">
              Email
            </label>
          </div>
          <div className="form-floating my-2">
            <textarea
              name="message"
              className="form-control"
              id="floatingMessageInput"
              placeholder="Message... Blah Blah"
            />
            <label className="form-label" htmlFor="floatingMessageInput">
              Message
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        
      </form>
    </div>
  );
};

export default Contact;

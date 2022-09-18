import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import emailjs from "@emailjs/browser";
import BG from "../../img/BG.jpg";
const options = {
  perspective: 5000,
  speed: 3000,
  max: 10,
  scale: 1.1,
};
const Contact = () => {
  const [submitBtnText, setsubmitBtnText] = useState("Send Message");

  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setsubmitBtnText("Sending message...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJSSERVICEid,
        process.env.REACT_APP_EMAILJSTEMPLATEid,
        form.current,
        process.env.REACT_APP_EMAILJSPUBLICKkey
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setsubmitBtnText("Send Message");
          }, 1000);
          setsubmitBtnText("Successful");
        },
        (error) => {
          setsubmitBtnText("Error");
          setTimeout(() => {
            window.location.reload(false);
          }, 500);
          console.log(error);
        }
      );
  };
  return (
    <div className="Contact">
      <div
        className="absolute_header_content"
        ref={tilt}
        {...options}
        data-tilt
        data-tilt-full-page-listening
      >
        <div className="header_bg_image">
          <img src={BG} alt="HeaderBackgroundImage" />
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="bg-effect">
          <img src={BG} alt="EffectHeaderBackgroundImage" />
        </div>
        <div className="contact-container-group row">
          <div className="contact-details col-lg-5">
            <div className="contact-details-header">
              <h2>Let's get in touch</h2>
              <span>Feel free to message if you have any concerns</span>
            </div>
            <div className="contact-details-content">
              <div className="contact-info-each-content">
                <div className="contact-info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <p>Address: SA, Adelaide</p>
              </div>
              <div className="contact-info-each-content">
                <div className="contact-info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </div>
                <p>Phone: +6141229328</p>
              </div>
              <div className="contact-info-each-content">
                <div className="contact-info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </div>
                <p>Email: jaylords83@gmail.com</p>
              </div>
            </div>
          </div>
          <form
            className="contact-form col-lg-7"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2>Get in touch</h2>
            <div className="contact-form-group">
              <div className="contact-form-input contact-form-name">
                <label htmlFor="user_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  id="user_name"
                  placeholder="Name"
                />
              </div>
              <div className="contact-form-input contact-form-email">
                <label htmlFor="user_email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  id="user_email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="contact-form-subject">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="name"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="contact-form-message">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                type="name"
                className="form-control"
                rows={5}
                name="message"
                id="message"
                placeholder="Your message"
              />
            </div>
            <button className="btn btn--color-design-1 mt-2" type="submit">
              {submitBtnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

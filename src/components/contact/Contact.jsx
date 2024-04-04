import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cshjdph", "template_fy4gd75", form.current, {
        publicKey: "T-sVzEdzeiEWdYR0E",
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Your form has submitted successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div id="contactSection">
        <h1 className="contactH1">
          <i className="fa-solid fa-chevron-left"></i>Contact /
          <i className="fa-solid fa-chevron-right"></i>
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputdiv">
            {/* <label className="contactLable">Name</label> */}
            <input
              className="contactInput"
              type="text"
              name="from_name"
              placeholder="Enter your name here"
            />
          </div>
          <div className="inputdiv">
            {/* <label className="contactLable">Email</label> */}
            <input
              className="contactInput"
              type="email"
              name="from_email"
              placeholder="Enter your Email here"
            />
          </div>
          <div className="inputdiv textarea">
            {/* <label className="contactLable">Messege</label> */}
            <textarea
              className="contactInput"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Drop some messege here"
            ></textarea>
          </div>
          <button className="submitBtn " type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      <hr className="contactHr" />
    </>
  );
};

export default Contact;

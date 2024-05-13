import React from "react";
import "../style/contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="bg-image">hii</div>

        <div className="bg-text">
          <h2>Blurred Background</h2>
          <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
          <p>And I'm a Photographer</p>
        </div>

        <div className="contact-map-wrapper">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.52315778601!2d73.87513107334944!3d18.459947371026896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb8f4b8ba46d%3A0x2900a29b91fd41c9!2sAsia21%20Gym%20%26%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1715517749938!5m2!1sen!2sin"
              height="450"
              width="100%"
              style={{ border: "0" }}
              title=""
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default Contact;

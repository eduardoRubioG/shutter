import React from "react";
import "./ContactSection.scss";
import ContactForm from "../ContactForm/ContactForm";

interface ContactSectionProps {
  sectionRef?: React.MutableRefObject<HTMLDivElement | null>; // used for scroll composition
  wrapperStyles?: React.CSSProperties;
  wrapperClassName?: string;
}

const ContactSection = (props: ContactSectionProps) => {
  const { sectionRef, wrapperClassName, wrapperStyles } = props;
  return (
    <section
      ref={sectionRef}
      className={`contact-section ${wrapperClassName || ""}`}
      style={wrapperStyles}
    >
      <div className="contact-section__color-bar"></div>
      <div className="contact-section__content">
        <div className="contact-section__form">
          <h2>Reach out</h2>
          <ContactForm
            formId="landing-page-contact"
            formName="Landing Page Contact"
          />
        </div>
        <div className="contact-section__deco">
          <span>
            The<br></br>Story<br></br>Told.
          </span>
          <img src="/images/sun-logo.png" alt="Alternative logo"></img>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

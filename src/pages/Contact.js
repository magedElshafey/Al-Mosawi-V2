import React from "react";
import Hero from "../components/utils/hero/Hero";
import ContactForm from "../components/contact/contactForm/ContactForm";
import ContactDetails from "../components/contact/contactDetails/ContactDetails";
import Location from "../components/contact/Location/Location";
const Contact = ({ heroContact, details, appointment }) => {
  return (
    <div>
      <Hero
        title={heroContact.title}
        img={heroContact.img}
        desc={heroContact.desc}
        pageName={heroContact.pageName}
        isBigHero={false}
        isSmallHero={false}
        isMediumHero={true}
      />
      <div className="container py-5">
        <div className="row gap-5">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <ContactForm />
          </div>
          <div className="col-12 col-md-5">
            <ContactDetails details={details} appointment={appointment} />
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Contact;

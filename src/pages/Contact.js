import React from "react";
import Hero from "../components/utils/hero/Hero";
import ContactForm from "../components/contact/contactForm/ContactForm";
import ContactDetails from "../components/contact/contactDetails/ContactDetails";
import Location from "../components/contact/Location/Location";
import { useTranslation } from "react-i18next";
const Contact = ({ appointment, contactDetails }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Hero
        title={contactDetails.headerTitle}
        desc={contactDetails.headerDes}
        img={contactDetails.headerImg}
        pageName={i18n.language === "en" ? "contact us" : "تواصل معنا"}
        isBigHero={false}
        isSmallHero={false}
        isMediumHero={true}
        isStatic={true}
      />
      <div className="container py-5">
        <div className="row gap-5">
          <div className="col-12 col-md-7 mb-3 mb-md-0">
            <ContactForm
              title={contactDetails.formTitle}
              desc={contactDetails.formDescription}
            />
          </div>
          <div className="col-12 col-md-4">
            <ContactDetails
              phone={contactDetails.phone}
              hotLine={contactDetails.customerServicePhone}
              address={contactDetails.address}
              appointment={appointment}
            />
          </div>
        </div>
      </div>
      <Location map={contactDetails.map} quote={contactDetails.mapQuote} />
    </div>
  );
};

export default Contact;

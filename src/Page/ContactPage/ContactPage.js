import React from "react";
import ContactUs from "./ContactUs/ContactUs";
import GetInTouch from "./GetInTouch/GetInTouch";
import ContactMap from "./ContactMap/ContactMap";
import BackToTop from "../../Components/BackToTop/BackToTop";

export default function ContactPage() {
  return (
    <>
      <ContactUs />
      <GetInTouch />
      <ContactMap />
      <BackToTop />
    </>
  );
}

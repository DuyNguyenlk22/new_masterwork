import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import FeaturesAbout from "./FeaturesAbout/FeaturesAbout";
import Creative from "./Creative/Creative";
import SliderAbout from "./SliderAbout/SliderAbout";
import TeamMember from "./TeamMember/TeamMember";
import BeforeFooter from "../HomePage/BeforeFooter/BeforeFooter";
import BackToTop from "../../Components/BackToTop/BackToTop";

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <FeaturesAbout />
      <Creative />
      <SliderAbout />
      <TeamMember />
      <BeforeFooter />
      <BackToTop />
    </>
  );
}

import React from "react";
import Banner from "./Banner/Banner";
import Tools from "./Tool/Tools";
import About from "./About/About";
import SubBanner from "./SubBanner/SubBanner";
import General from "./General/General";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Testimonails from "./Testimonails/Testimonails";
import BeforeFooter from "./BeforeFooter/BeforeFooter";
import BackToTop from "../../Components/BackToTop/BackToTop";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Tools />
      <About />
      <SubBanner />
      <General />
      <ProjectsSection />
      <Testimonails />
      <BeforeFooter />
      <BackToTop />
    </>
  );
}

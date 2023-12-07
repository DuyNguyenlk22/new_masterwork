import React from "react";
import OurServices from "./OurServices/OurServices";
import Strategy from "./Strategy/Strategy";
import FeaturedService from "./FeaturedService/FeaturedService";
import BackToTop from "../../Components/BackToTop/BackToTop";

export default function ServicesPage() {
  return (
    <>
      <OurServices />
      <Strategy />
      <FeaturedService />
      <BackToTop />
    </>
  );
}

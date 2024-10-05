import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AfterHeroSection from "../components/Home/AfterHeroSection";
import WhatWeDo from "../components/Home/WhatWeDo";
import CompanySection from "../components/Home/CompanySection";
import AfterCompanySection from "../components/Home/AfterCompanySection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AfterHeroSection />
      <WhatWeDo />
      <CompanySection />
      <AfterCompanySection />
    </div>
  );
};

export default Homepage;

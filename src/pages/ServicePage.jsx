import React from "react";
import ServiceBanner from "../components/Services/Banner";
import CatalogSwiperSection from "../components/Services/CatalogSwiperSection";
import CatalogueSection from "../components/Services/CatalogSection";
import Detail from "../components/Services/Detail";
import WhatWeDo from "../components/Services/WhatWeDo";

const ServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <CatalogSwiperSection />
      <CatalogueSection />
      <Detail />
      <WhatWeDo />
    </div>
  );
};

export default ServicePage;

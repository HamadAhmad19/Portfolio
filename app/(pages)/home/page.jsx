import React from "react";
import Start from "@/app/components/hero/page.jsx";
import Marquee from "@/app/components/marquee/marquee.jsx";
import Services from "@/app/components/services.jsx";
import Work from "@/app/components/work.jsx";
import ContactForm from "@/app/components/contactform.jsx";

const HomeComponent = () => {
  return (
    <>
      <Start />
      <Marquee />
      <Services />
      <Work />
      <ContactForm />
    </>
  );
};

export default HomeComponent;

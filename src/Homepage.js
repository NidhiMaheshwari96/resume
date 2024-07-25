import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./global.css";
import { Footer } from "./components/Footer";
import Services from "./components/Services";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import ExpertResume from "./components/ExpertResume";
import Testimonials from "./components/Testimonials";
import ResumeSection from "./components/ResumeSection";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Slider />
      <Services />
      <SixthSection />
      <FourthSection />
      <ExpertResume />
      {/* <FifthSection /> */}
      <Testimonials />
      <ResumeSection />

      <Footer />
    </div>
  );
};

export default Homepage;

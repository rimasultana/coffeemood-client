import React from "react";
import Hero from "../../components/Hero";
import MoodSection from "../../components/MoodSection";
import BlogSection from "../../components/Blog";
import Testimonials from "../../components/Testimonials ";
import HowItWorks from "../../components/HowItWork";
import Newsletter from "../../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <MoodSection />
      <BlogSection />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;

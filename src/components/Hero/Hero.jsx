import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";
import { Link } from "react-router-dom";

const Hero = () => {
  

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-4xl font-bold">
              Astronaut Assist Watch Enhancing Space Missions with Innovation
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Astronaut smart bands are specialized wearable devices designed to
              enhance the performance, safety, and health of astronauts during
              space missions. Their mission encompasses several critical
              functions, each aimed at addressing the unique challenges of
              living and working in space. Here’s a detailed explanation of
              their key objectives and functionalities:
            </p>
 
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;



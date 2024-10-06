import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import { NavLink,Link } from "react-router-dom";


const ServiceData = [
  {
    title: "EMW",
    content: "300-1500km",
    description:
      "Environmental Monitoring watches can track and display environmental data like temperature and pressure",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "MZTD",
    content: "500-1500km",
    description:
      " Multi-Zone Time Display ability to show time across multiple time zones ",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "GPS and Navigation in certain models, GPS functions assist in navigating and monitoring location in space.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {

  const handleClick=()=>{
    alert("hello");
  }
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (

                  <Link to="/"> 
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[220px] max-h-[260px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto cursor-pointer"
                       
                   >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                    </Link>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;

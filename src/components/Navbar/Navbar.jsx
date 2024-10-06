import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

 
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-10" />
              </Link>
              <span>ASTRO-BAND</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-8 text-xl py-4">
                <li>
                  <a href="#">Design</a>
                </li>
                <li  >

                    <a href="https://www.nasa.gov/technology/"> Technology</a> 
                </li>
                <li>
                  <a href="https://science.nasa.gov/universe/galaxies/">Connection</a>
                </li>
                <li>
                  <a href="https://worldview.earthdata.nasa.gov/">Satellite</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


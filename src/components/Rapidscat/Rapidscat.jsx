import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {

   
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-wCocTWF-CBquMa2t99dVb7dFArjcNReWQ&s'
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[300px] object-cover rounded "
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
              Holo-Display
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              This term gives the display a more compact, futuristic feel, referencing holographic tech in a concise form.
              A concise term for a holographic display that projects images or data above the watch’s surface, creating a 3D visual experience.
              </p>
            <a href="https://www.hackster.io/news/this-holographic-watch-actually-fits-on-a-wrist-sort-of-e9ec4dd30111">   <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-5"
                 
              
              >
                 
                View All
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;

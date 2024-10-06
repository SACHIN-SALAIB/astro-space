import React from 'react'
const Hologram  = () => {
  return (
    <>
    <section className="bg-primary text-white pb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div data-aos="zoom-in">

        <img 
         className="w-full sm:w-[80%] mx-auto max-h-[300px] object-cover rounded"
        src="https://img.freepik.com/premium-photo/digital-hologram-icons-application-hand-watch-screen-wireless-network-technology_28586-937.jpg"
        alt=""/>
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
         Gesture Control Interface
            </h1>
            <p data-aos="fade-up" data-aos-delay="700">
            Intuitive gesture controls for easy operation, allowing astronauts to navigate the watch’s features while wearing gloves.unt.
            </p>
          <a href="https://blog.cranksoftware.com/what-is-gesture-based-ui">   <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-4"
            >
              View All
            </button></a>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Hologram 
import React from "react";
import Navbar from "./Navbar"
import WelcomeText from "./WelcomeText";

const header = () => {
  return (
    <>
       <section className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <Navbar/>
          <WelcomeText/>
        </div>

        {/* Right side - Image background */}
        <div
          className="lg:w-1/2 h-full bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: `url('/spa.png')`, // Replace with your image path
            height: '785px', // Adjust height as necessary
          }}
        >
        </div>
      </div>
    </section>
    </>
  );
};

export default header;

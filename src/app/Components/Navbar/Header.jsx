"use client"
import React, {useEffect} from "react";
import Navbar from "./Navbar"
import WelcomeText from "../WelcomeText";
import useRequestData from "../../../../Hooks/useRequestData";

const header = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/hero/607c44b7fc16480e9c109f09");
  }, []);

  return (
    <>
       <section className="bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <Navbar/>
          <WelcomeText/>
        </div>

        {/* Right side - Image background */}
        <div
          className="lg:w-1/2 lg:block h-full bg-cover md:hidden sm:hidden hidden bg-right bg-no-repeat"
          style={{
            backgroundImage: `url("/spa.png")`,
            height: '690px',
            objectFit: 'contain'
          }}
        >
        </div>
      </div>
    </section>
    </>
  );
};

export default header;

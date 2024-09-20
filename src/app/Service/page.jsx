"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/page";
import useRequestData from "../../../Hooks/useRequestData";
import Image from "next/image";

const Service = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/treatment");
  }, []);

  return (
    <div >
      <Navbar />
      <div className="m-auto text-center">
        <h1 className="font-semibold text-3xl p-3">OUR SERVICES</h1>
        <p className="font-medium text-lg">Here you can see an overview of our services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center w-full p-4">
          {data &&
            data.map((p) => (
              <ServiceCard
                key={p.id}
                title={p.title}
                image={p.image}
                content={p.content}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, image, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-200 p-5 m-4 h-auto flex flex-col items-center shadow bg-rose-50">
      <Image
        src={"http://localhost:5029/images/treatment/" + image}
        width={350}
        height={250}
        alt="treatmentPhoto"
        className="rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p
        className={`text-sm text-left text-gray-600 mt-2 pt-4 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <button
        onClick={toggleExpand}
        className="btn bg-gray-600 py-2 px-3 text-white font-semibold rounded-full m-4"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default Service;

"use client"
import React, { useState, useEffect } from "react";
import SimpleModal from "./SimpleModal";
import { FaCirclePlay } from "react-icons/fa6";
import useRequestData from "../../../Hooks/useRequestData";


const WelcomeText = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();


  useEffect(() => {
    makeRequest("http://localhost:5029/hero/607c44b7fc16480e9c109f09");
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-left px-5 lg:px-10 lg:pt-28 pt-5">
      {data && (
        <div>
           <h3 className="text-rose-400">{data.title1}</h3>
      <h1 className="text-5xl font-semibold text-gray-900 mt-4">
        {data.title2}
      </h1>
      <p className="text-gray-600 mt-4">
       {data.content}
      </p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap justify-center lg:justify-start space-x-4">

      <button className="bg-red-400 text-white px-6 py-3 shadow hover:bg-rose-300">
          Reserve Now
        </button>

      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="flex items-center space-x-2 text-gray-700"
      >
        <span><FaCirclePlay className="text-rose-200 text-4xl" />
        </span>
        <p>watch our story</p>
      </button>
      </div>

      {/* Render the modal */}
      <SimpleModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};


export default WelcomeText;

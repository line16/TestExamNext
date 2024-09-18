// components/SimpleModal.js
import React, {useEffect} from "react";
import { IoCloseSharp } from "react-icons/io5";
import useRequestData from "../../../Hooks/useRequestData";

const SimpleModal = ({ isOpen, onClose }) => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/hero/607c44b7fc16480e9c109f09");
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {data && (
      <div className="bg-white p-6 rounded-md shadow-lg w-8/12 h-3/6 relative">
        <video src={data.link} controls autoPlay width={800} className="mt-5"></video>
        <button
          className="absolute top-2 right-2 text-black px-3 py-1 rounded-md text-2xl"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
      </div>
      )}
    </div>
  );
};

export default SimpleModal;

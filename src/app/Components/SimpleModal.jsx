import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import useRequestData from "../../../Hooks/useRequestData";

const SimpleModal = ({ isOpen, onClose }) => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/hero/607c44b7fc16480e9c109f09")
      .then((response) => console.log(response)) // Check the video link
      .catch((err) => console.error(err)); // Catch and log any errors
  }, []);

  if (!isOpen) return null;

  // Function to convert a YouTube URL into an embeddable format
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      {data && (
        <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-8/12 lg:w-6/12 xl:w-7/12 h-fit relative overflow-auto">
          {data.link.includes("youtube.com") ? (
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${getYouTubeEmbedUrl(
                data.link
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              className="rounded-lg shadow-md"
            ></iframe>
          ) : (
            <video
              src={data.link}
              controls
              autoPlay
              className="w-full h-auto rounded-lg mt-5 shadow-md"
            ></video>
          )}

          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full text-2xl transition-colors"
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

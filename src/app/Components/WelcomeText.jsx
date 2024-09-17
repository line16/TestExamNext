import React from "react";
import { FaCirclePlay } from "react-icons/fa6";


const WelcomeText = () => {
  return (
    <div className="text-center lg:text-left px-10 pt-28">
      <h3 className="text-rose-400">SPA & BEAUTY CENTER</h3>
      <h1 className="text-5xl font-semibold text-gray-900 mt-4">
        Beauty and success <br /> starts here.
      </h1>
      <p className="text-gray-600 mt-4">
        Together creeping heaven upon third dominion be upon won't darkness rule
        behold it created good saw after she’d Our set living.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start space-x-4">
        <button className="bg-red-400 text-white px-6 py-3 shadow hover:bg-rose-300">
          Reserve Now
        </button>
        <button className="flex items-center space-x-2 text-gray-700">
          <span><FaCirclePlay className="text-rose-200 text-4xl" />
          </span>
          <p>Watch our story</p>
        </button>
      </div>
    </div>
  );
};

export default WelcomeText;

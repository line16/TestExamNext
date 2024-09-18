"use client";
import React, { useEffect } from "react";
import useRequestData from "../../../../Hooks/useRequestData";
import Image from "next/image";

const BookAtime = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { dataPic, isLoadingPic, errorPic, makeRequestPic } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/appointment/");
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center lg:py-5">
      <div className="lg:w-2/6 bg-rose-100 relative md:hidden lg:block">
    <Image src="/appointment-img.jpg" fill objectFit="cover" alt="appointment" />
  </div>

        <div className="lg:w-4/6 bg-rose-100 lg:py-2 lg:pl-12 lg:pr-36 md:w-full sm:w-full p-4">
          <form className="lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">NAME</label>
                <input
                  type="text"
                  className="px-4 py-4  bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="NAME"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="px-4 py-4  bg-rose-100  mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="EMAIL"
                  required
                />
              </div>

              {/* Select Service */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">SELECT SERVICE</label>
                <select className=" w-full required text-gray-400 px-4 py-4  bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent">
                  <option>SELECT SERVICE</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">PHONE NUMBER</label>
                <input
                  type="text"
                  required
                  className=" w-full px-4 py-4  bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="PHONE NUMBER"
                />
              </div>

              {/* Date Picker */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">DATE</label>
                <input
                  type="date"
                  required
                  className=" w-full px-4 py-4 text-gray-400 bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
              </div>

              {/* Time Picker */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">TIME</label>
                <input
                  type="time"
                  required
                  className=" w-full px-4 py-4 text-gray-400 bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
              </div>

              {/* Notes */}
              <div className="col-span-2 border-b-2 border-y-gray-300 w-full">
                <label className="hidden">YOUR NOTES</label>
                <textarea
                  rows="2"
                  className=" w-full px-4 py-4  bg-rose-100 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="Add your notes here"
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="px-6 py-3 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                MAKE AN APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAtime;

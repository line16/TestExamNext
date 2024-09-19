"use client";
import React, { useEffect, useRef } from "react";
import useRequestData from "../../../../Hooks/useRequestData";
import Image from "next/image";

const BookAtime = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  //hent Treatment titles
  const {
    data: dataTreat,
    isLoading: isLoadingTreat,
    error: errorTreat,
    makeRequest: makeRequestTreat,
  } = useRequestData();

  const formRef = useRef(null);

  useEffect(() => {
    makeRequestTreat("http://localhost:5029/treatment");
  },[]);

  useEffect(() => {
    if (data) {
      formRef.current.reset();
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    makeRequest("http://localhost:5029/appointment", "POST", null, e.target);
  };

  return (
    <>
      <div className="flex flex-row justify-center lg:py-5">
        <div className="lg:w-2/6 bg-rose-50 relative md:hidden lg:block">
          <Image
            src="/appointment-img.jpg"
            fill
            objectFit="cover"
            alt="appointment"
          />
        </div>

        <div className="lg:w-4/6 bg-rose-50 lg:py-2 lg:pl-12 lg:pr-36 md:w-full sm:w-full p-4">
          <form 
          onSubmit={handleSubmit} 
          ref={formRef} 
          className="lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">NAME</label>
                <input
                  type="text"
                  className="px-4 py-4  bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="NAME"
                  required
                  name="name"
                />
              </div>

              {/* Email Address */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="px-4 py-4  bg-rose-50  mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="EMAIL"
                  required
                  name="email"
                />
              </div>

              {/* Select Service */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">SELECT SERVICE</label>
                <select name="treatment" id="" defaultValue="default" className=" w-full required text-gray-400 px-4 py-4  bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent">
                  <option value="default" disabled>
                    {" "}
                    Select treatment
                  </option>
                  {dataTreat &&
                    dataTreat.map((c) => (
                      <option value={c._id} key={c._id}>
                        {c.title}
                      </option>
                    ))}
                </select>
              </div>

              {/* Phone Number */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">PHONE NUMBER</label>
                <input
                  type="text"
                  required
                  className=" w-full px-4 py-4  bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="PHONE NUMBER"
                  name="phone"
                />
              </div>

              {/* Date Picker */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">DATE</label>
                <input
                  type="date"
                  required
                  name="date"
                  className=" w-full px-4 py-4 text-gray-400 bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
              </div>

              {/* Time Picker */}
              <div className="relative border-b-2 border-y-gray-300 w-full">
                <label className="hidden">TIME</label>
                <input
                  type="time"
                  required
                  name="time"
                  className=" w-full px-4 py-4 text-gray-400 bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
              </div>

              {/* Notes */}
              <div className="col-span-2 border-b-2 border-y-gray-300 w-full">
                <label className="hidden">YOUR NOTES</label>
                <textarea
                  rows="2"
                  name="notes"
                  className=" w-full px-4 py-4  bg-rose-50 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  placeholder="Add your notes here"
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="px-6 py-3 bg-rose-300 text-white rounded-full hover:bg-rose-400 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
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

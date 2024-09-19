"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import useRequestData from "../../../../../Hooks/useRequestData";

const NewTreatments = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  // State for success message
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef(null); // ref for the form

  // Clear form on success
  useEffect(() => {
    if (data) {
      formRef.current.reset();
    }
  }, [data]);

  const handleSubmit = (s) => {
    s.preventDefault();

    // Call the makeRequest function with the formData
    makeRequest("http://localhost:5029/treatment/admin", "POST", s.target);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8 text-gray-800">
          New Treatment
        </h1>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/ADMIN/AdminTreatments"
            className="text-rose-300 hover:underline text-xl"
          >
            &larr; Back to Overview
          </Link>
        </div>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            Treatment successfully updated!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="bg-rose-50 shadow-lg rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Title of the Treatment:
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Enter Treatment Title"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Description:
            </label>
            <textarea
              name="content"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Enter treatment description"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Upload Treatment Image:
            </label>
            <input
              type="file"
              name="image"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-rose-400 text-white px-6 py-3 rounded-md hover:bg-rose-500 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTreatments;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useRequestData from "../../../../../Hooks/useRequestData";
import useThumb from "../../../../../Hooks/useThumb";
import AdminNavbar from "@/app/Components/Navbar/AdminNavnbar";

const EditTreatments = () => {


  const { makeRequest, isLoading, data, error } = useRequestData();

  const [thumb, makeThumb] = useThumb();

  const {
    makeRequest: makeRequestPUT,
    isLoading: isLoadingPUT,
    data: dataPUT,
    error: errorPUT,
  } = useRequestData();

  // State for success message
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5029/about/");
  }, []);

  useEffect(() => {
    if (dataPUT) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 3-second delay before navigating
    }
  }, [dataPUT]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      // setImage(data.image);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    makeRequestPUT(
      "http://localhost:5029/about/admin/",
      "PUT",
      "null",
      e.target
    );
  };

  return (
    <div className="min-h-screen p-6">
        <AdminNavbar/>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8 text-gray-800">Edit Treatment</h1>

        {/* Back Button */}
        <div className="mb-6">
          <Link href="/ADMIN/AdminAbout" className="text-rose-300 hover:underline text-xl">
            &larr; Back to Overview
          </Link>
        </div>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            About successfully updated!
          </div>
        )}

        {/* Edit Form */}
        {data && (
          <form
            onSubmit={handleSubmit}
            className="bg-rose-50 shadow-lg rounded-lg p-8 max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                About title:
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Description:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                name="content"
                placeholder="Enter description"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
{/* 
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Upload Image:
              </label>
              <input
                type="file"
                name="image"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                onChange={(e) => makeThumb(e.target.files[0])}
              />
              {thumb && <div className="mt-4">{thumb}</div>}
            </div> */}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-rose-400 text-white px-6 py-3 rounded-md hover:bg-rose-500 transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTreatments;

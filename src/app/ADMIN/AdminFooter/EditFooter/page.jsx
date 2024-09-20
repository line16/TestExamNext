"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useRequestData from "../../../../../Hooks/useRequestData";
import useThumb from "../../../../../Hooks/useThumb";
import AdminNavbar from "@/app/Components/Navbar/AdminNavnbar";
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from "react-icons/fa";

const EditFooter = () => {

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
    makeRequest("http://localhost:5029/footer/");
  }, []);

  useEffect(() => {
    if (dataPUT) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 3-second delay before navigating
    }
  }, [dataPUT]);

  const [name, setName] = useState("");
  const [cvr, setCvr] = useState("");
  const [address, setAddress] = useState("");
  const [zipncity, setZipncity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [openinghours, setOpeningHours] = useState("");




  useEffect(() => {
    if (data) {
      setName(data.name);
      setCvr(data.cvr);
      setAddress(data.address);
      setZipncity(data.zipncity);
      setPhone(data.phone);
      setEmail(data.email);
      setOpeningHours(data.openinghours);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    makeRequestPUT(
      "http://localhost:5029/footer/admin/",
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
      <Link href="/ADMIN/AdminFooter" className="text-rose-300 hover:underline text-xl">
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
            name:
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            CVR:
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="cvr"
           value={cvr}
           onChange={(e) => setCvr(e.target.value)}
           placeholder="Enter cvr"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            address
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="address"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
           placeholder="Enter Address"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            zipncity
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="zipncity"
           value={zipncity}
           onChange={(e) => setZipncity(e.target.value)}
           placeholder="Enter zip and city code"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            phone
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="phone"
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
           placeholder="Enter phoe"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            email
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter email"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            opening hours
          </label>
          <input
           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
           type="text"
           name="openinghours"
           value={openinghours}
           onChange={(e) => setOpeningHours(e.target.value)}
           placeholder="Enter open hours"
          ></input>
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
    )}
  </div>
</div>
  )
}

export default EditFooter
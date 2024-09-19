"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";
import useRequestData from "../../../../Hooks/useRequestData";
import AdminNavbar from "@/app/Components/Navbar/AdminNavnbar";

const AdminTreamtent = () => {
  // GET request
  const { makeRequest, isLoading, data, error } = useRequestData();

  // DELETE request
  const {
    makeRequest: makeRequestDEL,
    isLoading: isLoadingDEL,
    data: dataDEL,
    error: errorDEL,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/treatment");
  }, [dataDEL]);

  const handleDelete = (ID, title) => {
    if (window.confirm(`Er du sikker på at du ville slette ${title}?`)) {
      // Confirm delete action
      makeRequestDEL(`http://localhost:5029/treatment/${ID}`, "DELETE");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <AdminNavbar />
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8 text-gray-800">Admin - Treatments</h1>

        {/* Create New Product Button */}
        <div className="flex justify-end mb-6">
          <Link
            href="/ADMIN/AdminTreatments/NewTreatment"
            className="bg-rose-400 text-white px-4 py-2 rounded-lg hover:bg-rose-500 transition duration-200"
          >
            Make a new treatment
          </Link>
        </div>

        {/* Treatment Table */}
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left text-lg leading-normal">
                <th className="py-3 px-6 font-semibold">Treatment</th>
                <th className="py-3 px-6 font-semibold">Content</th>
                <th className="py-3 px-6 font-semibold">Image</th>
                <th className="py-3 px-6 font-semibold text-center">Edit</th>
                <th className="py-3 px-6 font-semibold text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-lg">
              {data &&
                data.map((c) => (
                  <tr
                    key={c._id}
                    className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
                  >
                    <td className="py-4 px-6">{c.title}</td>
                    <td className="py-4 px-6 truncate max-w-xs">{c.content}</td>
                    <td className="py-4 px-6">{c.image}</td>
                    <td className="py-4 px-6 text-center">
                      <Link
                        href={{
                          pathname: "/ADMIN/AdminTreatments/EditTreatments/",
                          query: { id: c._id },
                        }}
                        className="text-green-500 hover:text-green-600 transition duration-200 text-2xl"
                      >
                        <MdEdit />
                      </Link>
                    </td>
                    <td
                      className="py-4 px-6 text-center cursor-pointer text-red-500 hover:text-red-700 transition duration-200 text-2xl"
                      onClick={() => handleDelete(c._id, c.title)}
                    >
                      <MdDelete />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTreamtent;

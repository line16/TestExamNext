"use client"
import React from "react";
import { useEffect } from "react";
import Link from "next/link";

import { MdEdit, MdDelete } from "react-icons/md";
import useRequestData from "../../../../Hooks/useRequestData";
import AdminNavbar from "@/app/Components/Navbar/AdminNavnbar";

const AdminTreamtent = () => {
  //GET
  const { makeRequest, isLoading, data, error } = useRequestData();

  //DELETE
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
    console.log("handelDelete", ID);
    if (
      window.confirm("Er du sikker på at du ville slette " + title + "?")
    ) {
      //trykker på ok
      makeRequestDEL("http://localhost:5029/treatment/admin/" + ID, "DELETE");
    }
    //trykker på cancel kommer du bare tilbage
  };

  return (
    <div className="p-3">
        <AdminNavbar/>
      <h1 className="font-medium text-2xl text-center">Treatments - Admin</h1>
      <div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <td colSpan="3">
                  <Link href="/ADMIN/AdminTreatments/EditTreatments" className="btn btn-info">
                    Opret nyt produkt
                  </Link>
                </td>
              </tr>

              <tr>
                <th className="font-bold text-2xl">Treatment</th>
                <th>content</th>
                <th>image</th>
                <th>RET</th>
                <th>SLET</th>
              </tr>
            </thead>

            {data &&
              data.map((c) => (
                <tbody key={c._id}>
                  <tr className="hover">
                    <td>{c.title}</td>
                    <td className="line-clamp-1">{c.content}</td>
                    <td>{c.image}</td>
                    <td className="text-xl text-green-500 ">
                      <Link href={"#" + c._id}>
                        <MdEdit />
                      </Link>
                    </td>
                    <td
                      className="text-xl text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => handleDelete(c._id, c.name)}
                    >
                      <MdDelete />
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTreamtent;

"use client";
import React from "react";
import AdminNavbar from "../Components/Navbar/AdminNavnbar";
import Link from "next/link";

const pageAdmin = () => {
  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center font-semibold text-3xl">Welcome to Admin!</h1>
      <p className="text-center text-lg p-2">a little overview of the admin</p>

      <div className="w-9/12">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-800">
            <thead class="text-xs text-gray-700 uppercase bg-rose-50 border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  area
                </th>
                <th scope="col" class="px-6 py-3">
                  link
                </th>
                <th scope="col" class="px-6 py-3">
                  active
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-rose-50 border-b hover:bg-rose-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                >
                  About
                </th>
                <td class="px-6 py-4">
                  <Link
                    href="/ADMIN/AdminAbout"
                    className="text-gray-700 hover:text-rose-500"
                  >
                    AdminABOUT
                  </Link>
                </td>
                <td class="px-6 py-4">active (PUT)</td>
              </tr>
              <tr class="bg-rose-50 border-b hover:bg-rose-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                >
                  Service
                </th>
                <td class="px-6 py-4">
                  <Link
                    href="/ADMIN/AdminTreatments"
                    className=" text-gray-700 hover:text-rose-500"
                  >
                    AdminSERVICE
                  </Link>
                </td>
                <td class="px-6 py-4">Active (PUT, Delete), not Active(POST)</td>
              </tr>
              <tr class="bg-rose-50 border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                >
                  Contact
                </th>
                <td class="px-6 py-4">
                  <Link
                    href="#"
                    className="text-gray-700"
                  >
                    AdminCONTACT
                  </Link>
                </td>
                <td class="px-6 py-4">not Active</td>
              </tr>
              <tr class="bg-rose-50 border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                >
                  Feature
                </th>
                <td class="px-6 py-4">
                  <Link
                    href="#"
                    className="text-gray-700"
                  >
                    AdminFeature
                  </Link>
                </td>
                <td class="px-6 py-4">not Active</td>
              </tr>
              <tr class="bg-rose-50 border-b hover:bg-rose-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                >
                  Footer
                </th>
                <td class="px-6 py-4">
                  <Link
                    href="/ADMIN/AdminFooter"
                    className="text-gray-700"
                  >
                    AdminFooter
                  </Link>
                </td>
                <td class="px-6 py-4">Active (PUT)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default pageAdmin;

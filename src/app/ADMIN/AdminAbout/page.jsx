"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import useRequestData from "../../../../Hooks/useRequestData";
import AdminNavbar from "@/app/Components/Navbar/AdminNavnbar";

const AdminAbout = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/about")
  }, [])
  

  return (
    <>

    <div>
        <AdminNavbar/>
           {/* Create New Product Button */}
           <div className="flex justify-end mb-6">
          <Link
            href="/ADMIN/AdminAbout/EditAbout"
            className="bg-rose-400 text-white px-4 py-2 rounded-lg hover:bg-rose-500 transition duration-200"
          >
            Edit the About text
          </Link>
        </div>
    </div>

      <div className="m-auto text-center p-6 border border-gray-300 shadow">

        <figure>
          <Image
            src="/butterfly.png"
            height={65}
            width={65}
            alt="butterfly"
            className="pb-4"
          ></Image>
        </figure>
        <p className="text-gray-400">ABOUT OUR SPA CENTER</p>
        {data &&(
          <div>
            <h2 className="text-4xl font-medium p-4">{data.title}</h2>
            <p className="md:px-20 px-4 py-5 text-gray-400" dangerouslySetInnerHTML={{ __html: data.content }}></p>

          </div>
        )}
        
        <button className="bg-red-400 text-white px-6 py-3 my-10 hover:bg-rose-500 rounded-full ">
          <Link href="/Feature">READ MORE</Link>
        </button>
      </div>
    </>
  );
};

export default AdminAbout;

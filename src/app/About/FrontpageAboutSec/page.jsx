"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import useRequestData from "../../../../Hooks/useRequestData";

const FrontAbout = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/about")
  }, [])
  

  return (
    <>
      <div className="m-auto text-center p-6 ">
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
            <p className="px-20 py-5 text-gray-400" dangerouslySetInnerHTML={{ __html: data.content }}></p>

          </div>
        )}
        
        <button className="bg-red-400 text-white px-6 py-3 my-10 hover:bg-rose-500 rounded-full ">
          <Link href="/Feature">READ MORE</Link>
        </button>
      </div>
    </>
  );
};

export default FrontAbout;

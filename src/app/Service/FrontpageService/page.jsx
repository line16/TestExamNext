"use client";

import React, { useEffect } from "react";
import useRequestData from "../../../../Hooks/useRequestData";
import Image from "next/image";
import Link from "next/link";

const FrontpageService = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/treatment");
  }, []);

  return (
    <>
      {/* random 4 pics */}
      <div className="flex flex-row justify-between items-center">
        {data &&
          data.slice(0, 4).map((e) => (
            <figure key={e.id}>
              <Image
                src={"http://localhost:5029/images/treatment/" + e.image}
                width={350}
                height={350}
                alt="treatmentPhoto"
              ></Image>
            </figure>
          ))}
      </div>
      <h3 className="text-center text-3xl font-semibold p-5 font-themify" >
        Popular Procedures
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repudiandae
        explicabo quasi assumenda architecto eius atque eligendi repellendus
        quia sed. Consequatur nesciunt eveniet enim, rerum totam recusandae, ut
        eius delectus iusto molestias ab tempore!
      </p>

      <div className="flex flex-row justify-center items-center w-full flex-wrap">
      {data &&
  data.slice(0, 3).map((p) => (
    <div
      key={p.id}
      className="max-w-xs bg-white border border-gray-200 p-5 m-4"
    >
      <Image
        src={"http://localhost:5029/images/treatment/" + p.image}
        width={250}
        height={250}
        alt="treatmentPhoto"
        className="rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3 pt-4" dangerouslySetInnerHTML={{ __html: p.content }}></p>
      <button className="bg-gray-800 text-white rounded-full my-6 px-4 py-2"><Link href="/Service">READ MORE</Link></button>
    </div>
  ))}
      </div>

    </>
  );
};

export default FrontpageService;

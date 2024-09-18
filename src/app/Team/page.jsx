"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import useRequestData from "../../../Hooks/useRequestData";

const Team = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/team");
  }, []);

  return (
    <>
    <div className="pt-12 text-center w-8/12 m-auto">
      <h1 className="font-semibold text-3xl py-2">
        Experienced Team
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quia,
        exercitationem cupiditate vero nulla explicabo nihil nobis culpa tempora
        iure, non accusamus quibusdam?
      </p>
    </div>

      <div className="flex flex-row justify-center items-start w-full flex-wrap">
        {data &&
          data.map((e) => (
            <div className="max-w-sm p-5 m-4" key={e.id}>
              <Image
                src={"http://localhost:5029/images/team/" + e.image}
                width={300}
                height={150}
                alt="photo_Team"
              ></Image>
              <div className="relative -mt-10 px-10 pt-5 pb-10 bg-white m-10 border border-gray-200 shadow">
              <h3 className="font-semibold text-lg ">
                {e.firstname} {e.lastname}
              </h3>
              <p>{e.role}</p>
              </div>
            </div>
          ))}
      </div>

    
    </>
  );
};

export default Team;

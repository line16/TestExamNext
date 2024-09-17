"use client";
import React, { useEffect } from "react";

import useRequestData from "../../../Hooks/useRequestData";

const Team = () => {
  const { data: reviews, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/team");
  }, []);

  return (
    <>
      <h1>Experienced Team</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quia,
        exercitationem cupiditate vero nulla explicabo nihil nobis culpa tempora
        iure, non accusamus quibusdam?
      </p>

      <div>
        {data &&
          data.map((t) => (
            <div
              key={t.id}
              className="max-w-xs bg-white border border-gray-200 p-5 m-4"
            >
              <h3 className="text-lg font-semibold mt-4">{p.title}</h3>
              <p
                className="text-sm text-gray-600 mt-2 line-clamp-3 pt-4"
                dangerouslySetInnerHTML={{ __html: p.content }}
              ></p>
              <button className="bg-gray-800 text-white rounded-full my-6 px-4 py-2">
                <Link href="/Service">READ MORE</Link>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Team;

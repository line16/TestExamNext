"use client";
import React, { useEffect } from "react";
import useRequestData from "../../../../Hooks/useRequestData";

import Slider from "react-slick";

function SimpleSlider() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/recommendation/");
  }, []);

  return (
    <div className="bg-rose-50">
      {/* <Slider {...settings}>
        {data &&
          data.map((e) => (
            <div className="" key={e.id}>
              <div className="">
                <h3 className="">
                  {e.name} {e.title}
                </h3>
                <p>{e.content}</p>
              </div>
            </div>
          ))}
      </Slider> */}

      {data && (
        <div>
          {data.map((data) =>(
          <div key={data._id}>
            <p>{data.name}</p>
            <p>{data.title}</p>
            <p>{data.content}</p>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SimpleSlider;

"use client";
import React, { useEffect } from "react";
import useRequestData from "../../../../Hooks/useRequestData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/recommendation/");
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
        <Slider {...settings}>
          {data.map((data) =>(
          <div key={data._id}>
            <p>{data.name}</p>
            <p>{data.title}</p>
            <p>{data.content}</p>
          </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SimpleSlider;

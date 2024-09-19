"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

import Slider from "react-slick";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useRequestData from "../../../../Hooks/useRequestData";

const ReviewSlider = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("   http://localhost:5029/recommendation/antal/3");
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {data &&
        data.map((p) => (
          <div
            key={p.id}
            className="max-w-xs bg-white border border-gray-200 p-5 m-4"
          >
            <Image
              src={"http://localhost:5029/images/recommendation/" + p.image}
              width={250}
              height={250}
              alt="treatmentPhoto"
              className="rounded-t-lg"
              key={p._id}
            />
            <h3 className="text-lg font-semibold mt-4">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-2 pt-4">{p.title}</p>
            <p className="text-sm text-gray-600 mt-2 pt-4">{p.content}</p>
          </div>
        ))}
      <div>ådejfåw</div>
      {data && (
        <Slider {...settings} className="w-5/12 h-3/4 z-50">

          { data.map((p) => (
              <div
                key={p.id}
                className="max-w-xs bg-white border border-gray-200 p-5 m-4"
              >
                <Image
                  src={"http://localhost:5029/images/recommendation/" + p.image}
                  width={250}
                  height={250}
                  alt="treatmentPhoto"
                  className="rounded-t-lg"
                  key={p._id}
                />
                <h3 className="text-lg font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-2 pt-4">{p.title}</p>
                <p className="text-sm text-gray-600 mt-2 pt-4">{p.content}</p>
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
};

export default ReviewSlider;

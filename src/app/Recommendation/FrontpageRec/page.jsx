"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

import React, { useEffect } from "react";
import Slider from "react-slick";
import useRequestData from "../../../../Hooks/useRequestData";

const FrontRec = () => {
  const { data: reviews, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/recommendation/antal/3")
  }, [])
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="relative m-auto text-center text-black py-64 bg-opacity-600 bg-testimonialsBackground bg-cover">
      {/* pink overlay */}
      <div className="absolute top-0 left-0 h-fit w-full bg-rose-200 opacity-40 z-20"></div>
  
      <h1 className="text-3xl font-bold text-center mt-8 relative z-40">Kundeudtalelser</h1>
      <hr className="w-20 border-y-2 my-4 m-auto relative z-40" />
  
      {isLoading ? (
        <p className="relative z-40">Loading...</p> // Loading state
      ) : error ? (
        <p className="relative z-40">Error: {error.message}</p> // Error state
      ) : reviews && reviews.length > 0 ? (
        <Slider {...settings} className="z-50">
          {reviews.map((review) => (
            <div key={review._id} className="p-8">
              <p className="text-xl">"{review.content}"</p>
              <p className="mt-4 text-lg font-semibold">- {review.name}</p>
              <p>{review.title}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="relative z-40">No reviews found</p>
      )}
    </div>
  );
  
};

export default FrontRec;

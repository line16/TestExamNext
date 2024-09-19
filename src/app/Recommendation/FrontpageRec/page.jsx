"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useRequestData from "../../../../Hooks/useRequestData";

const ReviewSlider = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [currentIndex, setCurrentIndex] = useState(0)

  const SlideShow = (index) =>{
    setCurrentIndex(index)
  }

  useEffect(() => {
    makeRequest("   http://localhost:5029/recommendation/antal/3");
  }, []);


  return (
    <div className="bg-rose-50">
      <div className="flex flex-col items-center p-5">
        <Image
        src="/quote.png"
        width={50}
        height={50}
        alt="quote"
        className="mt-5"
        ></Image>

        {data && data.map((rec, index) =>(
          <div key={index} className={`${index === currentIndex ? 'block' : 'hidden'} flex flex-col mt-10 mb-5 text-center w-1/2 items-center`}>
            <p className="text-gray-600 font-semibold py-2">{rec.content}</p>
            <figure>
              <Image src={"http://localhost:5029/images/recommendation/" + rec.image} alt="dk" width={50} height={50} className="rounded-full m-5"></Image>
            </figure>
            <p className="font-semibold text-lg">{rec.name}, <span className="font-normal text-base">{rec.title}</span></p>
          </div>
        ))}

        <div className="flex items-center justify-center mb-10">
          {data && data.map((_, index) =>(
            <span key={index} onClick={()=> SlideShow(index)} className={`cursor-pointer h-3 w-3 mx-1 rounded-full ${index === currentIndex ? 'bg-rose-300' : 'bg-rose-200 opacity-60'}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;

"use client"
import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/page'
import useRequestData from '../../../Hooks/useRequestData'
import Image from "next/image";
import Link from "next/link";

const Service = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/treatment");
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='m-auto text-center'>
      <h1 className='font-semibold text-3xl p-3'>OUR SERVICES</h1>
      <div className="flex flex-col justify-center items-center w-full flex-wrap">
      {data &&
  data.map((p) => (
    <div
      key={p.id}
      className="max-w-5xl bg-white border border-gray-200 p-5 m-4 h-auto"
    >
      <Image
        src={"http://localhost:5029/images/treatment/" + p.image}
        width={350}
        height={250}
        alt="treatmentPhoto"
        className="rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-2 pt-4" dangerouslySetInnerHTML={{ __html: p.content }}></p>
    </div>
  ))}
      </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Service
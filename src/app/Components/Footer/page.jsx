"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from "react-icons/fa";
import useRequestData from "../../../../Hooks/useRequestData";

const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/footer/");
  }, []);

  return (
    <footer className="m-auto bg-rose-100 h-auto p-10 text-center">
      <figure>
        <Image src="/logo.png" height={26} width={85} alt="logo"></Image>
      </figure>

      {/* Check if data exists before mapping */}
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item._id} className="p-8">
            <p className="text-xl">"{item.name}"</p>
            <p className="mt-4 text-lg font-semibold">- {item.address}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}

      <ul className="font-semibold m-auto text-center pt-7">
        <li className="inline p-5 ">
          <Link href="/">HOME</Link>
        </li>
        <li className="inline p-5">
          <Link href="/About">ABOUT</Link>
        </li>
        <li className="inline p-5">
          <Link href="/Feature">FEATURE</Link>
        </li>
        <li className="inline p-5">
          <Link href="/Service">SERVICE</Link>
        </li>
        <li className="inline p-5">
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>

      <div className="pt-5 flex flex-row justify-center">
        <p className="p-3">
          <Link href="#">
            <FaFacebookF />
          </Link>
        </p>
        <p className="p-3">
          <Link href="#">
            <FaTwitter />
          </Link>
        </p>
        <p className="p-3">
          <Link href="#">
            <FaVimeoV />
          </Link>
        </p>
        <p className="p-3">
          <Link href="#">
            <FaInstagram />
          </Link>
        </p>
      </div>

      <p className="font-semibold text-gray-400 text-sm pt-5">
        copyright 2019 <span className="text-rose-300">THemes.com</span> all
        rights reserved
      </p>
    </footer>
  );
};

export default Footer;

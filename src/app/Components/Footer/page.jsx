import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaVine, FaInstagram, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="m-auto bg-rose-100 h-auto p-10 text-center">
      <figure>
        <Image src="/logo.png" height={26} width={85} alt="logo"></Image>
      </figure>
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
        copyright 2019  <span className="text-rose-300">THemes.com</span> all right reserved
      </p>
    </footer>
  );
};

export default Footer;

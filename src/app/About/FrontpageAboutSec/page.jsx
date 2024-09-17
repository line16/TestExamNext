import React from "react";
import Link from "next/link";
import Image from "next/image";

const FrontAbout = () => {
  return (
    <>
      <div className="m-auto text-center p-6 ">
        <figure>
          <Image
            src="/butterfly.png"
            height={65}
            width={65}
            alt="butterfly"
            className="pb-4"
          ></Image>
        </figure>
        <figcaption className="text-gray-400">ABOUT OUR SPA CENTER</figcaption>
        <h2 className="text-4xl font-medium p-4">come and you will be inspired!</h2>
        <p className="px-20 py-5 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed
          eveniet repudiandae consectetur labore sapiente totam distinctio culpa
          esse dignissimos provident, voluptates numquam odio corporis
          perspiciatis magnam ducimus dolor facere, quod suscipit autem iste,
          harum quas. Esse commodi fuga sunt?
        </p>
        <button className="bg-red-400 text-white px-6 py-3 my-10 hover:bg-rose-500 rounded-full ">
          <Link href="/About">READ MORE</Link>
        </button>
      </div>
    </>
  );
};

export default FrontAbout;

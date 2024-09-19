"use client";
import React, { useEffect, useRef } from "react";
import useRequestData from "../../../../../Hooks/useRequestData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Page = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  // Hak en krog i quill-"textarea" + håndter toolbar
  const refQuill = useRef(null);
  const toolbarOptions = [
    ["bold", "italic"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];

  useEffect(() => {
    if (data) {
      // Tøm formularen, overvej at bruge en ref/useRef som Quill
      document.forms[0].reset();
      refQuill.current.getEditor().setText(""); // Tøm Quillfelt da den ikke er en del af formular
    }
  }, [data]);

  const handleSubmit = (s) => {
    s.preventDefault();
  
    let fd = new FormData(s.target); // Get the form data
    fd.append("content", refQuill.current.getEditor().getText()); // Append content from Quill
  
    // Log all FormData fields
    console.log("FormData contents:");
    for (let [key, value] of fd.entries()) {
      console.log(key, value);  // Logs each field and its value
    }
  
    makeRequest("http://localhost:5029/treatment/admin", "POST", fd);
  };
  

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="m-auto text-center w-10/12 h-auto rounded-md bg-white shadow-lg pb-6">
        <h1 className="pt-20 text-center font-bold text-3xl mb-6">
          Opret en ny service
        </h1>

        <section className="w-full flex flex-col items-center">
          <h2 className="font-medium text-2xl p-2 mb-6">Opret ny service</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <label className="w-8/12 my-4 form-control text-left">
              Service title:
              <input
                type="text"
                name="title"
                required
                placeholder="title"
                className="w-full input input-bordered bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-md p-2 mt-2"
              />
            </label>

            <label className="w-8/12 my-4 form-control text-left">
              Service beskrivelse:
            </label>

            <ReactQuill
              theme="snow"
              required
              modules={{ toolbar: toolbarOptions }}
              ref={refQuill}
              className="w-8/12 my-4"
            ></ReactQuill>

            {/* image */}
            <label className="w-8/12 my-4 form-control text-left">
              <input
                type="file"
                name="image"
                required
                className="w-full input input-bordered bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-md p-2"
              />
            </label>

            <button
              type="submit"
              className="w-44 h-10 bg-lime-500 text-white rounded-md mt-4 hover:bg-lime-600 transition duration-200"
            >
              Opret ny service
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Page;

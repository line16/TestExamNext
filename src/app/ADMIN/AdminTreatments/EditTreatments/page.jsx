"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import useRequestData from "../../../../../Hooks/useRequestData";
import { useParams } from "next/navigation";


const EditTreatments = () => {
  //tag id fra url
  const { ID } = useParams();

  //"GET"
  const { makeRequest, isLoading, data, error } = useRequestData();

  //vis thumbnail
//   const [thumb, makeThumb] = useThumb();


  //"PUT"
  const {
    makeRequest: makeRequestPUT,
    isLoading: isLoadingPUT,
    data: dataPUT,
    error: errorPUT,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/appointment/admin/" + ID);
  }, []);

  useEffect(() => {
    if (dataPUT) {
      navigate("/admin/productsAdmin");
    }
  }, [dataPUT]);

  const handleSubmit = (e) => {
    e.preventDefault(); //undgår siden reloader

    makeRequestPUT(
      "http://127.0.0.1:5125/products/" + ID, "PUT", "null", e.target,
    );

    // Create a new FormData object
    // const formData = new FormData(e.target);

    // const coverImageFile = e.target.coverImage.files[0];
    // if (coverImageFile) {
    //   formData.append("coverImage", coverImageFile);
    // }
  };

  return (
    <div>
      {/* {(isLoading || isLoadingPUT || isLoadingCAT) && <Loader />}
      {(error || errorPUT || errorCAT) && <Error />} */}

      <h1 className="text-3xl text-center font-semibold m-3">Ret produkt:</h1>
      <Link href="/" className="btn btn-accent">
        Tilbage til oversigten
      </Link>

      {data && (
        <form
          onSubmit={handleSubmit}
          className="form-control m-auto p-2 bg-gray-700 rounded-lg w-7/12"
        >
          <label className="p-2 text-center">
            Navn på produkt: <br /> {data.title}
            <input
              className="rounded-md h-8 w-2/3 p-2"
              type="text"
              placeholder="Navn på Produkt"
              name="productName"
              defaultValue={data?.title}
            />
          </label>

          <label className="p-2 text-center">
            Pris på produkt: <br />
            <input
              type="number"
              placeholder="Prisen på produktet"
              name="price"
              className="rounded-md h-8 w-2/3 p-2"
            />
          </label>

          <label className="p-2 text-center">
            Teaser tekst på produkt: <br />
            <input
              type="text"
              placeholder="Lille beskrivelse til produktet"
              name="teaser"
              className="rounded-md h-8 w-2/3 p-2"
            />
          </label>

          <label className="p-2 text-center">
            Længere beskrivelse af produkt: <br />
            <textarea
              type="text"
              placeholder="Beskrivelse til produktet"
              name="description"
              className="rounded-md w-2/3 p-2"
            />
          </label>

          <label className="p-2 text-center">
            Rating af produkt: <br />
            <input
              type="number"
              placeholder="Rating af produktet"
              name="rating"
              min={1}
              max={5}
              className="rounded-md h-8 w-2/3 p-2"
            />
          </label>

          {/* KATEGORI */}
          {/* <label className="p-2 text-center">
            Vælg kategori <br />
            <select
              name="category"
              className="rounded-md w-2/3 p-2"
              defaultValue="default"
            >
              <option value="default" disabled>
                vælg en kategori
              </option>
              {dataCAT &&
                dataCAT.categories.map((c) => (
                  <option value={c._id} key={c._id}>
                    {c.categoryName}
                  </option>
                ))}
            </select>
          </label> */}

          {/* DATO */}
          <label className=" p-2 text-center">
            Dato: <br />
            <input
              type="date"
              name="created"
              className="rounded-md w-2/3 p-2"
            />
          </label>

          {/* BILLEDE */}
          <label className="p-2 text-center">
            Billede af produkt: <br />
            <input
              type="file"
              name="coverImage"
              className="rounded-md w-2/3 p-2"
              onChange={(e) => makeThumb(e.target.files[0])}
            />
          </label>
          {thumb && thumb}

          {/* GALLERY */}
          <label className="p-2 text-center">
            Galleri billeder - max 3 pr. produkt <br />
            <input
              type="file"
              name="gallery"
              multiple
              className="rounded-md w-2/3 p-2"
            />
          </label>

          <button type="submit" className="btn btn-primary m-auto">
            Ret dette produkt
          </button>
        </form>
      )}
    </div>
  );
};

export default EditTreatments;

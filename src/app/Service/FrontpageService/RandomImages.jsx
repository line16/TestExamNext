// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import useRequestData from "../../../../Hooks/useRequestData";

// const About = () => {
//   // Define the function to get random elements
//   const getRandomElements = (array, numElements) => {
//     const shuffled = array.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, numElements);
//   };

//   const { data: dataImg, isLoading: isLoadingImg, error: errorImg, makeRequest: makeRequestImg } = useRequestData();
  
//   const [selectedImages, setSelectedImages] = useState([]);

//   useEffect(() => {
//     makeRequestImg("http://localhost:5029/treatment");
//   }, []);

//   useEffect(() => {
//     if (dataImg && dataImg.length > 0) {
//       const randomImages = getRandomElements(dataImg, 4);
//       setSelectedImages(randomImages);
//     }
//   }, [dataImg]);

//   // Handle loading and error states
//   if (isLoadingImg) {
//     return <p>Loading...</p>;
//   }

//   if (errorImg) {
//     return <p>Error loading images: {errorImg.message}</p>;
//   }

//   return (
//     <div>
//       <div className="flex flex-row justify-between h-screen">
//         {/* --- Display images --- */}
//         {selectedImages.map((e) => (
//           <div className="flex flex-row float-right" key={e.id}>
//             <figure>
//               <Image
//                 src={"http://localhost:5029/images/treatment/" + e.image}
//                 width={300}
//                 height={250}
//                 alt="photo"
//                 className="object-cover"
//               />
//             </figure>
//           </div>
//         ))}
//         {/* --- image END --- */}
//       </div>
//     </div>
//   );
// };

// export default About;

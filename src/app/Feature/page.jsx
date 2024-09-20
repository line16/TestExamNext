"use client";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/page";
import Image from "next/image";

const SpaEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Luxury Spa Retreat 2024",
      date: "March 10, 2024",
      description:
        "Escape the stresses of daily life and indulge in a full day of pampering. Enjoy massages, facials, and access to our luxurious sauna and pool facilities.",
      image: "4.jpg",
      location: "Spavej 33, Strandby, 9900 Skagen",
    },
    {
      id: 2,
      title: "Mindfulness & Meditation Workshop",
      date: "April 20, 2024",
      description:
        "Join our mindfulness experts for a relaxing day of meditation, yoga, and breathing exercises. Perfect for beginners and those looking to deepen their practice.",
      image: "7.jpg",
      location: "Spavej 33, Strandby, 9900 Skagen",
    },
    {
      id: 3,
      title: "Wellness and Detox Day",
      date: "May 15, 2024",
      description:
        "Refresh your body and mind with our wellness and detox event. Includes detoxifying treatments, juice cleanses, and personalized wellness consultations.",
      image: "5.jpg",
      location: "Spavej 33, Strandby, 9900 Skagen",
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="m-auto text-center">
        <h1 className="font-semibold text-3xl p-5">Upcoming Spa Events</h1>
        <div className="flex flex-col gap-6 p-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-rose-50 border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row items-center p-2"
            >
              <Image
                src={"/extra/" + event.image}
                width={350}
                height={250}
                alt={event.title}
                className="object-cover rounded-sm"
              />
              <div className="p-6 flex-1 text-left">
                <h2 className="font-semibold text-xl mb-2">{event.title}</h2>
                <p className="text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <p className="font-medium text-gray-800">{event.location}</p>
                <button className="bg-rose-300 px-3 py-2 rounded-full my-5 font-medium text-lg hover:bg-rose-400">Sign up</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpaEvents;

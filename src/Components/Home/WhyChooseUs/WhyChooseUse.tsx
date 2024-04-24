/* eslint-disable @next/next/no-img-element */
import { ChooseData } from "@/data/whychooseusdata";
import React from "react";
// import "./whyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <div className="grid gap-4 my-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-4 text-xl">
          Here are reasons you should plan a trip with us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full gap-4 my-5 ">
        {ChooseData.map((data, i) => (
          <div
            key={i}
            className="card card-compact bg-base-100 shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <figure className="overflow-hidden">
              <img
                className="h-32 w-32 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                src={data.imageUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.heading}</h2>
              <p>{data.description.slice(0, 200)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import { FiUsers } from "react-icons/fi";
import { BsClockFill } from "react-icons/bs";
import Link from "next/link";
const RecetTrip = ({ data }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const start = new Date(data.startDate);
  const end = new Date();
  const timeDifference = Math.abs(end - start);
  const days = Math.floor(timeDifference / oneDay);

  //   console.log(start, end);

  return (
    <div className="rounded overflow-hidden shadow-xl p-2">
      <Link href={`/eventDetails/${data.id}`}>
        <div className="relative">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={data.pictures[0]}
            alt={data.name}
          />
          <div className="absolute bottom-0 left-0 px-4 py-2 bg-gray-800 text-white">
            Price: {data.price}
          </div>
        </div>
        <div className="px-6 py-4  flex flex-col justify-between min-h-[250px]">
          <div>
            <h2 className="font-bold text-xl mb-2">{data.name}</h2>
            <p className="text-gray-700 text-base">
              {data.description.slice(0, 80)}..........
            </p>
          </div>

          <div className="flex justify-between px-1 my-3">
            <p className="flex gap-2 items-center font-bold  text-xl">
              {" "}
              <FiUsers /> {data.maxMembers}
            </p>
            <p className="flex gap-2 items-center font-bold  text-xl">
              {" "}
              <BsClockFill /> {days}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecetTrip;

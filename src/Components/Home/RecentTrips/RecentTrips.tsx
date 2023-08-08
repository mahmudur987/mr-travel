import Error from "@/Components/shared/Error/Error";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { GET_EVENTS } from "@/queries/eventQueries";
import { useQuery } from "@apollo/client";
import React from "react";
import RecetTrip from "./RecetTrip";
import Link from "next/link";

const RecentTrips = () => {
  const { loading, data, error } = useQuery(GET_EVENTS);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  const datas = [...data?.getEvents]
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )
    .slice(0, 3);
  // console.log(new Date(datas[0].startDate).toUTCString())

  return (
    <div className="my-5 mx-auto max-w-7xl">
      <h1 className="text-center my-10 text-red-400 text-2xl md:text-3xl lg:text-5xl font-bold ">
        Upcoming All Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas.map((data: any, i: React.Key) => (
          <RecetTrip key={i} data={data} />
        ))}
      </div>

      <Link href={"allEvents"}>
        <p className=" w-full text-center my-5">
          <button className=" btn btn-info">See All</button>
        </p>
      </Link>
    </div>
  );
};

export default RecentTrips;

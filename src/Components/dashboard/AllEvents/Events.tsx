import Error from "@/Components/shared/Error/Error";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { GET_EVENTS } from "@/queries/eventQueries";
import { useQuery } from "@apollo/client";
import React from "react";
import Event from "./Event";

const Events = () => {
  const { loading, data, error } = useQuery(GET_EVENTS);
  const events = data?.getEvents;
  console.log(events);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold">ALL EVENTS</h1>

      {data && (
        <div className="flex justify-between flex-wrap gap-3 my-10 md:my-20 lg:my-30">
          {events.map((event: any, i: any) => (
            <Event key={i} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;

import RecetTrip from "@/Components/Home/RecentTrips/RecetTrip";
import { UsesaveUsere } from "@/Components/hooks/saveUserHook";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";

import { GET_EVENT_BY_BOOKING_ID } from "@/queries/eventQueries";
import { useQuery } from "@apollo/client";
import React from "react";
const Bookings = () => {
  const [userData] = UsesaveUsere();

  console.log(userData?.user?.id);

  const { data, loading, error } = useQuery(GET_EVENT_BY_BOOKING_ID, {
    variables: { id: userData?.user?.id },
  });
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <LoadingSpinner />;
  }
  const datas = data.getEventsbyBookingUserId;

  return (
    <>
      {data && (
        <div className="my-5 mx-auto max-w-7xl">
          <h1 className="text-center my-10 text-red-400 text-2xl md:text-3xl lg:text-5xl font-bold ">
            All Bookings
          </h1>

          {datas.length < 1 && (
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl">
                {" "}
                You did not book any Event
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {datas.map((data: any, i: React.Key) => (
              <RecetTrip key={i} data={data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;

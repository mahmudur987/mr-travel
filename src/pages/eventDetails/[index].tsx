/* eslint-disable @next/next/no-img-element */
import { UsesaveUsere } from "@/Components/hooks/saveUserHook";

import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { toastObj } from "@/Components/shared/Toast/toastObject";
import BaseLayouts from "@/layouts/BaseLayouts";
import { ADD_MEMBER_TO_EVENT } from "@/mutations/eventMutation";
import { GET_EVENT } from "@/queries/eventQueries";
import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EventDetails = () => {
  const router = useRouter();
  const id = router.query.index;
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  const [userData, userLoading, userError] = UsesaveUsere();
  const [
    addmemberinevent,
    { loading: addMemLoading, data: addMemData, error: AddMemError },
  ] = useMutation(ADD_MEMBER_TO_EVENT);
  const {
    description,
    destination,
    endDate,
    maxMembers,
    pictures,
    planing,
    price,
    publishDate,
    spots,
    startDate,
    bestDeals,
    name,
    nonBookedSeats,
    bookedmember,
  } = data?.getOneEvent || {};

  const handeleAddMembersToEvent = async () => {
    try {
      const data = {
        eventId: id,
        memberId: userData.user.id,
        memberName: userData.user.name,
      };
      await addmemberinevent({
        variables: data,
        refetchQueries: "all",
      });

      toast.success("You have join to the event successfully!", toastObj);
    } catch (er: any) {
      toast.error(er.message, toastObj);
      console.log("Error adding member to the event:", er.message);
    }
  };

  if (loading || userLoading || addMemLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BaseLayouts>
      {data && (
        <section className="max-w-7xl mx-auto text-center">
          <div className="my-8 grid gap-3">
            <h1 className=" text-2xl md:text-3xl lg:text-6xl font-bold text-green-500">
              {" "}
              {name}{" "}
              <span className="text-sm text-black font-normal">
                Posted :{publishDate.slice(0, 16)}
              </span>
            </h1>
            <p className="text-red-500">Start Date : {startDate} </p>
          </div>

          <div className="w-full ">
            <img className="w-full " src={pictures[0]} alt="" />
          </div>
          {/* description */}
          <div className="my-5 flex flex-col gap-5">
            <p className="text-xl font-bold text-start p-2">{description}</p>
            <div className="text-2xl font-bold text-start bg-slate-200 p-2 rounded-xl shadow-2xl my-10">
              {" "}
              Destination
              {destination.city && (
                <p className="text-xl uppercase">City :{destination.city}</p>
              )}
              {destination.state && (
                <p className="text-xl uppercase">City :{destination.state}</p>
              )}
              {destination.country && (
                <p className="text-xl uppercase">
                  country :{destination.country}
                </p>
              )}
              {destination.district && (
                <p className="text-xl uppercase">
                  City :{destination.district}
                </p>
              )}
            </div>

            <p className="text-3xl font-bold text-start  flex gap-5">
              Visite Area :
              {spots.map((spot: string, i: React.Key) => (
                <span className="text-xl p-2" key={i}>
                  {spot},
                </span>
              ))}
            </p>
          </div>
          {/* planning */}

          <div className="my-10   p-2 rounded-xl">
            <h1 className="text-4xl font-extrabold my-5">
              What will we do in Our Trip
            </h1>

            <div className="my-5">
              {planing.map(
                (
                  plan: {
                    time: string;
                    description: string;
                    picture: String;
                  },
                  i: React.Key | null | undefined
                ) => (
                  <div className="my-5 shadow-xl " key={i}>
                    <h2 className="text-lg bg-black text-white my-5 w-1/5 mx-auto rounded-md p-3">
                      {plan.time}
                    </h2>
                    <div
                      className={`flex ${
                        i === 1 ? "flex-row-reverse" : "flex-row"
                      } justify-center items-center gap-5`}
                    >
                      <img className="w-1/2" src={plan.picture} alt="" />
                      <p className="w-1/2 font-bold">{plan.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* details info */}

          <div className="text-start flex gap-3 flex-col m-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold underline my-5">
              {" "}
              Deatails About this trip
            </h2>

            <p className="text-xl font-bold"> Maximum Members :{maxMembers}</p>
            <p className="text-xl font-bold">
              Remaining Seates :{nonBookedSeats - bookedmember.length}
            </p>
            <p>
              <select className="select text-xl font-bold pl-0 ">
                <option disabled selected>
                  Join Member List
                </option>
                {bookedmember?.map(
                  (
                    item: { userName: string; userId: String },
                    i: React.Key | null | undefined
                  ) => (
                    <option key={i}>{item.userName}</option>
                  )
                )}
              </select>
            </p>

            <p className="text-xl font-bold"> Start Date :{startDate}</p>
            <p className="text-xl font-bold "> Finished Date :{endDate}</p>
            {bestDeals && (
              <p className="text-2xl font-bold text-purple-800">
                Price :{" "}
                <span className="line-through m-0 p-0 text-lg">{price}</span>
                <span className="font-bold m-0 p-0 text-xl">
                  ${parseInt(price.slice(1, 10)) - 500}
                </span>
              </p>
            )}
            {!bestDeals && (
              <p className="text-2xl font-bold text-purple-800">
                Price : <span className=" m-0 p-0 text-lg">{price}</span>
              </p>
            )}
            <p className="text-end">
              <button
                onClick={handeleAddMembersToEvent}
                className="btn btn-accent"
              >
                Book Now
              </button>
            </p>
          </div>
        </section>
      )}
    </BaseLayouts>
  );
};

export default EventDetails;

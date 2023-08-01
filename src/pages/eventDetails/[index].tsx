import Error from "@/Components/shared/Error/Error";
import Header from "@/Components/shared/Header/Header";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { GET_EVENT } from "@/queries/eventQueries";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const EventDetails = () => {
  const router = useRouter();
  const id = router.query.index;
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
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
  } = data?.getOneEvent;
  console.log(data);
  return (
    <main>
      <Head>
        <title>MR-TRavel</title>
      </Head>
      <Header />
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
              <p className="text-xl uppercase">City :{destination.district}</p>
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
                plan: { time: string; description: string; picture: String },
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
          <p className="text-xl font-bold"> Maximum Members :{maxMembers}</p>
          <p className="text-xl font-bold">
            Remaining Seates :{nonBookedSeats}
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
            <button className="btn btn-accent">Book Now</button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default EventDetails;

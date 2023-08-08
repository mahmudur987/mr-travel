import Error from "@/Components/shared/Error/Error";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { GET_EVENTS } from "@/queries/eventQueries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";

const BestDeals = () => {
  const { loading, data, error } = useQuery(GET_EVENTS);
  const datas = data?.getEvents.filter(
    (data: { bestDeals: boolean }) => data.bestDeals === true
  );

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 my-20  max-w-7xl mx-auto">
      {/* left */}
      <div className="grid md:grid-cols-2 gap-3 h-[800px]">
        {/* no 1 div */}
        <div className="md:col-span-2 row-span-2 h-full ">
          <Link href={`/eventDetails/${datas[0].id}`}>
            <div
              style={{
                backgroundImage: `url(${datas[0].pictures[0]})`,
              }}
              className="card bg-base-100 shadow-xl min-h-full   "
            >
              <div className="card-body opacity-100 hover:opacity-100 transition-opacity ">
                <h2 className="card-title">{datas[0].name}</h2>
                <p>{datas[0].description}</p>

                <div className="backdrop-blur-md w-1/2 ps-4">
                  <p className="text-red-500 text-xl font-bold">
                    Starts :{" "}
                    {new Date(datas[0].startDate).toUTCString().slice(0, 17)}
                  </p>
                  <p className="line-through m-0 p-0">{datas[0].price}</p>
                  <p className="font-bold m-0 p-0 text-xl">
                    ${parseInt(datas[0].price.slice(1, 10)) - 500}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* no 2 div */}

        <div>
          <div className=" h-full ">
            <Link href={`/eventDetails/${datas[1].id}`}>
              <div
                style={{
                  backgroundImage: `url(${datas[1].pictures[0]})`,
                }}
                className="card bg-base-100 shadow-xl min-h-full bg-cover   "
              >
                <div className="card-body opacity-0 hover:opacity-100 transition-opacity  ">
                  <h2 className="card-title"> {datas[1].name} </h2>
                  <p>{datas[1].description.slice(1, 50)}</p>

                  <div className="backdrop-blur-md ps-4">
                    <p className="text-red-500 text-xl font-bold">
                      Starts :{" "}
                      {new Date(datas[1].startDate).toUTCString().slice(0, 17)}
                    </p>
                    <p className="line-through m-0 p-0">{datas[1].price}</p>
                    <p className="font-bold m-0 p-0 text-xl">
                      ${parseInt(datas[1].price.slice(1, 10)) - 500}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* no 3 div */}

        <div>
          <div className=" h-full ">
            <Link href={`/eventDetails/${datas[2].id}`}>
              <div
                style={{
                  backgroundImage: `url(${datas[2].pictures[0]})`,
                }}
                className="card bg-cover bg-base-100 shadow-xl min-h-full   "
              >
                <div className="card-body opacity-0 hover:opacity-100 transition-opacity ">
                  <h2 className="card-title">{datas[2].name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>

                  <div className="backdrop-blur-md ps-4">
                    <p className="text-red-500 text-xl font-bold">
                      Starts :{" "}
                      {new Date(datas[2].startDate).toUTCString().slice(0, 17)}
                    </p>
                    <p className="line-through m-0 p-0">{datas[2].price}</p>
                    <p className="font-bold m-0 p-0 text-xl">
                      ${parseInt(datas[2].price.slice(1, 10)) - 500}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col gap-8 items-center justify-between lg:h-[800px]">
        <div className=" flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold uppercase">Best deals</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            officiis impedit soluta cum ipsum nobis illo voluptates, placeat
            laborum adipisci.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 ">
          {/* no 1 div */}
          <div className="row-span-2 min-h-full ">
            <div className=" h-full ">
              <Link href={`/eventDetails/${datas[3].id}`}>
                <div
                  style={{
                    backgroundImage: `url(${datas[3].pictures[0]})`,
                  }}
                  className="card  bg-cover bg-base-100 shadow-xl min-h-full   "
                >
                  <div className="card-body opacity-0 hover:opacity-100 transition-opacity ">
                    <h2 className="card-title">{datas[3].name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="backdrop-blur-md ps-4">
                      <p className="text-red-500 text-xl font-bold">
                        Starts :{" "}
                        {new Date(datas[3].startDate)
                          .toUTCString()
                          .slice(0, 17)}
                      </p>
                      <p className="line-through m-0 p-0">{datas[3].price}</p>
                      <p className="font-bold m-0 p-0 text-xl">
                        ${parseInt(datas[3].price.slice(1, 10)) - 500}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* no 2 div */}

          <div>
            <div className=" h-full ">
              <Link href={`/eventDetails/${datas[4].id}`}>
                <div
                  style={{
                    backgroundImage: `url(${datas[4].pictures[0]})`,
                  }}
                  className="card bg-cover bg-base-100 shadow-xl min-h-full   "
                >
                  <div className="card-body opacity-0 hover:opacity-100 transition-opacity ">
                    <h2 className="card-title">{datas[4].name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="backdrop-blur-md ps-4">
                      <p className="text-red-500 text-xl font-bold">
                        Starts :{" "}
                        {new Date(datas[4].startDate)
                          .toUTCString()
                          .slice(0, 17)}
                      </p>
                      <p className="line-through m-0 p-0">{datas[4].price}</p>
                      <p className="font-bold m-0 p-0 text-xl">
                        ${parseInt(datas[4].price.slice(1, 10)) - 500}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* no 3 div */}

          <div>
            <div className=" h-full ">
              <Link href={`/eventDetails/${datas[5].id}`}>
                <div
                  style={{
                    backgroundImage: `url(${datas[5].pictures[0]})`,
                  }}
                  className="card bg-base-100 shadow-xl min-h-full bg-cover   "
                >
                  <div className="card-body opacity-100 hover:opacity-100 transition-opacity">
                    <h2 className="card-title">{datas[5].name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="backdrop-blur-md ps-4">
                      <p className="text-red-500 text-xl font-bold">
                        Starts :{" "}
                        {new Date(datas[5].startDate)
                          .toUTCString()
                          .slice(0, 17)}
                      </p>
                      <p className="line-through m-0 p-0">{datas[5].price}</p>
                      <p className="font-bold m-0 p-0 text-xl">
                        ${parseInt(datas[5].price.slice(1, 10)) - 500}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;

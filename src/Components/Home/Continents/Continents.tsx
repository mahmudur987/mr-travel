import React from "react";

const Continents = () => {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-7xl my-5 mx-auto">
      {/* left */}
      <div className="grid grid-cols-2 gap-5">
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1532633130319-f16ab0a3a9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=732&q=80",
          }}
          className="col-span-2 min-h-[220px] flex justify-center items-center bg-cover "
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            Asia
          </h1>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588272947922-21cbc34dc3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          className=" min-h-[220px] flex justify-center items-center bg-cover"
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            North America
          </h1>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
          }}
          className=" min-h-[220px] flex justify-center items-center bg-cover "
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            South America
          </h1>
        </div>
      </div>

      {/* right */}

      <div className="grid grid-cols-2 gap-5">
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          className=" min-h-[220px] flex justify-center items-center bg-cover "
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            Europe
          </h1>
        </div>

        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
          }}
          className=" min-h-[220px] flex justify-center items-center bg-cover "
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            Africa
          </h1>
        </div>

        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1230&q=80",
          }}
          className=" min-h-[220px] col-span-2 flex justify-center items-center bg-cover"
        >
          <h1 className="text-2xl md:text-3xl text-white text-center font-extrabold">
            Australia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Continents;

// components/PlaceGallery.tsx
import { placesData } from "@/data/PlaceData";

import { useState } from "react";

interface Place {
  name: string;
  imageUrl: string;
}

const PlaceGallery: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>(placesData);

  return (
    <div className="grid gap-4 my-10 max-w-7xl mx-auto">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Popular Destinations
        </h2>
        <p className="text-gray-600 mb-4 text-xl">
          Worlds best tourist destinations
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {places.map((place, i) => (
          <div
            style={{
              backgroundImage: `url(${place.imageUrl})`,
            }}
            key={i}
            className=" rounded-2xl h-64  relative"
          >
            <figure>{/* <img src={place.imageUrl} alt="Shoes" /> */}</figure>
            <div className="card-body">
              <h2 className="card-title text-white absolute bottom-2">
                {place.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceGallery;

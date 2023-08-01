// components/Banner.tsx

import Header from "@/Components/shared/Header/Header";
import { AuthContext } from "@/Context/UserContext";
import { useContext } from "react";

const Banner: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-fixed py-32 relative flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <div className="absolute top-0 w-[100%] ">
        <Header user={user} logout={logout} />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-widest">
          Where do you want to go?
        </h1>
        <p className="text-lg text-green-100 font-bold mt-2">
          Trips, experiences, and places. All in one Service
        </p>

        <div className="mt-6 max-w-md mx-auto ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring uppercase focus:ring-blue-500 focus:border-blue-500"
          />

          <div className="mt-4 flex space-x-2">
            <select className="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 uppercase">
              {/* Add options for calendar months */}

              <option value="">Select Month</option>

              {months.map((x, i) => (
                <option key={i} value={x}>
                  {x}
                </option>
              ))}
            </select>

            <select className="w-1/2 uppercase px-4 py-2 rounded-md bg-white border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500">
              <option value="">sort By date</option>
              <option value="">sort By Rate</option>
            </select>
          </div>

          <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

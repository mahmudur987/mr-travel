import { UsesaveUsere } from "@/Components/hooks/saveUserHook";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { toast } from "react-toastify";

import { AuthContext } from "@/Context/UserContext";
import { toastObj } from "../shared/Toast/toastObject";

const DashboardLayout = ({ children }: any) => {
  const router = useRouter();
  const [userData] = UsesaveUsere();
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const menuItems = (
    <>
      {" "}
      <ul
        onClick={() => setShow(false)}
        className=" flex flex-col gap-5 font-bold text-blue-900"
      >
        <li>
          <Link href={"/dashboard/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/dashboard/booking"}> Bookings</Link>
        </li>
        <li>
          <Link href={"/dashboard/joinedevent"}>Joined Event</Link>
        </li>
        {userData?.user.role === "admin" && (
          <>
            <li>
              <Link href={"/dashboard/alluser"}> Users</Link>
            </li>
            <li>
              <Link href={"/dashboard/allevent"}> Events</Link>
            </li>
            <li>
              <Link href={"/dashboard/addevent"}> Add Event</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log(token);

    if (!token) {
      toast("please login first", toastObj);
      router.push("/login");
    }
  }, [user, router]);

  return (
    <>
      {userData && (
        <div className="relative min-h-screen">
          <div className="flex min-h-screen gap-3 ">
            <div>
              <label
                onClick={() => setShow(!show)}
                className="btn btn-ghost md:hidden absolute"
              >
                <FaHamburger />
              </label>

              {show && (
                <div className="absolute top-5 mt-5 z-10  bg-base-100 p-4 ">
                  {menuItems}
                </div>
              )}
            </div>
            <div className="border shadow-xl w-1/5 hidden md:flex justify-center m-1  ">
              <div className="mt-5 ">{menuItems}</div>
            </div>
            <div className="flex flex-grow w-full mt-10 ">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;

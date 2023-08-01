import { AuthContext } from "@/Context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Header = ({ user, logout }) => {
  const { pathname } = useRouter();
  const NavItems = (
    <>
      {" "}
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>Dashboard</Link>
      </li>
      <li>
        <Link href={"/"}>Blog</Link>
      </li>
      <li>
        <Link href={"/"}>About us</Link>
      </li>
      <li>
        <Link href={"/"}>Contact us</Link>
      </li>
      {user ? (
        <>
          <li>
            <button
              onClick={() => {
                logout()
                  .then((res) => {})
                  .catch((err) => console.error(err));
              }}
            >
              LogOut
            </button>
          </li>
          <div className="flex flex-col-reverse items-center">
            <button className="uppercase">{user?.displayName}</button>
            <div className="avatar">
              <div className="w-8 rounded">
                <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/signup"}>Signup</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={` flex justify-between ${
        pathname === "/" ? "text-white" : "text-black"
      }`}
    >
      {/* navbar start */}

      <div className=" ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            menu
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 uppercase"
          >
            {NavItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl md:text-4xl font-bold ">
          MR-TRAVEL
        </a>
      </div>

      {/* Navbar end */}
      <div className=" hidden lg:flex uppercase flex-1 justify-end">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
    </div>
  );
};

export default Header;

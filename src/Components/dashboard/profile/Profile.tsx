/* eslint-disable @next/next/no-img-element */
import { UsesaveUsere } from "@/Components/hooks/saveUserHook";
import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { toastObj } from "@/Components/shared/Toast/toastObject";
import React from "react";
import toast from "react-toastify";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePage from "./profileUpdateModa";

const Profile = () => {
  const [userData, userLoading, userError] = UsesaveUsere();
  const profile = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main Street, City, Country",
    profilePhoto: "/profile-photo.jpg", // Replace with your profile photo URL
    facebook: "https://www.facebook.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",
    whatsapp: "https://wa.me/1234567890",
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    // Add other social media links here
  };

  if (userLoading) {
    return <LoadingSpinner />;
  }
  if (userError) {
  }
  const { name, email, phoneNumber, address, photoURL } = userData?.user || {};

  return (
    <>
      {userData && (
        <div className="container mx-auto py-1">
          <div className="max-w-4xl mx-auto shadow-xl  rounded flex flex-col gap-5 px-8 py-6">
            <div className="flex items-center ">
              <img
                src={photoURL}
                alt="Profile"
                className="w-96 h-96 rounded-full mb-4"
              />
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold mb-4">{name}</h1>
              <p className="text-gray-600 mb-4">Email :{email}</p>
              <p className="text-gray-600 mb-4">Phone Number : {phoneNumber}</p>
              <p className="text-gray-600 mb-4">
                Address {address ? address : "please add your address"}
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center"
              >
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Facebook
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 flex items-center"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 flex items-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                WhatsApp
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 flex items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 flex items-center"
              >
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                Twitter
              </a>
              {/* Add other social media links here */}
            </div>
            <div className=" flex justify-end">
              <ProfilePage user={userData?.user} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

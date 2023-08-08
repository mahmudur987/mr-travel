import { REMOVE_USER } from "@/mutations/userMutaion";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import React from "react";
import { toastObj } from "@/Components/shared/Toast/toastObject";
import { USERS } from "@/queries/userQuery";

const User = ({ user }) => {
  const { id, name, email, phoneNumber, address, photoURL } = user;
  //   console.log(id);
  const [deleteUser] = useMutation(REMOVE_USER);
  const handleDeleteUser = async () => {
    try {
      deleteUser({
        variables: { id },
        refetchQueries: [{ query: USERS }],
      });
      toast("user has been removed successfully", toastObj);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <>
        {user && (
          <div className="container mx-auto py-1 h-96">
            <div className=" mx-auto shadow-xl  rounded flex flex-col gap-5 px-8 py-6">
              <div className="flex items-center w-20 h-20">
                <img src={photoURL} alt="Profile" className="w-20 h-20  mb-4" />
              </div>
              <div>
                <h1 className="text-2xl uppercase font-bold mb-4">{name}</h1>
                <p className="text-gray-600 mb-4">Email :{email}</p>
                <p className="text-gray-600 mb-4">
                  Phone Number : {phoneNumber}
                </p>
                <p className="text-gray-600 mb-4">
                  Address {address ? address : "please add your address"}
                </p>
              </div>
              <div className="flex justify-between">
                <button className="btn btn-info btn-sm">Make Admin</button>
                <button
                  onClick={handleDeleteUser}
                  className="btn btn-secondary btn-sm"
                >
                  Remove user
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default User;

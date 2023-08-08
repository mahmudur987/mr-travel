import React, { useState } from "react";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "@/mutations/userMutaion";
import { toast } from "react-toastify";
import { toastObj } from "@/Components/shared/Toast/toastObject";
interface ProfilePageProps {
  user: any; // Replace 'any' with the actual type of 'user' if possible
}
const ProfilePage: React.FC<ProfilePageProps> = ({ user }: any) => {
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [updateUser, { data, error, loading }] = useMutation(UPDATE_USER);

  const handleUpdateProfile = async () => {
    try {
      const { data } = await updateUser({
        variables: { id: user.id, phoneNumber, address },
      });

      const updatedUser = data?.updateUser;
      if (updateUser) {
        toast("your profile update successfully", toastObj);
      }
      console.log("User updated:", updatedUser);
    } catch (error) {
      toast(error.message, toastObj);
    }

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Update Profile
      </button>

      {/* Modal for updating profile */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl text-center font-semibold mb-4">
          Update Profile
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={user.name}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpdateProfile}
            className="btn btn-secondary btn-sm"
          >
            Save Changes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;

/* eslint-disable @next/next/no-img-element */
import { AuthContext } from "@/Context/UserContext";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../shared/Loading/Spiner";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER } from "@/mutations/userMutaion";
import { toast } from "react-toastify";
import { toastObj } from "../shared/Toast/toastObject";
import { USERS } from "@/queries/userQuery";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signUp, updateUserProfile, Setloading, loading, user, logout } =
    useContext(AuthContext);
  const [addUser] = useMutation(ADD_USER);

  const handleSignUp = (data: any) => {
    Setloading(true);

    const image = data.photo[0];
    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=3559b6c20b5de4448f640124cb537f31`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        // console.log(imagedata.data)
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          signUp(data.email, data.password)
            .then((result: any) => {
              const ProfileData = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                address: data.address,
                password: data.password,
                photoURL,
              };
              updateProfile(ProfileData);
            })
            .catch((error) => {
              toast.error(error.message, toastObj);
              console.error(error);
            });
        }
      });
  };

  const updateProfile = (data: any) => {
    const profile = { displayName: data.name, photoURL: data.photoURL };
    updateUserProfile(profile)
      .then(() => {
        addUser({
          variables: data,
          refetchQueries: [{ query: USERS }],
        });
        toast.success("user signup successfully", toastObj);
        router.push("/");
        Setloading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center p-5">
          <h3 className="text-3xl ">Come and Enjoy our Supports</h3>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1538766017398-415434a31a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>

        <div className="h-[800px] flex justify-center items-center font-bold  ">
          <div className="border  max-w-3xl w-full p-3">
            <h1 className="text-4xl text-center uppercase">Sign up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              {/* name */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: "Name is must",
                  })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full  "
                />
                {errors.name && <p role="alert"> this is required</p>}
              </div>
              {/* photo */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Choose Photo</span>
                </label>
                <input
                  {...register("photo", {
                    required: "please select a photo",
                  })}
                  type="file"
                  placeholder="Choose photo"
                  className="input input-bordered w-full  "
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    this is required
                  </p>
                )}
              </div>
              {/* phone Number */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Phone Number  is must",
                  })}
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full  "
                />
                {errors.phoneNumber && (
                  <p className="text-red-600" role="alert">
                    this is required
                  </p>
                )}
              </div>

              {/* address */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  {...register("address", {
                    required: "address  is must",
                  })}
                  type="text"
                  placeholder="address"
                  className="input input-bordered w-full  "
                />
                {errors.phoneNumber && (
                  <p className="text-red-600" role="alert">
                    this is required
                  </p>
                )}
              </div>

              {/* email */}

              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is must",
                  })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full  "
                />
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    this is required
                  </p>
                )}
              </div>

              {/* password */}

              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "password is required ",
                  })}
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full  "
                />

                {errors.password && (
                  <p className="text-red-600" role="alert">
                    this is required
                  </p>
                )}
              </div>

              {/* submit */}

              <div className="text-center mt-3">
                <input className=" btn btn-primary w-1/2" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

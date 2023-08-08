import { ADD_EVENT } from "@/mutations/eventMutation";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { toastObj } from "@/Components/shared/Toast/toastObject";
import { GET_EVENTS } from "@/queries/eventQueries";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const {
    fields: soptsfields,
    append: spotsappend,
    remove: spotsremove,
  } = useFieldArray({
    control,
    name: "spots",
  });
  const {
    fields: planFields,
    append: planAppend,
    remove: planRemove,
  } = useFieldArray({
    control,
    name: "planning",
  });

  const [addEvent] = useMutation(ADD_EVENT);

  // const handlesubmit = async () => {
  //   const newEvent = {
  //     name: "Event Name",
  //     pictures: ["https://example.com/picture.jpg"],
  //     destination: {
  //       country: "Country Name",
  //       state: "State Name",
  //       city: "City Name",
  //       district: "District Name",
  //     },
  //     planing: [
  //       {
  //         time: "Day 1",
  //         description: "Plan for Day 1",
  //         picture: "https://example.com/day1.jpg",
  //       },
  //       {
  //         time: "Day 2",
  //         description: "Plan for Day 1",
  //         picture: "https://example.com/day1.jpg",
  //       },
  //       {
  //         time: "Day 3",
  //         description: "Plan for Day 1",
  //         picture: "https://example.com/day1.jpg",
  //       },
  //       // Add other planning steps as needed
  //     ],
  //     spots: ["Trekking", "Mountaineering", "Scenic Views"],
  //     maxMembers: 12,
  //     nonBookedSeats: 10,
  //     bookedmember: [],
  //     description: "Event description",
  //     price: "$1800",
  //     startDate: "2024-12-05",
  //     endDate: "2024-12-12",
  //   };
  //   try {
  //     await addEvent({ variables: { travelInput: newEvent } });
  //     console.log("Event added");
  //     toast.success("event added ", toastObj);
  //   } catch (error: { message: string }) {
  //     console.error("Error adding event:", error);
  //     toast.error(error.message, toastObj);
  //   }
  // };

  const onSubmit = async (data: any) => {
    const spots = data.spots.map((x: any) => x.spots);
    if (spots.length < 1) {
      return toast("please add spots name", toastObj);
    }
    const newEvent = {
      name: data.name,
      pictures: [data.pictures],
      destination: {
        country: data.country,
        state: data.state,
        city: data.city,
        district: data.district,
      },
      planing: data.planning,
      spots: spots,
      maxMembers: parseInt(data.maxMembers),
      nonBookedSeats: 0,
      bookedmember: [],
      description: data.description,
      price: data.price,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    console.log(newEvent);
    try {
      await addEvent({
        variables: { travelInput: newEvent },
        refetchQueries: [{ query: GET_EVENTS }],
      });
      console.log("Event added");
      toast.success("event added ", toastObj);
      reset();
    } catch (error: any) {
      console.error("Error adding event:", error);
      toast.error(error.message, toastObj);
    }
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className=" text-3xl text-blue-700 text-center w-full  font-bold my-5">
        Add a new Events{" "}
      </h1>
      <div className="max-w-3xl mx-auto">
        <form
          className=" flex flex-col items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*Event name */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Event Name
            </label>
            <input
              type="text"
              placeholder="Events Name"
              className="border rounded p-2 w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>

          {/* pictures url */}

          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Pictures
            </label>
            <input
              type="text"
              placeholder="provide photo url"
              className="border rounded p-2 w-full"
              {...register("picture", { required: true })}
            />
            {errors.picture && <span>This field is required</span>}
          </div>

          {/* destination */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Destination
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="country"
                className="border rounded p-2 w-full"
                {...register("country", { required: true })}
              />
              <input
                type="text"
                placeholder="state"
                className="border rounded p-2 w-full"
                {...register("state", { required: false })}
              />
              <input
                type="text"
                placeholder="city"
                className="border rounded p-2 w-full"
                {...register("city", { required: true })}
              />
              <input
                type="text"
                placeholder="districr"
                className="border rounded p-2 w-full"
                {...register("district", { required: false })}
              />
            </div>
            {errors.country && errors.city && (
              <span>This field is required</span>
            )}
          </div>

          {/* sopts */}

          <div className=" w-full flex flex-col items-center">
            <ul className="flex  flex-col gap-5 ">
              {soptsfields.map((item, index) => (
                <li className="flex w-full gap-5 items-center" key={item.id}>
                  <Controller
                    render={({ field }) => (
                      <input
                        placeholder="spots name"
                        className="border border-black rounded-lg m-3 p-2"
                        {...field}
                      />
                    )}
                    name={`spots.${index}.spots`}
                    control={control}
                  />
                  <button
                    className="btn btn-info btn-sm"
                    type="button"
                    onClick={() => spotsremove(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline my-4 mx-auto"
              type="button"
              onClick={() => spotsappend({})}
            >
              Add Spots name
            </button>
          </div>

          {/* description */}

          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Description
            </label>
            <textarea
              rows={10}
              placeholder=" description"
              className="border rounded p-2 w-full m-2"
              {...register("description", { required: true })}
            />
            {errors.description && <span>This field is required</span>}
          </div>
          {/* price */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Price
            </label>
            <input
              type="number"
              placeholder="$ Price"
              className="border rounded p-2 w-full"
              {...register("price", { required: true })}
            />
            {errors.price && <span>This field is required</span>}
          </div>

          {/* maxmember */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              maxMembers
            </label>

            <input
              type="number"
              placeholder=" maxMembers"
              className="border rounded p-2 w-full"
              {...register("maxMembers", { required: true })}
            />
            {errors.maxMembers && <span>This field is required</span>}
          </div>

          {/* planning */}

          <div className=" flex flex-col gap-3 items-center w-full py-10">
            <label htmlFor="name" className="block font-bold w-full text-start">
              Add Day by day planning
            </label>

            <ul className="flex flex-col gap-3 w-full">
              {planFields.map((item, index) => (
                <li
                  className="flex flex-col w-full items-center gap-3"
                  key={item.id}
                >
                  <input
                    className="border  max-w-xl"
                    placeholder="write Day-one"
                    {...register(`planning.${index}.time`)}
                  />
                  <input
                    className="border w-96 p-2"
                    placeholder="photo url"
                    {...register(`planning.${index}.picture`)}
                  />
                  <Controller
                    render={({ field }) => (
                      <textarea
                        cols={50}
                        rows={5}
                        className="border"
                        {...field}
                      />
                    )}
                    name={`planning.${index}.description`}
                    control={control}
                  />
                  <button
                    className="btn btn-secondary btn-sm w-32 "
                    type="button"
                    onClick={() => planRemove(index)}
                  >
                    Delete Day
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-info btn-sm w-32"
              type="button"
              onClick={() => planAppend({})}
            >
              Add a Day
            </button>
          </div>

          {/* start Date */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              Start Date
            </label>
            <input
              type="Date"
              placeholder=" start-date"
              className="border rounded p-2 "
              {...register("startDate", { required: true })}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>

          {/* end  Date */}
          <div className="w-full p-2">
            <label htmlFor="name" className="block font-bold">
              End Date
            </label>
            <input
              type="Date"
              placeholder=" start-date"
              className="border rounded p-2 "
              {...register("endDate", { required: true })}
            />
            {errors.endDate && <span>This field is required</span>}
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddEvents;

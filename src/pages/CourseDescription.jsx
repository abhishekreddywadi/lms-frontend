// import React from 'react'

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

function CourseDescription() {
  // taking out the state data
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state.auth);
  return (
    <HomeLayout>
      {/* applying all state values to the description  */}
      <div className="min-h-[90vh] pt-12 ox-20 flex flex-col items-center justify-center text-white ">
        <div className=" flex justify-between gap-2 py-10 relative">
          <div className="space-y-5  flex flex-col gap-5 ">
            <img
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
              className="w-full h-64"
            />
            <div className="space-y-4">
              <div className="flex flex-col items-start justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500">Total lectures : </span>
                  {state?.numbersOfLectures}
                </p>
                <p className="font-semibold">
                  <span className="text-yellow-500"> Instructor : </span>
                  {state?.createdBy}
                </p>
              </div>
              {role === "admin" || data?.subscription?.status === "active" ? (
                <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-fit hover:bg-yellow-500 transition-all ease-in-out duration-300">
                  Watch lectures
                </button>
              ) : (
                <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-fit hover:bg-yellow-500 transition-all ease-in-out duration-300">
                  Subscribe
                </button>
              )}
            </div>
          </div>
          <div className="space-y-2 text-xl w-[50%] ">
            <h1 className="text-3xl font-bold text-yellow-500 mb-5 ">
              {state?.title || "Course Title"}
            </h1>
            <p className="text-yellow-500"> Course description : </p>
            <p>{state?.description || "Course Description"}</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;

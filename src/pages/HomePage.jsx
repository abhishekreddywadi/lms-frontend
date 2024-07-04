// import React from 'react'

import { Link } from "react-router-dom";

import homePageMainImage from "../assets/images/homePage.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6  ">
          <h1 className="sm:text-5xl text-sm font-semibold">
            Find out best
            <span className="text-yellow-500 sm:text-5xl text-lg font-bold">
              {" "}
              Online courses
            </span>
          </h1>
          <p className="text-xl text-gray-200">
            {" "}
            we have a large library taught by highly skilled and qualified
            faculties at a very affordable cost{" "}
          </p>
          <div className="space-x-6">
            <Link to={"/courses"}>
              <button className="bg-yellow-500 px-5 py-3 font-semibold rounded-md text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className=" border border-yellow-500 font-semibold px-5 py-3 rounded-md text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={homePageMainImage} alt="homepage" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;

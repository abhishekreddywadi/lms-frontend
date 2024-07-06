// import React from 'react'
import { useState } from "react";
import toast from "react-hot-toast";

// import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/RegexHelper";
import HomeLayout from "../Layouts/HomeLayout";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(userInput);
    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("Please fill all fields", {
        duration: 1000,
      });
    }
    if (!isEmail(userInput.email)) {
      toast.error("Please enter a valid email address", {
        duration: 1000,
      });
      return;
    }
    toast.success("successfully submitted", {
      duration: 2000,
    });

    setUserInput({ name: "", email: "", message: "" });
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-lg w-[22rem]"
          action=""
        >
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-600 px-2 py-1 rounded-sm"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={userInput.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-600 px-2 py-1 rounded-sm"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userInput.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              className="border border-gray-600 px-2 py-1 resize-none h-40 rounded-sm"
              id="message"
              name="message"
              placeholder="Enter your message"
              value={userInput.message}
              onChange={handleChange}
            />
          </div>
          <button
            className=" w-full border border-gray-950 hover:bg-gray-950 hover:scale-95 transition-all ease-in-out duration-300 text-white px-4 py-2 my-5 rounded-sm font-semibold cursor-pointer "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Contact;

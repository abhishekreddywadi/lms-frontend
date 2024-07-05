// import React from 'react'

import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [preview, setpreview] = useState("");
  const [signupData, setsignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    image: "",
  });
  const handleInputChange = (e) => {
    setsignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const getImage = (event) => {
    //  getting the image
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      setsignupData({ ...signupData, image: uploadedImage });
      const reader = new FileReader();
      reader.readAsDataURL(uploadedImage);
      reader.addEventListener("load", () => {
        // console.log(reader.result);
        setpreview(reader.result);
      });
    }
  };
  const createNewAccount = async (event) => {
    event.preventDefault();
    //  validate form
    if (
      signupData.fullName.trim() === "" ||
      signupData.email.trim() === "" ||
      signupData.password.trim() === ""
    ) {
      toast.error("Please enter fill all the details", {
        duration: 1000,
        position: "top-center",
        // repeat: false,
      });
      return;
    }
    // checking name length
    if (signupData.fullName.length < 5) {
      toast.error("Full name should be at least 5 characters long", {
        duration: 1000,
        position: "top-center",
        // repeat: false,
      });
      return;
    }
    // checking email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupData.email)) {
      toast.error("Please enter a valid email address", {
        duration: 1000,
        position: "top-center",
        // repeat: false,
      });
      return;
    }
    // checking password length
    if (signupData.password.length < 5) {
      toast.error("Password should be at least 5 characters long", {
        duration: 1000,
        position: "top-center",
      });
      return;
    }
    const data = {
      fullName: signupData.fullName,
      email: signupData.email,
      password: signupData.password,
    };
    // const formData = new FormData();
    // formData.append("fullName", signupData.fullName);
    // formData.append("email", signupData.email);
    // formData.append("password", signupData.password);
    // JSON.parse(formData.toString);
    //  create account
    // dispatch createAccount action
    const response = await dispatch(createAccount(data));
    console.log(response);
    if (response?.payload?.status) {
      navigate("/");
    }
    setsignupData({
      fullName: "",
      email: "",
      password: "",
      image: "",
    });
    setpreview("");

    //  dispatch(signup(signupData))
    // replace with actual signup action
  };
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form
          noValidate
          onSubmit={createNewAccount}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-lg"
        >
          <h1 className="text-center text-2xl font-bold ">Registration Page</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {preview ? (
              <img
                className="w-24 h-24 rounded-full m-auto bg-contain "
                src={preview}
                alt=""
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            className="hidden"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
            type="file"
            name="image_uploads"
            onChange={getImage}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              id="fullName"
              name="fullName"
              onChange={handleInputChange}
              value={signupData.fullName}
              //   maxLength={20}
              className="w-full text-white px-4 py-2  rounded-lg focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              id="email"
              name="email"
              value={signupData.email}
              onChange={handleInputChange}
              className="w-full text-white px-4 py-2  rounded-lg focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              id="password"
              name="password"
              value={signupData.password}
              onChange={handleInputChange}
              className="w-full text-white px-4 py-2  rounded-lg focus:outline-none focus:shadow-lg"
            />
          </div>
          <button
            className=" border border-gray-950 hover:bg-gray-950 hover:scale-95 transition-all ease-in-out duration-300 text-white px-4 py-2 my-5 rounded-lg font-semibold cursor-pointer "
            type="submit"
          >
            Create account
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="link cursor-pointer text-accent">
              Login
            </Link>{" "}
            here. Forgot Password? <a href="/forgot-password">Reset Password</a>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default SignUp;

// import React from 'react'

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onLogin = async (event) => {
    event.preventDefault();
    //  validate form
    if (loginData.email.trim() === "") {
      toast.error("Please enter fill all the details", {
        duration: 1000,
        position: "top-center",
        // repeat: false,
      });
      return;
    }

    const response = await dispatch(login(loginData));
    console.log(response);
    if (response?.payload?.status) {
      navigate("/");
    }
    setloginData({
      password: "",
    });
  };
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form
          noValidate
          onSubmit={onLogin}
          className="flex bg-slate-800 flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-2xl"
        >
          <h1 className="text-center text-2xl font-bold ">Login Page</h1>
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
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full text-white px-4 py-2  rounded-lg focus:outline-none focus:shadow-lg"
            />
          </div>
          <button
            className=" border border-gray-950 hover:bg-gray-950 hover:scale-95 transition-all ease-in-out duration-300 text-white px-4 py-2 my-5 rounded-lg font-semibold cursor-pointer "
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            {`don't`} have an account?
            <Link to={"/signup"} className="link cursor-pointer text-accent">
              Signup
            </Link>{" "}
            here. <br /> Forgot Password?{" "}
            <a href="/forgot-password">Reset Password</a>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;

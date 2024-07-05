/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import AuthSlice from "../Redux/Slices/AuthSlice";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  //   for dis displaying options menu
  const role = useSelector((state) => state?.auth?.role);

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side")[0];
    drawerSide.style.width = "auto";
  };
  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle")[0];
    element.checked = false;
    // const drawerSide = document.getElementsByClassName("drawer-side")[0];
    // drawerSide.style.width = "0";
    // changeWidth();
  };
  const handleLogout = async (event) => {
    event.preventDefault();
    // const res = await dispatch(logout())
    navigate("/");
  };

  return (
    <div className="min-h-[90vh] w-screen">
      <div className="drawer absolute left-0 w-fit z-50">
        <input type="checkbox" className="drawer-toggle" id="my-drawer" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <RxHamburgerMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu h-[100%] p-4 w-48 sm:w-80 text-base bg-base-300 relative ">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <RxCross1 size={24} />
              </button>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {isLoggedIn && role === "admin" && (
              <li>
                <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to={"/courses"}>All Courses</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            {!isLoggedIn && (
              <div className=" gap-3 flex items-center justify-center mt-3 ">
                <button className="border border-blue-600 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-90 px-4 py-1 font-semibold rounded-md w-full">
                  <Link to={"/login"}>Login</Link>
                </button>
                <button className=" border border-blue-600 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-90 px-4 py-1 font-semibold rounded-md w-full">
                  <Link to={"/login"}>signup</Link>
                </button>
              </div>
            )}
            {isLoggedIn && (
              <div className=" gap-3 flex items-center justify-center mt-3 ">
                <button className="border border-blue-600 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-90 px-4 py-1 font-semibold rounded-md w-full">
                  <Link to={"/user/profile"}>Profile</Link>
                </button>
                <button className=" border border-blue-600 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-90 px-4 py-1 font-semibold rounded-md w-full">
                  <Link onClick={handleLogout}>Logout</Link>
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;

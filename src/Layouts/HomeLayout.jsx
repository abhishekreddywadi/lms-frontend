/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function HomeLayout({ children }) {
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
          <ul className="menu p-4 w-48 sm:w-80 text-base bg-base-300 relative ">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <RxCross1 size={24} />
              </button>
            </li>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>All Courses</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;

/* eslint-disable no-unused-vars */
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className="relative left-0 bottom-0 gap-5 min-w-fit sm:h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800  py-8 sm: px-20">
        <section className="sm:text-[1rem] text-wrap text-[0.8rem] ">
          Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center justify-center gap-5 text-xl text-white">
          <a
            className="hover:text-blue-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsFacebook />
          </a>
          <a
            className="hover:text-red-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsInstagram />
          </a>
          <a
            className="hover:text-blue-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsLinkedin />
          </a>
          <a
            className="hover:text-black transition-all ease-in-out duration-300"
            href=""
          >
            <BsTwitterX />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;

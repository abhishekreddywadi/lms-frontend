// import React from 'react'

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <h1 className="text-9xl font-extrabold text-white tracking-widest ">
        404
      </h1>
      <div className="text-sm  text-white px-2 rounded bg-black rotate-12 absolute">
        Page Not Found...
      </div>
      <button onClick={() => navigate(-1)} className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring ">
          <span className="relative block px-8 py-3 bg-[#1A2238] border-current">
            Go Back
          </span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;

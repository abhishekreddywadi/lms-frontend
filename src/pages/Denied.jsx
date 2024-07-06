// import React from 'react'

import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold tracking-widest">403</h1>
        <div className="bg-black absolute text-white px-2 text-sm rounded rotate-12">
          Access Denied...
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-fit rounded-md px-8 py-3 text-white bg-gray-500 hover:bg-gray-600 transition-all ease-in-out duration-300"
        >
          Back to Home
        </button>
      </main>
    </div>
  );
}

export default Denied;

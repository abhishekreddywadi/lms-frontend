// import React from 'react'

import aboutMainImage from "../assets/images/aboutMainImage.png";
// import apj from "../assets/images/apj.png";
// import billGates from "../assets/images/billGates.png";
// import esinstein from "../assets/images/einstein.png";
// import nelsonMandela from "../assets/images/nelsonMandela.png";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 flex flex-col  items-center h-[90vh] text-white">
        <div className="flex items-center justify-between gap-10 mx-10 my-20">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200 ">
              Our goal is to provide the affordable and quality education to the
              world. We believe in creating a future where every child has the
              opportunity to learn and grow.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              className="drop-shadow-2xl"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
              src={aboutMainImage}
              alt="About Main Image"
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

import React from "react";
import banner from "../../../../Images/Banner.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">HOMIE'S IS THE 
          NAME OF BELIEVE</h1>
          <p className="py-6">
          We are the Homie's. Where you get your best production supply's,
          Deliveries and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import banner from '../../../../Images/Banner.jpg'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div class="">
          <h1 class="text-5xl font-bold">HOMIE'S IS THE NAME OF BELIEVE</h1>
          <p class="py-6">
            We are the Homie's. Where you get your best production supply's, <br /> Deliveries and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

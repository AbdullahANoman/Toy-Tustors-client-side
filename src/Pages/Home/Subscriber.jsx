import React from "react";

const Subscriber = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center md:px-10 px-3 py-20  ">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src="https://i.ibb.co/Lg1MqsM/28fc9a59-newslatter.png" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-6xl pb-10 text-[#1A2B5F] font-extrabold">
          Subscribe To Our <br /> Newsletter
        </h1>
        <p className="text-2xl pr-5 text-gray-700">
          Want to get special offers before they run out? Subscribe to our email
          to get exclusive discounts and offers.
        </p>
        <input
          type="email"
          name=""
          id=""
          placeholder="Your Email Address"
          className="border p-6 rounded-3xl text-black w-1/2 mt-5 bg-[#FFF6E6]"
        />
        <button className="bg-[#FC9E00] text-white px-5 py-5 rounded-xl font-bold">
          Subscriber
        </button>
      </div>
    </div>
  );
};

export default Subscriber;

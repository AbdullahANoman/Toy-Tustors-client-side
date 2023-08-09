import React from "react";

const Gallary = () => {
  return (
    <div className="px-2 max-w-7xl	mx-auto">
      {/* <img src="https://i.ibb.co/VWgXgS8/2.webp" alt="" />
            <img src="https://i.ibb.co/r5GpFHz/1-a6e08ebb-46eb-4402-84b4-7cd13ededd8d.webp" alt="" />
            <img src="https://i.ibb.co/XxQ4W0X/4.webp" alt="" />
            <img src="https://i.ibb.co/Kjk6Rz4/post19-copyright-650x572.jpg" alt="" /> */}

      <p className="text-5xl py-14 text-center text-[#1A2B5F] font-bold ">
        We design toys not just for kids <br /> but with kids
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div data-aos="fade-up">
          <img
            src="https://i.ibb.co/Kjk6Rz4/post19-copyright-650x572.jpg"
            className="w-[350px] rounded-2xl"
            alt=""
          />
          <div className="flex justify-between items-center text-2xl">
            <p className="text-xl py-3 font-semibold hover:text-[#4ACDD5]">Best Sellers</p>
            <p>------</p>
          </div>
        </div>
        <div data-aos="fade-down">
          <img
            src="https://i.ibb.co/XxQ4W0X/4.webp"
            className="w-[350px] rounded-2xl"
            alt=""
          />
          <div className="flex justify-between items-center text-2xl">
            <p className="text-xl py-3 font-semibold hover:text-[#4ACDD5]">Featured</p>
            <p>------</p>
          </div>
        </div>
        <div data-aos="fade-up"> 
          <img
            src="https://i.ibb.co/r5GpFHz/1-a6e08ebb-46eb-4402-84b4-7cd13ededd8d.webp"
            className="w-[350px] rounded-2xl"
            alt=""
          />
          <div className="flex justify-between items-center text-2xl">
            <p className="text-xl py-3 font-semibold hover:text-[#4ACDD5] ">New Arrivals</p>
            <p>------</p>
          </div>
        </div>
        <div data-aos="fade-down">
          <img
            src="https://i.ibb.co/VWgXgS8/2.webp"
            className="w-[350px] rounded-2xl"
            alt=""
          />
          <div className="flex justify-between items-center text-2xl">
            <p className="text-xl py-3 font-semibold  hover:text-[#4ACDD5]">Trends</p>
            <p>------</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

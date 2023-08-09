import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ShopNow = () => {
  const handleCategory = () =>{
    const targetElement = document.getElementById('category'); // Replace 'targetElement' with the actual ID of your target element
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the target element
        }
  }
  return (
    <div  className="hidden md:flex justify-center py-10 max-w-7xl	mx-auto">
      <div className="relative text-center  ">
        <img
          src="https://htmldemo.net/legend/legend/img/banner/32.jpg"
          alt="" className="rounded"
        />
        <div className="absolute top-2 left-[80px] md:top-20 md:left-[350px] ">
          <p className="md:text-4xl font-semibold text-center text-white space-y-2">
            THE QUALITY TOYS OF YOUR <br /> CHILD'S DREAMS
          </p>
          <p className="text-white text-lg  hidden md:block">
            If you're looking for a toy shop then look no further. <br/> Go on, trat
            the kids with out huge selection of online toys shops
          </p>
          <div className="flex justify-center">
          <button onClick={handleCategory} className="flex  justify-center items-center gap-2 md:mt-5 text-black px-3 py-2 rounded-2xl bg-white "> <FaCartPlus></FaCartPlus> Shop Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;

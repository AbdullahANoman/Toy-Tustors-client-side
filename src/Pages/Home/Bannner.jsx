import React, { useEffect } from "react";
import { useRef, useState } from "react";
// Import Swiper React components
// import 'swiper/css/lazy';
import { Swiper, SwiperSlide } from "swiper/react";

import "./home.css";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay ,Pagination, Navigation } from "swiper/modules";
const Bannner = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide className="" key={item?.id}>
            <div className="w-full md:h-[800px] relative   max-h-screen mx-auto ">
              <img
                src={item?.image}
                className="w-full h-full  mx-auto object-cover max-h-full "
                alt=""
              />
              <div className="absolute right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <p className="text-7xl text-white">{item?.header}</p>
                <p className="text-7xl">{item?.subHeader}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Bannner;

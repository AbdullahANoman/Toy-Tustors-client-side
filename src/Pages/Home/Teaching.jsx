import React, { useState } from "react";
import PlayButton from "../../playButton.json";
import Lottie from "lottie-react";
const Teaching = () => {
  const [showVideo, setShowVideo] = useState(false);
const handleCategory = ()=>{
    const targetElement = document.getElementById('category'); // Replace 'targetElement' with the actual ID of your target element
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the target element
        }
}
  return (
    <div className="grid md:grid-cols-7 mx-10 max-w-7xl md:mx-auto my-20 gap-10">
      <div className="col-span-3">
        <p className="italic text-[#E80015] text-xl my-2">Compatible</p>
        <h2 className="text-2xl my-4 font-semibold ">
          The Perfect Place For Your Kids To Open Their Creative Wings
        </h2>
        <p className="text-lg text-gray-500 text-md mb-10">
          Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa.
          Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.
          Duis sed augue vitae felis pellentesque varius nec quis nunc.
        </p>
        <button onClick={handleCategory} className="px-4 py-2 rounded-xl font-semibold bg-[#E1000E] text-white ">
          View More
        </button>
      </div>
      <div className="col-span-4 relative">
        {!showVideo && (
          <img
            style={{
              border: "7px solid #F7941E",
              borderRadius: "100px 0px 100px 0px",
            }}
            src="https://dt-kidscool.myshopify.com/cdn/shop/files/Videoimg02.jpg?v=1682504897&width=1500"
            alt=""
          />
        )}
        {showVideo && (
          <div>
            <iframe
              className="w-full rounded-xl"
              style={{
                borderRadius: "100px 0px 100px 0px",
              }}
              height="361"
              src="https://www.youtube.com/embed/3gn-pQ5GMZE?autoplay=1"
              title="YouTube video "
              frameborder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
          </div>
        )}
        {!showVideo && (
          <button onClick={() => setShowVideo(!showVideo)}>
            <Lottie
              onClick={() => setShowVideo("")}
              animationData={PlayButton}
              className="w-28 absolute top-32 left-72 hover:w-32 transform duration-1000"
            ></Lottie>
          </button>
        )}
      </div>
    </div>
  );
};

export default Teaching;

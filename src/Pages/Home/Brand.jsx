import React, { useEffect, useState } from "react";

const Brand = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("brandImage.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  console.log(images)
  return (
    <div className="bg-[url('https://babystreet.althemist.com/wp-content/uploads/2019/03/hearts-pattern-blue-lighter.jpg?id=3032')] py-10">
      <div className="flex justify-center">
        <img
          src="https://babystreet.althemist.com/wp-content/uploads/2019/03/wow-worthy.png"
          alt=""
        />
      </div>
      <p className="text-center font-semibold text-3xl my-10">
        {" "}
        Cool Brands Worth Exploring
      </p>
      <div className="flex flex-wrap justify-center gap-20 py-10">
        {images.map((singleImage, index) => (
          <div key={index} className="hover:opacity-30  duration-1000">
            <img  src={singleImage.image} alt="Toy Event Image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;

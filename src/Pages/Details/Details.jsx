import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
const Details = () => {
  const toy = useLoaderData();
  useTitle('Details')
  const {
    toyName,
    sellerName,
    photo,
    sellerEmail,
    price,
    quantity,
    description,
    rating,
  } = toy || {};

  return (
    <div className="md:px-[200px] px-2 py-20" >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 ">
        <div className="">
          <img src={photo} alt="" className="bg-[#FDF4E2] p-10 rounded-full" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-[#1A2B5F]">{toyName}</h1>
          <p>{description}</p>
          <h1 className="text-3xl font-bold text-[#FC9E00]">${price}</h1>
          <p>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar className="text-yellow-500"></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
          <p>Seller Name : {sellerName}</p>
          <p>Seller Email : {sellerEmail}</p>
          <p>Available Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

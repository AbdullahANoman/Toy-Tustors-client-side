import React from "react";
import Rating from "react-rating";
import {FaRegStar, FaStar,FaStarHalf,FaStarHalfAlt } from "react-icons/fa";

const Category = ({ job }) => {
  console.log(job);
  const { photo, price, rating, toyName, _id } = job || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price : ${price}</p>
        <p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={
                <FaRegStar className="text-yellow-500"></FaRegStar>
            }
            placeholderSymbol={
                <FaStar className="text-yellow-500"></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Category;

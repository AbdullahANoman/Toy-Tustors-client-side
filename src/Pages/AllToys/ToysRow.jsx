import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({toy}) => {
    const {_id,toyName,category,price,quantity} = toy;
    console.log(_id,toyName,category,price,quantity)
  return (
    <tr>
      <td className="text-center">{toy?.sellerName}</td>
      <td className="text-center">{toyName}</td>
      <td className="text-center">{category}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <Link to={`/details/${_id}`}><button className="btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] ">View Details</button></Link>
      </td>
    </tr>
  );
};

export default ToysRow;

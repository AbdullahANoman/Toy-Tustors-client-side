import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
    const toys = useLoaderData() ;
    console.log(toys)
  return (
    <>
      <div>
        <p className="text-center text-4xl py-10">All toys</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Seller</th>
              <th className="text-center">Toy Name</th>
              <th className="text-center">Sub Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              toys.map(toy=>(
                <ToysRow key={toy._id} toy={toy}></ToysRow>
              ))
              
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;

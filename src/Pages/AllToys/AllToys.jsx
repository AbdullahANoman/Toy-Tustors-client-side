import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const loadToys = useLoaderData();
  const [toys, setToys] = useState(loadToys);
  console.log(toys);
  useTitle('All Toys')

  const handleSearch = () => {
    fetch(`https://toys-marketplace-server-ashen.vercel.app/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <>
      <div>
        <p className="text-center text-4xl py-10">All toys</p>
      </div>
      <div className="flex justify-center gap-2 mb-10">
        <input
         onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search With Toy Name"
          className="input w-full max-w-xs border-black "
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
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
            {toys.map((toy) => (
              <ToysRow key={toy._id} toy={toy}></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;

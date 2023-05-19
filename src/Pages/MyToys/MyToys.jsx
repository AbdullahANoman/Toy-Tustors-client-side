import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [action,setAction] = useState(true)


  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user,action]);


  const handleDelete = _id =>{
    console.log(_id)
    fetch(`http://localhost:5000/allToys/${_id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setAction(!action)
    })
  }
  console.log(toys);
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
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <tr>
                <td className="text-center">{toy?.sellerName}</td>
                <td className="text-center">{toy?.toyName}</td>
                <td className="text-center">{toy?.category}</td>
                <td className="text-center">{toy?.price}</td>
                <td className="text-center">{toy?.quantity}</td>
                <td className="text-center">
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(toy?._id)} className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;

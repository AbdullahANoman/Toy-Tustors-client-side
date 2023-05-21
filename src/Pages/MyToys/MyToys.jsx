import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";



const MyToys = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [action, setAction] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    fetch(`https://toys-marketplace-server-ashen.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user, action]);

  useTitle("My Toys");
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-marketplace-server-ashen.vercel.app/allToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAction(!action);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Record has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleUpdate = (toy) => {
    console.log(toy);
    fetch(`https://toys-marketplace-server-ashen.vercel.app/updateToy/${toy?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };
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
                  <Link to={`/update/${toy._id}`}><label htmlFor="my-modal-3" className="btn btn-primary" >
                    Update
                  </label></Link>
                  
                </td>
                
                <td>
                  <button
                    onClick={() => handleDelete(toy?._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      {/* {
        toys.map((toy)=>(
          <UpdateToy toy={toy} key={toy._id}></UpdateToy>
        ))
      } */}
      
    </>
  );
};

export default MyToys;

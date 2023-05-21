import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  useTitle("Update Toy");
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToy = { price, quantity, description };
    console.log(price, quantity, description);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this toy",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toys-marketplace-server-ashen.vercel.app/updateToy/${toy?._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateToy),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              Swal.fire("Updated!", "Your file has been updated.", "success");
            } else {
              Swal.fire("Sorry!", "You do not change anything .", "warning");
            }
          });
      }
    });
  };
  return (
    <div className="bg-base-200 mx-auto md:px-[200px] md:py-[100px]">
      <div className="bg-base-100 p-4 md:p-16 rounded-xl">
        <div>
          <p className="text-center text-3xl font-extrabold">
            Update Toy Details{" "}
          </p>

          <p className="text-2xl py-5 font-semibold">Toy Name : {toy?.toyName}</p>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price (USD)</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered"
                defaultValue={toy?.price}
                name="price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="quantity"
                className="input input-bordered"
                defaultValue={toy?.quantity}
                name="quantity"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="description"
                defaultValue={toy?.description}
                name="description"
              ></textarea>
            </div>
            <div className="text-center py-10">
              <input
                type="submit"
                value="Update Toy"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;

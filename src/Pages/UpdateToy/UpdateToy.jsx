import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToy = {price,quantity,description}
    console.log(price, quantity, description);
    fetch(`https://toys-marketplace-server-ashen.vercel.app/updateToy/${toy?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          alert('Update Your Toy Please Check')
        }
        console.log(result);
      });
  };
  return (
    <div>
      <p className="text-center text-3xl font-extrabold">Update Toy Details </p>

      <p>Toy Name : {toy?.toyName}</p>
      <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price (USD)</span>
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
            <span className="label-text">Quantity</span>
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
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="description"
            defaultValue={toy?.description}
            name="description"
          ></textarea>
        </div>
        <div className="text-center py-10">
          <input type="submit" value="Update Toy" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;

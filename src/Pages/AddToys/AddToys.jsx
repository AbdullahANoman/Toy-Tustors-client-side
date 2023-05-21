import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useTitle('Add Toy')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://toys-marketplace-server-ashen.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className=" md:px-[140px] py-5 min-h-screen bg-base-200 px-2">
      <div className="">
        <div className="relative w-full">
          <img
            src="https://i.ibb.co/xYYX7Bj/change-1.jpg"
            alt=""
            className="w-full h-[250px] rounded-xl"
          />
          <div className="absolute bottom-0 left-10 md:bottom-[150px] md:left-[200px]">
            <p className="text-center text-4xl font-semibold">Add New Toys </p>
          </div>
        </div>

        <form className="mt-[100px]" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="flex md:flex-row flex-col w-full gap-5">
            <div className="md:w-1/2">
              <label className="label">
                <span>Toys Name</span>
              </label>
              <input
                defaultValue={""}
                {...register("toyName", { required: true })}
                className="input input-bordered w-full "
                placeholder="toys name"
                type="text"
              />
            </div>

            <div className="md:w-1/2">
              <label className="label">
                <p>Photo Url</p>
              </label>
              <input
                defaultValue={""}
                {...register("photo", { required: true })}
                className="input input-bordered w-full"
                placeholder="photo url"
                type="text"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full gap-5">
            <div className="md:w-1/2">
              <label className="label">
                <span>Seller Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                {...register("sellerName", { required: true })}
                className="input input-bordered w-full"
                placeholder="seller name"
              />
            </div>

            <div className="md:w-1/2">
              <label className="label">
                <span>Seller Email</span>
              </label>
              <input
                value={user?.email}
                {...register("sellerEmail", { required: true })}
                className="input input-bordered w-full"
                placeholder="seller email"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full gap-5">
            <div className="md:w-1/2">
              <label className="label">
                <span>Price</span>
              </label>
              <input
                defaultValue={""}
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                placeholder="price"
              />
            </div>

            <div className="md:w-1/2">
              <label className="label">
                <span>Available Quantity</span>
              </label>
              <input
                defaultValue={""}
                {...register("quantity", { required: true })}
                className="input input-bordered w-full"
                placeholder="available quantity "
                type="number"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full gap-5">
            <div className="md:w-1/2">
              <select
                className="select select-bordered w-full mt-7"
                {...register("category", { required: true })}
              >
                <option disabled selected>
                  Select The Category
                </option>
                <option value="math"> Math Toys</option>
                <option value="language">Language Toys</option>
                <option value="science">Science Toys</option>
              </select>
            </div>

            <div className="md:w-1/2">
              <select
                className="select select-bordered w-full mt-7"
                {...register("rating", { required: true })}
              >
                <option disabled selected>
                  Select Rating
                </option>
                <option value="1">1 STAR</option>
                <option value="2">2 STAR</option>
                <option value="3">3 STAR</option>
                <option value="4">4 STAR</option>
                <option value="5">5 STAR</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            {/* <label className="label">
              <span>Detail description</span>
            </label> */}
            <textarea
              defaultValue={""}
              {...register("description", { required: true })}
              placeholder="Detail description"
              className="textarea textarea-bordered textarea-lg w-full mt-7 "
              type="text"
            ></textarea>
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} /> */}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="text-center mt-5">
            <input
              type="submit"
              value={"Add Toy"}
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;

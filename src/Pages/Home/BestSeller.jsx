import React, { useEffect, useState } from "react";
import "./home.css";
const BestSeller = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("bestSeller.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="bestSellerBackground mx-auto py-24 text-white ">
      <div className="text-center mt-16 py-10 ">
        <h1 className="uppercase text-4xl font-semibold">Best Sellers</h1>
        <p className="space-x-10 mt-10">
          B R O W S E T H R O U G H O U R B E S T S E L L E R E S
        </p>
      </div>
      <div className="flex flex-wrap gap-14 justify-center  ">
        {items.map((item) => (
          <div key={item.id} className="bg-white text-black rounded-xl hover:scale-125 duration-500 mb-28">
            <div>
              <img className="rounded-t-xl" height={80} width={250} src={item?.image} alt="" />
            </div>
            <div className="px-10 py-5">
                <p className="uppercase text-lg">{item?.name}</p>
                <p className="text-[#7AA93C] font-semibold">£{item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

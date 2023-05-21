import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../Pages/LoadingSpinner/LoadingSpinner";

const AllCategory = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("math");
  useEffect(() => {
    fetch(
      `https://toys-marketplace-server-ashen.vercel.app/allToys/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="flex justify-center">
      <div className="">
        <h1 className="text-5xl font-bold text-center py-20 text-[#1A2B5F] ">
          Shop By Category
        </h1>

        <div className="tab-container text-center">
          <div className="text-center w-100 mx-auto">
            <div className="tabs flex justify-center items-center gap-2 mb-10">
              <div
                onClick={() => handleTabClick("math")}
                className={`cursor-pointer px-6  py-2 text-xl border rounded-3xl hover:bg-[#66CCFF] hover:text-white ${
                  activeTab == "math"
                    ? " bg-[#66CCFF] text-white font-semibold"
                    : ""
                }`}
              >
                Math Toys
              </div>
              <div
                onClick={() => handleTabClick("science")}
                className={`cursor-pointer px-6  py-2 text-xl border rounded-3xl hover:bg-[#66CCFF] hover:text-white ${
                  activeTab == "science"
                    ? " bg-[#66CCFF] text-white font-semibold"
                    : ""
                }`}
              >
                Science Toys
              </div>
              <div
                onClick={() => handleTabClick("language")}
                className={`cursor-pointer px-6  py-2 text-xl border rounded-3xl hover:bg-[#66CCFF] hover:text-white ${
                  activeTab == "language"
                    ? " bg-[#66CCFF] text-white font-semibold"
                    : ""
                }`}
              >
                Language Toys
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {toys?.map((job) => (
            <Category key={job._id} job={job}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;

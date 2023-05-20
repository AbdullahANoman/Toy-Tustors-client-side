import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";

const AllCategory = () => {
  const [toys,setToys] = useState([])
  const [activeTab, setActiveTab] = useState("math");
  useEffect(()=>{
    fetch(`http://localhost:5000/allToys/${activeTab}`)
    .then(res=>res.json())
    .then(data=>{
      setToys(data)
    })
  },[activeTab])
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

  };
  return (
    <div>
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>

      <div className="tab-container text-center">
        <div className="text-center w-100 mx-auto">
          <div className="tabs flex justify-center items-center">
            <div
              onClick={() => handleTabClick("math")}
              className={`cursor-pointer px-6  py-5 text-xl  ${
                activeTab == "math" ? " bg-red-500 text-white" : ""
              }`}
            >
              Math Toys
            </div>
            <div
              onClick={() => handleTabClick("science")}
              className={`cursor-pointer px-6  py-5 text-xl ${
                activeTab == "science" ? " bg-red-500 text-white" : ""
              }`}
            >
              Science Toys
            </div>
            <div
              onClick={() => handleTabClick("language")}
              className={`cursor-pointer px-6  py-5 text-xl ${
                activeTab == "language" ? " bg-red-500 text-white" : ""
              }`}
            >
              Language Toys
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 mb-5 row">
        {toys?.map((job) => (
          <Category key={job._id} job={job}></Category>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;

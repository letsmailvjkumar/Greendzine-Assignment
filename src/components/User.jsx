import React, { useEffect, useState } from "react";
import { Group46, moptrolog, search } from "../assets/images";
import Footer from "./Footer";

const User = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Sample employee data
  const employeeData = [
    { id: 1, name: "Arjun", dob: "16-12-2000", role: "Software Engineer" },
    { id: 2, name: "Mahesh", dob: "15-01-2000", role: "Web Engineer" },
    { id: 3, name: "Karan", dob: "26-2-2000", role: "UI Engineer" },
    { id: 4, name: "Rohit", dob: "24-06-2000", role: "Product Engineer" },
    { id: 5, name: "Viraj", dob: "14-10-2000", role: "System Engineer" }
  ];

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(employeeData);
    } else {
      const filtered = employeeData.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex justify-end p-3">
          <img src={Group46} alt="profile" />
        </div>
        <div className="flex justify-center mt-8 relative">
        <div className="w-7 h-7 rounded-full bg-[#5E5E5EB5] text-[#36A546] absolute px-2 right-40">4</div>
          <img src={moptrolog} alt="" />
        </div>
        <div className="flex justify-center mt-5 w-full relative">
          <input
            type="text"
            placeholder="Search with name "
            className="border w-80 ps-3 py-1 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> 
          <img
            src={search}
            alt="search"
            className="grayscale-0 invert bg-transparent w-4 h-4 absolute right-16 top-2"
          />
        </div>
        <div className="leading-8">
          {filteredData.map((employee) => (
            <div key={employee.id} className="mx-10 my-10 border px-4 py-1">
              <div>EMP ID : {employee.id}</div>
              <div>Name : {employee.name}</div>
              <div>DOB : {employee.dob}</div>
              <div>Role : {employee.role}</div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="mx-10 my-10 border px-4 py-1">
              No results found.
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default User;

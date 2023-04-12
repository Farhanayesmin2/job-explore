import React, { useEffect, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
const AppliedData = () => {
     const [data, setData] = useState([]);
//   const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

//   useEffect(() => {
    const existingJobData = JSON.parse(localStorage.getItem('job')) || {};
 



  const matchingData = data.filter(item => existingJobData.includes(item._id));


// console.log(matchingData);


  

 
    return (
        <div>
      {matchingData.map(item => (
      <div className="my-5  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src={item.image} title={item.title} alt="Job Image 1"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-xl text-indigo-500 font-bold">{item.title}</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.name}</a>
      <div className="flex">
        <p className="mt-2 text-gray-500 border-2 border-indigo-600 w-24 text-center">{item.time}</p>
        <p className="mt-2 ms-4 text-gray-500 border-2 border-indigo-600 w-24 text-center">{item.type }</p>
      </div>
      <div className="flex items-center">
        <p className="flex items-center mt-2 text-gray-500"><IoLocationOutline className="w-5" />{item.location}</p>
        <p className="flex items-center mt-2 text-gray-500"><AiOutlineDollar className="w-5 ms-2" /> Salary: {item.salary}</p>     
      </div>
      <button  type="button" className="text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        View Details
      </button>
    </div>
  </div>
</div>

    ))}


        </div>
    );
};

export default AppliedData;

  
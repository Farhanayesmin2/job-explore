
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import {  useNavigate} from "react-router-dom";
const Home = ({feature}) => {
  const { id, name, title, time, type, image, salary, location } = feature;

   const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={image} alt="Job Image 1"/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-xl text-indigo-500 font-bold">{title}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{name}</a>
            <div className="flex">
              <p className="mt-2 text-gray-500 border-2 border-indigo-600 w-24 text-center">{time}</p>
              <p className="mt-2 ms-4 text-gray-500 border-2 border-indigo-600 w-24 text-center">{type }</p>
            </div>
                      <div  className="flex items-center">
            <p className="flex items-center mt-2 text-gray-500"><IoLocationOutline className="w-5" />{location}</p>
            <p className="flex items-center mt-2 text-gray-500"><AiOutlineDollar className="w-5 ms-2" /> Salary: {salary}</p>     
          </div>
                      <button   onClick={() => navigate(`/job/${feature.id}`)}  type="button" className="text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm 
           px-5 py-2.5 text-center mr-2 mb-2">View Details</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

 // {`/job/${feature.id}`}
        //    onClick={() => navigate(`/jobdetails/${id}`)}

























// import React from 'react';
// // import {  IoLocationOutline } from "react-icons/io5";
// // import { AiOutlineDollar } from "react-icons/ai";
// const Home = ({feature}) => {

//     const { id,name, title, time, type, image,salary, location } = feature;
    
//     console.log(feature.id);
//     return (
//         <div>



//   <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//     <div class="md:flex">
//       <div class="md:flex-shrink-0">
//         <img class="h-48 w-full object-cover md:w-48" src={image} alt="Job Image 1"/>
//       </div>
//       <div class="p-8">
//                         <div class="uppercase tracking-wide text-xl text-indigo-500 font-bold">{title}</div>
//                         <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{name}</a>
//                         <div className='flex'>
//  <p class="mt-2 text-gray-500 border-2 border-indigo-600 w-24 text-center">{time}</p>
//                         <p class="mt-2 ms-4 text-gray-500 border-2 border-indigo-600 w-24 text-center">{type }</p>
//                         </div>
//                         {/* <IoLocationOutline></IoLocationOutline>
//                         <AiOutlineDollar></AiOutlineDollar> */}
//                         <p class="mt-2 text-gray-500"> {salary}</p>
//         <a href="#" class="mt-3 text-base font-medium text-indigo-600 hover:text-indigo-500">View Details</a>
//       </div>
//     </div>
  
 
// </div>












//            {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//   <div class="md:flex">
//     <div class="md:flex-shrink-0">
//       <img class="h-48 w-full object-cover md:w-48" src="https://example.com/job-image.jpg" alt="Job Image"/>
//     </div>
//     <div class="p-8">
//       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Technical Database Engineer</div>
//       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Google LLC</a>
//       <p class="mt-2 text-gray-500">Remote, Full Time, Dhaka, Bangladesh</p>
//       <p class="mt-2 text-gray-500">Salary: 100K - 150K</p>
//       <a href="#" class="mt-3 text-base font-medium text-indigo-600 hover:text-indigo-500">View Details</a>
//     </div>
//   </div>
// </div> */}

//         </div>
//     );
// };

// export default Home;
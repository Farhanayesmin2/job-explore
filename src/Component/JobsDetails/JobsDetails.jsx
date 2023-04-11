import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const JobsDetails = () => {
    const dataDisplay = useParams();
    
    const [data, setData] = useState([])
    
    let details = {};
    useEffect( () =>{
        fetch('/description.json')
            .then(res => res.json())
        .then(data => setData(data));
        // .then(data => setData(data));
    }, [])
data.find((d) => {
    if (d.id == dataDisplay.id) {
      details = { ...d };
    }
  });


console.log(details.jobTitle);

    return (
        <div className='container mx-auto'>

 

    

<div class="flex flex-col md:flex-row">
  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-4 md:mb-0 md:w-3/4">
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-2">Job Description:</h2>
                        <p class="text-gray-700">{details.description}</p>
      <h2 class="text-2xl font-bold my-2">Job Responsibility:</h2>
                        <p class="text-gray-700">{details.jobResponsibility}</p>

                        <h2 class="text-xl font-bold mb-2">Educational Requirements:</h2>
                        <p>
                            {details.educationalRequirements}</p>
                        <h2 class="text-xl font-bold mb-2">Experiences:
                            </h2>
                        <p>{details.experience}</p>
    </div>
  </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden md:w-1/4">
                    
                    <div class="p-4">
                        <h2 class="text-2xl font-bold mb-2 my-3">Job Details:</h2>
                        <hr className='my-4'></hr>
                        <p>Salary: {details.salary}</p>
                        <p>Job Title: {details.jobTitle} </p>
                        <hr className='my-4'></hr>
      <h2 class="text-xl font-bold mb-2">Contact Information:</h2>

                        <p class="text-gray-700">Phone: {details.phone}</p>
     
      <p class="text-gray-700">Email: {details.email}</p>
      
                        <p class="text-gray-700">Address: {details.address}</p>
      
      <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Apply Now</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default JobsDetails;
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
      <p class="text-gray-700">A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
      <h2 class="text-2xl font-bold my-2">Job Details:</h2>
      <p class="text-gray-700">Job Responsibility: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
      <p class="text-gray-700">Salary: 100K - 150K (Per Month)</p>
                        <p class="text-gray-700">Job Title: Product Designer</p>
                        <h2 class="text-xl font-bold mb-2">Educational Requirements:</h2>
                        <p>
                            Bachelor degree to complete any reputational university.</p>
                        <h2 class="text-xl font-bold mb-2">Experiences:
                            </h2>
                        <p>2-3 Years in this field.</p>
    </div>
  </div>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden md:w-1/4">
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-2">Contact Information:</h2>
      <p class="text-gray-700">Educational Requirements:</p>
      <p class="text-gray-700">Phone: 01750-00 00 00</p>
      <p class="text-gray-700">Bachelor degree to complete any reputational university.</p>
      <p class="text-gray-700">Email: info@gmail.com</p>
      <p class="text-gray-700">Experiences:</p>
      <p class="text-gray-700">Address: Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
      <p class="text-gray-700">2-3 Years in this field.</p>
      <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Apply Now</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default JobsDetails;
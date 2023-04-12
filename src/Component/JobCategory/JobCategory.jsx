import React from 'react';
import { useEffect, useState } from 'react';
const JobCategory = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/job.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


    return (
        <div>
            <div className="bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {data.map(category => (
      <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={category.image} alt={category.title} className="w-full h-40 object-cover object-center" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <a href="#" className="text-indigo-500 hover:text-indigo-600 font-semibold">
            {category.jobs}+ Jobs Available
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
    );
};

export default JobCategory;
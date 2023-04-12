import React from 'react';

const Header = () => {
    return (
        
        
  <div className=" bg-[#ffffff] container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTtNUl-u4mFxplbQHgqWoygrVyEPl105dP3uhkbdpqcSHjO2DiXdH6MSlMyT7x07pzanwFKjpz5WzhR75IHJihArSmJ8VLgLdaUwDl7UfY8AyEMcFqgaI0QsTg8eKDztB4ZT-sIvvI4QFkqWFyVl-7iMeaS4fMKCkyI0UwP0dDC4OmH4eY2IVPkU8bYg/s554/images%20(1).jpeg" className="w-[60%] h-[60%] object-cover object-center rounded-lg shadow-md" alt="Job search" />
    </div>
    <div className="md:w-1/2 md:pl-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
        One Step Closer To Your Dream Job
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-16">
        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <a href="#" className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white mb-4 sm:mb-0">
          Get Started
        </a>
        <a href="#" className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-800">
          Learn More
        </a>
      </div>
    </div>
  </div>


            
    
    );
};

export default Header;
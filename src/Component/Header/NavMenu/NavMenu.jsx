import React, { useState } from 'react';
import { Link } from "react-router-dom";
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-[#e4a5c2] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#774d62] ">Job Explore</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold space-x-4">
              <Link to="/home" className="text-[#774d62]  hover:text-gray-900">Home</Link>
              <Link to="/jobs" className="text-[#774d62]  hover:text-gray-900">Applied Jobs</Link>
              <Link to="/statistics" className="text-[#774d62]  hover:text-gray-900">Statistics</Link>
              <Link to="/blog" className="text-[#774d62]  hover:text-gray-900">Blog</Link>
            </div>
          </div>
          <div className="hidden md:block bg-[#774d62]">
            <button className="shadow-lg    text-white font-semibold  px-4 py-2 rounded hover:bg-blue-950">Start Applying</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 font-bold text-xl  pt-2 pb-3 space-y-1">
          <Link to="/home" className="text-[#774d62] mx-2 hover:text-gray-900">Home</Link>
              <Link to="/jobs" className="text-[#774d62] mx-2 hover:text-gray-900">Applied Jobs</Link>
              <Link to="/statistics" className="text-[#774d62] mx-2 hover:text-gray-900">Statistics</Link>
              <Link to="/blog" className="text-[#774d62] hover:text-gray-900">Blog</Link>
        </div>
        <div className="py-2 px-4 bg-gradient-to-br from-bg-[#774d62] to-bg-[#936d80] text-black ">
          <button className="lg:w-full  bg-[#774d62] text-black font-semibold px-4 py-2 rounded hover:bg-blue-800">Start Applying</button>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;

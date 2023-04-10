import React, { useState } from 'react';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-lime-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#00008B]">Job Explore</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold space-x-4">
              <a href="#" className="text-[#00008B] hover:text-gray-900">Home</a>
              <a href="#" className="text-[#00008B] hover:text-gray-900">Applied Jobs</a>
              <a href="#" className="text-[#00008B] hover:text-gray-900">Statistics</a>
              <a href="#" className="text-[#00008B] hover:text-gray-900">Blog</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="shadow-lg bg-blue-600  text-white font-semibold  px-4 py-2 rounded hover:bg-blue-950">Start Applying</button>
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
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100">Statistics</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100">Blog</a>
        </div>
        <div className="py-2 px-4 text-black ">
          <button className="w-full bg-gradient-to-r from-lime-900 via-slate-50 to-lime-900 text-black font-semibold px-4 py-2 rounded hover:bg-blue-800">Start Applying</button>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;

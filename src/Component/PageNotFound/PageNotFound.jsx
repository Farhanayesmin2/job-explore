import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div>
             <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">404 Error</h1>
        <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        <Link to="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Back to Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default PageNotFound;
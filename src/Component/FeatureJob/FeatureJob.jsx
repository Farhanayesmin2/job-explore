
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';

const FeatureJob = () => {
  const features = useLoaderData();

  const [showAll, setShowAll] = useState(false);

  const limitedData = features.slice(0, 4);
  const dataToShow = showAll ? features : limitedData;

  return (
    <div className="container mx-auto my-5" >
      <div className="grid lg:grid-cols-2 gap-4">
        {dataToShow.map((feature) => (
          <Home key={feature.id} feature={feature} />
        ))}
      </div>

      <div className="ms-[45%] my-5 w-32">
              {!showAll && (
                    <button onClick={() => setShowAll(true)} className="text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> View All Details</button>
          
        )}
      </div>
    </div>
  );
};

export default FeatureJob;




















// import React, { useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Home from '../Home/Home';
// const FeatureJob = () => {

//     const features = useLoaderData();

//     const [showAll, setShowAll] = useState(false);

//   const limitedData = features.slice(0, 4);
//   const dataToShow = showAll ? features : limitedData;
//     console.log(features)
//     return (
//         <div className='container mx-auto my-5' >
//             <div className="grid  lg:grid-cols-2 gap-4 ">
// {
//                     dataToShow.map(feature => <Home
//                         key={feature.id}
//                     feature={feature}
                
//                 >
                   
                    
//                </Home> ) 
//             }
//             </div>
            
            
//             <div className='bg-blue-600 text-center w-32'>
//  {!showAll &&
//         <button  onClick={() => setShowAll(true)}>See All Details</button>
//       }
//             </div>
            
//         </div>
//     );
// };

// export default FeatureJob;
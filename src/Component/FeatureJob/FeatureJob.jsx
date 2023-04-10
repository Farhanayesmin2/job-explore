import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
const FeatureJob = () => {

    const features = useLoaderData();

    const [showAll, setShowAll] = useState(false);

  const limitedData = features.slice(0, 4);
  const dataToShow = showAll ? features : limitedData;
    console.log(features)
    return (
        <div className='container mx-auto my-5' >
            <div className="grid  lg:grid-cols-2 gap-4 ">
{
                dataToShow.map(feature => <Home
                
                    key={feature.id}
                    feature={feature}
                >
                   
                    
               </Home> ) 
            }
            </div>
            
            
            <div className='bg-blue-600 text-center w-32'>
 {!showAll &&
        <button  onClick={() => setShowAll(true)}>See All Details</button>
      }
            </div>
            
        </div>
    );
};

export default FeatureJob;
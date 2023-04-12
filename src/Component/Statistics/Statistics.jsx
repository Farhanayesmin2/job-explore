import React from 'react';


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';


const data = [
  {
    name: 'Assignment 1',
 
    mark: 60,
   
  },
  {
    name: 'Assignment 2',
     
    mark: 60,
   
  },
  {
    name: 'Assignment 3',
 
    mark: 56,
  
  },
  {
    name: 'Assignment 4',
    
    mark: 58,
  },
  {
    name: 'Assignment 5',
 
    mark: 60,
  },
  {
    name: 'Assignment 6',
    
    mark: 60,
  },
  {
    name: 'Assignment 7',
   
    mark: 60,
  },
];

const Statistics = () => {
    

  
        return (



 
      <div className='rechart-css lg:w-[100%] lg:h-[100%]' >
       

        

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={10}
            height={10}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
 





       
   
};

export default Statistics;
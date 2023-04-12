import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppliedData from "./Component/AppliedData/AppliedData";
import Blog from "./Component/Blog/Blog";
import FeatureJob from "./Component/FeatureJob/FeatureJob";
import Home from "./Component/Home/Home";
import JobsDetails from "./Component/JobsDetails/JobsDetails";
import Main from "./Component/Layout/Main";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
const router = createBrowserRouter([
 
  {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
          },
           {
                path: "/home",
                element: <FeatureJob></FeatureJob>,
              loader: ()  => fetch('/data.json') 
          },
          {
              path: "/job/:id",
                element: <JobsDetails></JobsDetails>
                // loader: ({params}) => fetch(`description.json/home/${params.id}`)
          },
          {
            path: "/jobs",
            element: <AppliedData></AppliedData>
          },
          {
            path: "/blog",
            element: <Blog></Blog>
          }
       
        ]
        },
{
    path: '*',
    element: <PageNotFound></PageNotFound>
},
]);



function App() {


  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App

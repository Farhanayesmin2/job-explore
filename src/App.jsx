import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import FeatureJob from "./Component/FeatureJob/FeatureJob";
import Home from "./Component/Home/Home";
import Main from "./Component/Layout/Main";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
const router = createBrowserRouter([
 
  {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
          },
           {
                path: "/job",
                element: <FeatureJob></FeatureJob>,
              loader: ()  => fetch('data.json') 
            },
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

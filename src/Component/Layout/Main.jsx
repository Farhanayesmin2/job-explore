import React from 'react';
import Footer from '../Footer/Footer';


import { Outlet } from 'react-router-dom';
import NavMenu from '../Header/NavMenu/NavMenu';
import Header from '../Header/Header';
const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
    
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;
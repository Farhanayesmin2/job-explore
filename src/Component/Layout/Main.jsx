import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import NavMenu from '../Header/NavMenu/NavMenu';
const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;
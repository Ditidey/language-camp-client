import React from 'react';
import { Outlet } from 'react-router-dom';
import NabVar from '../components/shared/NabVar';
import Footer from '../components/shared/Footer';

const Main = () => {
    return (
        <div>
            <NabVar></NabVar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
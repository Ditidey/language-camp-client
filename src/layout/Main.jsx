import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NabVar from '../components/shared/NabVar';
import Footer from '../components/shared/Footer';


const Main = () => {

    return (
        <div>

            <NabVar></NabVar>

            <div className='min-h[calc*(100vh-40px)]'>

                <Outlet></Outlet>
            </div>
             

            <Footer></Footer>
        </div>
    );
};

export default Main;
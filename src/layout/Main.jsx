import React from 'react';
import { Outlet } from 'react-router-dom';
import NabVar from '../components/shared/NabVar';

const Main = () => {
    return (
        <div>
            <NabVar></NabVar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
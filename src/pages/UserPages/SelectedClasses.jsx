import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import { getSelectedClasses } from '../../components/api-calls/studentApi';

const SelectedClasses = () => {
    const {user} = useContext(contextProvider);
    const selectedClasses = getSelectedClasses(user?.email)
    console.log(selectedClasses)
    return (
        <div>
            
        </div>
    );
};

export default SelectedClasses;
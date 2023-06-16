import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import { getClasses } from '../../components/api-calls/apiCalls';

const PopularInstrSeeButton = () => {
    const { user } = useContext(contextProvider);
    const [classes] = getClasses();
    const classesFilter = classes.filter(each => each.teacher_email == user?.email)
      console.log(classesFilter)
    return (
        <div>

        </div>
    );
};

export default PopularInstrSeeButton;
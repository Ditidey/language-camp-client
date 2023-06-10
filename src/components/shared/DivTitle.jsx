import React from 'react';

const DivTitle = ({title}) => {
    return (
        <div>
             <hr className='w-1/3 mx-auto border-purple-600 border-2' />
                <p className='text-center text-3xl uppercase font-serif my-3'>{title}</p>
                <hr className='w-1/3 mx-auto border-purple-600 mb-10 border-2' />
        </div>
    );
};

export default DivTitle;
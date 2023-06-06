import React from 'react';

const Footer = () => {
    return (
        <div className='bg-purple-950 py-14 px-6'>
            <div className='text-center text-blue-300'>
                <p className='font-serif text-2xl py-10'>Stay Updated</p>
                <p className='font-mono'>Be the first to know about our latest classes <br /> and get exclusive free trial with us.</p>
             <input type="email" name="" id="" placeholder='Email Address' className='border-white p-4 my-10'/> 
             <input type="submit" value="Contact Us" className='p-4 bg-blue-500'/>
            </div>
            
        </div>
    );
};

export default Footer;
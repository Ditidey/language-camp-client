import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter, FiPhoneCall } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import logo from '../../../public/logo.png'
const Footer = () => {
    return (
        <div className='bg-purple-950 pt-14 px-6'>
            <div className='md:flex md:justify-evenly'>
                <div className='text-center pt-20'>
                    <img src={logo} alt="" className='w-10 h-10 md:ms-8 mt-2 my-2 ms-44' />
                    <p className='text-blue-100 text-3xl font-serif font-bold mt-2'>Global Talk</p>
                    <p className='text-xl text-blue-300 inline-flex ms-0'>
                        <CiLocationOn className='mt-1 me-1'></CiLocationOn>
                        Dublin, Ireland</p>
                    <p className='text-blue-300 my-2 flex md:ms-2 ms-44'><FiPhoneCall className='mt-1 me-1'></FiPhoneCall> +353 00000043</p>
                </div>
                <div>
                    <div className='text-center text-blue-300'>
                        <p className='font-serif text-2xl py-10'>Stay Updated</p>
                        <p className='font-sans'>Be the first to know about our latest classes <br /> and get exclusive free trial with us.</p>
                        <input type="email" name="" id="" placeholder='Email Address' className='border-white p-4 my-10' />
                        <input type="submit" value="Contact Us" className='p-4 bg-blue-500' />
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <AiOutlineWechat className='w-6 h-6 text-blue-100'></AiOutlineWechat>
                        <FiFacebook className='w-6 h-6 text-blue-400'></FiFacebook>
                        <FiTwitter className='text-blue-300 w-6 h-5'></FiTwitter>
                        <FiInstagram className='text-red-400 w-6 h-6'></FiInstagram>
                    </div>
                </div>
            </div>

            <div className='w-full pt-8 pb-6 border-t-2 border-purple-900 my-2 shadow-lg text-center mt-5'>
                <p className='text-blue-200'>Global Talk &copy; 2023. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
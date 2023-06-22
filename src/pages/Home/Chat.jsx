import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Chat = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_52ld9nk', 'template_2eh8bsr', form.current, 'jtVKWP0Psy_KH3FQR')
        .then((result) => {             
            Swal.fire({
                title: 'Message sent',
                text: "Thanks for your time and the message",
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='w-full md:mx-auto pt-32 md:px-10'>
            <h2 className='md:text-center ms-2 text-5xl font-serif font-bold'>Contact me</h2>
            <form ref={form} onSubmit={sendEmail} className='w-2/3 md:ms-44 ps-10  py-5'>
                <input type="text" name="name" id="" placeholder='your name' className='md:ms-80 p-4 my-3 md:w-1/2 rounded-lg shadow-sm border-2'/> <br />
                <input type="email" name="email" id="" placeholder='your email' className='md:ms-80 p-4 my-3 md:w-1/2 rounded-lg shadow-sm border-2'/> <br />
                <input type="text" name="message" id="" placeholder='your message' className='md:ms-80 p-4 my-3 md:w-1/2 h-[200px] rounded-lg shadow-sm border-2'/> <br />
                <input type="submit" value="Send"  className='md:ms-80 p-4 my-3 md:w-1/2 rounded-lg shadow-lg bg-cyan-800 text-white '/>
            </form>
        </div>
    );
};


export default Chat;
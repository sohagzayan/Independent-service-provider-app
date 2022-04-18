import React from 'react';
import { AiOutlineFieldTime, AiOutlineMail, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";
import { SiConsul } from "react-icons/si";

const Footer = () => {
    return (
       <div className=' footer shadow-2xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container px-4 mx-auto'>
            <div className='lg:mr-2 lg:mb-0 mb-7'>
                <span className='flex items-center text-2xl font-bold tracking-widest mb-3'>
                    <SiConsul className='mr-3 text-green_light text-3xl' />
                    Phase
                </span>
                <p className='text-sm mb-3'>in here i well help you to shape and build your ideal
body and live up your life to the fullest</p>
                <div className='flex gap-5 text-green_light text-lg'>
                    <span><FaFacebookF /></span>
                    <span><AiOutlineTwitter /></span>
                    <span><AiOutlineYoutube /></span>
                </div>
            </div>
            <div className=' lg:mb-0 mb-7'>
                <h3 className='text-xl tracking-widest text-green_light mb-3 '>Navigations</h3>
                <ul className='text-sm'>
                    <li><a href="/">FAQ's</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Term & Conditions</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className=' lg:mb-0 mb-7'>
                <h3 className='text-xl tracking-widest text-green_light mb-3'>Contact Information</h3>
                <span className='flex items-center mb-1 text-sm'>
                    <MdLocationOn  className='mr-2' />
                    4096 Modesto, CA 95350, USA
                </span>
                <span className='flex items-center mb-1 text-sm'>
                    <FaPhoneAlt  className='mr-2'/> 
                    +12094728764
                </span>
                <span className='flex items-center mb-1 text-sm'>
                    <AiOutlineMail  className='mr-2' />
                    info@yogado.com
                </span>
            </div>
            <div className=' lg:mb-0 mb-7'>
                <h3 className='text-xl tracking-widest text-green_light mb-3'>Opineing Time</h3>
                <span className='flex items-center mb-1 text-sm'>
                    <AiOutlineFieldTime className='mr-2' />
                    Mon-Fri: 9:30am - 21:00pm
                    </span>
                <span className='flex items-center mb-1 text-sm'>
                    <AiOutlineFieldTime className='mr-2'/>
                    Sat: 10:00am - 15:00pm
                </span>
                <span className='flex items-center mb-1 text-sm'>
                    <AiOutlineFieldTime className='mr-2'/>
                    On Public Holidays: Closed
                </span>
            </div>
        </div>
        <div className='container mx-auto py-7'>
        <hr className="border-green_light" />
        </div>
        <p className='text-sm text-center'>Copyright © 2022 PrimGym | Powered by PrimGym</p>
       </div>
    );
};

export default Footer;
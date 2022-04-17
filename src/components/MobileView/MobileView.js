import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const MobileView = ({showMenu , setShowMenu}) => {

    AOS.init({
        duration: 400, 
      })


    return (
        <div data-aos="flip-left" className='absolute top-0 right-0 z-50 bg-dark_gray p-5 shadow-xl w-full '>
        <span onClick={()=> setShowMenu(!showMenu)}>
            <MdClose  className=" text-tomato_light cursor-pointer text-5xl" />
        </span>
        <div className='flex-col '>
        <ul className='flex flex-col items-center  gap-8 uppercase tracking-widest font-bold text-md mr-5'>
            <li> <NavLink to="/">About</NavLink></li>
            <li> <NavLink to="/">Checkout </NavLink></li>
            <li> <NavLink to="/">Blog </NavLink></li>
        </ul>
        <div className='text-center mt-5'>
            <button className='border-2 border-blue_light px-7 rounded-md mr-4 py-1'>Login</button>
            <span className='bg-blue_light text-white px-3 py-2 rounded-md fond-bold tracking-wider'>User Name</span>
        </div>

    </div>
</div>
    );
};

export default MobileView;
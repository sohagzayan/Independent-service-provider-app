import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';



const MobileView = ({showMenu , setShowMenu}) => {

    const {username , logOut} = useAuthContext()
    const handleLogOut = async ()=>{
        await logOut()
      }

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
           <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/">Home</NavLink>
           <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/about">About Mes</NavLink>
            <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/blog">Blog</NavLink>
        </ul>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="text-center mt-7">
            <NavLink
             
            className={({isActive})=> isActive ? 'text-tomato_light border-2 hover:bg-blue_light duration-100 cursor-pointer border-blue_light px-7 rounded-md mr-4 py-2' : 'border-2 hover:bg-blue_light duration-100 cursor-pointer border-blue_light px-7 rounded-md mr-4 py-2'} onClick={ username ? handleLogOut : null} to="/register/login" >
              {username ? "SignOut" : "Login"}
            </NavLink>
            <span
       
            className="bg-blue_light  duration-100    text-white px-3 py-3 rounded-md fond-bold tracking-wider">
             {username ? username.displayName :  "You Not User Yet"}
            </span>
          </div>

    </div>
</div>
    );
};

export default MobileView;
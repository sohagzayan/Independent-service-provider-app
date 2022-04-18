import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiConsul } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import MobileView from "../MobileView/MobileView";
AOS.init()
const Header = () => {
  const {username , logOut} = useAuthContext()
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = async ()=>{
    await logOut()
  }



  return (
    <div className="flex justify-between container mx-auto py-6 px-4">
      <NavLink
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
        
      to="/" className="flex items-center">
        <span className="mr-3 text-3xl">
          <SiConsul className="text-blue_light" />
        </span>
        <h3 className="text-2xl tracking-widest text-white_light font-bold">
          Phase
        </h3>
      </NavLink>
      <div className="hidden md:block">
        <div className="flex items-center ">
          <ul className="flex items-center gap-8 uppercase tracking-widest font-bold text-md mr-5">
            <li
             data-aos="fade-down"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
            >
              
              <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/">Home</NavLink>
            </li>
            <li
             data-aos="fade-down"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="2000"
            >
              
              <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/about">About Me</NavLink>
            </li>
            {/* <li>
              
              <NavLink to="/">Checkout </NavLink>
            </li> */}
            <li
             data-aos="fade-down"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="3000"
            >
              
              <NavLink className={({isActive})=> isActive ? 'text-tomato_light' : ''} to="/blog">Blog </NavLink>
            </li>
          </ul>
          <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="">
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
      {showMenu ? <MobileView showMenu={showMenu} setShowMenu={setShowMenu} /> : null}
      <div className="md:hidden block">
        <span onClick={() => setShowMenu(!showMenu)}>
          <HiMenuAlt3 className="text-4xl text-green_light" />
        </span>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiConsul } from "react-icons/si";
import { NavLink } from "react-router-dom";
import MobileView from "../MobileView/MobileView";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log();
  return (
    <div className="flex justify-between container mx-auto py-6 px-4">
      <NavLink to="/" className="flex items-center">
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
            <li>
              
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              
              <NavLink to="/">About Me</NavLink>
            </li>
            {/* <li>
              
              <NavLink to="/">Checkout </NavLink>
            </li> */}
            <li>
              
              <NavLink to="/">Blog </NavLink>
            </li>
          </ul>
          <div className="">
            <NavLink to="/register/login" className="border-2 hover:bg-blue_light duration-100 cursor-pointer border-blue_light px-7 rounded-md mr-4 py-2">
              Login
            </NavLink>
            <span className="bg-blue_light  duration-100    text-white px-3 py-3 rounded-md fond-bold tracking-wider">
              You Not User Yet
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

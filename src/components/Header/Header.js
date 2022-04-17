import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiConsul } from "react-icons/si";
import { NavLink } from "react-router-dom";
import MobileView from "../MobileView/MobileView";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between container mx-auto py-6 px-4">
      <div className="flex items-center">
        <span className="mr-3 text-3xl">
          <SiConsul className="text-blue_light" />
        </span>
        <h3 className="text-2xl tracking-widest text-white_light font-bold">
          Phase
        </h3>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center ">
          <ul className="flex items-center gap-8 uppercase tracking-widest font-bold text-md mr-5">
            <li>
              
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              
              <NavLink to="/">Checkout </NavLink>
            </li>
            <li>
              
              <NavLink to="/">Blog </NavLink>
            </li>
          </ul>
          <div className="">
            <button className="border-2 hover:bg-blue_light duration-100 cursor-pointer border-blue_light px-7 rounded-md mr-4 py-1">
              Login
            </button>
            <span className="bg-blue_light hover:border-2 duration-100 hover:border-blue_light border-2 cursor-pointer border-transparent hover:bg-transparent text-white px-3 py-2 rounded-md fond-bold tracking-wider">
              User Name
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

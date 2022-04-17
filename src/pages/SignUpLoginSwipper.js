import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const LoginSignUpSwicer = () => {
    return (
        <>
          <Header />
        <div className="flex justify-center items-center h-screen">
        <div className="p-4 rounded-lg shadow-xl shadow-primary_black " style={{width : '400px' , background : '#2E3138'}}>
          <div className="flex justify-around mb-5 text-white font-bold tracking-wider">
            <NavLink className={({isActive})=> isActive ? "res-nav active" : "res-nav"} to="login">Login</NavLink>
            <NavLink className={({isActive})=> isActive ? "res-nav active" : "res-nav"}  to="signup">SignUp</NavLink>
          </div>
          <Outlet />
        </div>
        </div>
        <Footer />
        </>
    );
};

export default LoginSignUpSwicer;
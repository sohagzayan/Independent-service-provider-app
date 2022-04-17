import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import LoginSignUpSwicer from '../pages/SignUpLoginSwipper';



const Routing = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<LoginSignUpSwicer />} >
                <Route path="login"  element={<Login />} />
                <Route path="signup"  element={<SignUp />} />
            </Route>
        </Routes>
    );
};

export default Routing;   
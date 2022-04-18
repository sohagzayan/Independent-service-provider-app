import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import CheckOut from '../pages/CheckOut';
import ForGotPassword from "../pages/ForGotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LoginSignUpSwicer from "../pages/SignUpLoginSwipper";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/CheckOut" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
      <Route path="/register" element={<LoginSignUpSwicer />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForGotPassword />} />
      </Route>
    </Routes>
  );
};

export default Routing;

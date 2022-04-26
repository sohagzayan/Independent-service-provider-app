import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import CheckOut from '../pages/CheckOut';
import ForGotPassword from "../pages/ForGotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import LoginSignUpSwicer from "../pages/SignUpLoginSwipper";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="/CheckOut" element={<PrivateRoute><CheckOut /></PrivateRoute>} /> */}
      <Route path="/CheckOut" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
      <Route path="/CheckOut/:id" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
      <Route path="/register" element={<LoginSignUpSwicer />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForGotPassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;

import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const { sinUp, googleLogin ,varyFayEmail} = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name){
      if (password === conformPassword) {
        try {
          
          await sinUp(email, password, name);
          varyFayEmail()
          alert("verification mail send conform Please ! ")
          navigate("/checkOut");
        } catch (err) {
          setError(err.message);
        }
      } else {
        setError("your password and conform Password not mach");
        setAgree(false);
      }
    }else{
      setError('Please add Your user name Must!')
    }
  };

  const handleGoogleSignIn = async () => {
  
    try {
     
      await googleLogin();
      navigate("/checkOut");
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>

      <div className="login mx-auto mt-6">
        <form className="" onSubmit={handleSubmit}>
          <p className="text-red-500 text-sm text-center font-medium">
            {error}
          </p>
          <label
            className="text-sm mb-4 text-white tracking-wider"
           
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            className="w-full outline-none border-0 font-bold tracking-wide text-white px-2 rounded-md py-1"
            style={{ background: "#545E6A" }}
            type="text"
            placeholder="Name"
            required

          />
          <label
            className="text-sm mb-4 text-white tracking-wider"
            
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            className="w-full outline-none border-0 font-bold tracking-wide text-white px-2 rounded-md py-1"
            style={{ background: "#545E6A" }}
            type="email"
            placeholder="Email"
            required

          />
          <label
          
            className="text-sm mb-4 text-white tracking-wider"
           
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={password}
            autoComplete="on"
            id="password"
            className="w-full outline-none border-0 font-bold text-white px-2 rounded-md py-1"
            style={{ background: "#545E6A" }}
            type="password"
            placeholder="Password"
            required

          />
          <label
            className="text-sm mb-4 text-white tracking-wider"
            
          >
            Conform password
          </label>
          <input
            onChange={(e) => setConformPassword(e.target.value)}
            value={conformPassword}
            name={conformPassword}
            autoComplete="on"
            id="password"
            className="w-full outline-none border-0 font-bold text-white px-2 rounded-md py-1"
            style={{ background: "#545E6A" }}
            type="password"
            placeholder="Conform password"
            required

          />
          {agree ? (
            <input
              checked
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-4 mr-2 checked"
              type="checkbox"
              name="checkbox"
              id="checked"
              required

            />
          ) : (
            <input
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-4 mr-2 checked"
              type="checkbox"
              name="checkbox"
              id="checked"
              required

            />
          )}
          <label
            className={agree ? "text-green-300 text-sm" : "text-white text-sm"}
           for="checked"
          >
            Agree To Continue
          </label>
          <button
            className={
              agree
                ? "w-full  text-white font-medium p-1 text-md uppercase cursor-point rounded-md mt-4 "
                : "w-full opacity-30 pointer-events-none  text-white font-medium p-1 text-md uppercase cursor-point rounded-md mt-4 "
            }
            style={{ background: "#0CC486" }}
          >
            signup
          </button>
          <p className="text-center my-2 text-white text-sm">Or SignUp with</p>
        </form>
        <div className="flex justify-between my-4">
          <GoogleButton
            onClick={handleGoogleSignIn}
            label="Google"
            className="font-semibold"
            style={{ width: "100%", textAlign: "center" }}
          />
        </div>
        <p className="text-center text-white">
          Already Account ?
          <NavLink
            className="text-green-400 font-bold mx-2 uppercase"
            to="/register/login"
          >
            Login
          </NavLink>
          Now
        </p>
      </div>
    </>
  );
};

export default Login;

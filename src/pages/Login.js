import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';

const Login = () => {
    const {login , googleLogin} = useAuthContext()
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [agree , setAgree] = useState(false)
    const [error , setError] = useState('')
    const navigate = useNavigate()

  

    const handleSubmit = async(e)=>{
      e.preventDefault()
      try{
        await login(email , password)
        navigate('/CheckOut')
      }catch(err){
        setError(err.message)
        setAgree(false)
      }
    }

    const handleGoogleSignIn = async ()=>{
      try{
        await googleLogin()
        navigate('/CheckOut')
      }catch(err){
        setError(err.message)
      }
    }


    return (
        <>
       
      <div className='login mx-auto mt-6'>
      <form className='' onSubmit={handleSubmit}>
          <p className="text-red-500 text-sm text-center font-medium">{error}</p>
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
            Login
          </button>
          <p className="text-center my-2 text-white text-sm">Or login with</p>
        </form>
        <div className="my-4 ">
          <GoogleButton
            onClick={handleGoogleSignIn}
            label="Google"
            className=""
            style={{width : '100%', textAlign : 'center'}}
            
          />
        </div>
  
        <p className="text-center text-white">
   
          <NavLink
            className="text-green-400  font-bold uppercase"
            to="/register/forgotPassword"
          >
    
            Forgot Password
          </NavLink>
        </p>
        <p className="text-center text-white">
            Don't have a Account ?
          <NavLink
            className="text-green-400 mx-3 font-bold uppercase"
            to="/register/signup"
          >
             SignUp
          </NavLink>
          
          Now
        </p>
      </div>
      </>
    );
};

export default Login;
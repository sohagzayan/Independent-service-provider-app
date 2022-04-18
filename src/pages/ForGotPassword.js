import React, { useState } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';

const ForGotPassword = () => {
    const [email , setEmail] = useState('')
    const [error , setError] = useState('')
    const {ForGotPassWord} = useAuthContext()



    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await ForGotPassWord(email)
            // setError('')
        }catch(err){
            setError(err.message)
        }
    }



    return (
        
      <div className="login mx-auto mt-6">
          <h4 className='text-center my-4 text-dark_blue text-lg'>Don't know your <span className='text-xl text-green_light'>Password</span> ? submit email</h4>
     
      <form className="" onSubmit={handleSubmit}>
        <label
          className="text-sm mb-4 text-white tracking-wider"
          htmlFor="email"
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
        />
        <p className='text-tomato_light mt-1'>{error}</p>
        <button className='bg-tomato_light px-6 py-1 mx-auto w-full my-4 cursor-pointer'>Submit</button>
        </form>
        <div>
            <h5 className='text-dark_blue'>Create New Account ? <NavLink className="text-green_light text-lg uppercase tracking-widest ml-3 font-bold" to="/register/signUp">signUp</NavLink> </h5>
            <h6 className='text-dark_blue'>Already Account ? <NavLink  className="text-green_light text-lg uppercase tracking-widest ml-3 font-bold" to="/register/login">Login</NavLink> </h6>
        </div>
        <p className='flex item-center text-xs'>
         <AiOutlineWarning className='text-2xl mr-2 text-tomato_light' />
            check you email get one link , open this link . and finale add your New PassWord.
         </p>
    </div>
    );
};

export default ForGotPassword;
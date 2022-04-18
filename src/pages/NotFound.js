import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex px-4 justify-center items-center h-screen flex-col'>
            <img className='rounded-md' src="https://media4.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" alt="not found " />
            <h2 className='text-6xl m-3 text-tomato_light font-bold'>404 !</h2>
            <NavLink className="bg-green_light px-5 py-1 rounded-md cursor-pointer" to="/">Go Back</NavLink>
        </div>
    );
};

export default NotFound;
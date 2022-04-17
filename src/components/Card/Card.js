import React from 'react';

const Card = ({item}) => {
    const {name , price , image, details} = item
    return (
        <div className='flex card rounded-lg  flex-col items-center text-center bg-dark_gray '>
            <img width={200} src={image} alt="" />
            <h3 className='text-dark_blue tracking-widest text-4xl py-3'>{name}</h3>
            <p className='text-sm leading-6 py-3'>{details}</p>
            <span className='text-4xl font-bold text-tomato_light'>
                $ {price}
            </span>
            <button className='bg-dark_blue block w-full px-4 py-1 rounded-md my-3'>CheckOut </button>
        </div>
    );
};

export default Card;
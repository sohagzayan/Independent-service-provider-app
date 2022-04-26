import React from 'react';
import image from '../../assets/plan.png';
import image1 from '../../assets/rating.png';
import image2 from '../../assets/trophy.png';
const WhayChoseMe = () => {
    return (
        <div className='text-center my-8 container px-5 mx-auto'>
            <h2 className='text-4xl mb-4 text-tomato_light'>Why Choose Me?</h2>
            <p  className='text-sm my-5'>There has been so much excitement around gyms reopening that even people who’ve never held <br /> a gym membership are considering signing up, and we want to do everything we can to help you make <br /> regular gym sessions a part of your routine. </p>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                <div className='bg-dark_gray mb-3 items-center justify-center shadow-slate-800 text-center flex flex-col'>
                    <img className='cardChIM' width={100} src={image} alt="" />
                    <span className='text-4xl my-3 text-green_light font-semibold'>750 +</span>
                    <small className='text-2xl uppercase tracking-widest font-bold'>Diet Plans</small>
                </div>
                <div className='bg-dark_gray mb-3 items-center justify-center shadow-slate-800 text-center flex flex-col'>
                    <img className='cardChIM' width={100} src={image2} alt="" />
                    <span className='text-4xl my-3 text-green_light font-semibold'>450 +</span>
                    <small className='text-2xl uppercase tracking-widest font-bold'>Experts</small>
                </div>
                <div className='bg-dark_gray mb-3 items-center justify-center shadow-slate-800 text-center flex flex-col'>
                    <img className='cardChIM' width={100} src={image1} alt="" />
                    <span className='text-4xl my-3 text-green_light font-semibold'>850 +</span>
                    <small className='text-2xl uppercase tracking-widest font-bold'>Awards</small>
                </div>
            </div>
        </div>
    );
};

export default WhayChoseMe;
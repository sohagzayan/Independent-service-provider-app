import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import image from '../../assets/image/header-slide-1.png';

// ..
AOS.init();
const Hero = () => {
    return (
        
        <div className='flex md:flex-row flex-col px-3 hero py-5 items-center justify-around'>
            
           <div 
       data-aos="fade-up"
           
           className='content'>
           <div className=' mb-6 inline-block bg-green_light px-4 py-3  rounded-3xl'>
                <span className='bg-dark_gray px-3 py-2   md:mr-3 mr-1 uppercase tracking-wider rounded-3xl text-xs sm:text-sm'>The best</span>
                <span className='fod-bold tracking-widest text-xs  sm:text-sm uppercase '>Fitness club in the town</span>
            </div>
            <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
          data-aos-duration="2000"

            className=' text-5xl lg:text-7xl   uppercase leading-tight tracking-wider font-bold'><span className='heading tracking-widest'>Shape</span> your  <br /> ideal body</h2>
            <p className='text-white_light tracking-wide font-medium text-sm lg:text-md mb-5'>in here i well help you to shape and build your ideal <br /> body and live up your life to the fullest</p>
            <div className='flex md:text-center mb-6'>
               <div className='mr-5'>
                   <span className=' text-2xl lg:text-4xl font-bold text-white_light'>180+</span>
                   <h4 className='uppercase text-xs lg:text-sm text-gray-300 tracking-widest'>Expert Coachs</h4>
               </div>
               <div className='mr-5'>
                   <span className='text-2xl lg:text-4xl font-bold text-white_light'>670+</span>
                   <h4 className='uppercase text-xs lg:text-sm text-gray-300 tracking-widest'>members joined</h4>
               </div>
               <div className='mr-5'>
                   <span className='text-2xl lg:text-4xl  font-bold text-white_light'>50+</span>
                   <h4 className='uppercase text-xs lg:text-sm text-gray-300 tracking-widest'>fitness programs</h4>
               </div>
            </div>
            <div className='flex '>
                <button className='bg-green_light px-4 py-2 rounded-md hover:border-2 hover:border-green_light hover:bg-transparent border-2 duration-100 border-transparent'>Get Started</button>
                <button className='border-2 border-green_light ml-4 px-4 py2 rounded-md hover:bg-green_light duration-100 '>Learn more</button>
            </div>
           </div>

            <div className='heroImage mt-10 md:mt-0'>
                <img
              
                width={300} src={image} alt="images" />
            </div>
   
        </div>
    );
};

export default Hero;
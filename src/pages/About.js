import React from 'react';
import { ImDownload3 } from 'react-icons/im';
import image from '../assets/myPhoto.jpg';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const About = () => {
    return (
        <>
        <Header />
        <div className='flex md:flex-row flex-col justify-around  mt-24 mb-28 items-center px-4'>
           <div className='aboutImage'>
                 <img width={400} className="rounded-full" src={image} alt="images" />
           </div>
            <div>
                <h3 className='text-4xl text-green_light mb-4'>About Me</h3>
                <p>Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in <br /> web site design & building and customization. Also I am good at</p>
                <div className='mt-6'>
                    <span className='border-2 mb-4 inline-block  border-green_light mr-5 px-5 rounded-sm ' href="/">html</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5 rounded-sm ' href="/">css</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5 rounded-sm ' href="/">javascript</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">react</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">node</span>
                    <br />
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">mongoDB</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">express</span>
                </div>
                <button className='flex items-center text-white_light font-bold tracking-widest rounded-lg justify-center uppercase bg-green_light px-6 py-2'>Download CV
                    <ImDownload3 className='text-white_light ml-3' />
                </button>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default About;
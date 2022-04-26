import React from 'react';
import Accordion from '../components/Accorodion/Accordion';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Blog = () => {
    return (
        <>
        <Header />
            <div className='my-24 px-4'>
                <Accordion />
            </div>
        <Footer />
        </>
            
    );
};

export default Blog;
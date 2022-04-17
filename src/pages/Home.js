import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Header />
            <Hero />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
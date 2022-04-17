import React from 'react';
import Card from '../../components/Card/Card';
import useLoadData from '../../hocks/useLoadData';
const Services = () => {
    const {data , setData} = useLoadData()
    return (
        <div className='container mx-auto mb-20 px-5'>
           <h2 className='text-center text-5xl mb-10 font-bold tracking-wider mt-16'>My Services</h2>
           <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    data?.map((item)=> <Card item={item} />)
                }
           </div>
        </div>
    );
};

export default Services;
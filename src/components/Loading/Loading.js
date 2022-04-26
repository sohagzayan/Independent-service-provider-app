import React from 'react';
import loadingImage from '../../assets/image/loading1.gif';


const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={loadingImage} alt="loading" />
        </div>
    );
};

export default Loading;
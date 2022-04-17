import { useEffect, useState } from 'react';

const useLoadData = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(cardData => setData(cardData))
    },[])


    return {data , setData}
};

export default useLoadData;
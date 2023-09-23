import React from 'react';
import Banner from '../Component/Banner';
import Phones from '../Component/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div className='py-3'>
            <Banner></Banner>
            <Phones phones = {phones}></Phones>
        </div>
    );
};

export default Home;
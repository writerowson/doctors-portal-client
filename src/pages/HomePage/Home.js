import React from 'react';
import Banner from './Banner';

import Info from './Info/Info';
import Services from './Services';
import bgImage from '../../images/bg.png';
import AnotherService from './AnotherService';
const Home = () => {
    return (
        <div className='px-12'>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
            }}>

                <Banner></Banner>
            </div>
            <Info></Info>
            <Services></Services>
            <AnotherService></AnotherService>

        </div >
    );
};

export default Home;
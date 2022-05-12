import React from 'react';
import Banner from './Banner';

import Info from './Info/Info';
import Services from './Services';
import bgImage from '../../images/bg.png';
import AnotherService from './AnotherService';
import MakeAppoinment from './MakeAppoinment';
import Testimonyal from './Testimonyal';
import Contact from './Info/Contact';

const Home = () => {
    return (
        <div >
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
            }}>

                <Banner></Banner>
            </div>
            <Info></Info>
            <Services></Services>
            <AnotherService></AnotherService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonyal></Testimonyal>
            <Contact></Contact>
        </div >
    );
};

export default Home;
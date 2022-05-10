import React from 'react';

import InfoPage from './InfoPage';
import clock from '../../../icons/clock.svg'
import marker from '../../../icons/marker.svg'
import phone from '../../../icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 grid-cols-3  gap-4 px-5'>


            <InfoPage bgClass="bg-gradient-to-r text-light from-secondary to-primary" cardTitle="Opening Hours" img={clock} ></InfoPage>
            <InfoPage bgClass="bg-accent" cardTitle="Location" img={marker} ></InfoPage>
            <InfoPage bgClass="bg-gradient-to-r text-light from-primary to-secondary" cardTitle="Contact Us" img={phone} ></InfoPage>

        </div>
    );
};

export default Info;
import React from 'react';

import InfoPage from './InfoPage';
import clock from '../../../icons/clock.svg'
import marker from '../../../icons/marker.svg'
import phone from '../../../icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 px-12'>


            <InfoPage bg className="bg-gradient-to-r text-light from-secondary to-primary" cardTitle="Opening Hours" img={clock} ></InfoPage>
            <InfoPage bg className="bg-accent" cardTitle="Location" img={marker} ></InfoPage>
            <InfoPage bg className="bg-gradient-to-r text-light from-primary to-secondary" cardTitle="Contact Us" img={phone} ></InfoPage>

        </div>
    );
};

export default Info;
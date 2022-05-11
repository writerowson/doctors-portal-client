import React from 'react';
import flouride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'hi',
            img: flouride
        },
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'im',
            img: cavity
        },
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'mi',
            img: whitening
        }
    ]

    return (
        <div className="my-28">
            <div className='text-center '>
                <h3 className='text-xl text-primary font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service we provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Services;






















































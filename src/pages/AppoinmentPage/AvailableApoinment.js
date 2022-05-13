import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableApoinment = ({ date }) => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointment's on {format(date, 'PP')}</h4>


        </div>
    );
};

export default AvailableApoinment;
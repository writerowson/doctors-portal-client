import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Serviceeee from './Serviceeee';


const AvailableApoinment = ({ date }) => {

    const [services, setServices] = useState([])

    const [treatment, setTreatment] = useState(null)
    // console.log(treatment);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-3xl text-primary text-center font-semibold'>Available Appointment's on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Serviceeee
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Serviceeee>)
                }
            </div>
            {
                treatment && <BookingModal
                    key={treatment._id}
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableApoinment;
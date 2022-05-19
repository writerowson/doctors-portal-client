import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Serviceeee from './Serviceeee';
import Loading from '../Shared/Loading'

const AvailableApoinment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = date && format(date, "PP")
    // const formattedDate = format(date, 'pp'); with error
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    //     // to call it share on it dependency
    // }, [formattedDate])
    return (
        <div>
            <h4 className='text-xl text-primary text-center font-semibold mb-16'>Available Appointment's on {format(date, 'PP')}</h4>
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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};
export default AvailableApoinment;


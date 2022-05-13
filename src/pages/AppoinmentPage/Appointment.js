import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableApoinment from './AvailableApoinment';
import BookingModal from './BookingModal';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>

            <AvailableApoinment date={date} setDate={setDate}></AvailableApoinment>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../images/chair.png'


const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm rounded-lg shadow-2xl' src={chair} alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected: {format(date, 'PP')}</p>
                </div>

            </div>

        </div>
    );
};

export default AppoinmentBanner;
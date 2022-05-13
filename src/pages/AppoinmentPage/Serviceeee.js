import React from 'react';

const Serviceeee = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-primary">{name}</h2>

                <p>{
                    slots.length > 0
                        ? <span >{slots[0]}</span>
                        : <span className='text-red-600'>No Slot available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'speces' : 'spece'} Available</p>
                <div class="card-actions justify-center">
                    <button
                    ></button>
                    {/* <!-- The button to open modal and get data --> */}
                    <label
                        for="booking-modal"
                        class="btn btn-primary"
                        disabled={slots.length === 0}
                        // to get data use arrow function
                        onClick={() => setTreatment(service)}

                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Serviceeee;
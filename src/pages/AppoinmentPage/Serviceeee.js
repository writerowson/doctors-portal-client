import React from 'react';

const Serviceeee = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-9">
            <div className="text-center card-body">
                <h2 className=" text-xl font-bold text-primary">{name}</h2>

                <p>{
                    slots.length > 0
                        ? <span >{slots[0]}</span>
                        : <span className='text-red-600'>No Slot available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'speces' : 'spece'} Available</p>
                <div className="card-actions justify-center">

                    {/* <!-- The button to open modal and get data --> */}
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-primary "
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
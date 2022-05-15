
import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment, setTreatment }) => {

    // const { _id, name, slots } = treatment
    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot);
        console.log(treatment._id, treatment.name, treatment.slots);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-primary  font-semibold'"> Booking for: {treatment?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-2' >
                        <input disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                treatment?.slots.map(slot => <option
                                    value={{ slot }}
                                >{slot}</option>)
                            }


                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="Phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingModal;
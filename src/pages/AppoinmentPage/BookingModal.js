
import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment }) => {
    console.dir(date)
    console.log(date);
    console.dir(treatment)
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-xl text-primary  font-semibold'"> Booking for: {treatment?.name}</h3>
                    <form className='grid grid-cols-1 gap-4 justify-items-center mt-2' >
                        <input value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingModal;
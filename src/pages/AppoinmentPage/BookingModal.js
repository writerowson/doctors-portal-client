
import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const BookingModal = ({ date, treatment, setTreatment }) => {

    // const { _id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'pp')

    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot);
        console.log(treatment._id, treatment.name, treatment.slots);
        const booking = {
            treatmentId: treatment._id,
            treatment: treatment.name,
            date: treatment.formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // to close modal
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-primary  font-semibold'"> Booking for: {treatment?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-2' >
                        <input disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                treatment?.slots.map(slot => <option
                                    // key={slot._id}
                                    // key={index}
                                    value={{ slot }}
                                >{slot}</option>)
                            }


                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" value={user?.phoneNumber || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingModal;
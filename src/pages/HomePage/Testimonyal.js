import React from 'react';
import quote from '../../icons/quote.svg'
import p1 from '../../images/people1.png'
import p2 from '../../images/people2.png'
import p3 from '../../images/people3.png'
import Review from './Review';


const Testimonyal = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson Herry',
            review: 'lorem50',
            location: 'Dhaka',
            img: p1
        },
        {
            _id: 1,
            name: 'winson Herry',
            review: 'lorem50',
            location: 'Dhaka',
            img: p2
        },
        {
            _id: 1,
            name: 'winson Herry',
            review: 'lorem50',
            location: 'Dhaka',
            img: p3
        },
    ]


    return (
        <section className='my-9 align-middle px-12'>
            <div className='flex justify-between'>
                <div className='text-center'>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img className='w-24 lg:w-48 my-5' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonyal;
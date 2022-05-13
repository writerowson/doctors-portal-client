import React from 'react';

import bgImage from '../../../images/appointment.png'
import Btn from '../../Shared/Btn';

const Contact = () => {
    return (

        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
        }} className=' text-center  justify-center items-center mt-10 lg:mx-0 sm:mx-12 p-8 '>


            <h3 className='text-xl  text-primary pt-5'>CONTACT</h3>
            <h2 className='text-4xl text-white'>Stay connect with Us</h2>

            <div className='my-5'>
                <div className='my-3' >
                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-3/12" />
                </div>
                <div className='my-3'>
                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-3/12" />
                </div>
                <div className='my-3'>
                    <textarea class="textarea textarea-accent w-3/12" placeholder="Your Message"></textarea>
                </div>
            </div>

            <Btn className="mb-7" >Submit</Btn>

        </section >

    );
};

export default Contact;
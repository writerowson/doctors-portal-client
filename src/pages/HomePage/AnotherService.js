import React from 'react';
import treatment from '../../images/treatment.png'
import Btn from '../Shared/Btn';

const AnotherService = () => {
    return (
        <div className="hero mb-28">
            <div className='hero-content flex-col lg:flex-row'>
                <img className='max-w-sm rounded-lg' src={treatment} alt="treatment" />
                <div className='px-10 '>
                    <h2 className='text-4xl'>Exceptional Dental Care, on Your Terms</h2>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Btn>Get started</Btn>
                </div>
            </div>
        </div>

    );
};

export default AnotherService;
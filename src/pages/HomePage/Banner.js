import React from 'react';
import chair from '../../images/chair.png';
import Btn from '../Shared/Btn';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-8">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <Btn>Get started</Btn>

                </div>

            </div>
        </div>
    );
};

export default Banner;
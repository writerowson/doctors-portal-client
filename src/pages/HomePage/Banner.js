import React from 'react';
import chair from '../../images/chair.png';





const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <PrimaryButton> Get Started</PrimaryButton> */}
                    <button className='btn btn-primary bg-gradient-to-r text-light from-secondary to-primary '>Get Started </button>

                </div>

            </div>
        </div>
    );
};

export default Banner;
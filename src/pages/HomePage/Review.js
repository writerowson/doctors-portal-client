import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quam natus fugiat.</p>
                <div className="flex items-center mt-5">
                    <div className="avatar ">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div className=' px-8' >
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;
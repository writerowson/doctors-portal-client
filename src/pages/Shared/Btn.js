import React, { Children } from 'react';

const Btn = ({ children }) => {
    return (
        <div>
            <button className='btn btn-primary bg-gradient-to-r text-light from-secondary to-primary '>{children} </button>
        </div>
    );
};

export default Btn;
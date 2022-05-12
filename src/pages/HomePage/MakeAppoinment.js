import React from 'react';
import doctor from '../../images/doctor.png'
import bgImage from '../../images/appointment.png'
import Btn from '../Shared/Btn';


const MakeAppoinment = () => {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
        }} className='flex  justify-center items-center mt-10 lg:mx-0 sm:mx-12 '>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-7'>
                <h3 className='text-xl  text-primary pt-5'>Appoinment</h3>
                <h2 className='text-4xl text-white'>Make an appoinment today</h2>
                <p className='text-white py-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div> <Btn className='text-white'>Get started</Btn></div>
            </div >
        </section >
    );
};

export default MakeAppoinment;
import React from 'react';
import bgImage from '../../images/footer.png'


const Footer = () => {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
        }} className=' text-center  justify-center items-center mt-10 lg:mx-0 sm:mx-12 '>
            <footer className="footer p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className='my-9'>Copyright 2022 All Rights Reserved</p>
        </section>
    );
};

export default Footer;
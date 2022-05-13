import React from 'react';
import bgImage from '../../images/footer.png'


const Footer = () => {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
        }} className=' text-center  justify-center items-center mt-10 lg:mx-0 sm:mx-12 '>
            <footer class="footer p-10 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className='my-9'>Copyright 2022 All Rights Reserved</p>
        </section>
    );
};

export default Footer;
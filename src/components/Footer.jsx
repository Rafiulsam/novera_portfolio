import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="bg-[#003153] text-white py-6 md:py-10">
            <div className="container mx-auto text-center">
                <div className='flex justify-center gap-4 mb-4'>
                    <a href="mailto:noveranikkon02@gmail.com" target='_blank' className='hover:text-gray-300 hover:underline'><FaEnvelope size={25}/></a>
                    <a href="https://www.instagram.com/noverahasannikkon1998/" target='_blank' className='hover:text-gray-300 hover:underline'><FaInstagram size={25}/></a>
                    <a href="https://www.facebook.com/novera.hasannikkon.3" target='_blank' className='hover:text-gray-300 hover:underline'><FaFacebookSquare size={25}/></a>

                </div>
                <p className="text-sm md:text-lg"><small>
                    &copy; {new Date().getFullYear()}{' '}
                    All rights reserved. Developed by{' '}

                    <a href="https://github.com/Rafiulsam" target='_blank' className='hover:text-blue-600 hover:underline'>Rafiul Sam</a></small>
                </p>
            </div>
        </section>
    );
};

export default Footer;
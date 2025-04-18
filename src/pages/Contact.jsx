import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

    const [success, setSuccess ] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSuccess("Message submitted! Thank you.");

       
    // }

    return (
        <div className="">
            <div className="min-h-screen text-white flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('contact_background.JPG')",
                    backgroundAttachment: 'fixed',
                }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10 px-4 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                        Let's Connect
                    </h1>

                    <p className='text-2xl max-w-xl font-semibold'> Have a project in mind, a collaboration offer, or just want to say hello? I'd love to hear from you!</p>
                </motion.div>
            </div>
            <div className='flex justify-center items-center min-h-screen px-4'>
                {/* Contact Form */}
                <motion.form
                    className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSuccess("Message submitted! Thank you.");
                        e.target.reset();
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-bold  mb-4"
                    >Contact</motion.h1>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            className="border-b border-black px-4 py-2 focus:outline-none"
                            placeholder='Your name'
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-2">Email </label>
                        <input
                            type="email"
                            className="border-b border-black px-4 py-2 focus:outline-none"
                            placeholder='Your email'
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-2">Message</label>
                        <textarea
                            className="border-b border-black px-4 py-2 focus:outline-none"
                            placeholder='Your message'
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                    <div>
                        {success && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-green-600 font-semibold mt-4"
                            >
                                {success}
                            </motion.p>
                        )}
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
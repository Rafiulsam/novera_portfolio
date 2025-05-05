import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = useState("");
    const [bgLoaded, setBgLoaded] = useState(false);
    const form = useRef()

    useEffect(() => {
        const img = new Image();
        img.src = "contact_background.JPG";
        img.onload = () => {
            setBgLoaded(true);
        };
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            })
            .then(
                () => {
                    setSuccess("Message submitted! Thank you.");
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    setSuccess("Failed to send message. Please try again.");
                },
            );
    }

    return (
        <>
            <div className="min-h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">
                {/* Background Image */}
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ${bgLoaded ? "blur-0" : "blur-md"}`}
                    style={{
                        backgroundImage: "url('contact_background.JPG')",
                        backgroundAttachment: 'fixed',
                        zIndex: 0,
                    }}
                ></div>
                {/* Black Overlay */}
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
                    className="bg-gray-100 my-20 w-full max-w-2xl rounded-2xl shadow-lg p-8 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    onSubmit={handleOnSubmit} ref={form}
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
                            name='name'
                            className="bg-gray-100 border-b border-black px-4 py-2 focus:outline-none"
                            placeholder='Your name'
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-2">Email </label>
                        <input
                            type="email"
                            name='email'
                            className="bg-gray-100 border-b border-black px-4 py-2 focus:outline-none"
                            placeholder='Your email'
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-2">Message</label>
                        <textarea rows="4"
                        name='message'
                            className="bg-gray-100 border-b border-black px-4 py-2 focus:outline-none"
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
        </>
    );
};

export default Contact;
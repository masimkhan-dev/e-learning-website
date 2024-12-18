import React from 'react';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa'; // Import the bell icon from react-icons
import BgImage from '../../assets/bg.png';

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh', 
};

const Subscribe = () => {
    return (
        <section className=''>
            <div style={bgStyle} className="container py-24 md:py-26">
                <div className="flex flex-col justify-center">
                    <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        <motion.h1 
                            className='text-4xl font-bold !leading-snug'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            450+ students are learning from us
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non!
                        </motion.p>
                        <motion.a 
                            href="#" 
                            className='inline-flex items-center gap-2 mt-4 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FaBell className='text-lg' /> {/* Icon before the text */}
                            Subscribe Now
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

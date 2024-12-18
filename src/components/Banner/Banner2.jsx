import React from 'react';
import BannerPng from '../../assets/banner.png';
import { motion } from 'framer-motion';

export const Banner2 = () => {
    return (
        <section className=''>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 space-y-6 md:space-y-0">
                
                {/* Banner Text */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-10'>
                        <motion.h1 
                            className='text-3xl md:text-5xl font-bold !leading-snug'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Join Our Learning Community
                        </motion.h1>
                        
                        <motion.p 
                            className='text-xl text-gray-700'
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Unlock your potential with thousands of courses taught by industry experts.
                        </motion.p>
                        
                        <motion.a 
                            href="#"
                            className='inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Get Started Now
                        </motion.a>
                    </div>
                </div>
                
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                        className='w-[350px] md:max-w-[500px] object-cover drop-shadow-lg' 
                        src={BannerPng} 
                        alt="Education"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner2;

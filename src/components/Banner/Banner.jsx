import React from 'react';
import BannerPng from '../../assets/education.webp';
import { motion } from 'framer-motion';
import { FaBookReader } from 'react-icons/fa';

export const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                        className='w-[350px] md:max-w-[450px] object-cover drop-shadow' 
                        src={BannerPng} 
                        alt="Education"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                
                {/* Banner Text */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-10'> {/* Increased space-y for more gap */}
                        <motion.h1 
                            className='text-3xl md:text-5xl font-bold !leading-snug'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Join Our Learning Community
                        </motion.h1>
                        <div className='space-y-6'>
                            <motion.div 
                                className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-lg hover:bg-white duration-300 hover:shadow-2xl'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaBookReader className='text-2xl text-blue-500' /> {/* Added color to the icon */}
                                <p className='text-xl'>10,000+ Courses</p>
                            </motion.div>
                            <motion.div 
                                className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-lg hover:bg-white duration-300 hover:shadow-2xl'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <FaBookReader className='text-2xl text-green-500' /> {/* Added color to the icon */}
                                <p className='text-xl'>Expert Instructors</p>
                            </motion.div>
                            <motion.div 
                                className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-lg hover:bg-white duration-300 hover:shadow-2xl'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <FaBookReader className='text-2xl text-purple-500' /> {/* Added color to the icon */}
                                <p className='text-xl'>Lifetime Access</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
          
            </div>
        </section>
    );
};

export default Banner;

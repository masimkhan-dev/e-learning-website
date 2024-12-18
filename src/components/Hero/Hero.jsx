import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { FaCode, FaPython, FaJs, FaReact } from 'react-icons/fa';
import blob from '../../assets/blob.svg';
import hero from '../../assets/hero.png';
import developerteam from '../../assets/developer-team.svg';

export const Hero = () => {
    const languageIcons = [
        { Icon: FaPython, color: "#3776AB" },
        { Icon: FaJs, color: "#F7DF1E" },
        { Icon: FaReact, color: "#61DAFB" },
    ];

    return (
        <section style={{backgroundColor:"#120E1B"}} className="bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden relative z-10 min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            Learn to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Code</span> <br />
                            with Confidence
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            Master the world's most popular <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">programming languages</span> and build amazing projects.
                        </motion.p>
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                        >
                            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center group">
                                Get Started
                                <IoIosArrowRoundForward className="text-2xl ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <button className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition duration-300">
                                Learn More
                            </button>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <span className="text-gray-400">Popular languages:</span>
                            {languageIcons.map(({ Icon, color }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon className="text-2xl" style={{ color }} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <img
                            src={developerteam}
                            alt="Coding illustration"
                            className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                        />
                        <motion.img
                            src={blob}
                            alt=""
                            className="absolute -bottom-24 -right-24 w-64 md:w-96 z-[-1] opacity-50"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                        <motion.div
                            className="absolute -top-6 -left-6 bg-purple-600 rounded-full p-4 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaCode className="text-3xl text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
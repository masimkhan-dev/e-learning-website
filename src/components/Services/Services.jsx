import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaApple, FaGamepad, FaUserCog, FaChartBar, FaShoppingCart, FaVrCardboard } from 'react-icons/fa'; // Importing valid icons

export const Services = () => {
    const ServicesData = [
        {
            id: 1,
            title: "Web Development",
            link: "#",
            icon: <FaReact className="text-blue-500" />, // Changed icon color
            delay: 0.2,
            description: "Learn how to create stunning websites using the latest technologies.",
            details: "This course covers HTML, CSS, JavaScript, and frameworks like React and Angular."
        },
        {
            id: 2,
            title: "Digital Marketing",
            link: "#",
            icon: <FaApple className="text-green-500" />, // Changed icon color
            delay: 0.4,
            description: "Master the art of digital marketing and grow your business online.",
            details: "This course includes SEO, social media marketing, and content marketing strategies."
        },
        {
            id: 3,
            title: "Mobile App Development",
            link: "#",
            icon: <FaApple className="text-green-500" />, // Changed icon color
            delay: 0.6,
            description: "Create mobile applications for iOS and Android platforms.",
            details: "Learn Swift, Kotlin, and cross-platform development with Flutter."
        },
        {
            id: 4,
            title: "Game Development",
            link: "#",
            icon: <FaGamepad className="text-yellow-500" />, // Changed icon color
            delay: 0.8,
            description: "Develop engaging games for multiple platforms.",
            details: "This course covers game design principles and development using Unity."
        },
        {
            id: 5,
            title: "UI/UX Design",
            link: "#",
            icon: <FaUserCog className="text-purple-500" />, // Changed icon color
            delay: 1,
            description: "Learn how to create user-friendly interfaces and experiences.",
            details: "This course focuses on design thinking, prototyping, and user testing."
        },
        {
            id: 6,
            title: "Data Analytics",
            link: "#",
            icon: <FaChartBar className="text-orange-500" />, // Changed icon color
            delay: 1.2,
            description: "Analyze data to make informed business decisions.",
            details: "Learn tools like Excel, SQL, and data visualization techniques."
        },
        {
            id: 7,
            title: "E-commerce Development",
            link: "#",
            icon: <FaShoppingCart className="text-red-500" />, // Changed icon color
            delay: 1.4,
            description: "Build and manage online stores effectively.",
            details: "This course includes Shopify, WooCommerce, and payment gateway integration."
        },
        {
            id: 8,
            title: "Virtual Reality Development",
            link: "#",
            icon: <FaVrCardboard className="text-gray-500" />, // Changed icon color
            delay: 1.6,
            description: "Create immersive experiences using VR technology.",
            details: "Learn about VR development tools and techniques."
        }
    ];

    const [expandedService, setExpandedService] = useState(null);

    const handleLearnMore = (id) => {
        setExpandedService(expandedService === id ? null : id);
    };

    return (
        <section className='bg-white'>
            <div className="container pb-14 pt-16">
                <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">
                    Welcome to <span style={{ color: "#FD4184" }} className='text-secondary'>Our Service</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ServicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center mb-4 text-3xl">
                                {service.icon}
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-600 mb-2">{service.description}</p>
                            <button
                                onClick={() => handleLearnMore(service.id)}
                                className="text-blue-500 hover:underline"
                            >
                                {expandedService === service.id ? 'Show Less' : 'Learn More'}
                            </button>
                            {expandedService === service.id && (
                                <p className="mt-2 text-gray-700">{service.details}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
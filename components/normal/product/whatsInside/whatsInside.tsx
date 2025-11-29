'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import DottedCarousel from '@/components/common/base/dottedCarousel'
import { motion } from 'framer-motion'

const includedItems = ['TheraFace Mask Glo device', 'Protective eye shield', 'USB-C charging cable']
const images = [
    'https://placehold.co/450x400/cccccc/cccccc',
    'https://placehold.co/450x400/cccccc/cccccc',
    'https://placehold.co/450x400/cccccc/cccccc',
]

const WhatsInside = () => {
    return (
        <motion.div
            className="min-h-screen bg-white font-sans flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full">
                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-black mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    What's Inside
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <DottedCarousel images={images} />
                    </motion.div>

                    {/* Right: Items List */}
                    <motion.div
                        className="border border-black p-8 flex flex-col justify-between"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <ul className="list-none space-y-3 mb-8">
                            {includedItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start text-lg text-gray-800"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-xl mr-3 leading-none">•</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="flex items-center justify-end space-x-2 text-gray-900 font-semibold text-base transition hover:text-black"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>SPECIFICATIONS</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Offer Banner */}
                <motion.h2
                    className="text-2xl font-light text-gray-800 mt-20 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    OFFER UP FOR GRABS
                </motion.h2>

                <motion.div
                    className="bg-[#fff9e6] md:p-12 flex flex-col md:flex-row justify-between md:items-center border-yellow-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        className="mb-6 w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="text-6xl md:text-8xl text-black">70% OFF</span>
                    </motion.div>

                    <motion.div
                        className="text-lg md:text-xl text-gray-700 md:max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Get yourself the therapy mask at 70% off the original price if you buy two or more masks in the
                        same purchase
                    </motion.div>

                    <motion.div
                        className="mt-8 md:mt-0 flex flex-col items-center w-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex flex-col">
                            <motion.button
                                className="flex items-center space-x-2 text-gray-900 text-lg transition transform hover:text-black"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-xl">ADD TO BAG</span>
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </motion.button>
                            <span className="text-sm text-gray-500 mt-1">Add 2 Masks</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default WhatsInside
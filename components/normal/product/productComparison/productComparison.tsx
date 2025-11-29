'use client'
import React from 'react'
import { Check, X } from 'lucide-react'
import ComparisonCheck from './comparisonCheck'
import { motion } from 'framer-motion'

const comparisonFeatures = [
    { name: 'Red LED light therapy', redLight: true, blueLight: false },
    { name: 'Blue LED light therapy', redLight: false, blueLight: false },
    { name: 'Infrared LED light therapy', redLight: true, blueLight: false },
    { name: 'Vibration therapy', redLight: true, blueLight: false },
    { name: 'Percussive therapy', redLight: true, blueLight: false },
    { name: 'Microcurrent therapy', redLight: false, blueLight: false },
    { name: 'Heat and cold therapy compatible', redLight: true, blueLight: true },
    { name: 'Portable hand-held design', redLight: true, blueLight: true },
]

const ProductComparison = () => {
    return (
        <motion.div
            className="min-h-screen mt-20 bg-white font-sans flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <motion.div
                    className="lg:col-span-1 space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg font-semibold tracking-widest text-black mt-6 uppercase">COMPARE</p>
                    <h1 className="text-5xl font-light text-black leading-none tracking-wider mb-8">
                        Red Light
                        <br />
                        Therapy Mask
                        <br />
                        Vs
                        <br />
                        Blue Light
                        <br />
                        Tharam Mask
                    </h1>
                    <p className="text-black text-xl leading-relaxed">
                        You have specific needs, and we have tailored products designed to meet them. Find the perfect
                        match so you get exactly what you're looking for.
                    </p>
                </motion.div>

                {/* Right Columns: Comparison Table */}
                <motion.div
                    className="lg:col-span-2 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Product Images */}
                    <div className="grid grid-cols-2 gap-2 bg-gray-50">
                        <motion.div
                            className="relative h-64 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="https://placehold.co/600x400/cccccc/cccccc"
                                alt="Red Light Therapy Mask"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="relative h-64 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="https://placehold.co/600x400/cccccc/cccccc"
                                alt="Blue Light Therapy Mask"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Price Header */}
                    <div className="grid grid-cols-2 text-sm  h-14 mb-18 gap-2">
                        <motion.div
                            className="flex justify-between items-center bg-gray-200 p-4"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <span className="font-light text-xl text-black">Red Light Therapy Mask</span>
                            <span className="font-semibold text-xl text-black">$245</span>
                        </motion.div>
                        <motion.div
                            className="flex justify-between items-center bg-gray-200 p-4"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <span className="font-light text-xl text-black">Blue Light Tharam Mask</span>
                            <span className="font-semibold text-xl text-black">$545</span>
                        </motion.div>
                    </div>

                    {/* Comparison Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div>
                            {comparisonFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    style={{ backgroundColor: feature.redLight ? '#fee68575' : '#d4d4d44a' }}
                                    className="flex items-center text-lg font-light gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                    whileHover={{ x: 5, backgroundColor: feature.redLight ? '#fee685' : '#d4d4d4' }}
                                >
                                    <ComparisonCheck isChecked={feature.redLight} />
                                    <span>{feature.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div>
                            {comparisonFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    style={{ backgroundColor: feature.blueLight ? '#fee68575' : '#d4d4d44a' }}
                                    className="flex items-center text-lg font-light gap-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                    whileHover={{ x: -5, backgroundColor: feature.blueLight ? '#fee685' : '#d4d4d4' }}
                                >
                                    <ComparisonCheck isChecked={feature.blueLight} />
                                    <span>{feature.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProductComparison
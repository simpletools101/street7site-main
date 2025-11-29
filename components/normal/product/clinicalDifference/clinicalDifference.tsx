'use client'
import React from 'react'
import { Check, CheckCircle, ChevronLeft, ChevronRight, CircleCheck } from 'lucide-react'
import Carousel from '@/components/common/base/carousel'
import { motion } from 'framer-motion'

// Sample data for the benefit cards
const benefits = [
    {
        title: 'REDUCES FINE LINES',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica',
    },
    {
        title: 'FIRMS & TIGHTENS SKIN',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica',
    },
    {
        title: 'EVENS SKIN TONE',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
    },
    {
        title: 'BOOSTS COLLAGEN',
        description: 'Lorem Ipsum has roots in a piece of classical Latin literature from 45 BC.',
    },
]

// Component for a single benefit card
const BenefitCard: React.FC<{ benefit: (typeof benefits)[0]; index: number }> = ({ benefit, index }) => (
    <motion.div
        className="w-[350px] p-4 flex items-center h-[200px] bg-[#fcf59e] mr-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -5 }}
    >
        <div className="flex items-start space-x-3">
            {/* Checkmark Icon */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
            >
                <CircleCheck className="w-12 h-12 text-black font-light" />
            </motion.div>
            <div className="ml-4">
                <motion.h3
                    className="font-bold text-lg tracking-wider uppercase mb-1 text-gray-900"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                    {benefit.title}
                </motion.h3>
                <motion.p
                    className="text-gray-700 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                    {benefit.description}
                </motion.p>
            </div>
        </div>
    </motion.div>
)

const ClinicalDifference = () => {
    return (
        <motion.div
            className="min-h-screen bg-white flex justify-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Main Content Container */}
            <div className="w-full">
                {/* --- Top Section: Title and Slider Controls --- */}
                <div className="flex justify-between items-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl text-gray-900 tracking-wider"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        Clinically proven benefits
                    </motion.h1>
                </div>

                {/* --- Benefits Slider --- */}
                <motion.div
                    className="overflow-x-auto pb-6 -mx-4 md:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Carousel>
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} benefit={benefit} index={index} />
                        ))}
                    </Carousel>
                </motion.div>

                {/* --- Bottom Section: Before & After --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 md:mt-24 items-start">
                    {/* Left: Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 tracking-wider">
                            Creating the difference
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classica
                        </p>
                    </motion.div>

                    {/* Right: Before & After Images */}
                    <div className="flex justify-center">
                        {/* Image 1: Before */}
                        <motion.div
                            className="relative w-[400px] h-[400px] overflow-hidden"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="https://placehold.co/400x400/cccccc/cccccc"
                                alt="Before treatment"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        {/* Image 2: After */}
                        <motion.div
                            className="relative w-[400px] h-[400px] border overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="https://placehold.co/400x400/cccccc/cccccc"
                                alt="After treatment"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ClinicalDifference
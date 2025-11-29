'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
    {
        id: 1,
        title: 'GOOD BUT BULKY',
        rating: 3,
        date: '10/09/2025',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece roots in a piece roots in a',
    },
    {
        id: 2,
        title: 'LOVED EVERY BIT',
        rating: 4,
        date: '10/09/2025',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece roots in a piece roots in a',
    },
    {
        id: 3,
        title: 'GOOD BUT BULKY',
        rating: 3,
        date: '10/09/2025',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece roots in a piece roots in a',
    },
    {
        id: 4,
        title: 'LOVED EVERY BIT',
        rating: 4,
        date: '10/09/2025',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece roots in a piece roots in a',
    },
]

const renderStars = (rating: number, index: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating
        stars.push(
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.2, rotate: 20 }}
            >
                <Star
                    className={`w-5 h-5 transition-colors duration-150 ${
                        isFilled ? 'text-gray-800 fill-current' : 'text-gray-300'
                    }`}
                    strokeWidth={1.5}
                />
            </motion.div>
        )
    }
    return <div className="flex space-x-0.5">{stars}</div>
}

const ReviewCard: React.FC<{ review: (typeof reviews)[0]; index: number }> = ({ review, index }) => (
    <motion.div
        className="border border-gray-300 p-6 md:p-8 rounded-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
        <div className="flex justify-between items-start mb-4">
            <motion.h3
                className="text-lg font-bold text-gray-900 tracking-wider"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
                {review.title}
            </motion.h3>
        </div>

        <div className="flex justify-between items-center mb-4">
            {renderStars(review.rating, index)}
            <motion.span
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
            >
                {review.date}
            </motion.span>
        </div>

        <motion.p
            className="text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
        >
            {review.text}
        </motion.p>
    </motion.div>
)

const ReviewsItem = () => {
    return (
        <motion.div
            className="min-h-screen bg-white font-sans flex justify-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Reviews
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.slice(0, 4).map((review, index) => (
                        <ReviewCard key={review.id} review={review} index={index} />
                    ))}
                </div>

                <motion.div
                    className="mt-12 md:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <hr className="border-t border-gray-300 my-8" />

                    <div className="flex justify-center space-x-3 pt-4">
                        {[0, 1, 2, 3].map((dot, index) => (
                            <motion.div
                                key={dot}
                                className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-gray-900' : 'bg-gray-400'}`}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.5 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ReviewsItem
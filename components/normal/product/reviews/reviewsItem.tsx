'use client'

import React from 'react'
import { Star } from 'lucide-react'

// Sample data for the reviews
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

// Function to render rating stars
const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating
        stars.push(
            <Star
                key={i}
                className={`w-5 h-5 transition-colors duration-150 ${
                    isFilled ? 'text-gray-800 fill-current' : 'text-gray-300'
                }`}
                strokeWidth={1.5}
            />
        )
    }
    return <div className="flex space-x-0.5">{stars}</div>
}

// Component for a single review card
const ReviewCard: React.FC<{ review: (typeof reviews)[0] }> = ({ review }) => (
    <div className="border border-gray-300 p-6 md:p-8 rounded-none">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-900 tracking-wider">{review.title}</h3>
        </div>

        <div className="flex justify-between items-center mb-4">
            {renderStars(review.rating)}
            <span className="text-sm text-gray-500">{review.date}</span>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">{review.text}</p>
    </div>
)

const ReviewsItem = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex justify-center py-16">
            {/* Main Content Container: centered and constrained */}
            <div className="w-full ">
                {/* --- Title Section --- */}
                <h1
                    className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-wider"
                >
                    Reviews
                </h1>

                {/* --- Review Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* We'll display the first four reviews for the desktop layout */}
                    {reviews.slice(0, 4).map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* --- Slider Dots and Separator --- */}
                <div className="mt-12 md:mt-20">
                    {/* Separator Line */}
                    <hr className="border-t border-gray-300 my-8" />

                    {/* Dots (Simulating a carousel/slider) */}
                    <div className="flex justify-center space-x-3 pt-4">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsItem

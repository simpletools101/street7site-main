'use client'

import React from 'react'
import { Check, CheckCircle, ChevronLeft, ChevronRight, CircleCheck } from 'lucide-react'
import Carousel from '@/components/common/base/carousel'

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
const BenefitCard: React.FC<{ benefit: (typeof benefits)[0] }> = ({ benefit }) => (
    <div className=" w-[350px] p-4 flex items-center h-[200px] bg-[#fcf59e] mr-4">
        <div className="flex items-start space-x-3">
            {/* Checkmark Icon */}
            <CircleCheck className="w-12 h-12 text-black font-light " />
            <div className="ml-4">
                <h3 className="font-bold text-lg tracking-wider uppercase mb-1 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 text-lg">{benefit.description}</p>
            </div>
        </div>
    </div>
)

// The main component must be named App and be the default export.
const ClinicalDifference = () => {
    return (
        <div className="min-h-screen bg-white  flex justify-center py-16">
            {/* Main Content Container */}
            <div className="w-full">
                {/* --- Top Section: Title and Slider Controls --- */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl md:text-5xl  text-gray-900 tracking-wider">Clinically proven benefits</h1>
                </div>

                {/* --- Benefits Slider (Horizontal Scroll) --- */}
                {/* Using overflow-x-auto and whitespace-nowrap to create the horizontal scrolling effect seen in the image */}
                <div className="overflow-x-auto pb-6 -mx-4 md:mx-0">
                    <Carousel>
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} benefit={benefit} />
                        ))}
                    </Carousel>
                </div>

                {/* --- Bottom Section: Before & After --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 md:mt-24 items-start">
                    {/* Left: Text Block */}
                    <div>
                        <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 tracking-wider">
                            Creating the difference
                        </h2>
                        <p className="text-gray-700  text-base md:text-lg">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classica
                        </p>
                    </div>

                    {/* Right: Before & After Images */}
                    <div className="flex justify-center">
                        {/* Image 1: Before */}
                        <div className="relative  w-[400px] h-[400px]">
                            <img
                                src="https://placehold.co/400x400/cccccc/cccccc
"
                                alt="Before treatment"
                                className="w-full h-auto object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    ;(e.target as HTMLImageElement).onerror = null
                                    ;(
                                        e.target as HTMLImageElement
                                    ).src = `https://placehold.co/400x400/f0f0f0/333?text=Before+N/A`
                                }}
                            />
                        </div>

                        {/* Image 2: After */}
                        <div className="relative w-[400px] h-[400px] border  ">
                            <img
                                src="https://placehold.co/400x400/cccccc/cccccc"
                                alt="After treatment"
                                className="w-full h-auto object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    ;(e.target as HTMLImageElement).onerror = null
                                    ;(
                                        e.target as HTMLImageElement
                                    ).src = `https://placehold.co/400x400/f0f0f0/333?text=After+N/A`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicalDifference

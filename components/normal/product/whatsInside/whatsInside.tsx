'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import DottedCarousel from '@/components/common/base/dottedCarousel'

// Sample data for the included items
const includedItems = ['TheraFace Mask Glo device', 'Protective eye shield', 'USB-C charging cable']

const images = [
    'https://placehold.co/450x400/cccccc/cccccc',
    'https://placehold.co/450x400/cccccc/cccccc',
    'https://placehold.co/450x400/cccccc/cccccc',
]

const WhatsInside = () => {
    return (
        <div className="min-h-screen bg-white  font-sans flex justify-center ">
            {/* Main Content Container: centered and constrained */}
            <div className="w-full ">
                {/* --- Top Section: What's Inside --- */}
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 ">What's Inside</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Product Contents Image Block */}
                    <DottedCarousel images={images} />

                    {/* Right: List of Items and Specs CTA */}
                    <div className="border border-black p-8 flex flex-col justify-between">
                        {/* Item List */}
                        <ul className="list-none space-y-3 mb-8">
                            {includedItems.map((item, index) => (
                                <li key={index} className="flex items-start text-lg text-gray-800">
                                    <span className="text-xl mr-3 leading-none">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Specifications CTA */}
                        <button className="flex items-center justify-end space-x-2 text-gray-900 font-semibold text-base transition hover:text-black">
                            <span className="">SPECIFICATIONS</span>
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </button>
                    </div>
                </div>

                {/* --- Bottom Section: Offer Banner --- */}
                <h2 className="text-2xl font-light text-gray-800 mt-20 mb-6 ">OFFER UP FOR GRABS</h2>

                <div className="bg-[#fff9e6]  md:p-12 flex flex-col md:flex-row justify-between  md:items-center  border-yellow-200">
                    {/* Discount Percentage */}
                    <div className="mb-6 w-full ">
                        <span className="text-6xl md:text-8xl  text-black">70% OFF</span>
                    </div>

                    {/* Offer Text */}
                    <div className=" text-lg md:text-xl text-gray-700  md:max-w-md">
                        Get yourself the therapy mask at 70% off the original price if you buy two or more masks in the
                        same purchase
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 md:mt-0 flex flex-col items-center  w-full ">
                        <div className="flex flex-col">
                            <button className="flex items-center space-x-2 text-gray-900  text-lg transition transform hover:text-black active:scale-[0.99]">
                                <span className="text-xl">ADD TO BAG</span>
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </button>
                            <span className="text-sm text-gray-500 mt-1">Add 2 Masks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsInside

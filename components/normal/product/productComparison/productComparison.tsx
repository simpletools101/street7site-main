'use client'

import React from 'react'
import { Check, X } from 'lucide-react'
import ComparisonCheck from './comparisonCheck'

// Sample feature data for comparison
const comparisonFeatures = [
    { name: 'Red LED light therapy', redLight: true, blueLight: false },
    { name: 'Blue LED light therapy', redLight: false, blueLight: false }, // Mismatch for visual fidelity of the image
    { name: 'Infrared LED light therapy', redLight: true, blueLight: false },
    { name: 'Vibration therapy', redLight: true, blueLight: false },
    { name: 'Percussive therapy', redLight: true, blueLight: false },
    { name: 'Microcurrent therapy', redLight: false, blueLight: false },
    { name: 'Heat and cold therapy compatible', redLight: true, blueLight: true },
    { name: 'Portable hand-held design', redLight: true, blueLight: true },
]

const ProductComparison = () => {
    // Styles for the check and X icons
    const CheckIcon = () => <Check className="w-5 h-5 text-black" strokeWidth={3} />
    const XIcon = () => <X className="w-5 h-5 text-black" strokeWidth={2} />

    // Component for a single row in the comparison table
    const ComparisonRow: React.FC<{
        feature: (typeof comparisonFeatures)[0]
    }> = ({ feature }) => (
        <div className={`grid grid-cols-2 text-sm border-t border-gray-200 last:border-b`}>
            {/* Red Light Mask Feature Status */}
            <div
                className={`p-4 flex items-center justify-between transition duration-200 ${
                    feature.redLight ? 'bg-[#fff9e6]' : 'bg-white'
                }`}
            >
                <span className="text-gray-700">{feature.name}</span>
                <div className="w-6 h-6 flex items-center justify-center">
                    {feature.redLight ? <CheckIcon /> : <XIcon />}
                </div>
            </div>

            {/* Blue Light Mask Feature Status */}
            <div
                className={`p-4 flex items-center justify-between transition duration-200 ${
                    feature.blueLight ? 'bg-[#fff9e6]' : 'bg-white'
                }`}
            >
                <span className="text-gray-700 md:hidden">{feature.name}</span>
                <div className="w-6 h-6 flex items-center justify-center ml-auto">
                    {feature.blueLight ? <CheckIcon /> : <XIcon />}
                </div>
            </div>
        </div>
    )

    // Component for the header row separating the image blocks from the table
    const HeaderRow = () => (
        <div className="grid grid-cols-2 text-sm border-b border-gray-900 bg-white">
            <div className="p-4 flex flex-col justify-between">
                <h3 className="font-bold text-base text-gray-800">Red Light Therapy Mask</h3>
                <span className="text-xl font-extrabold text-gray-900">$245</span>
            </div>
            <div className="p-4 flex flex-col justify-between">
                <h3 className="font-bold text-base text-gray-800">Blue Light Tharam Mask</h3>
                <span className="text-xl font-extrabold text-gray-900">$545</span>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen mt-20 bg-white font-sans flex justify-center ">
            {/* Main Grid Container: Constrained width, responsive columns */}
            <div className="w-full    grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Left Column: Title and Description (1/3 width) --- */}
                <div className="lg:col-span-1 space-y-6">
                    <p className="text-lg font-semibold tracking-widest text-black mt-6 uppercase">COMPARE</p>

                    {/* Main Title - Split line to match the visual style */}
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

                    {/* Description */}
                    <p className="text-black text-xl leading-relaxed ">
                        You have specific needs, and we have tailored products designed to meet them. Find the perfect
                        match so you get exactly what you're looking for.
                    </p>
                </div>

                {/* --- Right Columns: Comparison Table (2/3 width) --- */}
                <div className="lg:col-span-2  border border-gray-200 rounded-lg overflow-hidden">
                    {/* Product Image Header */}
                    <div className="grid grid-cols-2 gap-2 bg-gray-50">
                        {/* Red Light Mask Image */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://placehold.co/600x400/cccccc/cccccc"
                                alt="Red Light Therapy Mask in use"
                                className="w-full h-full object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    ;(e.target as HTMLImageElement).onerror = null
                                    ;(
                                        e.target as HTMLImageElement
                                    ).src = `https://placehold.co/600x400/fff9e6/333?text=Image+N/A`
                                }}
                            />
                        </div>
                        {/* Blue Light Mask Image */}
                        <div className="relative h-64  overflow-hidden">
                            <img
                                src="https://placehold.co/600x400/cccccc/cccccc"
                                alt="Blue Light Therapy Mask in use"
                                className="w-full h-full object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    ;(e.target as HTMLImageElement).onerror = null
                                    ;(
                                        e.target as HTMLImageElement
                                    ).src = `https://placehold.co/600x400/fff9e6/333?text=Image+N/A`
                                }}
                            />
                        </div>
                    </div>

                    {/* Price Header Row */}
                    <div className="grid grid-cols-2 text-sm border-t border-gray-200 h-14 gap-2 ">
                        <div className="flex justify-between items-center  bg-gray-200 p-4">
                            <span className="font-light text-xl text-black">Red Light Therapy Mask</span>
                            <span className="font-semibold text-xl text-black">$245</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-200 p-4">
                            <span className="font-light text-xl text-black">Blue Light Tharam Mask</span>
                            <span className="font-semibold text-xl text-black">$545</span>
                        </div>
                    </div>

                    {/* Comparison Features (Hidden column for feature name on desktop, shown on mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
                        {/* Red Light Column */}
                        <div>
                            <div>
                                {comparisonFeatures.map((feature, index) => (
                                    <div
                                        style={{ backgroundColor: feature.redLight ? '#fee68575' : '#d4d4d44a' }}
                                        key={index}
                                        className="flex items-center text-lg font-light gap-4"
                                    >
                                        <ComparisonCheck isChecked={feature.redLight} />
                                        <span>{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Blue Light Column */}
                        <div>
                            <div>
                                {comparisonFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        style={{ backgroundColor: feature.blueLight ? '#fee68575' : '#d4d4d44a' }}
                                        className="flex items-center text-lg font-light gap-4"
                                    >
                                        <ComparisonCheck isChecked={feature.blueLight} />
                                        <span>{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComparison

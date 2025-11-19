"use client"
import React from 'react'
import { ArrowRight } from 'lucide-react'

// Define the custom gold color for consistency
const ACCENT_COLOR = '#D4A017'

// Reusable Offer Card Component
interface OfferCardProps {
    imageSrc: string
    imageAlt: string
    offerType: 'buyOneGetOne' | 'percentageOff'
    title: string
    description: string
    linkText: string
    linkHref: string
}

const OfferCard: React.FC<OfferCardProps> = ({
    imageSrc,
    imageAlt,
    offerType,
    title,
    description,
    linkText,
    linkHref,
}) => {
    const isBuyOneGetOne = offerType === 'buyOneGetOne'
    
    return (
        <div className="flex flex-col sm:flex-row w-full bg-white overflow-hidden">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:min-h-[350px] bg-gray-100 flex items-center justify-center">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        ;(e.target as HTMLImageElement).onerror = null
                        ;(e.target as HTMLImageElement).src = 'https://placehold.co/400x400/cccccc/333333?text=Image'
                    }}
                />
            </div>
            
            {/* Text Section */}
            <div
                className="w-full sm:w-1/2 p-6 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-center"
                style={{ backgroundColor: isBuyOneGetOne ? 'transparent' : '#222222' }}
            >
                <h3
                    className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 sm:mb-4"
                    style={{ color: isBuyOneGetOne ? '#000000' : ACCENT_COLOR }}
                >
                    {title}
                </h3>
                <p 
                    className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6" 
                    style={{ color: isBuyOneGetOne ? '#666666' : '#BBBBBB' }}
                >
                    {description}
                </p>
                <a
                    href={linkHref}
                    className="flex items-center text-xs sm:text-sm font-semibold group"
                    style={{ color: ACCENT_COLOR }}
                >
                    {linkText}
                    <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </a>
            </div>
        </div>
    )
}

// Main App Component
export default function OffersItemSection() {
    return (
        <div className="min-h-screen bg-white font-sans py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-base sm:text-lg lg:text-xl font-medium tracking-wider mb-8 sm:mb-10 lg:mb-12 text-gray-800 uppercase text-center lg:text-left">
                    EXPLORE OFFERS OF THE WEEK
                </h2>
                
                {/* Grid of Offer Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                    {/* Row 1, Card 1: Buy One Get One */}
                    <OfferCard
                        imageSrc="https://placehold.co/600x400/EFEFEF/333333?text=Woman+Steaming+Clothes"
                        imageAlt="Woman steaming clothes"
                        offerType="buyOneGetOne"
                        title="Buy one get one at 20% off"
                        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
                        linkText="SHOP NOW"
                        linkHref="#"
                    />
                    
                    {/* Row 1, Card 2: Percentage Off */}
                    <OfferCard
                        imageSrc="https://placehold.co/600x400/EFEFEF/333333?text=Man+with+Green+Bag"
                        imageAlt="Man holding a green bag"
                        offerType="percentageOff"
                        title="70% off till 17th May 2026"
                        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
                        linkText="SHOP NOW"
                        linkHref="#"
                    />
                    
                    {/* Row 2, Card 1: Buy One Get One */}
                    <OfferCard
                        imageSrc="https://placehold.co/600x400/EFEFEF/333333?text=Woman+in+Bodysuit"
                        imageAlt="Woman in a bodysuit"
                        offerType="buyOneGetOne"
                        title="Buy one get one at 20% off"
                        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
                        linkText="SHOP NOW"
                        linkHref="#"
                    />
                    
                    {/* Row 2, Card 2: Percentage Off */}
                    <OfferCard
                        imageSrc="https://placehold.co/600x400/EFEFEF/333333?text=Woman+with+LED+Mask"
                        imageAlt="Woman with an LED beauty mask"
                        offerType="percentageOff"
                        title="70% off till 17th May 2026"
                        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
                        linkText="SHOP NOW"
                        linkHref="#"
                    />
                </div>
            </div>
        </div>
    )
}
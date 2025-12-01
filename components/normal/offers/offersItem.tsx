"use client"

import React, { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Define the custom gold color for consistency
const ACCENT_COLOR = '#D4A017'

// Animation variants
const headerVariants:Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}

const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
}

const cardVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}

const imageVariants:Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: 'easeOut'
        }
    }
}

const textContentVariants:Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.2
        }
    }
}

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
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })
    const isBuyOneGetOne = offerType === 'buyOneGetOne'
    
    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            className="flex flex-col sm:flex-row w-full bg-white overflow-hidden"
        >
            {/* Image Section */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:min-h-[350px] bg-gray-100 flex items-center justify-center overflow-hidden"
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        ;(e.target as HTMLImageElement).onerror = null
                        ;(e.target as HTMLImageElement).src = 'https://placehold.co/400x400/cccccc/333333?text=Image'
                    }}
                />
            </motion.div>
            
            {/* Text Section */}
            <motion.div
                variants={textContentVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="w-full sm:w-1/2 p-6 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-center"
                style={{ backgroundColor : '#222222' }}
            >
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl text-neutral-100 sm:text-2xl tb lg:text-4xl leading-normal mb-3 sm:mb-4"
                    
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xs text-neutral-300 sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6" 
                    
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href={linkHref}
                        className="flex items-center text-xs sm:text-sm font-semibold group"
                        style={{ color: ACCENT_COLOR }}
                    >
                        {linkText}
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowRight
                                size={16}
                                className="ml-2"
                            />
                        </motion.div>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

// Main App Component
export default function OffersItemSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <div ref={sectionRef} className="min-h-screen bg-white font-sans py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.h2
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="text-base sm:text-lg lg:text-xl font-medium tracking-wider mb-8 sm:mb-10 lg:mb-12 text-gray-800 uppercase text-center lg:text-left"
                >
                    EXPLORE OFFERS OF THE WEEK
                </motion.h2>
                
                {/* Grid of Offer Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8"
                >
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
                </motion.div>
            </div>
        </div>
    )
}
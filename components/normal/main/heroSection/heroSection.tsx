"use client"
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image' // Import the Image component

// Note: You must provide a valid image path for the 'hero.jpg' file.
// For Next.js < 13.4, you might need to use a regular <img> tag or configure next.config.js for external images.

export default function HeroSection() {
    return (
        <section className="flex h-[300px] sm:h-[350px] lg:h-[450px] items-center relative overflow-hidden">
            
            {/* Background Image Container with Overlay */}
            <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
            >
                {/* Image matching the screenshot's aesthetic */}
                <Image
                    src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg" // **REPLACE THIS WITH YOUR ACTUAL IMAGE PATH**
                    alt="Street style fashion collection"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Subtle Dark Overlay to ensure text visibility */}
                <div className="absolute inset-0 bg-black/40" /> 
            </motion.div>
            
            {/* Content container - Aligning text to the left and setting text color to white */}
            <div className="flex flex-col px-6 sm:px-12 lg:px-24 max-w-full sm:max-w-xl lg:max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6 h-fit absolute z-10 text-white">
                
                {/* Title with staggered fade-in and text shadow */}
                <motion.h1
                    className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl " // Larger, bolder text with shadow
                    aria-label="Shop Street7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Shop Street 7
                </motion.h1>
                
                {/* Paragraph is removed as the screenshot's main title is the primary element. 
                    If you must keep it, style it like this: */}
                <motion.p 
                    className="text-base sm:text-lg leading-snug drop-shadow-md" // Slightly larger and shadowed text
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Discover the latest street-style trends. Modern essentials for your everyday look.
                </motion.p>
                
                {/* CTA with dark background, white text, and delayed entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    <Link
                        href={'/product/red-light-therapy-mask'}
                        aria-label="Shop Now"
                        // Apply dark button styles
                        className="flex items-center justify-center w-fit h-12 px-6 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-medium group text-sm sm:text-base"
                    >
                        <span className="uppercase tracking-widest">
                            Shop Now
                        </span>
                        <MoveRight className="w-5 h-5 ml-3" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
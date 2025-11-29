'use client'

import React, { useRef } from 'react'
import { motion, useInView, Variant, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import currentLogo from '@/assets/Layer 2-1.png'

// Animation variants for footer sections
const containerVariants:Variants  = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const columnVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const ctaVariants:Variants  = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

const listItemVariants:Variants  = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
}

const bottomBarVariants:Variants  = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.5,
        },
    },
}

const FooterItem: React.FC = () => {
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true, margin: '-50px' })

    return (
        <footer ref={footerRef} className="w-full bg-white  mt-8 sm:mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-col lg:flex-row gap-8 lg:gap-0"
                >
                    {/* Links Container */}
                    <div className="flex flex-col sm:flex-row flex-1 gap-8 sm:gap-12 lg:gap-20 xl:gap-30">
                        {/* HELP Section */}
                        <motion.div variants={columnVariants} className="flex-1 sm:flex-none">
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
                            >
                                HELP
                            </motion.h3>
                            <motion.ul variants={containerVariants} className="space-y-2 sm:space-y-3">
                                {[
                                    { href: '/how-we-ship', text: 'Shipping' },
                                    { href: '/faq', text: 'FAQ' },
                                    { href: '#', text: 'Payment' },
                                    { href: '/inquiries', text: 'Make Inquiries' },
                                    { href: '/profile/wishlist', text: 'Wishlist' },
                                    { href: '/return-policy', text: 'Return Policy' },
                                ].map((link, index) => (
                                    <motion.li key={index} variants={listItemVariants}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors inline-block"
                                        >
                                            {link.text}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* QUICK LINKS Section */}
                        <motion.div variants={columnVariants} className="flex-1 sm:flex-none">
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
                            >
                                QUICK LINKS
                            </motion.h3>
                            <motion.ul variants={containerVariants} className="space-y-2 sm:space-y-3">
                                {[
                                    { href: '/offers', text: 'Explore offers' },
                                    { href: '#', text: 'Shop' },
                                    { href: '/about', text: 'About Street 7' },
                                    { href: '/inquiries', text: 'Contact us' },
                                    { href: '#', text: 'Terms & Conditions' },
                                ].map((link, index) => (
                                    <motion.li key={index} variants={listItemVariants}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors inline-block"
                                        >
                                            {link.text}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* MY ACCOUNT Section */}
                        <motion.div variants={columnVariants} className="flex-1 sm:flex-none">
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
                            >
                                MY ACCOUNT
                            </motion.h3>
                            <motion.ul variants={containerVariants} className="space-y-2 sm:space-y-3">
                                {[
                                    { href: '/login', text: 'Sign In' },
                                    { href: '/register', text: 'Register' },
                                ].map((link, index) => (
                                    <motion.li key={index} variants={listItemVariants}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors inline-block"
                                        >
                                            {link.text}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <motion.div variants={ctaVariants} className="w-full lg:w-auto">
                        <div className="min-h-[200px] sm:min-h-[250px] lg:h-[250px] p-6 sm:p-8 lg:p-12 w-full lg:w-[400px] xl:w-[450px] flex flex-col justify-center text-white bg-neutral-800">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link href={'/'} className="mb-4 inline-block">
                                    <img
                                        src={currentLogo.src}
                                        width={200}
                                        height={200}
                                        className="w-40 sm:w-52 lg:w-[250px] h-auto"
                                        alt="Street7 Logo"
                                    />
                                </Link>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed"
                            >
                                Become a member of Street7 client community and get exclusive deals and offers on all
                                our products!
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <a
                                    href="/register"
                                    className="flex items-center gap-2 text-white hover:gap-4 transition-all duration-300 group"
                                >
                                    <span className="text-xs sm:text-sm font-medium tracking-wider">
                                        JOIN THE COMMUNITY
                                    </span>
                                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Copyright Section */}
                <motion.div
                    variants={bottomBarVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center md:text-left"
                >
                    <p>The content of this site is copyright-protected and is the property of Street7</p>
                    <p>Des. Sleekcom Agency - 2025</p>
                </motion.div>
            </div>
        </footer>
    )
}

export default FooterItem

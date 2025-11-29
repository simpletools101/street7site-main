'use client'

import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 lg:px-16">
            <div className="w-full max-w-4xl mx-auto text-center">
                {/* 404 Animation */}
                <motion.div
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className='text-[120px] sm:text-[180px] lg:text-[240px] font-bold leading-none text-gray-200'>404</h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    className="space-y-4 sm:space-y-6 mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wide">
                        Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Oops! The page you're looking for seems to have wandered off. Don't worry, even the best explorers get lost sometimes.
                    </p>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    className="flex justify-center mb-10 sm:mb-12"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 flex items-center justify-center">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-gray-700" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {/* Go Home Button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors"
                        >
                            <Home className="w-5 h-5" />
                            <span>GO HOME</span>
                        </Link>
                    </motion.div>

                    {/* Go Back Button */}
                    <motion.button
                        onClick={() => router.back()}
                        className="flex items-center gap-3 px-8 py-4 border-2 border-black text-black font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>GO BACK</span>
                    </motion.button>
                </motion.div>

                {/* Popular Links */}
                <motion.div
                    className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-sm text-gray-600 mb-6">Or explore these popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: 'Shop', href: '/shop' },
                            { name: 'Explore', href: '/explore' },
                            { name: 'Learn', href: '/learn' },
                            { name: 'Wishlist', href: '/profile/wishlist' },
                        ].map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm sm:text-base text-gray-700 hover:text-black font-medium underline underline-offset-4 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

              
              
            </div>
        </div>
    )
}
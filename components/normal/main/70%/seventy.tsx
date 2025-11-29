"use client"

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SeventyOff() {
    return (
        <section className="w-full min-h-[550px] lg:h-[550px] border-b border-[#fec000] py-8 lg:py-0 lg:mt-14">
            <motion.h2 
                className="text-base sm:text-lg uppercase font-normal text-center lg:text-left"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Explore the best offers on the market
            </motion.h2>
            
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-5 items-center mt-8 lg:mt-12">
                {/* Percentage Section */}
                <motion.div 
                    className="flex flex-col space-y-0 text-center lg:text-left"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <motion.h2 
                        className="text-7xl sm:text-8xl lg:text-[140px] text-[#fec000] leading-none"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        70%
                    </motion.h2>
                    <h2 className="text-7xl sm:text-8xl lg:text-[140px] leading-none">OFF</h2>
                </motion.div>
                
                {/* Description Section */}
                <motion.div 
                    className="w-full max-w-[400px] text-center lg:text-left order-last lg:order-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <span className="text-sm sm:text-base">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </span>
                </motion.div>
                
                {/* Image Section */}
                <motion.div 
                    className="relative w-full sm:w-auto"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <div className="bg-neutral-200 w-full sm:w-[300px] lg:w-[350px] h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center relative mx-auto overflow-hidden group">
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image 
                                src={'https://cdn.stocksnap.io/img-thumbs/960w/woman-skin_QLAKLZ0LML.jpg'} 
                                alt="70% offer" 
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <Link
                            href="/shop"
                            aria-label="Shop Now"
                            className="flex items-center gap-2 bottom-4 sm:bottom-6 absolute font-normal group"
                        >
                            <motion.span 
                                className="uppercase text-sm sm:text-base"
                                whileHover={{ letterSpacing: "0.1em" }}
                                transition={{ duration: 0.3 }}
                            >
                                Shop Now
                            </motion.span>
                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MoveRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
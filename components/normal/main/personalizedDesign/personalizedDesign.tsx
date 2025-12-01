"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function PersonalizedDesign() {
    return (
        <section className="min-h-[550px] lg:h-[550px] border-b border-b-amber-300">
            <motion.h1 
                className="text-2xl mt-6 tb sm:text-2xl font-light text-center lg:text-left lg:text-3xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ letterSpacing: "0.05em" }}
            >
                Personalized Designs
            </motion.h1>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:h-[350px] border border-green-50 gap-0 mt-8 lg:mt-10">
                <motion.div 
                    className="bg-neutral-200 relative min-h-[250px] lg:min-h-0 overflow-hidden group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src={'https://images.pexels.com/photos/354962/pexels-photo-354962.jpeg'}
                            fill
                            alt="Personalized Design"
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="flex items-center justify-center lg:justify-start bg-[#fee19b] py-8 lg:py-0 px-6 sm:px-12 lg:px-18"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <div className="space-y-3 sm:space-y-4 w-full max-w-md lg:max-w-sm">
                        <motion.h2 
                            className="text-3xl tb tracking-wide leading-normal sm:text-4xl lg:text-5xl text-center lg:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            whileHover={{ color: "#b45309" }}
                        >
                            Designed, Only for you
                        </motion.h2>
                        <motion.p 
                            className="text-sm sm:text-base text-center lg:text-left opacity-90"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                        >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classic Latin Literature from 45 BC making it over 2000 years old.
                        </motion.p>

                        <Link
                            href={'/product/red-light-therapy-mask'}
                            aria-label="Shop Now Personalized Designs"
                            className="flex items-center justify-center w-fit h-11 px-5 mt-6 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-medium group text-sm"
                        >
                            <span className="uppercase tracking-widest">
                                SHOP NOW
                            </span>
                            <MoveRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

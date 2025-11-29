'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

// Animation variants for the section title
const titleVariants:Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

// Animation variants for the container
const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
}

// Animation variants for individual item sections
const itemVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

// Animation for image
const imageVariants:Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

// Animation for content box
const contentBoxVariants:Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.2,
        },
    },
}

interface IWhatsNewProps {
    imgLink: string
    title: string
    content: string
    pageLink: string
}

function WhatsNewItem(props: IWhatsNewProps) {
    const itemRef = useRef(null)
    const isInView = useInView(itemRef, { once: true, margin: '-50px' })

    return (
        <motion.section ref={itemRef} variants={itemVariants} className="w-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="uppercase text-base sm:text-lg text-center lg:text-left"
            >
                {props.title}
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 mt-4 lg:mt-2">
                {/* Image Section */}
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="w-full lg:flex-1 relative bg-neutral-200 h-[300px] sm:h-[400px] lg:h-[550px] overflow-hidden"
                >
                    <Image alt={props.title} fill src={props.imgLink} className="object-cover" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    variants={contentBoxVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200 w-full lg:w-[300px] min-h-[250px] sm:min-h-[300px] lg:h-[550px] flex flex-col justify-between relative px-6 sm:px-8 lg:px-10 py-8 lg:py-10"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm sm:text-base leading-relaxed"
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link
                            href="/shop"
                            aria-label="Shop Now"
                            className="flex items-center gap-2 font-normal hover:gap-3 transition-all mt-6 lg:mt-0 group"
                        >
                            <span className="uppercase text-sm sm:text-base">Shop Now</span>
                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <MoveRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default function WhatsNewSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} className="w-full py-8 lg:py-0">
            <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="mt-8 lg:mt-14 text-3xl sm:text-4xl font-light text-center lg:text-left"
            >
                What's New
            </motion.h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="space-y-8 sm:space-y-10 lg:space-y-12 mt-6 sm:mt-8 lg:mt-10"
            >
                <WhatsNewItem content="" imgLink="https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg" pageLink="" title="Redlight Therapy Mask" />
                <WhatsNewItem content="" imgLink="https://images.pexels.com/photos/10558194/pexels-photo-10558194.jpeg" pageLink="" title="Nekesa Magic 1 Stemer" />
            </motion.div>
        </section>
    )
}

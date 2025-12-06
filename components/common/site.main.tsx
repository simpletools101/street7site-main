"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import FooterItem from './footer'
import HeaderItem from './header'
import SplashScreen from './splashscreen'

interface ISiteMainProps {
    children: React.ReactNode
}

export default function SiteMain({ children }: ISiteMainProps) {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen w-full max-w-[1440px] mx-auto">
            {showSplash ? (
                <SplashScreen />
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <HeaderItem />

                    <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] mx-auto">
                        {children}
                    </div>

                    <FooterItem />
                </motion.div>
            )}
        </div>
    )
}

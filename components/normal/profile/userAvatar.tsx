'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

interface AvatarProps {
    size?: number // optional size in pixels
}

export default function Avatar({  size = 40 }: AvatarProps) {
    const width = size
    const height = size

    return (
        <motion.div
            className={`rounded-full bg-black text-[#fec000] flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 overflow-hidden`}
            style={{ width, height }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'backOut', delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
        >
            <User size={size * 0.4} className="sm:w-5 sm:h-5" />
        </motion.div>
    )
}

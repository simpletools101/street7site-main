import { motion } from 'framer-motion'
import Image from 'next/image'
import ProductLogo from '@/assets/Logomark-coloured-black.png'

export default function SplashScreen() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden">

            {/* Typewriter-like logo reveal */}
            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <Image
                    src={ProductLogo}
                    alt="Logo"
                    width={180}
                    height={180}
                    className="select-none"
                />
            </motion.div>

            {/* Grow + Fade Out */}
            <motion.div
                className="absolute"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.25, opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            />
        </div>
    )
}

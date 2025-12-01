import React from 'react'
import { ArrowRight } from 'lucide-react'
import PatternImage from '@/assets/Street 7 Pattern-2.png'

// Define the custom gold color
const ACCENT_COLOR = '#D4A017'

const AboutusCT = () => {
    // Custom style to simulate the textured, striped yellow/orange banner
    const bannerStyle: React.CSSProperties = {
        height: '80px',
        // Repeating linear gradient to simulate the abstract yellow pattern
        backgroundImage: 'repeating-linear-gradient(60deg, #ffb700, #ffb700 30px, #fbd300 30px, #fbd300 60px)',
    }

    const bannerStyleMobile: React.CSSProperties = {
        height: '60px',
        backgroundImage: 'repeating-linear-gradient(60deg, #ffb700, #ffb700 20px, #fbd300 20px, #fbd300 40px)',
    }

    const bodyText: string[] = [
        "Street7 was born from the idea that lifestyle is more than what you wear — it's what you radiate. In a world that moves fast, where people scroll quicker than they breathe, we wanted to create something that slows the eye, evokes feeling, and reminds you that your daily life is already a story worth dressing up for.",
        "We're not just selling products; we're curating an emotional experience — a mood board of what it means to live beautifully, confidently, and unapologetically. From gadgets that elevate your everyday flow, to fashion that draws attention, to beauty essentials that make confidence a ritual — every piece we select reflects what it feels like to own your space. Street7 exists for the modern woman who moves with purpose — the one who sees her mirror as a reflection, not validation. She's bold enough to blend elegance with energy, tech with texture, street with sophistication. She doesn't chase trends — she creates moments.",
        'Street7 is meant to be more than an online store. We aim to become a feeling you carry, a space that amplifies your lifestyle, and a brand that celebrates the intersection of beauty, function, and emotion.',
        "Our goal is simple: to make every woman feel powerful in her rhythm — whether she's charging her phone, completing her skincare, or entering a room that wasn't ready for her energy. Street7 is where aesthetic meets authenticity, style meets substance, and emotion leads before design follows. We don't just sell lifestyle; we define it. One product. One vibe. One woman at a time.",
    ]

    return (
        <div className="min-h-screen bg-white font-sans flex justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            {/* Main Content Container: centered and constrained */}
            <div className="w-full max-w-4xl">
                {/* Title: Large, heavy, and spaced, mimicking the image's display font */}
                <h1 className="text-3xl sm:text-3xl tb md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 text-left text-gray-900 leading-tight">
                    About Street7
                </h1>

                {/* Banner Pattern */}
                <div className="w-full h-[90px] mb-5">
                    <img src={PatternImage.src} className="h-[90px] w-full object-cover" />
                </div>

                {/* Body Text Section: dark, readable, with ample vertical space between paragraphs */}
                <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-6 md:space-y-8">
                    {bodyText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Call to Action Button: Black background, yellow text, with an arrow */}
                <button
                    className="w-full mt-6 sm:mt-8 flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]"
                    style={{ backgroundColor: '#000000' }}
                >
                    <span className="text-base sm:text-lg font-semibold mr-2" style={{ color: ACCENT_COLOR }}>
                        Contact us
                    </span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" style={{ color: ACCENT_COLOR }} />
                </button>
            </div>
        </div>
    )
}

export default AboutusCT

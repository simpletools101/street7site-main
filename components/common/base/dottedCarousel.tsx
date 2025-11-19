'use client'
import { useState, useEffect } from 'react'

interface DottedCarouselProps {
    images: string[]
    interval?: number // auto slide speed in ms
}

export default function DottedCarousel({ images, interval = 3000 }: DottedCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [images.length, interval])

    return (
        <div className="bg-[#fcf9f0] p-6 flex flex-col justify-center items-center">
            <img
                src={images[currentIndex]}
                alt="carousel item"
                className="w-full h-auto object-contain max-w-sm transition-all duration-500"
                onError={(e) => {
                    ;(e.target as HTMLImageElement).onerror = null
                    ;(e.target as HTMLImageElement).src = 'https://placehold.co/450x300/fcf9f0/333?text=Not+Available'
                }}
            />

            {/* Dots */}
            <div className="flex space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === currentIndex ? 'bg-black' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

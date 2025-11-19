'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
    children: React.ReactNode[]
}

export default function Carousel({ children }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 < children.length ? prev + 1 : 0
        ) // loops back to start
    }

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 >= 0 ? prev - 1 : children.length - 1
        ) // loops backward
    }

    // Auto Slide
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [children.length])

    // Calculate slide distance based on item width
    const getTranslateAmount = () => {
        if (!itemRef.current) return 0
        return itemRef.current.offsetWidth + 16 // 16 = space-x-4 gap approx
    }

    return (
        <div className="relative w-full overflow-hidden">
            {/* Buttons */}
            <div className="w-full flex items-center justify-end mb-3">
                <div className="flex space-x-4">
                    <button onClick={prevSlide} className="border p-2 rounded-full">
                        <ChevronLeft className="text-black" />
                    </button>

                    <button onClick={nextSlide} className="border p-2 rounded-full">
                        <ChevronRight className="text-black" />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex transition-transform duration-500 ease-out space-x-4"
                style={{
                    transform: `translateX(-${currentIndex * getTranslateAmount()}px)`
                }}
            >
                {children.map((child, index) => (
                    <div key={index} ref={index === 0 ? itemRef : null} className="shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

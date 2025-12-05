'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
    children: React.ReactNode[]
}

export default function Carousel({ children }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollByCard = (direction: 'left' | 'right') => {
        const container = scrollRef.current
        if (!container) return

        const card = container.querySelector('.carousel-card') as HTMLElement
        if (!card) return

        const cardWidth = card.offsetWidth + 16 // gap = 4

        container.scrollBy({
            left: direction === 'right' ? cardWidth : -cardWidth,
            behavior: 'smooth',
        })
    }

    return (
        <div className="relative w-full">
            {/* Buttons */}
            <div className="w-full flex items-center justify-end mb-3">
                <div className="flex space-x-4">
                    <button
                        onClick={() => scrollByCard('left')}
                        className="border p-2 rounded-full"
                    >
                        <ChevronLeft className="text-black" />
                    </button>

                    <button
                        onClick={() => scrollByCard('right')}
                        className="border p-2 rounded-full"
                    >
                        <ChevronRight className="text-black" />
                    </button>
                </div>
            </div>

            {/* Scrollable row */}
            <div
                ref={scrollRef}
                className="
                    flex
                    gap-4
                    overflow-x-auto
                    scrollbar-hide
                    scroll-smooth
                    snap-x
                    snap-mandatory
                "
            >
                {children.map((child, i) => (
                    <div
                        key={i}
                        className="carousel-card snap-start shrink-0"
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

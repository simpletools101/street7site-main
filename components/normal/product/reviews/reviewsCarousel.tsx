'use client'
import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface Review {
    id: number
    title: string
    rating: number
    date: string
    text: string
}
// Function to render rating stars
const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating
        stars.push(
            <Star
                key={i}
                className={`w-5 h-5 transition-colors duration-150 ${
                    isFilled ? 'text-gray-800 fill-current' : 'text-gray-300'
                }`}
                strokeWidth={1.5}
            />
        )
    }
    return <div className="flex space-x-0.5">{stars}</div>
}

const reviews = [
    {
        id: 1,
        title: 'GOOD BUT BULKY',
        rating: 3,
        date: '10/09/2025',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece roots in a piece roots in a',
    },
 
]

const ReviewCard: React.FC<{ review: (typeof reviews)[0] }> = ({ review }) => (
    <div className="border border-black p-6 md:p-8 rounded-none">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-900 tracking-wider">{review.title}</h3>
        </div>

        <div className="flex justify-between items-center mb-4">
            {renderStars(review.rating)}
            <span className="text-sm text-gray-500">{review.date}</span>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">{review.text}</p>
    </div>
)

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ALWAYS show 4 per slide (no responsive logic this time)
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  // OPTIONAL auto cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = currentIndex * itemsPerSlide;
  const visibleReviews = reviews.slice(start, start + itemsPerSlide);

  return (
    <div className="w-full">
      {/* The 4 review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Dots */}
      <div className="mt-12">
        <hr className="border-t border-gray-300 my-8" />

        <div className="flex justify-center space-x-3 pt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
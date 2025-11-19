'use client'

import React, { useState } from 'react'
import { Heart, ShoppingBag, Star, ArrowRight } from 'lucide-react'

// Sample product data
const product = {
    name: 'Red Light Therapy Mask',
    price: 245,
    description:
        'Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.',
    rating: 3.5,
    reviewCount: 235,
    colors: [
        { name: 'Red', hex: '#E74C3C' },
        { name: 'Purple', hex: '#9B59B6' },
        { name: 'Pink', hex: '#F06292' },
        { name: 'Yellow', hex: '#FAD74B' },
        { name: 'Gray', hex: '#CCCCCC' },
        { name: 'Dark Gray', hex: '#555555' },
    ],
    awards: [{ title: 'allure', year: '2024', text: 'BEST OF BEAUTY', type: 'AWARD WINNER' }],
}

const ProductDetailPart = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0].hex)

    // --- Components ---

    // Reusable component for the award badge
    const AwardBadge: React.FC<{ award: (typeof product.awards)[0] }> = ({ award }) => (
        <div className="absolute top-4 right-4 z-10 w-24 h-24 flex flex-col items-center justify-center p-1 border-4 border-red-600 rounded-full bg-white shadow-lg text-center transform rotate-12">
            <div className="text-xs font-black text-red-600 uppercase leading-none">{award.text}</div>
            <div className="text-xs font-extrabold text-red-600 uppercase my-0.5">{award.title}</div>
            <div className="text-[10px] text-gray-700 font-bold">{award.year}</div>
            <div className="text-[10px] text-red-600 font-bold uppercase leading-none">{award.type}</div>
        </div>
    )

    // Function to render rating stars
    const renderStars = (rating: number) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            let color = 'text-gray-300'
            if (rating >= i) {
                color = 'text-gray-800' // Full star
            } else if (rating > i - 1 && rating < i) {
                // Since we can't easily do half-stars with Tailwind/Lucide,
                // we'll just use the standard full star to represent the value visually close to the image.
                color = 'text-gray-800'
            }
            stars.push(
                <Star
                    key={i}
                    className={`w-5 h-5 fill-current transition-colors duration-150 ${color}`}
                    strokeWidth={1}
                />
            )
        }
        return <div className="flex space-x-0.5">{stars}</div>
    }

    return (
        <div className="min-h-screen  bg-white  flex justify-center py-8">
            {/* Main Grid Container: Constrained width, responsive columns */}
            <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* --- Left Column: Images --- */}
                <div className="space-y-6">
                    {/* Main Product Image (Top Left Block) */}
                    <div className="border relative overflow-hidden">
                        {/* Award Badge */}
                        <img
                            src="https://placehold.co/400x400/cccccc/cccccc

"
                            alt={product.name}
                            className="w-full h-auto object-contain transform hover:scale-[1.01] transition-transform duration-500"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                ;(e.target as HTMLImageElement).onerror = null
                                ;(e.target as HTMLImageElement).src = `https://placehold.co/400x400/cccccc/cccccc
`
                            }}
                        />
                    </div>

                    {/* Secondary Image (Bottom Left Block) */}
                    <div className="bg-[#fcf9f0]  border">
                        <img
                            src="https://placehold.co/400x400/cccccc/cccccc
"
                            alt="Mask close up"
                            className="w-full h-auto object-contain"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                ;(e.target as HTMLImageElement).onerror = null
                                ;(
                                    e.target as HTMLImageElement
                                ).src = `https://placehold.co/400x400/cccccc/cccccc
`
                            }}
                        />
                    </div>
                </div>

                {/* --- Right Column: Details and CTA --- */}
                <div className="space-y-6">
                    {/* Title and Description */}
                    <div>
                        <h1 className="text-4xl md:text-5xl max-w-sm text-gray-900 mb-6">{product.name}</h1>
                        <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Feature Badges */}
                    <div className="flex flex-wrap gap-2 pt-4">
                        {['Clinically Proven', 'Dermatologist approved', 'FDA Approved'].map((badge) => (
                            <span
                                key={badge}
                                className="px-4 py-2 text-sm text-black border border-black  bg-white hover:bg-gray-50 transition"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Color Selector */}
                    <div className="pt-4">
                        <p className="font-medium text-gray-800 mb-3">Available colours</p>
                        <div className="flex space-x-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color.hex}
                                    onClick={() => setSelectedColor(color.hex)}
                                    className={`w-7 h-7 rounded-full border-2 transition-all duration-200`}
                                    style={{
                                        backgroundColor: color.hex,
                                        borderColor: selectedColor === color.hex ? '#333' : 'transparent',
                                        transform: selectedColor === color.hex ? 'scale(1.1)' : 'scale(1)',
                                        boxShadow: selectedColor === color.hex ? '0 0 0 2px #ffb700' : 'none',
                                    }}
                                    aria-label={`Select color ${color.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center space-x-4 pt-4">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-600">{product.reviewCount} Reviews</span>
                    </div>

                    {/* Price and Add to Bag CTA */}
                    <div className="mt-8">
                        {/* Price Box */}
                        <div className="flex justify-between items-center p-4 bg-neutral-100 border-b border-gray-200">
                            <span className="font-semibold text-gray-800">{product.name}</span>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                <span className="text-sm text-black">Shipping Inclusive</span>
                            </div>
                        </div>

                        {/* CTA Button Row */}
                        <div className="flex justify-between p-8 h-20 mt-0 bg-[#fcf59e] items-center">
                            {/* Wishlist Button */}
                            <button
                                className=" flex items-center justify-center  border border-gray-600 rounded-full h-12 w-12 transition hover:bg-yellow-200"
                                aria-label="Add to Wishlist"
                            >
                                <Heart className="w-6 h-6 text-gray-800 " strokeWidth={1.5} />
                            </button>

                            {/* Add to Bag Button */}
                            <button className=" cursor-pointer flex items-center justify-center space-x-3  text-gray-900  text-lg rounded-none transition transform  active:scale-[0.99]">
                                <span>ADD TO BAG</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPart

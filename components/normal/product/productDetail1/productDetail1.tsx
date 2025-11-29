'use client'
import React, { useEffect, useState } from 'react'
import { Heart, ShoppingBag, Star, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { addItemToWishList, removeItemFromWishList } from '@/lib/wishlistManager'

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
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false)
    const [currentLabel, setCurrentLabel] = useState('The Inventory Not Tracked Snowboard')

    // --- Components ---
    // Reusable component for the award badge;

    const addItemTOWishlist = () => {
        //add items to back
        addItemToWishList(currentLabel)
    }

    useEffect(() => {
        /**
         * This is to listen
         */
        const CheckForWishlistAddition = () => {
            if (isAddedToWishlist) {
                console.log("added item to wishlist")
                addItemToWishList(currentLabel)
            } else {
                console.log("removed-item from wishlist")
                removeItemFromWishList(currentLabel)
            }
        }
        CheckForWishlistAddition()
    }, [currentLabel, isAddedToWishlist])

    // Function to render rating stars
    const renderStars = (rating: number) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            let color = 'text-gray-300'
            if (rating >= i) {
                color = 'text-gray-800'
            } else if (rating > i - 1 && rating < i) {
                color = 'text-gray-800'
            }
            stars.push(
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                >
                    <Star className={`w-5 h-5 fill-current transition-colors duration-150 ${color}`} strokeWidth={1} />
                </motion.div>
            )
        }
        return <div className="flex space-x-0.5">{stars}</div>
    }

    return (
        <motion.div
            className="min-h-screen bg-white flex justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main Grid Container */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* --- Left Column: Images --- */}
                <div className="space-y-6">
                    {/* Main Product Image */}
                    <motion.div
                        className="border relative overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <motion.img
                            src="https://placehold.co/400x400/cccccc/cccccc"
                            alt={product.name}
                            className="w-full h-auto object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                ;(e.target as HTMLImageElement).onerror = null
                                ;(e.target as HTMLImageElement).src = `https://placehold.co/400x400/cccccc/cccccc`
                            }}
                        />
                    </motion.div>

                    {/* Secondary Image */}
                    <motion.div
                        className="bg-[#fcf9f0] border overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <motion.img
                            src="https://placehold.co/400x400/cccccc/cccccc"
                            alt="Mask close up"
                            className="w-full h-auto object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                ;(e.target as HTMLImageElement).onerror = null
                                ;(e.target as HTMLImageElement).src = `https://placehold.co/400x400/cccccc/cccccc`
                            }}
                        />
                    </motion.div>
                </div>

                {/* --- Right Column: Details and CTA --- */}
                <div className="space-y-6">
                    {/* Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl max-w-sm text-gray-900 mb-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {product.name}
                        </motion.h1>
                        <motion.p
                            className="text-gray-700 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {product.description}
                        </motion.p>
                    </motion.div>

                    {/* Feature Badges */}
                    <motion.div
                        className="flex flex-wrap gap-2 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {['Clinically Proven', 'Dermatologist approved', 'FDA Approved'].map((badge, index) => (
                            <motion.span
                                key={badge}
                                className="px-4 py-2 text-sm text-black border border-black bg-white hover:bg-gray-50 transition cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Color Selector */}
                    <motion.div
                        className="pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <p className="font-medium text-gray-800 mb-3">Available colours</p>
                        <div className="flex space-x-3">
                            {product.colors.map((color, index) => (
                                <motion.button
                                    key={color.hex}
                                    onClick={() => setSelectedColor(color.hex)}
                                    className="w-7 h-7 rounded-full border-2 transition-all duration-200"
                                    style={{
                                        backgroundColor: color.hex,
                                        borderColor: selectedColor === color.hex ? '#333' : 'transparent',
                                        boxShadow: selectedColor === color.hex ? '0 0 0 2px #ffb700' : 'none',
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: selectedColor === color.hex ? 1.2 : 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                                    whileHover={{ scale: 1.3, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={`Select color ${color.name}`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Rating and Reviews */}
                    <motion.div
                        className="flex items-center space-x-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {renderStars(product.rating)}
                        <motion.span
                            className="text-sm text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                        >
                            {product.reviewCount} Reviews
                        </motion.span>
                    </motion.div>

                    {/* Price and Add to Bag CTA */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        {/* Price Box */}
                        <motion.div
                            className="flex justify-between items-center p-4 bg-neutral-100 border-b border-gray-200"
                            whileHover={{ backgroundColor: '#f5f5f5' }}
                        >
                            <span className="font-semibold text-gray-800">{product.name}</span>
                            <div className="flex items-center space-x-3">
                                <motion.span
                                    className="text-2xl font-bold text-gray-900"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1 }}
                                >
                                    ${product.price}
                                </motion.span>
                                <span className="text-sm text-black">Shipping Inclusive</span>
                            </div>
                        </motion.div>

                        {/* CTA Button Row */}
                        <motion.div
                            className="flex justify-between p-8 h-20 mt-0 bg-[#fcf59e] items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            {/* Wishlist Button */}
                            <motion.button
                                className="flex items-center justify-center border border-gray-600 rounded-full h-12 w-12 transition hover:bg-yellow-200"
                                aria-label="Add to Wishlist"
                                onClick={() => setIsAddedToWishlist(!isAddedToWishlist)}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                    scale: isAddedToWishlist ? [1, 1.3, 1] : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    animate={{
                                        fill: isAddedToWishlist ? '#E74C3C' : 'none',
                                    }}
                                >
                                    <Heart
                                        className={`w-6 h-6 text-gray-800 ${isAddedToWishlist ? 'fill-red-500' : ''}`}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>
                            </motion.button>

                            {/* Add to Bag Button */}
                            <motion.button
                                onClick={addItemTOWishlist}
                                className="cursor-pointer flex items-center justify-center space-x-3 text-gray-900 text-lg rounded-none transition transform group"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>ADD TO WISHLIST</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductDetailPart

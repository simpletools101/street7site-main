'use client'

import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, X, Filter } from 'lucide-react'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Sample product data - replace with your actual data
const sampleProducts = [
    {
        id: 1,
        name: 'Red Light Therapy Mask',
        price: 245,
        image: 'https://placehold.co/400x400/cccccc/cccccc',
        category: 'Therapy',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Blue Light Therapy Device',
        price: 345,
        image: 'https://placehold.co/400x400/cccccc/cccccc',
        category: 'Therapy',
        rating: 4.2,
    },
    {
        id: 3,
        name: 'Facial Steamer Pro',
        price: 150,
        image: 'https://placehold.co/400x400/cccccc/cccccc',
        category: 'Skincare',
        rating: 4.7,
    },
    {
        id: 4,
        name: 'LED Face Mask',
        price: 199,
        image: 'https://placehold.co/400x400/cccccc/cccccc',
        category: 'Beauty',
        rating: 4.4,
    },
]

const categories = ['All', 'Therapy', 'Skincare', 'Beauty', 'Wellness']
const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' },
]

function SearchContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedSort, setSelectedSort] = useState('relevance')
    const [showFilters, setShowFilters] = useState(false)
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

    useEffect(() => {
        const query = searchParams.get('q')
        if (query) {
            setSearchQuery(query)
        }
    }, [searchParams])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const clearSearch = () => {
        setSearchQuery('')
        router.push('/search')
    }

    // Filter products based on search query and filters
    const filteredProducts = sampleProducts.filter((product) => {
        const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
        const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
        return matchesQuery && matchesCategory && matchesPrice
    })

    return (
        <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16">
            <div className="w-full max-w-7xl mx-auto">
                {/* Search Header */}
                <motion.div
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 tracking-wide">
                        Search Products
                    </h1>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative">
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for products, brands, or categories..."
                                className="w-full pl-12 pr-12 py-4 text-base border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            />
                            {searchQuery && (
                                <motion.button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-4 text-gray-400 hover:text-gray-600"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            )}
                        </div>
                    </form>

                    {searchQuery && (
                        <motion.p
                            className="mt-4 text-gray-600 text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Showing results for <span className="font-semibold">"{searchQuery}"</span> ({filteredProducts.length} products found)
                        </motion.p>
                    )}
                </motion.div>

                {/* Filters and Sort */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-sm border transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-black border-gray-300 hover:border-black'
                                }`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Sort and Filter */}
                    <div className="flex gap-3">
                        <select
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                            className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <motion.button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm hover:bg-gray-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </motion.button>
                    </div>
                </motion.div>

                {/* Advanced Filters Panel */}
                {showFilters && (
                    <motion.div
                        className="mb-8 p-6 border border-gray-200 bg-gray-50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <h3 className="font-semibold mb-4">Price Range</h3>
                        <div className="flex gap-4 items-center">
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                                placeholder="Min"
                                className="w-24 px-3 py-2 border border-gray-300 text-sm"
                            />
                            <span>to</span>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                placeholder="Max"
                                className="w-24 px-3 py-2 border border-gray-300 text-sm"
                            />
                            <motion.button
                                onClick={() => setPriceRange({ min: 0, max: 1000 })}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-black"
                                whileHover={{ scale: 1.05 }}
                            >
                                Reset
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            >
                                <Link href={`/product/${product.id}`}>
                                    <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-gray-900 group-hover:underline">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-bold text-gray-900">${product.price}</p>
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <span>⭐</span>
                                                <span>{product.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {product.category}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <Search className="w-10 h-10 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h2>
                        <p className="text-gray-600 mb-6">
                            Try adjusting your search or filters to find what you're looking for.
                        </p>
                        <motion.button
                            onClick={clearSearch}
                            className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Clear Search
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
        }>
            <SearchContent />
        </Suspense>
    )
}
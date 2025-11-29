'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Heart, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const categories = [
    {
        id: 1,
        name: 'LED Therapy Masks',
        description: 'Professional-grade light therapy for your face',
        image: 'https://placehold.co/600x600/cccccc/cccccc',
        productCount: 12,
        tag: 'Best Seller',
    },
    {
        id: 2,
        name: 'Skincare Devices',
        description: 'Advanced tools for radiant skin',
        image: 'https://placehold.co/600x600/cccccc/cccccc',
        productCount: 8,
        tag: 'New',
    },
    {
        id: 3,
        name: 'Wellness Tools',
        description: 'Complete wellness solutions',
        image: 'https://placehold.co/600x600/cccccc/cccccc',
        productCount: 15,
        tag: 'Trending',
    },
    {
        id: 4,
        name: 'Body Care',
        description: 'Full-body treatment devices',
        image: 'https://placehold.co/600x600/cccccc/cccccc',
        productCount: 10,
        tag: null,
    },
]

const featuredProducts = [
    {
        id: 1,
        name: 'Red Light Therapy Mask Pro',
        price: 345,
        originalPrice: 445,
        image: 'https://placehold.co/500x500/cccccc/cccccc',
        badge: "Editor's Choice",
        rating: 4.9,
        reviews: 1250,
    },
    {
        id: 2,
        name: 'Blue Light Therapy Device',
        price: 245,
        originalPrice: null,
        image: 'https://placehold.co/500x500/cccccc/cccccc',
        badge: 'New Arrival',
        rating: 4.7,
        reviews: 890,
    },
    {
        id: 3,
        name: 'LED Face & Neck Combo',
        price: 495,
        originalPrice: 595,
        image: 'https://placehold.co/500x500/cccccc/cccccc',
        badge: 'Bundle Deal',
        rating: 4.8,
        reviews: 650,
    },
    {
        id: 4,
        name: 'Portable LED Wand',
        price: 149,
        originalPrice: null,
        image: 'https://placehold.co/500x500/cccccc/cccccc',
        badge: 'Best Value',
        rating: 4.6,
        reviews: 2100,
    },
]

const collections = [
    {
        title: 'Anti-Aging Collection',
        subtitle: 'Turn back the clock',
        image: 'https://placehold.co/800x600/f0e68c/cccccc',
        link: '/collections/anti-aging',
    },
    {
        title: 'Acne Treatment',
        subtitle: 'Clear skin solutions',
        image: 'https://placehold.co/800x600/87ceeb/cccccc',
        link: '/collections/acne',
    },
]

export default function ExplorePage() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-white">
            {/* HERO */}
            <section className="relative h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 " />
                    <motion.div
                        className="absolute inset-0 "
                        
                        style={{
                            backgroundImage: 'url("https://images.pexels.com/photos/1008206/pexels-photo-1008206.jpeg")',
                            
                        }}
                    />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
                            <Sparkles className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-medium uppercase tracking-wider">Discover Excellence</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 tracking-wide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Explore Our Collection
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Discover innovative wellness and beauty devices backed by science, trusted by professionals,
                        loved by thousands.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="#categories"
                            className="px-10 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse Categories
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>

                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </section>

            {/* CATEGORIES */}
            <section id="categories" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                            Shop by Category
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">Find the perfect solution for your needs</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="group relative overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onHoverStart={() => setHoveredCategory(category.id)}
                                onHoverEnd={() => setHoveredCategory(null)}
                                whileHover={{ y: -10 }}
                            >
                                <Link href={`/category/${category.id}`}>
                                    <div className="relative h-80 mb-4 overflow-hidden bg-gray-100">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {category.tag && (
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase">
                                                {category.tag}
                                            </div>
                                        )}

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                                            <p className="text-sm text-white/80 mb-2">{category.description}</p>
                                            <p className="text-xs text-white/60">{category.productCount} Products</p>
                                        </div>

                                        {/* Hover border animation */}
                                        <motion.div
                                            className="absolute inset-0 border-4 border-white"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredCategory === category.id ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-base sm:text-lg">Our top picks curated for you</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/product/${product.id}`}>
                                    <div className="relative h-64 w-full mb-4 bg-gray-100 overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />

                                        {product.badge && (
                                            <div className="absolute top-3 left-3 px-3 py-1 bg-black text-white text-xs font-semibold rounded">
                                                {product.badge}
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        <span className="text-sm font-medium">{product.rating}</span>
                                        <span className="text-xs text-gray-500">({product.reviews})</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-sm line-through text-gray-500">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COLLECTIONS */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4">Shop Collections</h2>
                        <p className="text-gray-600 text-base sm:text-lg">Curated picks for your beauty goals</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {collections.map((collection, index) => (
                            <motion.div
                                key={index}
                                className="relative h-72 rounded-xl overflow-hidden group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={collection.link}>
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />

                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-2xl font-semibold mb-1">{collection.title}</h3>
                                        <p className="text-sm text-white/80">{collection.subtitle}</p>
                                    </div>

                                    <motion.div
                                        className="absolute inset-0 border-4 border-white opacity-0"
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-4">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Upgrade Your Routine?
                </motion.h2>

                <motion.p
                    className="text-lg text-white/90 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Explore professional-grade beauty and wellness devices designed to elevate your daily routine.
                </motion.p>

                <motion.a
                    href="/"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-700 font-bold text-lg rounded-md hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Shop Now
                    <TrendingUp className="w-5 h-5" />
                </motion.a>
            </section>
        </div>
    )
}

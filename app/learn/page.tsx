'use client'

import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Download, ChevronRight, Lightbulb, Users, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const educationalContent = [
    {
        id: 1,
        title: 'Understanding Red Light Therapy',
        description: 'Learn the science behind red light therapy and how it can transform your skincare routine.',
        category: 'Science',
        duration: '8 min read',
        image: 'https://placehold.co/600x400/cccccc/cccccc',
        type: 'article',
    },
    {
        id: 2,
        title: 'How to Use Your Therapy Mask',
        description: 'A comprehensive guide to getting the most out of your LED therapy device.',
        category: 'Tutorial',
        duration: '5 min read',
        image: 'https://placehold.co/600x400/cccccc/cccccc',
        type: 'guide',
    },
    {
        id: 3,
        title: 'The Benefits of LED Therapy',
        description: 'Discover the clinically-proven benefits of LED light therapy for skin health.',
        category: 'Benefits',
        duration: '6 min read',
        image: 'https://placehold.co/600x400/cccccc/cccccc',
        type: 'article',
    },
]

const videoTutorials = [
    {
        id: 1,
        title: 'Getting Started with Your Mask',
        duration: '4:32',
        thumbnail: 'https://placehold.co/400x300/cccccc/cccccc',
    },
    {
        id: 2,
        title: 'Daily Skincare Routine Integration',
        duration: '6:15',
        thumbnail: 'https://placehold.co/400x300/cccccc/cccccc',
    },
    {
        id: 3,
        title: 'Advanced Techniques & Tips',
        duration: '8:45',
        thumbnail: 'https://placehold.co/400x300/cccccc/cccccc',
    },
]

const faqItems = [
    {
        question: 'How does red light therapy work?',
        answer: 'Red light therapy uses specific wavelengths of light to penetrate the skin and stimulate cellular regeneration, boost collagen production, and reduce inflammation.',
    },
    {
        question: 'How often should I use my therapy mask?',
        answer: 'For optimal results, we recommend using your therapy mask 3-5 times per week for 10-20 minutes per session.',
    },
    {
        question: 'Is LED therapy safe?',
        answer: 'Yes, LED therapy is FDA-cleared and has been extensively tested for safety. It is non-invasive and suitable for all skin types.',
    },
    {
        question: 'When will I see results?',
        answer: 'Most users notice improvements in skin tone and texture within 2-4 weeks of consistent use. Full results typically appear after 8-12 weeks.',
    },
]

const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Customers' },
    { icon: Award, number: '98%', label: 'Satisfaction Rate' },
    { icon: Lightbulb, number: '15+', label: 'Years Research' },
]

export default function LearnPage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100" />
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />

                <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
                            <BookOpen className="w-4 h-4" />
                            <span className="text-sm font-medium uppercase tracking-wider">Education Center</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-wide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Learn About LED Therapy
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Discover the science, benefits, and best practices for transforming your skin with clinically-proven light therapy technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="#articles"
                            className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Learning
                        </motion.a>
                        <motion.a
                            href="#videos"
                            className="px-8 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Watch Tutorials
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-16 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <stat.icon className="w-8 h-8 text-gray-800" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Educational Articles */}
            <section id="articles" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                            Educational Articles
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            In-depth guides to help you understand LED therapy
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {educationalContent.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 mb-4 overflow-hidden bg-gray-100">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:underline">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-xs text-gray-500">{article.duration}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Tutorials */}
            <section id="videos" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                            Video Tutorials
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Step-by-step video guides for mastering your devices
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoTutorials.map((video, index) => (
                            <motion.div
                                key={video.id}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-56 mb-4 overflow-hidden bg-gray-200">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                        <motion.div
                                            className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <PlayCircle className="w-8 h-8 text-black" />
                                        </motion.div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/80 text-white text-xs font-semibold">
                                        {video.duration}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                                    {video.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Get answers to common questions about LED therapy
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-400 transform rotate-90" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: expandedFaq === index ? 'auto' : 0,
                                        opacity: expandedFaq === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Guide CTA */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-yellow-50 to-amber-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <Download className="w-10 h-10 text-gray-800" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-wide">
                            Download Our Complete Guide
                        </h2>
                        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                            Get our comprehensive 50-page guide to LED therapy, including treatment protocols, safety guidelines, and expert tips.
                        </p>
                        <motion.button
                            className="px-10 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Free Guide (PDF)
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
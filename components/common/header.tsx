'use client'
import Link from 'next/link'
import LogoLink from './logolink'
import ICBtn, { ICBtn2 } from './base/icon-btn'
import { Gift, Heart, Search, UserRound, Menu, X, ShoppingBag } from 'lucide-react'
import LanguageXR from './base/language'
import { useRouter } from 'next/navigation'
import StreetTooltip from './tooltip-item'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useCustomerStore } from '@/lib/stores/customerStore'
import { initalProductDeliver } from '@/lib/wishlistManager'

export default function HeaderItem() {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentUserName, setCurrentUserName] = useState('Account')
    const [bagItemCount, setBagItemCount] = useState(0)
    const { customer } = useCustomerStore()

    const gotoLoginPage = async () => {
        
        if (customer && customer != null) {
            router.push('/profile/p')
        } else {
            router.push('/login')
        }
    }

    // Function to get shopping bag count
    const getBagItemCount = () => {
        // TODO: Replace with your actual cart/bag logic
        // This could be from:
        // - Local storage
        // - Context/Redux store
        // - API call
        try {
            const bagItems = localStorage.getItem('shopping_bag')
            if (bagItems) {
                const items = JSON.parse(bagItems)
                return items.length || 0
            }
            return 0
        } catch (error) {
            console.error('Error getting bag count:', error)
            return 0
        }
    }

    // Function to update bag count
    const updateBagCount = () => {
        const count = getBagItemCount()
        setBagItemCount(count)
    }

    useEffect(() => {
      
        const initailLoadRun = () => {
            initalProductDeliver()
        }
        initailLoadRun();
        
        // Update bag count on mount
        updateBagCount()

        // Listen for storage changes (when items are added/removed in other tabs)
        window.addEventListener('storage', updateBagCount)

        // Custom event for same-tab updates
        window.addEventListener('bagUpdated', updateBagCount)

        return () => {
            window.removeEventListener('storage', updateBagCount)
            window.removeEventListener('bagUpdated', updateBagCount)
        }
    }, [])

    const gotoWishList = () => router.push('/profile/wishlist')

    const handleSearchClick = () => {
        setSearchModalOpen(true)
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
            setSearchModalOpen(false)
            setSearchQuery('')
        }
    }

    const gotoCheckout = () => router.push('/checkout')

    const closeMobileMenu = () => setMobileMenuOpen(false)

    const mobileMenuVariants: Variants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    }

    const mobileMenuItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    }

    return (
        <>
            <motion.header
                className="w-full pb-4 sm:pb-6 space-y-4 sm:space-y-6 px-4 sm:px-8 lg:px-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Logo + Divider */}
                <div className="w-full mt-4 sm:mt-6 lg:mt-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    >
                        <LogoLink />
                    </motion.div>
                    <motion.div
                        className="bg-neutral-900 w-full h-px"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    ></motion.div>
                </div>

                {/* Main Navigation */}
                <div className="flex items-center justify-between w-full">
                    {/* Mobile hamburger menu - Left side */}
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                            <ICBtn
                                description={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                                onDidClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-5 w-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-5 w-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </ICBtn>
                        </motion.div>
                    </motion.div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <motion.nav
                        className="hidden md:flex uppercase space-x-6 lg:space-x-8 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.1 }}
                    >
                        {['shop', 'explore', 'learn'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                            >
                                <Link
                                    href={item === 'shop' ? '/' : `/${item}`}
                                    className="hover:text-gray-600 transition-colors relative group"
                                >
                                    {item}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>

                    {/* Actions - Right side */}
                    <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                        {/* Mobile icons - Show only essential ones */}
                        <motion.div
                            className="flex md:hidden items-center space-x-2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            {[
                                { icon: Heart, onClick: gotoWishList, tooltip: 'Wishlist' },
                                { icon: UserRound, onClick: gotoLoginPage, tooltip: currentUserName },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.tooltip}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <StreetTooltip content={item.tooltip}>
                                        <ICBtn description={item.tooltip} onDidClick={item.onClick}>
                                            <item.icon className="h-5 w-5" />
                                        </ICBtn>
                                    </StreetTooltip>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Desktop icons - Show all */}
                        <motion.div
                            className="hidden md:flex items-center space-x-3 lg:space-x-4"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            {[
                                
                                { icon: Heart, onClick: gotoWishList, tooltip: 'Wishlist', badge: null },
                                { icon: UserRound, onClick: gotoLoginPage, tooltip: currentUserName, badge: null },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.tooltip}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <StreetTooltip content={item.tooltip}>
                                        {item.badge !== null && item.badge > 0 ? (
                                            <ICBtn2
                                                description={item.tooltip}
                                                badge={item.badge}
                                                onDidClick={item.onClick}
                                            >
                                                <item.icon className="h-5 w-5" />
                                            </ICBtn2>
                                        ) : (
                                            <ICBtn description={item.tooltip} onDidClick={item.onClick}>
                                                <item.icon className="h-5 w-5" />
                                            </ICBtn>
                                        )}
                                    </StreetTooltip>
                                </motion.div>
                            ))}

                            <motion.div
                                className="bg-black w-px h-6"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3, delay: 1.2 }}
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 1.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <LanguageXR />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden border-t border-gray-200 pt-4 overflow-hidden"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <nav className="flex flex-col space-y-4">
                                {['shop', 'explore', 'learn'].map((item) => (
                                    <motion.div key={item} variants={mobileMenuItemVariants}>
                                        <Link
                                            href={item === 'shop' ? '/' : `/${item}`}
                                            className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center block"
                                            onClick={closeMobileMenu}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Mobile-only additional options */}
                                <motion.div
                                    className="border-t border-gray-200 pt-4 flex flex-col space-y-4"
                                    variants={mobileMenuItemVariants}
                                >
                                    <Link
                                        href="/profile/wishlist"
                                        className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                                        onClick={closeMobileMenu}
                                    >
                                        Wishlist
                                    </Link>
                                    <motion.div
                                        className="flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <LanguageXR />
                                    </motion.div>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Search Modal */}
            <AnimatePresence>
                {searchModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#000000e0] backdrop-blur-3xl backdrop-opacity-45 bg-opacity-45 flex items-start justify-center z-50 pt-20 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSearchModalOpen(false)}
                    >
                        <motion.div
                            className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: -20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Search Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-900">Search Products</h2>
                                <motion.button
                                    onClick={() => setSearchModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Search Input */}
                            <form onSubmit={handleSearchSubmit} className="p-6">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for products, brands, or categories..."
                                        className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                        autoFocus
                                    />
                                </div>

                                {/* Search Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full mt-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={!searchQuery.trim()}
                                >
                                    Search
                                </motion.button>
                            </form>

                            {/* Popular Searches (Optional) */}
                            <div className="px-6 pb-6">
                                <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Red Light Mask', 'Therapy', 'Skincare', 'Wellness'].map((term) => (
                                        <motion.button
                                            key={term}
                                            onClick={() => {
                                                setSearchQuery(term)
                                                router.push(`/search?q=${encodeURIComponent(term)}`)
                                                setSearchModalOpen(false)
                                            }}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {term}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

'use client'
import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { ShoppingBag, X, Trash2, Minus, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useCustomerStore } from '@/lib/stores/customerStore'

// Define the structure for a single item in the cart
interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    imageUrl: string
}

// Initial placeholder data for the shopping bag
const initialCartItems: CartItem[] = [
    {
        id: 1,
        name: 'Red Light Therapy Mask',
        price: 1245,
        quantity: 2,
        imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Mask',
    },
    {
        id: 2,
        name: 'Nekasa Magic 1 steamer',
        price: 200,
        quantity: 1,
        imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Steamer',
    },
    {
        id: 3,
        name: 'Body shaper',
        price: 345,
        quantity: 1,
        imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Shaper',
    },
]

const CheckoutItem = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCartItems)
    const [isOpen, setIsOpen] = useState(true)
    const { customer } = useCustomerStore()

    // --- Utility Functions for Cart Calculations ---
    const subtotal = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }, [cart])

    const total = subtotal

   
    /**
     * Generate CheckoutURL will get all the items and generate a chec
     * @param amount
     * @returns
     */

    const generateCheckOutURL = () => {
        /**
         * We retrieve the cart url that we need
         */
        /**
         * We then generate the checkout url
         */
    };

    /**
     * We want to first give the wishlist a fresh version of the wishlist
     */
    useEffect(()=>{

    },[])

    // Format currency
    const formatCurrency = (amount: number) => {
        return `$${amount.toLocaleString()}`
    }

    // --- Cart Actions ---
    const handleRemoveItem = useCallback((id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }, [])

    const handleUpdateQuantity = useCallback((id: number, delta: 0 | 1 | -1) => {
        setCart((prevCart) =>
            prevCart
                .map((item) => {
                    if (item.id === id) {
                        const newQuantity = item.quantity + delta
                        if (newQuantity <= 0) {
                            return null
                        }
                        return { ...item, quantity: newQuantity }
                    }
                    return item
                })
                .filter((item): item is CartItem => item !== null)
        )
    }, [])

    const router = useRouter()
    const gotoWishList = () => {
        router.push('/profile/wishlist')
    }

    // --- Sub-Component: Cart Item Row ---
    const CartItemRow: React.FC<{ item: CartItem; index: number }> = React.memo(({ item, index }) => {
        const itemTotal = item.price * item.quantity

        return (
            <motion.div
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0 py-4 gap-3 sm:gap-4"
            >
                {/* Left: Image */}
                <motion.div
                    className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto sm:mx-0 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            ;(e.target as HTMLImageElement).onerror = null
                            ;(e.target as HTMLImageElement).src = `https://placehold.co/120x120/f0f0f0/333?text=N/A`
                        }}
                    />
                </motion.div>

                {/* Right: Details, Quantity, Price */}
                <div className="grow w-full flex flex-col gap-3">
                    {/* Item Name and Delete Button */}
                    <motion.div
                        className="flex bg-neutral-200 p-3 sm:p-4 lg:p-6 justify-between items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <span className="font-semibold text-sm sm:text-base lg:text-lg text-gray-800 pr-2">
                            {item.name}
                        </span>
                        <motion.button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500 transition duration-150 flex-shrink-0"
                            aria-label={`Remove ${item.name}`}
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        </motion.button>
                    </motion.div>

                    {/* Quantity and Price Container */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between items-center px-3 sm:px-4 lg:px-6 pb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-0.5 bg-neutral-50 p-1">
                            <motion.button
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="p-1.5 sm:p-2 bg-white text-gray-800 hover:bg-gray-100 transition duration-150 rounded-none border border-gray-200"
                                aria-label="Decrease quantity"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            </motion.button>
                            <motion.span
                                key={item.quantity}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                className="px-3 sm:px-4 font-medium text-base sm:text-lg bg-[#fff9e6] text-gray-800"
                            >
                                {item.quantity}
                            </motion.span>
                            <motion.button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="p-1.5 sm:p-2 bg-white text-gray-800 hover:bg-gray-100 transition duration-150 rounded-none border border-gray-200"
                                aria-label="Increase quantity"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            </motion.button>
                        </div>

                        {/* Item Total Price */}
                        <motion.div
                            key={itemTotal}
                            initial={{ scale: 1.2, color: '#ffb700' }}
                            animate={{ scale: 1, color: '#111827' }}
                            transition={{ duration: 0.3 }}
                            className="font-bold text-lg sm:text-xl text-gray-900"
                        >
                            {formatCurrency(itemTotal)}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        )
    })

    if (!isOpen) {
        return null
    }

    return (
        <motion.div
            className="min-h-screen bg-gray-50 font-sans flex justify-center py-4 sm:py-6 lg:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Shopping Bag Container */}
            <motion.div
                className="w-full max-w-4xl bg-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Header */}
                <motion.header
                    className="flex justify-between items-center p-3 sm:p-4 lg:p-6 bg-black text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffb700] flex-shrink-0" />
                        </motion.div>
                        <h2 className="text-base sm:text-lg lg:text-xl font-medium tracking-wider">MY SHOPPING BAG</h2>
                    </div>
                    <motion.button
                        onClick={gotoWishList}
                        className="p-1 hover:text-gray-300 transition flex-shrink-0"
                        aria-label="Close shopping bag"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                </motion.header>

                {/* Cart Items */}
                <div className="p-3 sm:p-4 lg:p-8">
                    <AnimatePresence mode="popLayout">
                        {cart.length > 0 ? (
                            <div>
                                {cart.map((item, index) => (
                                    <CartItemRow key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center text-gray-500 py-10 text-sm sm:text-base"
                            >
                                Your shopping bag is empty.
                            </motion.p>
                        )}
                    </AnimatePresence>

                    {/* Spacer/Divider for totals section */}
                    <motion.div
                        className="h-px bg-gray-200 my-6 sm:my-8"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    />

                    {/* Totals Summary */}
                    <motion.div
                        className="space-y-2 sm:space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {/* Subtotal */}
                        <motion.div
                            className="flex justify-between text-sm sm:text-base lg:text-lg"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >
                            <span className="text-gray-600">Subtotal</span>
                            <motion.span
                                key={subtotal}
                                initial={{ scale: 1.2, color: '#ffb700' }}
                                animate={{ scale: 1, color: '#1f2937' }}
                                className="font-medium text-gray-800"
                            >
                                {formatCurrency(subtotal)}
                            </motion.span>
                        </motion.div>

                        {/* Shipping */}
                        <motion.div
                            className="flex justify-between text-sm sm:text-base lg:text-lg"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        >
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium text-gray-800">free</span>
                        </motion.div>

                        {/* Tax */}
                        <motion.div
                            className="flex justify-between text-sm sm:text-base lg:text-lg"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 }}
                        >
                            <span className="text-gray-600">Tax</span>
                            <span className="text-xs sm:text-sm text-gray-500">Calculated at check out</span>
                        </motion.div>
                    </motion.div>

                    {/* Total Line */}
                    <motion.div
                        className="mt-6 sm:mt-8 p-3 sm:p-4 flex justify-between items-center bg-[#fff9e6] font-bold text-lg sm:text-xl lg:text-2xl border-t border-b border-yellow-200"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <span>Total</span>
                        <motion.span key={total} initial={{ scale: 1.2 }} animate={{ scale: 1 }}>
                            {formatCurrency(total)}
                        </motion.span>
                    </motion.div>
                </div>

                {/* Checkout Button */}
                <motion.div
                    className="p-3 sm:p-4 lg:p-6 bg-gray-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <motion.button
                        onClick={generateCheckOutURL}
                        className="w-full py-3 sm:py-4 bg-black text-[#fbd300] font-bold text-base sm:text-lg rounded-none hover:bg-gray-800 transition"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Proceed to Checkout
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default CheckoutItem

'use client'

import { motion, Variants } from 'framer-motion'
import { CheckoutButton, INPUT_BG_COLOR } from './utils'
import { useEffect, useState } from 'react'
import { useWishlist } from '@/lib/stores/wishlistStore'
import { FetchedProducts } from '@/lib/wishlistManager'
import { ArrowRight, Trash } from 'lucide-react'
import { _createCartObjectFromProducts } from '@/lib/checkoutManager'

const WishlistContent: React.FC = () => {
    const [currentWishListItems, setWishListItems] = useState<FetchedProducts[]>([])

    // Zustand wishlist store
    const items = useWishlist((s) => s.items)

    const handleRemove = (id: string) => {
        useWishlist.getState().removeFromWishlist(id)
        setWishListItems((prev) => prev.filter((item) => item.id !== id))
    }

    const handleCheckout = async () => {
        try {
            const cartId = await _createCartObjectFromProducts()

            console.log('Current CartID', cartId)

            const res = await fetch('/api/cart/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cartId }),
            })

            if (!res.ok) throw new Error('Failed to get checkout URL')
            const data = await res.json()
            console.log('Returned-checkout-url', data);
            const receivedCheckoutURL = data;

            /**
             * We take the user to the current location
             */

            window.location.href = receivedCheckoutURL
        } catch (err) {
            console.error('Checkout Error:', err)
        }
    }

    useEffect(() => {
        setWishListItems(items)
    }, [items])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    }

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* EMPTY WISHLIST MESSAGE */}
            {currentWishListItems.length === 0 && (
                <div className="col-span-full text-center py-10 text-gray-500 text-xl">Your wishlist is empty 😞</div>
            )}

            {currentWishListItems.map((item) => (
                <motion.div
                    key={item.id}
                    className="flex flex-col overflow-hidden border border-gray-200 rounded-md"
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.1 }}
                >
                    {/* Image Area */}
                    <div className="p-3 sm:p-4 overflow-hidden" style={{ backgroundColor: INPUT_BG_COLOR }}>
                        <motion.img
                            src={item.featuredImage}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                    </div>

                    {/* Title */}
                    <h2 className="px-4 pt-2 font-semibold">{item.title}</h2>

                    {/* Buttons */}
                    <div className="flex justify-between items-center bg-neutral-200 p-2 sm:p-3">
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition text-sm"
                        >
                            <Trash size={16} /> Remove
                        </button>

                        <button
                            onClick={handleCheckout}
                            className="flex cursor-pointer items-center text-lg h-10 transition duration-150 group"
                            style={{ color: '#333' }}
                        >
                            CHECK OUT
                            <ArrowRight
                                size={16}
                                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default WishlistContent

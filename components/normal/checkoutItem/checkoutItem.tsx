"use client"
import React, { useState, useMemo, useCallback } from 'react'
import { ShoppingBag, X, Trash2, Minus, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

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

    // --- Utility Functions for Cart Calculations ---
    const subtotal = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }, [cart])

    const total = subtotal

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
    const CartItemRow: React.FC<{ item: CartItem }> = React.memo(({ item }) => {
        const itemTotal = item.price * item.quantity
        return (
            <div className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0 py-4 gap-3 sm:gap-4">
                {/* Left: Image */}
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto sm:mx-0">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            ;(e.target as HTMLImageElement).onerror = null
                            ;(e.target as HTMLImageElement).src = `https://placehold.co/120x120/f0f0f0/333?text=N/A`
                        }}
                    />
                </div>

                {/* Right: Details, Quantity, Price */}
                <div className="grow w-full flex flex-col gap-3">
                    {/* Item Name and Delete Button */}
                    <div className="flex bg-neutral-200 p-3 sm:p-4 lg:p-6 justify-between items-center">
                        <span className="font-semibold text-sm sm:text-base lg:text-lg text-gray-800 pr-2">
                            {item.name}
                        </span>
                        <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500 transition duration-150 flex-shrink-0"
                            aria-label={`Remove ${item.name}`}
                        >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        </button>
                    </div>

                    {/* Quantity and Price Container */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between items-center px-3 sm:px-4 lg:px-6 pb-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-0.5 bg-neutral-50 p-1">
                            <button
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="p-1.5 sm:p-2 bg-white text-gray-800 hover:bg-gray-100 transition duration-150 rounded-none border border-gray-200"
                                aria-label="Decrease quantity"
                            >
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            </button>
                            <span className="px-3 sm:px-4 font-medium text-base sm:text-lg bg-[#fff9e6] text-gray-800">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="p-1.5 sm:p-2 bg-white text-gray-800 hover:bg-gray-100 transition duration-150 rounded-none border border-gray-200"
                                aria-label="Increase quantity"
                            >
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            </button>
                        </div>

                        {/* Item Total Price */}
                        <div className="font-bold text-lg sm:text-xl text-gray-900">
                            {formatCurrency(itemTotal)}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    if (!isOpen) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex justify-center py-4 sm:py-6 lg:py-8">
            {/* Shopping Bag Container */}
            <div className="w-full max-w-4xl bg-white overflow-hidden">
                {/* Header */}
                <header className="flex justify-between items-center p-3 sm:p-4 lg:p-6 bg-black text-white">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffb700] flex-shrink-0" />
                        <h2 className="text-base sm:text-lg lg:text-xl font-medium tracking-wider">
                            MY SHOPPING BAG
                        </h2>
                    </div>
                    <button
                        onClick={gotoWishList}
                        className="p-1 hover:text-gray-300 transition flex-shrink-0"
                        aria-label="Close shopping bag"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </header>

                {/* Cart Items */}
                <div className="p-3 sm:p-4 lg:p-8">
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item) => (
                                <CartItemRow key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-10 text-sm sm:text-base">
                            Your shopping bag is empty.
                        </p>
                    )}

                    {/* Spacer/Divider for totals section */}
                    <div className="h-px bg-gray-200 my-6 sm:my-8"></div>

                    {/* Totals Summary */}
                    <div className="space-y-2 sm:space-y-3">
                        {/* Subtotal */}
                        <div className="flex justify-between text-sm sm:text-base lg:text-lg">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-800">{formatCurrency(subtotal)}</span>
                        </div>
                        {/* Shipping */}
                        <div className="flex justify-between text-sm sm:text-base lg:text-lg">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium text-gray-800">free</span>
                        </div>
                        {/* Tax */}
                        <div className="flex justify-between text-sm sm:text-base lg:text-lg">
                            <span className="text-gray-600">Tax</span>
                            <span className="text-xs sm:text-sm text-gray-500">Calculated at check out</span>
                        </div>
                    </div>

                    {/* Total Line */}
                    <div className="mt-6 sm:mt-8 p-3 sm:p-4 flex justify-between items-center bg-[#fff9e6] font-bold text-lg sm:text-xl lg:text-2xl border-t border-b border-yellow-200">
                        <span>Total</span>
                        <span>{formatCurrency(total)}</span>
                    </div>
                </div>

                {/* Checkout Button */}
                <div className="p-3 sm:p-4 lg:p-6 bg-gray-50">
                    <button className="w-full py-3 sm:py-4 bg-black text-[#fbd300] font-bold text-base sm:text-lg rounded-none hover:bg-gray-800 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Define the custom gold color for consistency
export const ACCENT_COLOR = '#fec000'
export const INPUT_BG_COLOR = '#EFEFEF' // Used for input backgrounds

export function CheckoutButton() {
    const router = useRouter()

    const gotoCheckout = () => {
        router.push('/checkout')
    }

    return (
        <button
            onClick={gotoCheckout}
            className="flex cursor-pointer items-center text-lg h-10 font-norma  transition duration-150 group"
            style={{ color: '#333' }}
        >
            CHECK OUT
            <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
    )
}

export const ChangeLink: React.FC<{ text: string }> = ({ text }) => (
    <button
        className="flex items-center text-sm font-medium transition duration-150 group hover:underline"
        style={{ color: '#333' }}
    >
        {text}
        <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
)

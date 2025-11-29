'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Define the custom gold color for consistency
export const ACCENT_COLOR = '#fec000'
export const INPUT_BG_COLOR = '#EFEFEF'

// Used for input backgrounds


interface IBTN {
    checkoutURL:string;
    onWillRequestCheckout():void;
}

export function CheckoutButton(props:IBTN) {
    const router = useRouter()
  

    return (
        <Link
            href={props.checkoutURL}
            className="flex cursor-pointer items-center text-lg h-10 font-norma  transition duration-150 group"
            style={{ color: '#333' }}
        >
            CHECK OUT
            <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
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

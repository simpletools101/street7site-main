"use client"
import React from 'react'
import { ArrowRight } from 'lucide-react'

// Define the custom colors based on the image
const ACCENT_COLOR = '#D4A017'
const INPUT_BG_COLOR = '#EFEFEF'

// --- Reusable Input Field Component ---
interface InputFieldProps {
    placeholder: string
    type: string
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type }) => {
    return (
        <div
            className="mb-4 sm:mb-6 p-3 sm:p-4 overflow-hidden flex items-center"
            style={{ backgroundColor: INPUT_BG_COLOR }}
        >
            <input
                type={type}
                placeholder={placeholder}
                className="w-full text-base sm:text-lg placeholder-black bg-transparent focus:outline-none"
                aria-label={placeholder}
                // Tailwind utility to hide default browser focus ring
                style={{ '--tw-ring-color': 'transparent' } as React.CSSProperties}
            />
        </div>
    )
}

// --- Main Application Component ---
export default function RegisterItem() {
    const handleRegisterWithGoogle = () => {
        console.log('Register with Google clicked')
    }

    const handleCreateAccount = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Create account clicked')
    }

    return (
        <div className="min-h-screen bg-white font-sans flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="w-full max-w-lg">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 leading-tight">
                    Create an account
                </h1>

                {/* Google Registration Button */}
                <button
                    onClick={handleRegisterWithGoogle}
                    className="w-full flex items-center justify-center py-3 sm:py-3.5 md:py-4 mb-6 sm:mb-8 border border-black hover:bg-gray-50 transition duration-150 shadow-sm"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png"
                        alt="Google logo"
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
                        onError={(e) => {
                            ;(e.target as HTMLImageElement).onerror = null
                            ;(e.target as HTMLImageElement).src = 'https://placehold.co/48x48/cccccc/555555?text=G'
                        }}
                    />
                    <span className="text-sm sm:text-base font-medium text-gray-700">Register with Google</span>
                </button>

                {/* Input Fields */}
                <form onSubmit={handleCreateAccount}>
                    <InputField placeholder="Your name" type="text" />
                    <InputField placeholder="Your E-mail" type="email" />

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        className="w-full mt-3 sm:mt-4 flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]"
                        style={{ backgroundColor: '#000000' }}
                    >
                        <span className="text-base sm:text-lg font-semibold mr-2" style={{ color: ACCENT_COLOR }}>
                            Create account
                        </span>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5" style={{ color: ACCENT_COLOR }} />
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-center mt-5 sm:mt-6 text-xs sm:text-sm text-gray-600">
                    Already have an account?
                    <a href="/login" className="font-medium hover:underline ml-1" style={{ color: ACCENT_COLOR }}>
                        Log in now
                    </a>
                </p>
            </div>
        </div>
    )
}
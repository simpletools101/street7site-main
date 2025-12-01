'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import PatternImage from "@/assets/Street 7 Pattern-2.png"

// Define the custom gold color
const ACCENT_COLOR = '#fec000'
const LIGHT_GOLD_COLOR = '#FFEB99'

// CSS for the geometric header pattern (replicated from the image)


export default function ReturnPolicy() {
    const bannerStyle: React.CSSProperties = {
        height: '80px',
        // Repeating linear gradient to simulate the abstract yellow pattern
        backgroundImage: 'repeating-linear-gradient(60deg, #ffb700, #ffb700 30px, #fbd300 30px, #fbd300 60px)',
    }

    const bannerStyleMobile: React.CSSProperties = {
        height: '60px',
        backgroundImage: 'repeating-linear-gradient(60deg, #ffb700, #ffb700 20px, #fbd300 20px, #fbd300 40px)',
    }

    const handleAskForReturn = () => {
        console.log('Ask for return clicked')
    }

    // Mock content to match the structure and length in the image (three paragraphs)
    const paragraph1 = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.`
    const paragraph2 = `a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.`
    const paragraph3 = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales.`

    return (
        <div className="min-h-screen bg-white font-sans flex justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-4xl">
                {/* Title */}
                <h1 className="text-3xl tb sm:text-4xl md:text-4xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 text-left text-gray-900 leading-tight">
                    Return policy
                </h1>

                {/* Banner Pattern */}
                <div className='w-full h-[90px] mb-5'>
                    <img src={PatternImage.src} className='h-[90px] w-full object-cover' />
                </div>

                {/* Content */}
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12 space-y-4 sm:space-y-6 md:space-y-8">
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <p>{paragraph3}</p>
                </div>

                {/* Button */}
                <button
                    onClick={handleAskForReturn}
                    className="w-full flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]"
                    style={{ backgroundColor: '#000000' }}
                >
                    <span className="text-base sm:text-lg font-semibold mr-2" style={{ color: ACCENT_COLOR }}>
                        Ask for return
                    </span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" style={{ color: ACCENT_COLOR }} />
                </button>
            </div>
        </div>
    )
}

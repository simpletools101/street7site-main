"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Define the custom gold color

export default function HowWeShip() {
    const router = useRouter();

    const handleTrackOrder = () => {
        /**
         * The main Router model.
         */

        router.push("/profile/orders")
    }

    // Placeholder image URL for the shipping container ship
    const imageUrl = 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg'

    // Mock content to match the structure and length in the image
    const content = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.`

    return (
        <div className="min-h-screen mt-5 bg-white font-sans flex justify-center ">
            <div className="w-full max-w-4xl ">
                {/* Title */}
                <h1
                    className="text-5xl md:text-3xl  mb-12 text-left tb text-gray-900"
                >
                    How we ship
                </h1>

                {/* Image (Using the ship image from the original screenshot as a background/placeholder) */}
                <div className="mb-12  overflow-hidden shadow-lg">
                    <img
                        src={imageUrl}
                        alt="Container ship on the sea"
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                            ;(e.target as HTMLImageElement).onerror = null
                            // Fallback to a styled placeholder
                            ;(e.target as HTMLImageElement).style.display = 'none'
                            const parent = (e.target as HTMLImageElement).parentElement
                            if (parent) {
                                parent.innerHTML = `<div class="h-96 flex items-center justify-center bg-gray-200 text-gray-500 text-xl font-medium">Shipping Image Placeholder</div>`
                            }
                        }}
                    />
                </div>

                {/* Content */}
                <p className="text-base text-gray-700 leading-relaxed mb-12">{content}</p>

                {/* Button */}
                <button
                    onClick={handleTrackOrder}
                    className="w-full cursor-pointer text-[#D4A017] bg-black  hover:bg-transparent hover:text-black border border-black flex items-center justify-center py-4  transition duration-150 shadow-md"
                    
                >
                    <span className="text-lg font-semibold mr-2" >
                        Track order
                    </span>
                    <ArrowRight size={20}  />
                </button>
            </div>
        </div>
    )
}

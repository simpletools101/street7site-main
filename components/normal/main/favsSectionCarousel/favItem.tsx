'use client'

import { addItemToWishList, removeItemFromWishList } from '@/lib/wishlistManager'
import { Heart, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IFavItemProps {
    productID: string
    imgSource: string
    description: string
    link: string
    onDidAddToWishList(productID: string): void
}

export default function FavItem(props: IFavItemProps) {
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false)

    const willAddOrRemoveItemFromWishlist = () => {
        if (isAddedToWishlist) {
            removeItemFromWishList(props.description)
            setIsAddedToWishlist(false)
        } else {
            addItemToWishList(props.description)
            setIsAddedToWishlist(true)
        }
    }

    return (
        <div className="max-w-sm h-[420px] rounded-lg overflow-hidden bg-white shadow-sm">
            {/* Image Container */}
            <div className="w-full h-[230px] bg-neutral-200 relative">
                <Image
                    src={props.imgSource}
                    alt={props.description || 'product image'}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col p-6 space-y-4 bg-neutral-50">
                <p className="text-sm text-left line-clamp-2">{props.description}</p>

                <div className="flex items-center justify-between">
                    <button
                        onClick={willAddOrRemoveItemFromWishlist}
                        role="button"
                        aria-description={props.description}
                        className="border cursor-pointer w-10 h-10 rounded-full border-black flex items-center justify-center"
                    >
                        <Heart
                            className={`w-6 h-6 text-gray-800 ${isAddedToWishlist ? 'fill-[#fec000]' : ''}`}
                            strokeWidth={1.5}
                        />
                    </button>

                    <Link href={props.link} className="flex items-center space-x-2 font-normal">
                        <span className="uppercase text-sm">Shop Now</span>
                        <MoveRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

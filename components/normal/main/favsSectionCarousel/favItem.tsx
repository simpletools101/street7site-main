import CrcBtn from '@/components/common/base/crcBtn'
import { Heart, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface IFavItemProps {
    productID: string
    imgSource: string
    description: string
    link: string
    onDidAddToWishList(productID: string): void
}

export default function FavItem(props: IFavItemProps) {
    return (
        <div className="max-w-sm h-[420px] rounded-lg overflow-hidden bg-white shadow-sm">
            
            {/* Image Container */}
            <div className="w-full h-[230px] bg-neutral-200 relative">
                <Image
                    src={props.imgSource}
                    alt={props.description || "product image"}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col p-6 space-y-4 bg-neutral-50">
                <p className="text-sm text-left line-clamp-2">{props.description}</p>

                <div className="flex items-center justify-between">
                    
                    <CrcBtn
                        description="Add to Wishlist"
                    >
                        <Heart className="h-5 w-5" />
                    </CrcBtn>

                    <Link href={props.link} className="flex items-center space-x-2 font-normal">
                        <span className="uppercase text-sm">Shop Now</span>
                        <MoveRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

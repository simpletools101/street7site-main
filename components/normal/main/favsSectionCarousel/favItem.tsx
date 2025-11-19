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

export default function Favitem(props: IFavItemProps) {
    return (
        <div className=" max-w-sm  h-[400px] ">
            <div className="w-full h-[220px] bg-neutral-200">
                <Image src={props.imgSource} alt="k" width={200} height={200} />
            </div>
            <div className=' flex flex-col p-6 space-y-4 bg-neutral-50'>
                <p aria-description={props.description} className='text-sm text-left'>{props.description}</p>
                <div className="flex items-center justify-between">
                    <CrcBtn description="Add to Wishlist">
                        <Heart className="h-5 w-5" />
                    </CrcBtn>

                    <Link href={props.link} aria-description="Shop Now" className="flex space-x-2 font-normal">
                        <span className="uppercase">Shop Now</span>
                        <MoveRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

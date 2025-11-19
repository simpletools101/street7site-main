import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface IWhatsNewProps {
    imgLink: string
    title: string
    content: string
    pageLink: string
}

export default function WhatsNewItem(props: IWhatsNewProps) {
    return (
        <section className="w-full">
            <h2 className="uppercase text-base sm:text-lg text-center lg:text-left">
                {props.title}
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 mt-4 lg:mt-2">
                {/* Image Section */}
                <div className="w-full lg:flex-1 relative bg-neutral-200 h-[300px] sm:h-[400px] lg:h-[550px]">
                    <Image 
                        alt={props.title} 
                        fill 
                        src={props.imgLink}
                        className="object-cover"
                    />
                </div>
                
                {/* Content Section */}
                <div className="bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200 w-full lg:w-[300px] min-h-[250px] sm:min-h-[300px] lg:h-[550px] flex flex-col justify-between relative px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
                    <span className="text-sm sm:text-base leading-relaxed">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </span>
                    
                    <Link
                        href="/shop"
                        aria-label="Shop Now"
                        className="flex items-center gap-2 font-normal hover:gap-3 transition-all mt-6 lg:mt-0"
                    >
                        <span className="uppercase text-sm sm:text-base">Shop Now</span>
                        <MoveRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
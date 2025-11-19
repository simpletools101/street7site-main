import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeventyOff() {
    return (
        <section className="w-full min-h-[550px] lg:h-[550px] border-b border-[#fec000] py-8 lg:py-0 lg:mt-14">
            <h2 className="text-base sm:text-lg uppercase font-normal text-center lg:text-left">
                Explore the best offers on the market
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-5 items-center mt-8 lg:mt-12">
                {/* Percentage Section */}
                <div className="flex flex-col space-y-0 text-center lg:text-left">
                    <h2 className="text-7xl sm:text-8xl lg:text-[140px] text-[#fec000] leading-none">70%</h2>
                    <h2 className="text-7xl sm:text-8xl lg:text-[140px] leading-none">OFF</h2>
                </div>
                
                {/* Description Section */}
                <div className="w-full max-w-[400px] text-center lg:text-left order-last lg:order-none">
                    <span className="text-sm sm:text-base">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </span>
                </div>
                
                {/* Image Section */}
                <div className="relative w-full sm:w-auto">
                    <div className="bg-neutral-200 w-full sm:w-[300px] lg:w-[350px] h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center relative mx-auto">
                        <Image 
                            src={'/'} 
                            alt="70% offer" 
                            fill
                            className="object-cover"
                        />

                        <Link
                            href="/shop"
                            aria-label="Shop Now"
                            className="flex items-center gap-2 bottom-4 sm:bottom-6 absolute font-normal hover:gap-3 transition-all"
                        >
                            <span className="uppercase text-sm sm:text-base">Shop Now</span>
                            <MoveRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
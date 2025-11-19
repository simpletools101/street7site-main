import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="flex h-[300px] sm:h-[350px] lg:h-[400px] items-center relative">
            <div className="w-full h-full bg-neutral-200"></div>
            <div className="flex flex-col px-6 sm:px-12 lg:px-24 max-w-full sm:max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5 lg:space-y-6 h-fit absolute">
                <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl" aria-label="Shop Street7">
                    Shop Street 7
                </h1>
                <p className="text-sm sm:text-base leading-relaxed">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classic Latin Literature from 45 BC making it over 2000 years old.
                </p>
                <Link
                    href={'/shop'}
                    aria-label="Shop Now"
                    className="flex items-center gap-3 sm:gap-4 font-semibold hover:gap-4 sm:hover:gap-5 transition-all"
                >
                    <span className="uppercase text-sm sm:text-base">Shop Now</span>
                    <MoveRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
            </div>
        </section>
    )
}

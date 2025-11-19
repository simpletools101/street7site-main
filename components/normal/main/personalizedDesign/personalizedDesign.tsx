import Image from "next/image";

export default function PersonalizedDesign() {
    return (
        <section className="min-h-[550px] lg:h-[550px] border-b border-b-amber-300">
            <h1 className="text-3xl sm:text-4xl font-light text-center lg:text-left lg:text-5xl">
                Personalized Designs
            </h1>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:h-[350px] border border-green-50 gap-0 mt-8 lg:mt-10">
                <div className="bg-neutral-200 relative min-h-[250px] lg:min-h-0">
                    <Image src={"/"} fill alt="Personalized Design" className="object-cover" />
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200 py-8 lg:py-0 px-6 sm:px-12 lg:px-18">
                    <div className="space-y-3 sm:space-y-4 w-full max-w-md lg:max-w-sm">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
                            Designed, Only for you
                        </h2>
                        <p className="text-sm sm:text-base text-center lg:text-left">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classic Latin Literature from 45 BC making it over 2000 years old.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
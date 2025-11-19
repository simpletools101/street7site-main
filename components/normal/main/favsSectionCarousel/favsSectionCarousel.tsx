import Carousel from '@/components/common/base/carousel'
import Favitem from './favItem'

export default function FavSectionsCarousel() {
    return (
        <section
            className="
            mt-8
                flex flex-col
                min-h-[400px] md:min-h-[500px] lg:min-h-[550px]
                justify-center
                gap-8
            "
        >
            <h1
                className="
                    text-3xl md:text-4xl lg:text-5xl
                    font-light
                    text-center md:text-left
                    w-full
                "
            >
                Your favs just got better
            </h1>

            <div className="w-full">
                <Carousel>
                    {[
                        <Favitem
                            key="sd"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="/ui.png"
                            link="/product/idfjk"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sdsf"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="/ui.png"
                            link="/product/idfjk"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sasad"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="/ui.png"
                            link="/product/idfjk"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sdsfasa"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="/ui.png"
                            link="/product/idfjk"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                    ]}
                </Carousel>
            </div>
        </section>
    )
}

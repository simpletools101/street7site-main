'use client'

import Carousel from '@/components/common/base/carousel'
import Favitem from './favItem'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Current fetched products from shopify
 */
interface ICurrentFetchedProductsFromShopify {
    //to be used as the key
    productID:string;
    currentImageSoure:string;
    productLink:string;
    productDescription:string;

}

export default function FavSectionsCarousel() {
    /**
     * The current fetched Products
     */
    const [currentProducts, setCurrentProducts] = useState<ICurrentFetchedProductsFromShopify[]>()

    useEffect(() => {
        const fetchExistingProductsFromShopifyStore = async () => {
            try {
                const res = await fetch('/api/product/red-light-therapy-masks')
                if (!res.ok) throw new Error('Failed to fetch products')
                const data = await res.json()
            } catch (err) {
                console.error('Shopify fetch error:', err)
            }
        }
    }, [setCurrentProducts])

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
            <motion.h1
                className="
                    text-3xl md:text-4xl lg:text-5xl
                    font-light
                    text-center md:text-left
                    w-full
                "
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{ letterSpacing: '0.05em' }}
            >
                Your favs just got better
            </motion.h1>
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <Carousel>
                    {[
                        <Favitem
                            key="sd"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="https://images.pexels.com/photos/3633850/pexels-photo-3633850.jpeg"
                            link="/product/red-light-therapy-mask"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sdsf"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="https://images.pexels.com/photos/21517415/pexels-photo-21517415.jpeg"
                            link="/product/red-light-therapy-mask"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sasad"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg"
                            link="/product/red-light-therapy-mask"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                        <Favitem
                            key="sdsfasa"
                            onDidAddToWishList={() => {}}
                            productID="dfsfsefe"
                            imgSource="https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg"
                            link="/product/red-light-therapy-mask"
                            description="The new Red Light mask comes with a lighter headband for better fitting and feeling when in use"
                        />,
                    ]}
                </Carousel>
            </motion.div>
        </section>
    )
}

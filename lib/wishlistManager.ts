/**
 * This will add items to the wishlist but will fast query the item based on the label its given;
 *
 *
 */

import { useWishlist } from './stores/wishlistStore'

/**
 * Used to normalize the products data that was received;
 * @param data
 * @returns
 */
export function normalizeProducts(data: any) {
    if (!data?.products?.edges) return []

    return data.products.edges.map(({ node }: any) => ({
        id: node.id,
        variantID : node.variants.edges[0]?.node.id,
        title: node.title,
        handle: node.handle,
        price: Number(node.priceRange?.minVariantPrice?.amount ?? 0),
        featuredImage: node.featuredImage?.url || null,
    }))
}

export interface FetchedProducts {
    id: string
    handle: string
    price: string
    title: string
      variantId:string;
    featuredImage: string
}

interface ReceivedData {
    id:string;
    variantId:string;
    title:string;
    price:string;
    featuredImage:string;
    handle:string;
}


/**
 * Locate products well
 * @param products
 * @param title
 * @returns
 */
export function findProductByTitle(products: FetchedProducts[], title: string) {
    return products.find((p) => p.title.toLowerCase() === title.toLowerCase()) || null
}

let IN_MEMORY_FOR_PRODUCTS: FetchedProducts[] = []

/**
 * This will run a query to fetch all the product so that we have them in memory;
 */
export async function initalProductDeliver() {
    /**
     * Fetch the products first.
     */

    try {
        const res = await fetch(`/api/products`)
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        console.log('Received-products', data)

        if (data) {
            
            let normalizedData = normalizeProducts(data)
            //we save the data that was received;
            IN_MEMORY_FOR_PRODUCTS = data;

            console.log('SavedInMemoryData', IN_MEMORY_FOR_PRODUCTS)
        }
    } catch (err) {
        console.error(err)
    }
}

/**
 * The title we
 * @param itemLabel
 */
export function addItemToWishList(itemLabel: string) {
    let requestedProduct = findProductByTitle(IN_MEMORY_FOR_PRODUCTS, itemLabel)

    if (requestedProduct) {
        console.log('DidRequestForAdditionOFProductToWishlist', requestedProduct)
        /**
         * Add to the wishlist.
         */
        const add = useWishlist.getState().addToWishlist


        add({
            id: requestedProduct.id,
            featuredImage: requestedProduct.featuredImage,
            handle: requestedProduct.handle,
            price: requestedProduct.price,
            title: requestedProduct.title,
            variantId : requestedProduct.variantId
        })

        console.log("items",useWishlist.getState().items)
       
    }
}

export function removeItemFromWishList(itemLabel: string) {
    let requestedProduct = findProductByTitle(IN_MEMORY_FOR_PRODUCTS, itemLabel)


    if (requestedProduct) {
        console.log('DidRequestForRemovalOFProductToWishlist', requestedProduct)

        /**
         * remove from the wishlist.
         */
        useWishlist.getState().removeFromWishlist(requestedProduct.id);

    }
}

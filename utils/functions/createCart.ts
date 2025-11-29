// /lib/shopify/cartCreate.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

const CART_CREATE_MUTATION = gql`
    mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
            cart {
                id
                createdAt
                updatedAt
                lines(first: 10) {
                    edges {
                        node {
                            id
                            quantity
                            merchandise {
                                ... on ProductVariant {
                                    id
                                }
                            }
                        }
                    }
                }
                buyerIdentity {
                    email
                    deliveryAddressPreferences {
                        __typename
                    }
                    preferences {
                        delivery {
                            deliveryMethod
                        }
                    }
                }
                attributes {
                    key
                    value
                }
                cost {
                    totalAmount {
                        amount
                        currencyCode
                    }
                    subtotalAmount {
                        amount
                        currencyCode
                    }
                    totalTaxAmount {
                        amount
                        currencyCode
                    }
                    totalDutyAmount {
                        amount
                        currencyCode
                    }
                }
            }
        }
    }
`

export async function createCart() {
    const input = {
        lines: [
            {
                quantity: 1,
                merchandiseId: 'gid://shopify/ProductVariant/1',
            },
        ],
        buyerIdentity: {
            email: 'example@example.com',
            countryCode: 'CA',
            deliveryAddressPreferences: [
                {
                    deliveryAddress: {
                        address1: '150 Elgin Street',
                        address2: '8th Floor',
                        city: 'Ottawa',
                        province: 'Ontario',
                        country: 'CA',
                        zip: 'K2P 1L4',
                    },
                    oneTimeUse: false,
                },
            ],
            preferences: {
                delivery: {
                    deliveryMethod: 'PICK_UP',
                },
            },
        },
        attributes: [
            {
                key: 'cart_attribute',
                value: 'This is a cart attribute',
            },
        ],
    }

    try {
        const res = await shopifyClient.request(CART_CREATE_MUTATION, {
            input,
        })

        return res.cartCreate.cart
    } catch (err) {
        console.error('Cart Create Error:', err)
        throw new Error('Failed to create cart')
    }
}

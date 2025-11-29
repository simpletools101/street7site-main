// lib/customerFetch.ts
import { shopifyClient } from '../../shopifyClient'
import { gql } from 'graphql-request'

const GET_CUSTOMER_QUERY = gql`
    query getCustomer($accessToken: String!) {
        customer(customerAccessToken: $accessToken) {
            id
            email
            firstName
            lastName
            phone
            acceptsMarketing
            addresses(first: 5) {
                edges {
                    node {
                        id
                        address1
                        address2
                        city
                        province
                        country
                        zip
                        phone
                    }
                }
            }
            orders(first: 5) {
                edges {
                    node {
                        id
                        orderNumber
                        processedAt
                        totalPrice {
                            amount
                            currencyCode
                        }
                        fulfillmentStatus
                    }
                }
            }
        }
    }
`

interface CustomerFetchInput {
    accessToken: string
}

export async function fetchCustomer({ accessToken }: CustomerFetchInput) {
    if (!accessToken) throw new Error('Access token is required')

    try {
        const data = await shopifyClient.request(GET_CUSTOMER_QUERY, { accessToken })

        if (!data.customer) {
            throw new Error('Customer not found or token invalid')
        }

        // Optionally flatten addresses array
        const addresses = data.customer.addresses.edges.map((edge: any) => edge.node)
        return { ...data.customer, addresses }
    } catch (error: any) {
        console.error('Error fetching Shopify customer:', error)
        throw error
    }
}

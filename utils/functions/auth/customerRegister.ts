// lib/customerRegister.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../../shopifyClient'

const customerCreateMutation = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
            customer {
                id
                email
                phone
                firstName
                lastName
               
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`

// Accept entire input object
export async function customerRegister(input: {
    email: string
    password: string
    firstName?: string
    lastName?: string
    phone?: string
    acceptsMarketing?: boolean
}) {
    try {
        const variables = { input }

        const data = await shopifyClient.request(customerCreateMutation, variables)

        if (data.customerCreate.customerUserErrors.length > 0) {
            throw new Error(data.customerCreate.customerUserErrors[0].message)
        }

        return data.customerCreate.customer
    } catch (error) {
        console.error('Shopify customer register error:', error)
        throw error
    }
}

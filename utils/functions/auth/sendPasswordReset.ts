// lib/shopify/sendPasswordResetEmail.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../../shopifyClient'

const CUSTOMER_RECOVER_MUTATION = gql`
    mutation customerRecover($email: String!) {
        customerRecover(email: $email) {
            userErrors {
                field
                message
            }
        }
    }
`

export async function sendPasswordResetEmail(email: string) {
    const data = await shopifyClient.request(CUSTOMER_RECOVER_MUTATION, { email })

    const errors = data.customerRecover?.userErrors || []

    if (errors.length > 0) {
        throw new Error(errors[0].message)
    }

    return true
}

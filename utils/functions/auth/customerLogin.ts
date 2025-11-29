// lib/customerLogin.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../../shopifyClient'

const customerLoginMutation = gql`
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
            customerAccessToken {
                accessToken
                expiresAt
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`

export async function customerLogin(email: string, password: string) {
    try {
        const variables = {
            input: { email, password },
        }
        const data = await shopifyClient.request(customerLoginMutation, variables)

        if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
            throw new Error(data.customerAccessTokenCreate.customerUserErrors[0].message)
        }

        return data.customerAccessTokenCreate.customerAccessToken
    } catch (error) {
        console.error('Shopify customer login error:', error)
        throw error
    }
}

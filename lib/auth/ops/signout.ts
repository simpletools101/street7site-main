import { createAuthClient } from 'better-auth/client'
const authClient = createAuthClient()


export const signOut = async () => {

    return await authClient.signOut();
}

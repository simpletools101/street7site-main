import { betterAuth } from 'better-auth'

/**
 * The inital Better Auth Part
 */
export const auth = betterAuth({
    appName: 'Street7',
    emailAndPassword: {
        enabled: true,
         requireEmailVerification: false,
    },
    

    socialProviders: {
        google: {
            prompt: 'select_account',
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
    },
})

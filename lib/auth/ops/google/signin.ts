

/**
 * Inital Google Signin or SignUp
 */

import { authClient } from "../../client";

export const signInOrSignUpWithGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: 'google',
    });

}


'use server';

import { signOut, signIn } from "@/auth";
import { signInFormSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";


// signin user with credentials

export async function signInWithCredentials(

    prevState: unknown,
    formData: FormData

) {

    try {
        const user = signInFormSchema.parse({

            email: formData.get('email'),
            password: formData.get('password'),
        });


        await signIn('credentials', user);

        return { success: true, message: 'Signed in successfully' };

    } catch (error) {

        if (isRedirectError(error)) {
            throw error;
        }

        return { success: false, message: 'Invalid email or password' }
    }
}





// signing user out
export async function signOutUser() {
    await signOut();
}

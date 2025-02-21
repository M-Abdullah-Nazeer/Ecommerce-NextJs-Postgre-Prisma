import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignUpForm from "./sign-up-form";


export const metadata: Metadata = {
    title: 'Sign Up',
};



const SignUpPage = async (props: {
    searchParams: Promise<{
        callbackUrl: string
    }>
}) => {

    const session = await auth();

    const { callbackUrl } = await props.searchParams;

    if (session) {
        return redirect(callbackUrl || '/')
    }

    return (
        <div className="w-full max-w-md mx-auto">

            <Card>
                <CardHeader className="space-y-4">

                    <Link className="flex-center" href='/'>
                        <Image
                            src='/images/logo.svg'
                            alt={`${APP_NAME} logo`}
                            width={100}
                            height={100}
                            priority={true}
                        />

                    </Link>
                    <CardTitle className="text-center">
                        Sign Up
                    </CardTitle>

                    <CardDescription className="text-center">
                        Enter you details below to create account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* FORM COMPONENT IS HERE */}
                    <SignUpForm />
                </CardContent>
            </Card>

        </div>
    );
};


export default SignUpPage;
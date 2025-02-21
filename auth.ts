import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './db/prisma';
import CredentialProvider from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';

export const config = {
    pages: {

        signIn: '/sign-in',
        error: '/sign-in'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, //30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [CredentialProvider({
        credentials: {
            email: { type: 'email' },
            password: { type: 'password' },
        },
        async authorize(credentials) {
            if (credentials == null) return null;

            // Find user in database
            const user = await prisma.user.findFirst({
                where: {
                    email: credentials.email as string
                }
            });

            // Check user sexist and if password matches
            if (user && user.password) {
                const isMatch = compareSync(credentials.password as string, user.password)

                // if password correct return user
                if (isMatch) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                }
            }

            // if user does not exist just return null 
            return null;
        }
    })],


    callbacks: {
        async session({ session, user, trigger, token }: any) {

            // set user id if from token
            session.user.id = token.sub;
            session.user.name = token.name;
            session.user.role = token.role;


            // if there is update, set username
            if (trigger === 'update') {
                session.user.name = user.name;
            }

            return session
        },
        async jwt({ token, user }: any) {
            // assign user fields to token

            if (user) {
                token.role = user.role;

                // if user has no name than use the email in case of other providers like google name will be empty

                if (user.name === 'NO_NAME') {
                    token.name = user.email!.split('@')[0];


                    // update db to reflect the token name 

                    await prisma.user.update({
                        where: { id: user.id },
                        data: { name: token.name },
                    });
                }
            }
            return token;
        }
    }

} satisfies NextAuthConfig;


export const { handlers, auth, signIn, signOut } = NextAuth(config);
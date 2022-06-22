import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbUsers } from "../../../src/db";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    Credentials({
      name: "Custom Login",
      credentials: {
        email: { label: "email", type: "email", placeholder: " hola@hola.com" },
        password: {
          label: "password",
          type: "password",
          placeholder: " 123fgt",
        },
      },
      async authorize(credentials) {
        // console.log('hola')
        return await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password)
      }
    }),
    // ...add more providers here
  ],
  pages:{
    signIn: '/auth/login',
    newUser: '/auth/register'
  },
  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400,
  },
  //Callbacks
  callbacks: {
    async jwt({token, account, user}) {
      if (account) {
        token.accessToken = account.access_token;
        switch( account.type ){
          case 'oauth':
            token.user = await dbUsers.oAUthToDbUser(user?.email || '', user?.name || '', user?.image|| '')
          break
          case 'credentials':
            token.user = user;
          break
        }
      }
      return token
    },
    async session({session, token, user}) {
      session.accessToken = token.accessToken;
      session.user = token.user as any
      return  session
    }
  }
});


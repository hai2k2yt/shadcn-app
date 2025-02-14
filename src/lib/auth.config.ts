import GithubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'
import {NextAuthConfig} from "next-auth";

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'hai',
          email: credentials?.email as string
        };
        if (user) {
          return user
        } else {
          //
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/'
  }
} satisfies NextAuthConfig

export default authConfig;
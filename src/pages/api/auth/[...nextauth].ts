import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { config } from '@/lib/config';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: config.githubId,
      clientSecret: config.githubSecret,
    }),
    GoogleProvider({
      clientId: config.googleId,
      clientSecret: config.googleSecret,
      // authorization: {
      //   params: {
      //     prompt: 'consent',
      //     access_type: 'offline',
      //     response_type: 'code',
      //   },
      // },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: config.jwtSecret,
  },
  secret: config.secret,
  debug: config.env === 'development',
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
});

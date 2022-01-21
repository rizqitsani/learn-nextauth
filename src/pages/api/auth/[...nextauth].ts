import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { config } from '@/lib/config';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: config.githubId,
      clientSecret: config.githubSecret,
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
